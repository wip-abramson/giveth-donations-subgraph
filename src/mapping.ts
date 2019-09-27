import {
  Donate as DonateEvent,
  DonateAndCreateGiver as DonateAndCreateGiverEvent,
  EscapeFundsCalled as EscapeFundsCalledEvent,
  PaymentAuthorized as PaymentAuthorizedEvent,
  PaymentExecuted as PaymentExecutedEvent,
  PaymentCanceled as PaymentCanceledEvent,
  SpenderAuthorization as SpenderAuthorizationEvent,
  Pause as PauseEvent,
  Unpause as UnpauseEvent,
  EscapeHatchBlackistedToken as EscapeHatchBlackistedTokenEvent,
  EscapeHatchCalled as EscapeHatchCalledEvent,
  OwnershipRequested as OwnershipRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  OwnershipRemoved as OwnershipRemovedEvent
} from "../generated/Contract/Contract"
import {
  Donate,
  DonateAndCreateGiver,
  EscapeFundsCalled,
  PaymentAuthorized,
  PaymentExecuted,
  PaymentCanceled,
  SpenderAuthorization,
  Pause,
  Unpause,
  EscapeHatchBlackistedToken,
  EscapeHatchCalled,
  OwnershipRequested,
  OwnershipTransferred,
  OwnershipRemoved
} from "../generated/schema"

export function handleDonate(event: DonateEvent): void {
  let entity = new Donate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.giverId = event.params.giverId
  entity.receiverId = event.params.receiverId
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleDonateAndCreateGiver(
  event: DonateAndCreateGiverEvent
): void {
  let entity = new DonateAndCreateGiver(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.giver = event.params.giver
  entity.receiverId = event.params.receiverId
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleEscapeFundsCalled(event: EscapeFundsCalledEvent): void {
  let entity = new EscapeFundsCalled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handlePaymentAuthorized(event: PaymentAuthorizedEvent): void {
  let entity = new PaymentAuthorized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.idPayment = event.params.idPayment
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.reference = event.params.reference
  entity.save()
}

export function handlePaymentExecuted(event: PaymentExecutedEvent): void {
  let entity = new PaymentExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.idPayment = event.params.idPayment
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.token = event.params.token
  entity.save()
}

export function handlePaymentCanceled(event: PaymentCanceledEvent): void {
  let entity = new PaymentCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.idPayment = event.params.idPayment
  entity.save()
}

export function handleSpenderAuthorization(
  event: SpenderAuthorizationEvent
): void {
  let entity = new SpenderAuthorization(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.spender = event.params.spender
  entity.authorized = event.params.authorized
  entity.save()
}

export function handlePause(event: PauseEvent): void {
  let entity = new Pause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleUnpause(event: UnpauseEvent): void {
  let entity = new Unpause(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}

export function handleEscapeHatchBlackistedToken(
  event: EscapeHatchBlackistedTokenEvent
): void {
  let entity = new EscapeHatchBlackistedToken(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.save()
}

export function handleEscapeHatchCalled(event: EscapeHatchCalledEvent): void {
  let entity = new EscapeHatchCalled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.save()
}

export function handleOwnershipRequested(event: OwnershipRequestedEvent): void {
  let entity = new OwnershipRequested(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.by = event.params.by
  entity.to = event.params.to
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.save()
}

export function handleOwnershipRemoved(event: OwnershipRemovedEvent): void {
  let entity = new OwnershipRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )

  entity.save()
}
