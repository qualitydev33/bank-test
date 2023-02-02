import { CheckingAccount } from "./accounts/checking-accoint";
import { SavingsAccount } from "./accounts/savings-account";

let checking = new CheckingAccount();
checking.balance = 10;
checking.name = 'Checking Account 1';
checking.owner = 'Checking Account 1 Owner';
checking.deposit(100);


let savings = new SavingsAccount();
savings.balance = 20;
savings.name = 'Savings Account 1';
savings.owner = 'Savings Account 1 Owner';
savings.deposit(100);
savings.withdraw(50);
savings.transfer(10, checking);
console.log(savings.balance);
console.log(checking.balance);