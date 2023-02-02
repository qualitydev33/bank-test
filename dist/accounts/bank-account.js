"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get owner() {
        return this._owner;
    }
    set owner(owner) {
        this._owner = owner;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        this._balance = balance;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("The deposit amount must be larger than 0.");
        this.balance = this.balance + amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount < this._balance) {
            this.balance = this.balance - amount;
            return this.balance;
        }
        else {
            throw new Error("The withdraw amount must be less or equal than the balance.");
        }
    }
    transfer(amount, account) {
        if (amount <= 0)
            throw new Error("The amount must be larger than 0.");
        account.balance = account.balance + amount;
        this.balance = this.balance - amount;
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=bank-account.js.map