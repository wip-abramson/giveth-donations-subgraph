// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Donate extends EthereumEvent {
  get params(): Donate__Params {
    return new Donate__Params(this);
  }
}

export class Donate__Params {
  _event: Donate;

  constructor(event: Donate) {
    this._event = event;
  }

  get giverId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get receiverId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DonateAndCreateGiver extends EthereumEvent {
  get params(): DonateAndCreateGiver__Params {
    return new DonateAndCreateGiver__Params(this);
  }
}

export class DonateAndCreateGiver__Params {
  _event: DonateAndCreateGiver;

  constructor(event: DonateAndCreateGiver) {
    this._event = event;
  }

  get giver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiverId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class EscapeFundsCalled extends EthereumEvent {
  get params(): EscapeFundsCalled__Params {
    return new EscapeFundsCalled__Params(this);
  }
}

export class EscapeFundsCalled__Params {
  _event: EscapeFundsCalled;

  constructor(event: EscapeFundsCalled) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PaymentAuthorized extends EthereumEvent {
  get params(): PaymentAuthorized__Params {
    return new PaymentAuthorized__Params(this);
  }
}

export class PaymentAuthorized__Params {
  _event: PaymentAuthorized;

  constructor(event: PaymentAuthorized) {
    this._event = event;
  }

