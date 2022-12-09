import { Account } from './account';

describe('account', () => {
    let account1: Account
    beforeEach(() => {
        account1 = new Account(5000)
    })
    it('should return the balance', () => {
        expect(account1.balance).toBe(5000)
    })
    it('should return the balance after withdrawal', () => {
        expect(account1.withdrawal(300)).toBe(4700)
    })
    it('should return the balance after withdrawal', () => {
        expect(account1.withdrawal(500)).toBe(4500)
    })
    it('should return the balance after deposit', () => {
        expect(account1.deposit(300)).toBe(5300)
    })
    it('should return the balance after deposit', () => {
        expect(account1.deposit(500)).toBe(5500)
    })
    it('should return the balance', () => {
        expect(account1.getBalance()).toBe(5000)
    })
    it('should return the history of transactions empty', () => {
        expect(account1.getHistory()).toStrictEqual([])
    })
    it('should return the history of transactions with withdraw and deposit', () => {
        account1.withdrawal(300)
        account1.deposit(300)
        expect(account1.getHistory()).toStrictEqual(['300 withdrawn', '300 deposed'])
    })
    it('should return the history of transactions with withdraw and deposit', () => {
        account1.withdrawal(500)
        account1.deposit(500)
        expect(account1.getHistory()).toStrictEqual(['500 withdrawn', '500 deposed'])
    })
    it('should return the history of transactions', () => {
        account1.history = ['300 withdrawn', '300 deposed']
        expect(account1.getHistory()).toStrictEqual(['300 withdrawn', '300 deposed'])
    })
    it('should update the 2 balance', () => {
        const account2 = new Account(2500)
        expect(account1.transfer(account2, 500)).toBe(4500)
        expect(account2.balance).toBe(3000)
    })
    it('should update the 2 balance', () => {
        const account2 = new Account(2500)
        expect(account1.transfer(account2, 1000)).toBe(4000)
        expect(account2.balance).toBe(3500)
    })
})