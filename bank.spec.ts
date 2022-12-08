import { Account } from './account';

let account = new Account(5000)

describe('account', () => {
    it('should return the solde', () => {
        expect(account.solde).toBe(5000)
    })
    it('should return the solde after withdrawal', () => {
        expect(account.withdrawal(300)).toBe(4700)
    })
})