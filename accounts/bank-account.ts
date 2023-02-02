import { AMOUNT_MIN_ERROR_MSG, TRANSFER_MAX_ERROR_MSG, WITHDRAW_MAX_ERROR_MSG } from "../constants/account";
import { Bank } from "./bank";

export class BankAccount extends Bank {
  private _balance: number = 0;
  private _owner: string;

  get owner(): string {
    return this._owner;
  }
  set owner(owner: string) {
    this._owner = owner;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(balance: number) {
    this._balance = balance;
  }

  deposit(amount: number): number {
    if (amount <= 0)  throw new Error(AMOUNT_MIN_ERROR_MSG);
    this.balance = this.balance + amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount <= 0) {
      throw new Error(AMOUNT_MIN_ERROR_MSG);
    }
    if (amount > this.balance) {
      throw new Error(WITHDRAW_MAX_ERROR_MSG);
    }
    this.balance = this.balance - amount;
    return this.balance;
  }

  transfer(amount: number, account: BankAccount) {
    if (amount <= 0) throw new Error(AMOUNT_MIN_ERROR_MSG);
    if (amount > this.balance) throw new Error(TRANSFER_MAX_ERROR_MSG);
    account.balance = account.balance + amount;
    this.balance = this.balance - amount;
  }
}