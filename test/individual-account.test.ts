import { WITHDRAW_LIMIT_ERROR_MSG } from "../constants/account";
import { getIndividualAccount } from "./setup"

describe('Individual Account validation', () => {
  test('Withdraw limit validation', () => {
    let account = getIndividualAccount();
    expect(() => account.withdraw(1200)).toThrow(WITHDRAW_LIMIT_ERROR_MSG)
  })
})