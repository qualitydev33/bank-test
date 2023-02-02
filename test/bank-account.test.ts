import { AMOUNT_MIN_ERROR_MSG, TRANSFER_MAX_ERROR_MSG, WITHDRAW_MAX_ERROR_MSG } from "../constants/account";
import { getBankAccount, getReceiverBankAccount } from "./setup";

describe("Bank Account Checking",  () => {
  test('Account owner, name and balance validation', () => {
    let account = getBankAccount();
    expect(account.balance).toBeGreaterThanOrEqual(0);
    expect(account.owner).not.toBeUndefined();
    expect(account.name).not.toBeUndefined();
  })

  test('Account Deposit and Withdraw validation', () => {
    let sender = getBankAccount();
    let receiver = getReceiverBankAccount();
    let senderBalanceBeforeDeposit = sender.balance;
    let receiverBalanceBeforeTransfer = receiver.balance;

    expect(() => sender.deposit(-100)).toThrow(AMOUNT_MIN_ERROR_MSG);
    expect(() => sender.withdraw(-100)).toThrow(AMOUNT_MIN_ERROR_MSG);
    expect(() => sender.transfer(-100, receiver)).toThrow(AMOUNT_MIN_ERROR_MSG);
    expect(() => sender.withdraw(sender.balance + 1)).toThrow(WITHDRAW_MAX_ERROR_MSG);
    expect(() => sender.transfer(sender.balance + 1, receiver)).toThrow(TRANSFER_MAX_ERROR_MSG);

    sender.deposit(500);
    expect(sender.balance - senderBalanceBeforeDeposit).toEqual(500);
    let senderBalanceBeforeWithdraw = sender.balance;
    sender.withdraw(300);
    expect(senderBalanceBeforeWithdraw - sender.balance).toEqual(300);
    sender.transfer(200, receiver);
    expect(receiver.balance - receiverBalanceBeforeTransfer).toEqual(200);
  })

})


