import { BankAccount } from "./bank-account";

export class SavingsAccount extends BankAccount {
  private _interestRate;
  public calculateInterest(){
      return this.balance * this._interestRate;
  }
}
