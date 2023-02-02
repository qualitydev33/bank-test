import { CheckingAccount } from "./checking-accoint";

export class IndividualAccount extends CheckingAccount {
  private _withdraw_limit = 1000;
  withdraw(amount: number): number {
    if (amount > this._withdraw_limit) throw new Error(`Withdraw amount must be smaller than ${this._withdraw_limit}.`);
    this.balance = this.balance - amount;
    return this.balance;
  }
}