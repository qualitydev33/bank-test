"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccount = void 0;
const bank_account_1 = require("./bank-account");
class CheckingAccount extends bank_account_1.BankAccount {
    constructor() {
        super(...arguments);
        this.monthlyFeeAmount = 5.00;
    }
    chargeFee() {
        return this.monthlyFeeAmount;
    }
}
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=checking-accoint.js.map