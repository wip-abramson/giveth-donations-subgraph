import {
    Donate as DonateEvent,
    DonateAndCreateGiver as DonateAndCreateGiverEvent,
    // EscapeHatchBlackistedToken as EscapeHatchBlackistedTokenEvent,
    // EscapeHatchCalled as EscapeHatchCalledEvent,
} from "../generated/Contract/Contract"
import {
    // EscapeHatchBlackistedToken,
    // EscapeHatchCalled,
    Donation,
    DonationRecipient,
    Giver, Token
} from "../generated/schema"
import { log, BigInt, BigDecimal, Bytes, ByteArray } from '@graphprotocol/graph-ts'

export function handleDonate(event: DonateEvent): void {
    let donation = new Donation(event.transaction.hash.toHex());

    let giverId = event.transaction.from.toHexString()
    let giver = createGiver(giverId)
    giver.donationCount ++;

    // giveth ID only avlaible in this event
    giver.givethId = event.params.giverId;
    giver.save();

    let donationRecipient = createDonationRecipient(event.params.receiverId.toString());
    donationRecipient.donationCount ++;
    donationRecipient.save();

    createDonation(event.transaction.hash.toHex(), giver.id, donationRecipient.id, event.params.token, event.params.amount, event.params.receiverId, event.block.timestamp)

}

export function handleDonateAndCreateGiver(
    event: DonateAndCreateGiverEvent
): void {

    let giverId = event.transaction.from.toHexString()
    let giver = createGiver(giverId);
    giver.donationCount ++;
    giver.save()

    let donationRecipient = createDonationRecipient(event.params.receiverId.toString());
    donationRecipient.donationCount ++;
    donationRecipient.save()

    createDonation(event.transaction.hash.toHex(), giver.id, donationRecipient.id, event.params.token, event.params.amount, event.params.receiverId, event.block.timestamp)

    // let entity = new DonateAndCreateGiver(
    //     event.transaction.hash.toHex() + "-" + event.logIndex.toString()
    // )
    // entity.giver = event.params.giver
    // entity.receiverId = event.params.receiverId
    // entity.token = event.params.token
    // entity.amount = event.params.amount
    // entity.save()
}

function createGiver(giverId: string): Giver {
    let giver = Giver.load(giverId);
    if (!giver) {
        giver = new Giver(giverId);
        giver.donationCount = 0;
    }
    return giver as Giver
}

function createDonationRecipient(recipientId: string): DonationRecipient{
    let donationRecipient = DonationRecipient.load(recipientId);
    if (!donationRecipient) {
        donationRecipient = new DonationRecipient(recipientId)
        donationRecipient.donationCount = 0;
    }
    return donationRecipient as DonationRecipient
}

// 10^18 as bytes
// let byteNomaliser: ByteArray = ByteArray.fromHexString("0x0DE0B6B3A7640000")
// let normaliserInt = BigInt.fromUnsignedBytes(byteNomaliser as Bytes);
let normaliserBigDec = BigInt.fromI32(10).pow(18).toBigDecimal()

function createDonation(donationId: string, giverId: string, recipientId: string, tokenAddress: Bytes, donationValue: BigInt, receiverId: BigInt,  timestamp: BigInt): void {
    let token = Token.load(tokenAddress.toHex());
    if (!token) {
        token = new Token(tokenAddress.toHex())
        token.tokenAddress = tokenAddress
        token.tokenName = getTokenName(tokenAddress.toHex())
        token.totalDonated = BigInt.fromI32(0).toBigDecimal()
        token.donationCount = 0;
    }
    token.donationCount ++;
    let normalisedDecimalDonationValue = donationValue.divDecimal(normaliserBigDec);
    // let normalisedBigIntValue = donationValue.div(normaliserInt);
    token.totalDonated = token.totalDonated.plus(normalisedDecimalDonationValue)
    token.save()

    let donation = new Donation(donationId);
    donation.from = giverId
    donation.token = token.id

    donation.value = normalisedDecimalDonationValue
    donation.to = recipientId;
    donation.timeSent = timestamp;
    donation.save();

}

export function getTokenName(tokenAddressHex: string): string {
    let tokenName = ""
    if (tokenAddressHex == "0x0000000000000000000000000000000000000000") {
        tokenName = "ETH"
        // SAI or DAI
    } else if (tokenAddressHex == "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359" || tokenAddressHex == "0x6B175474E89094C44Da98b954EedeAC495271d0F") {
        tokenName = "DAI"
    } else {
        tokenName = "Other"
    }
    return tokenName;
}

// export function handlePaymentAuthorized(event: PaymentAuthorizedEvent): void {
//     let entity = new PaymentAuthorized(
//         event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//     )
//     entity.idPayment = event.params.idPayment
//     entity.recipient = event.params.recipient
//     entity.amount = event.params.amount
//     entity.token = event.params.token
//     entity.reference = event.params.reference
//     entity.save()
// }
//
// export function handlePaymentExecuted(event: PaymentExecutedEvent): void {
//     let entity = new PaymentExecuted(
//         event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//     )
//     entity.idPayment = event.params.idPayment
//     entity.recipient = event.params.recipient
//     entity.amount = event.params.amount
//     entity.token = event.params.token
//     entity.save()
// }


// export function handleSpenderAuthorization(
//     event: SpenderAuthorizationEvent
// ): void {
//     let entity = new SpenderAuthorization(
//         event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//     )
//     entity.spender = event.params.spender
//     entity.authorized = event.params.authorized
//     entity.save()
// }
//
//
//
// export function handleEscapeHatchBlackistedToken(
//     event: EscapeHatchBlackistedTokenEvent
// ): void {
//     let entity = new EscapeHatchBlackistedToken(
//         event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//     )
//     entity.token = event.params.token
//     entity.save()
// }
//
// export function handleEscapeHatchCalled(event: EscapeHatchCalledEvent): void {
//     let entity = new EscapeHatchCalled(
//         event.transaction.hash.toHex() + "-" + event.logIndex.toString()
//     )
//     entity.token = event.params.token
//     entity.amount = event.params.amount
//     entity.save()
// }


