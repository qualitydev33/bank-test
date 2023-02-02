import { WITHDRAW_LIMIT_ERROR_MSG } from "../constants/account";
import { CheckingAccount } from "./checking-accoint";

export class IndividualAccount extends CheckingAccount {
  private _withdraw_limit = 1000;
  withdraw(amount: number): number {
    if (amount > this._withdraw_limit) throw new Error(WITHDRAW_LIMIT_ERROR_MSG);
    this.balance = this.balance - amount;
    return this.balance;
  }
}