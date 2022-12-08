import { Account } from './account';

const account1 = new Account(5000)
const account2 = new Account(2500)

describe('account1', () => {
    it('should return the balance', () => {
        expect(account1.balance).toBe(5000)
    })
    it('should return the balance after withdrawal', () => {
        expect(account1.withdrawal(300)).toBe(4700)
    })
    it('should return the balance after deposit', () => {
        expect(account1.deposit(300)).toBe(5000)
    })
    it('should return the balance', () => {
        expect(account1.getBalance()).toStrictEqual(5000)
    })
    it('should return the history of transactions', () => {
        expect(account1.getHistory()).toBe(account1.history)
    })
    it('should return the history of transactions', () => {
        expect(account1.getHistory()).toStrictEqual([ '300 withdrawn', '300 deposed' ])
    })
})