// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MessageChanged extends ethereum.Event {
  get params(): MessageChanged__Params {
    return new MessageChanged__Params(this);
  }
}

export class MessageChanged__Params {
  _event: MessageChanged;

  constructor(event: MessageChanged) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get message(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class GreetingsRegistryContract extends ethereum.SmartContract {
  static bind(address: Address): GreetingsRegistryContract {
    return new GreetingsRegistryContract("GreetingsRegistryContract", address);
  }

  messages(param0: Address): string {
    let result = super.call("messages", "messages(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toString();
  }

  try_messages(param0: Address): ethereum.CallResult<string> {
    let result = super.tryCall("messages", "messages(address):(string)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
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

  get prefix(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PostUpgradeCall extends ethereum.Call {
  get inputs(): PostUpgradeCall__Inputs {
    return new PostUpgradeCall__Inputs(this);
  }

  get outputs(): PostUpgradeCall__Outputs {
    return new PostUpgradeCall__Outputs(this);
  }
}

export class PostUpgradeCall__Inputs {
  _call: PostUpgradeCall;

  constructor(call: PostUpgradeCall) {
    this._call = call;
  }

  get prefix(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class PostUpgradeCall__Outputs {
  _call: PostUpgradeCall;

  constructor(call: PostUpgradeCall) {
    this._call = call;
  }
}

export class SetMessageCall extends ethereum.Call {
  get inputs(): SetMessageCall__Inputs {
    return new SetMessageCall__Inputs(this);
  }

  get outputs(): SetMessageCall__Outputs {
    return new SetMessageCall__Outputs(this);
  }
}

export class SetMessageCall__Inputs {
  _call: SetMessageCall;

  constructor(call: SetMessageCall) {
    this._call = call;
  }

  get message(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetMessageCall__Outputs {
  _call: SetMessageCall;

  constructor(call: SetMessageCall) {
    this._call = call;
  }
}