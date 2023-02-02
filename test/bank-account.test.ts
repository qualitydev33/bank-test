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

    expect(() => sender.deposit(-100)).toThrow("The deposit amount must be larger than 0.");
    expect(() => sender.withdraw(sender.balance + 1)).toThrow("The withdraw amount must be less or equal than the balance.");
    expect(() => sender.transfer(sender.balance + 1, receiver)).toThrow("The transfer amount must be larger or equal than balance.");

    sender.deposit(500);
    expect(sender.balance - senderBalanceBeforeDeposit).toEqual(500);
    let senderBalanceBeforeWithdraw = sender.balance;
    sender.withdraw(300);
    expect(senderBalanceBeforeWithdraw - sender.balance).toEqual(300);
    sender.transfer(200, receiver);
    expect(receiver.balance - receiverBalanceBeforeTransfer).toEqual(200);
  })

})


