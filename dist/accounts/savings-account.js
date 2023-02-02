"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const bank_account_1 = require("./bank-account");
class SavingsAccount extends bank_account_1.BankAccount {
    calculateInterest() {
        return this.balance * this._interestRate;
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=savings-account.js.map