import { BankAccount } from "../accounts/bank-account";
import { IndividualAccount } from "../accounts/individual-account";

export const getBankAccount = () => {
  let account = new BankAccount();
  account.balance = 2330;
  account.name = "Test Bank";
  account.owner = "Test Bank Owner";
  return account;
}

export const getReceiverBankAccount = () => {
  let account = new BankAccount();
  account.balance = 2930;
  account.name = "Test Bank 1";
  account.owner = "Test Bank Owner 1";
  return account;
}

export const getIndividualAccount = () => {
  let account = new IndividualAccount();
  account.balance = 2000;
  account.name = "Test Individual";
  account.owner = "Test Individual Owner";
  return account;
}
