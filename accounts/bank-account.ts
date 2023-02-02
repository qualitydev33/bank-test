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
    if (amount <= 0)  throw new Error("The deposit amount must be larger than 0.");
    this.balance = this.balance + amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount < this._balance ){
      this.balance = this.balance - amount;
      return this.balance;
    }
    else {
        throw new Error("The withdraw amount must be less or equal than the balance.");
    }
  }

  transfer(amount: number, account: BankAccount) {
    if (amount > this.balance) throw new Error("The transfer amount must be larger or equal than balance.");
    account.balance = account.balance + amount;
    this.balance = this.balance - amount;
  }
}