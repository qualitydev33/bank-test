import { getIndividualAccount } from "./setup"

describe('Individual Account validation', () => {
  test('Withdraw limit validation', () => {
    let account = getIndividualAccount();
    expect(() => account.withdraw(1200)).toThrow("Withdraw amount must be smaller than 1000.")
  })
})