  get idPayment(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get reference(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class PaymentExecuted extends EthereumEvent {
  get params(): PaymentExecuted__Params {
    return new PaymentExecuted__Params(this);
  }
}

export class PaymentExecuted__Params {
  _event: PaymentExecuted;

  constructor(event: PaymentExecuted) {
    this._event = event;
  }

  get idPayment(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class PaymentCanceled extends EthereumEvent {
  get params(): PaymentCanceled__Params {
    return new PaymentCanceled__Params(this);
  }
}

export class PaymentCanceled__Params {
  _event: PaymentCanceled;

  constructor(event: PaymentCanceled) {
    this._event = event;
  }

  get idPayment(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SpenderAuthorization extends EthereumEvent {
  get params(): SpenderAuthorization__Params {
    return new SpenderAuthorization__Params(this);
  }
}

export class SpenderAuthorization__Params {
  _event: SpenderAuthorization;

  constructor(event: SpenderAuthorization) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get authorized(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Pause extends EthereumEvent {
  get params(): Pause__Params {
    return new Pause__Params(this);
  }
}

export class Pause__Params {
  _event: Pause;

  constructor(event: Pause) {
    this._event = event;
  }
}

export class Unpause extends EthereumEvent {
  get params(): Unpause__Params {
    return new Unpause__Params(this);
  }
}

export class Unpause__Params {
  _event: Unpause;

  constructor(event: Unpause) {
    this._event = event;
  }
}

export class EscapeHatchBlackistedToken extends EthereumEvent {
  get params(): EscapeHatchBlackistedToken__Params {
    return new EscapeHatchBlackistedToken__Params(this);
  }
}

export class EscapeHatchBlackistedToken__Params {
  _event: EscapeHatchBlackistedToken;

  constructor(event: EscapeHatchBlackistedToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EscapeHatchCalled extends EthereumEvent {
  get params(): EscapeHatchCalled__Params {
    return new EscapeHatchCalled__Params(this);
  }
}

export class EscapeHatchCalled__Params {
  _event: EscapeHatchCalled;

  constructor(event: EscapeHatchCalled) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipRequested extends EthereumEvent {
  get params(): OwnershipRequested__Params {
    return new OwnershipRequested__Params(this);
  }
}

export class OwnershipRequested__Params {
  _event: OwnershipRequested;

  constructor(event: OwnershipRequested) {
    this._event = event;
  }

  get by(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipRemoved extends EthereumEvent {
  get params(): OwnershipRemoved__Params {
    return new OwnershipRemoved__Params(this);
  }
}

export class OwnershipRemoved__Params {
  _event: OwnershipRemoved;

  constructor(event: OwnershipRemoved) {
    this._event = event;
  }
}

export class Contract__authorizedPaymentsResult {
  value0: string;
  value1: Bytes;
  value2: Address;
  value3: BigInt;
  value4: boolean;
  value5: boolean;
  value6: Address;
  value7: Address;
  value8: BigInt;
  value9: BigInt;

  constructor(
    value0: string,
    value1: Bytes,
    value2: Address,
    value3: BigInt,
    value4: boolean,
    value5: boolean,
    value6: Address,
    value7: Address,
    value8: BigInt,
    value9: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromString(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    map.set("value5", EthereumValue.fromBoolean(this.value5));
    map.set("value6", EthereumValue.fromAddress(this.value6));
    map.set("value7", EthereumValue.fromAddress(this.value7));
    map.set("value8", EthereumValue.fromUnsignedBigInt(this.value8));
    map.set("value9", EthereumValue.fromUnsignedBigInt(this.value9));
    return map;
  }
}

export class Contract extends SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  maxSecurityGuardDelay(): BigInt {
    let result = super.call("maxSecurityGuardDelay", []);
    return result[0].toBigInt();
  }

  escapeHatchCaller(): Address {
    let result = super.call("escapeHatchCaller", []);
    return result[0].toAddress();
  }

  securityGuardLastCheckin(): BigInt {
    let result = super.call("securityGuardLastCheckin", []);
    return result[0].toBigInt();
  }

  paused(): boolean {
    let result = super.call("paused", []);
    return result[0].toBoolean();
  }

  numberOfAuthorizedPayments(): BigInt {
    let result = super.call("numberOfAuthorizedPayments", []);
    return result[0].toBigInt();
  }

  allowDisbursePaymentWhenPaused(): boolean {
    let result = super.call("allowDisbursePaymentWhenPaused", []);
    return result[0].toBoolean();
  }

  isTokenEscapable(_token: Address): boolean {
    let result = super.call("isTokenEscapable", [
      EthereumValue.fromAddress(_token)
    ]);
    return result[0].toBoolean();
  }

  owner(): Address {
    let result = super.call("owner", []);
    return result[0].toAddress();
  }

  authorizedPayments(param0: BigInt): Contract__authorizedPaymentsResult {
    let result = super.call("authorizedPayments", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    return new Contract__authorizedPaymentsResult(
      result[0].toString(),
      result[1].toBytes(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBoolean(),
      result[5].toBoolean(),
      result[6].toAddress(),
      result[7].toAddress(),
      result[8].toBigInt(),
      result[9].toBigInt()
    );
  }

  securityGuard(): Address {
    let result = super.call("securityGuard", []);
    return result[0].toAddress();
  }

  timeLock(): BigInt {
    let result = super.call("timeLock", []);
    return result[0].toBigInt();
  }

  newOwnerCandidate(): Address {
    let result = super.call("newOwnerCandidate", []);
    return result[0].toAddress();
  }

  allowedSpenders(param0: Address): boolean {
    let result = super.call("allowedSpenders", [
      EthereumValue.fromAddress(param0)
    ]);
    return result[0].toBoolean();
  }

  absoluteMinTimeLock(): BigInt {
    let result = super.call("absoluteMinTimeLock", []);
    return result[0].toBigInt();
  }

  escapeHatchDestination(): Address {
    let result = super.call("escapeHatchDestination", []);
    return result[0].toAddress();
  }
}

export class WhitelistTokenCall extends EthereumCall {
  get inputs(): WhitelistTokenCall__Inputs {
    return new WhitelistTokenCall__Inputs(this);
  }

  get outputs(): WhitelistTokenCall__Outputs {
    return new WhitelistTokenCall__Outputs(this);
  }
}

export class WhitelistTokenCall__Inputs {
  _call: WhitelistTokenCall;

  constructor(call: WhitelistTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get accepted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class WhitelistTokenCall__Outputs {
  _call: WhitelistTokenCall;

  constructor(call: WhitelistTokenCall) {
    this._call = call;
  }
}

export class CheckInCall extends EthereumCall {
  get inputs(): CheckInCall__Inputs {
    return new CheckInCall__Inputs(this);
  }

  get outputs(): CheckInCall__Outputs {
    return new CheckInCall__Outputs(this);
  }
}

export class CheckInCall__Inputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }
}

export class CheckInCall__Outputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }
}

export class DonateAndCreateGiverCall extends EthereumCall {
  get inputs(): DonateAndCreateGiverCall__Inputs {
    return new DonateAndCreateGiverCall__Inputs(this);
  }

  get outputs(): DonateAndCreateGiverCall__Outputs {
    return new DonateAndCreateGiverCall__Outputs(this);
  }
}

export class DonateAndCreateGiverCall__Inputs {
  _call: DonateAndCreateGiverCall;

  constructor(call: DonateAndCreateGiverCall) {
    this._call = call;
  }

  get giver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiverId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DonateAndCreateGiverCall__Outputs {
  _call: DonateAndCreateGiverCall;

  constructor(call: DonateAndCreateGiverCall) {
    this._call = call;
  }
}

export class EscapeFundsCall extends EthereumCall {
  get inputs(): EscapeFundsCall__Inputs {
    return new EscapeFundsCall__Inputs(this);
  }

  get outputs(): EscapeFundsCall__Outputs {
    return new EscapeFundsCall__Outputs(this);
  }
}

export class EscapeFundsCall__Inputs {
  _call: EscapeFundsCall;

  constructor(call: EscapeFundsCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class EscapeFundsCall__Outputs {
  _call: EscapeFundsCall;

  constructor(call: EscapeFundsCall) {
    this._call = call;
  }
}

export class SetTimelockCall extends EthereumCall {
  get inputs(): SetTimelockCall__Inputs {
    return new SetTimelockCall__Inputs(this);
  }

  get outputs(): SetTimelockCall__Outputs {
    return new SetTimelockCall__Outputs(this);
  }
}

export class SetTimelockCall__Inputs {
  _call: SetTimelockCall;

  constructor(call: SetTimelockCall) {
    this._call = call;
  }

  get _newTimeLock(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTimelockCall__Outputs {
  _call: SetTimelockCall;

  constructor(call: SetTimelockCall) {
    this._call = call;
  }
}

export class ChangeOwnershipCall extends EthereumCall {
  get inputs(): ChangeOwnershipCall__Inputs {
    return new ChangeOwnershipCall__Inputs(this);
  }

  get outputs(): ChangeOwnershipCall__Outputs {
    return new ChangeOwnershipCall__Outputs(this);
  }
}

export class ChangeOwnershipCall__Inputs {
  _call: ChangeOwnershipCall;

  constructor(call: ChangeOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnershipCall__Outputs {
  _call: ChangeOwnershipCall;

  constructor(call: ChangeOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends EthereumCall {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class DonateCall extends EthereumCall {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get giverId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiverId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class DisburseAuthorizedPaymentCall extends EthereumCall {
  get inputs(): DisburseAuthorizedPaymentCall__Inputs {
    return new DisburseAuthorizedPaymentCall__Inputs(this);
  }

  get outputs(): DisburseAuthorizedPaymentCall__Outputs {
    return new DisburseAuthorizedPaymentCall__Outputs(this);
  }
}

export class DisburseAuthorizedPaymentCall__Inputs {
  _call: DisburseAuthorizedPaymentCall;

  constructor(call: DisburseAuthorizedPaymentCall) {
    this._call = call;
  }

  get _idPayment(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DisburseAuthorizedPaymentCall__Outputs {
  _call: DisburseAuthorizedPaymentCall;

  constructor(call: DisburseAuthorizedPaymentCall) {
    this._call = call;
  }
}

export class RemoveOwnershipCall extends EthereumCall {
  get inputs(): RemoveOwnershipCall__Inputs {
    return new RemoveOwnershipCall__Inputs(this);
  }

  get outputs(): RemoveOwnershipCall__Outputs {
    return new RemoveOwnershipCall__Outputs(this);
  }
}

export class RemoveOwnershipCall__Inputs {
  _call: RemoveOwnershipCall;

  constructor(call: RemoveOwnershipCall) {
    this._call = call;
  }

  get _dac(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveOwnershipCall__Outputs {
  _call: RemoveOwnershipCall;

  constructor(call: RemoveOwnershipCall) {
    this._call = call;
  }
}

export class SetAllowDisbursePaymentWhenPausedCall extends EthereumCall {
  get inputs(): SetAllowDisbursePaymentWhenPausedCall__Inputs {
    return new SetAllowDisbursePaymentWhenPausedCall__Inputs(this);
  }

  get outputs(): SetAllowDisbursePaymentWhenPausedCall__Outputs {
    return new SetAllowDisbursePaymentWhenPausedCall__Outputs(this);
  }
}

export class SetAllowDisbursePaymentWhenPausedCall__Inputs {
  _call: SetAllowDisbursePaymentWhenPausedCall;

  constructor(call: SetAllowDisbursePaymentWhenPausedCall) {
    this._call = call;
  }

  get allowed(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetAllowDisbursePaymentWhenPausedCall__Outputs {
  _call: SetAllowDisbursePaymentWhenPausedCall;

  constructor(call: SetAllowDisbursePaymentWhenPausedCall) {
    this._call = call;
  }
}

export class ProposeOwnershipCall extends EthereumCall {
  get inputs(): ProposeOwnershipCall__Inputs {
    return new ProposeOwnershipCall__Inputs(this);
  }

  get outputs(): ProposeOwnershipCall__Outputs {
    return new ProposeOwnershipCall__Outputs(this);
  }
}

export class ProposeOwnershipCall__Inputs {
  _call: ProposeOwnershipCall;

  constructor(call: ProposeOwnershipCall) {
    this._call = call;
  }

  get _newOwnerCandidate(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProposeOwnershipCall__Outputs {
  _call: ProposeOwnershipCall;

  constructor(call: ProposeOwnershipCall) {
    this._call = call;
  }
}

export class AuthorizeSpenderCall extends EthereumCall {
  get inputs(): AuthorizeSpenderCall__Inputs {
    return new AuthorizeSpenderCall__Inputs(this);
  }

  get outputs(): AuthorizeSpenderCall__Outputs {
    return new AuthorizeSpenderCall__Outputs(this);
  }
}

export class AuthorizeSpenderCall__Inputs {
  _call: AuthorizeSpenderCall;

  constructor(call: AuthorizeSpenderCall) {
    this._call = call;
  }

  get _spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _authorize(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class AuthorizeSpenderCall__Outputs {
  _call: AuthorizeSpenderCall;

  constructor(call: AuthorizeSpenderCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends EthereumCall {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class CancelPaymentCall extends EthereumCall {
  get inputs(): CancelPaymentCall__Inputs {
    return new CancelPaymentCall__Inputs(this);
  }

  get outputs(): CancelPaymentCall__Outputs {
    return new CancelPaymentCall__Outputs(this);
  }
}

export class CancelPaymentCall__Inputs {
  _call: CancelPaymentCall;

  constructor(call: CancelPaymentCall) {
    this._call = call;
  }

  get _idPayment(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelPaymentCall__Outputs {
  _call: CancelPaymentCall;

  constructor(call: CancelPaymentCall) {
    this._call = call;
  }
}

export class PauseCall extends EthereumCall {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class DelayPaymentCall extends EthereumCall {
  get inputs(): DelayPaymentCall__Inputs {
    return new DelayPaymentCall__Inputs(this);
  }

  get outputs(): DelayPaymentCall__Outputs {
    return new DelayPaymentCall__Outputs(this);
  }
}

export class DelayPaymentCall__Inputs {
  _call: DelayPaymentCall;

  constructor(call: DelayPaymentCall) {
    this._call = call;
  }

  get _idPayment(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _delay(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DelayPaymentCall__Outputs {
  _call: DelayPaymentCall;

  constructor(call: DelayPaymentCall) {
    this._call = call;
  }
}

export class DisburseAuthorizedPaymentsCall extends EthereumCall {
  get inputs(): DisburseAuthorizedPaymentsCall__Inputs {
    return new DisburseAuthorizedPaymentsCall__Inputs(this);
  }

  get outputs(): DisburseAuthorizedPaymentsCall__Outputs {
    return new DisburseAuthorizedPaymentsCall__Outputs(this);
  }
}

export class DisburseAuthorizedPaymentsCall__Inputs {
  _call: DisburseAuthorizedPaymentsCall;

  constructor(call: DisburseAuthorizedPaymentsCall) {
    this._call = call;
  }

  get _idPayments(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class DisburseAuthorizedPaymentsCall__Outputs {
  _call: DisburseAuthorizedPaymentsCall;

  constructor(call: DisburseAuthorizedPaymentsCall) {
    this._call = call;
  }
}

export class DonateAndCreateGiver1Call extends EthereumCall {
  get inputs(): DonateAndCreateGiver1Call__Inputs {
    return new DonateAndCreateGiver1Call__Inputs(this);
  }

  get outputs(): DonateAndCreateGiver1Call__Outputs {
    return new DonateAndCreateGiver1Call__Outputs(this);
  }
}

export class DonateAndCreateGiver1Call__Inputs {
  _call: DonateAndCreateGiver1Call;

  constructor(call: DonateAndCreateGiver1Call) {
    this._call = call;
  }

  get giver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get receiverId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DonateAndCreateGiver1Call__Outputs {
  _call: DonateAndCreateGiver1Call;

  constructor(call: DonateAndCreateGiver1Call) {
    this._call = call;
  }
}

export class EscapeHatchCall extends EthereumCall {
  get inputs(): EscapeHatchCall__Inputs {
    return new EscapeHatchCall__Inputs(this);
  }

  get outputs(): EscapeHatchCall__Outputs {
    return new EscapeHatchCall__Outputs(this);
  }
}

export class EscapeHatchCall__Inputs {
  _call: EscapeHatchCall;

  constructor(call: EscapeHatchCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class EscapeHatchCall__Outputs {
  _call: EscapeHatchCall;

  constructor(call: EscapeHatchCall) {
    this._call = call;
  }
}

export class SetSecurityGuardCall extends EthereumCall {
  get inputs(): SetSecurityGuardCall__Inputs {
    return new SetSecurityGuardCall__Inputs(this);
  }

  get outputs(): SetSecurityGuardCall__Outputs {
    return new SetSecurityGuardCall__Outputs(this);
  }
}

export class SetSecurityGuardCall__Inputs {
  _call: SetSecurityGuardCall;

  constructor(call: SetSecurityGuardCall) {
    this._call = call;
  }

  get _newSecurityGuard(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSecurityGuardCall__Outputs {
  _call: SetSecurityGuardCall;

  constructor(call: SetSecurityGuardCall) {
    this._call = call;
  }
}

export class DepositEscapedFundsCall extends EthereumCall {
  get inputs(): DepositEscapedFundsCall__Inputs {
    return new DepositEscapedFundsCall__Inputs(this);
  }

  get outputs(): DepositEscapedFundsCall__Outputs {
    return new DepositEscapedFundsCall__Outputs(this);
  }
}

export class DepositEscapedFundsCall__Inputs {
  _call: DepositEscapedFundsCall;

  constructor(call: DepositEscapedFundsCall) {
    this._call = call;
  }
}

export class DepositEscapedFundsCall__Outputs {
  _call: DepositEscapedFundsCall;

  constructor(call: DepositEscapedFundsCall) {
    this._call = call;
  }
}

export class Donate1Call extends EthereumCall {
  get inputs(): Donate1Call__Inputs {
    return new Donate1Call__Inputs(this);
  }

  get outputs(): Donate1Call__Outputs {
    return new Donate1Call__Outputs(this);
  }
}

export class Donate1Call__Inputs {
  _call: Donate1Call;

  constructor(call: Donate1Call) {
    this._call = call;
  }

  get giverId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get receiverId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class Donate1Call__Outputs {
  _call: Donate1Call;

  constructor(call: Donate1Call) {
    this._call = call;
  }
}

export class ChangeHatchEscapeCallerCall extends EthereumCall {
  get inputs(): ChangeHatchEscapeCallerCall__Inputs {
    return new ChangeHatchEscapeCallerCall__Inputs(this);
  }

  get outputs(): ChangeHatchEscapeCallerCall__Outputs {
    return new ChangeHatchEscapeCallerCall__Outputs(this);
  }
}

export class ChangeHatchEscapeCallerCall__Inputs {
  _call: ChangeHatchEscapeCallerCall;

  constructor(call: ChangeHatchEscapeCallerCall) {
    this._call = call;
  }

  get _newEscapeHatchCaller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeHatchEscapeCallerCall__Outputs {
  _call: ChangeHatchEscapeCallerCall;

  constructor(call: ChangeHatchEscapeCallerCall) {
    this._call = call;
  }
}

export class SetMaxSecurityGuardDelayCall extends EthereumCall {
  get inputs(): SetMaxSecurityGuardDelayCall__Inputs {
    return new SetMaxSecurityGuardDelayCall__Inputs(this);
  }

  get outputs(): SetMaxSecurityGuardDelayCall__Outputs {
    return new SetMaxSecurityGuardDelayCall__Outputs(this);
  }
}

export class SetMaxSecurityGuardDelayCall__Inputs {
  _call: SetMaxSecurityGuardDelayCall;

  constructor(call: SetMaxSecurityGuardDelayCall) {
    this._call = call;
  }

  get _maxSecurityGuardDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxSecurityGuardDelayCall__Outputs {
  _call: SetMaxSecurityGuardDelayCall;

  constructor(call: SetMaxSecurityGuardDelayCall) {
    this._call = call;
  }
}

export class AuthorizePaymentCall extends EthereumCall {
  get inputs(): AuthorizePaymentCall__Inputs {
    return new AuthorizePaymentCall__Inputs(this);
  }

  get outputs(): AuthorizePaymentCall__Outputs {
    return new AuthorizePaymentCall__Outputs(this);
  }
}

export class AuthorizePaymentCall__Inputs {
  _call: AuthorizePaymentCall;

  constructor(call: AuthorizePaymentCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _reference(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _recipient(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _paymentDelay(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class AuthorizePaymentCall__Outputs {
  _call: AuthorizePaymentCall;

  constructor(call: AuthorizePaymentCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _escapeHatchCaller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _escapeHatchDestination(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _absoluteMinTimeLock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _timeLock(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _securityGuard(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _maxSecurityGuardDelay(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
