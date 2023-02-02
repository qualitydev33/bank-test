"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualAccount = void 0;
const checking_accoint_1 = require("./checking-accoint");
class IndividualAccount extends checking_accoint_1.CheckingAccount {
    constructor() {
        super(...arguments);
        this._withdraw_limit = 1000;
    }
}
exports.IndividualAccount = IndividualAccount;
//# sourceMappingURL=individual-account.js.map