"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checking_accoint_1 = require("./accounts/checking-accoint");
const savings_account_1 = require("./accounts/savings-account");
let checking = new checking_accoint_1.CheckingAccount();
checking.balance = 10;
checking.name = 'Checking Account 1';
checking.owner = 'Checking Account 1 Owner';
checking.deposit(100);
checking.chargeFee();
let savings = new savings_account_1.SavingsAccount();
savings.balance = 20;
savings.name = 'Savings Account 1';
savings.owner = 'Savings Account 1 Owner';
savings.deposit(100);
savings.withdraw(50);
savings.transfer(10, checking);
console.log(savings.balance);
//# sourceMappingURL=index.js.map