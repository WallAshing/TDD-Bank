import { Account } from './account';

describe('Account basic actions', () => {
    let account1: Account
    beforeEach(() => {
        account1 = new Account(5000)
        expect(account1.balance).toBe(5000)
    })

    describe('Client balance', () => {
        it('should return the balance', () => {
            expect(account1.getBalance()).toBe(5000)
        })
    })

    describe('Withdraw money', () => {
        it('should return the balance after withdrawal', () => {
            expect(account1.withdrawal(300)).toBe(4700)
        })
        it('should return the balance after withdrawal', () => {
            expect(account1.withdrawal(500)).toBe(4500)
        })
    })

    describe('Deposit money', () => {
        it('should return the balance after deposit', () => {
            expect(account1.deposit(300)).toBe(5300)
        })
        it('should return the balance after deposit', () => {
            expect(account1.deposit(500)).toBe(5500)
        })
    })

    describe('Transaction history', () => {
        it('should return the history of transactions empty', () => {
            expect(account1.getHistory()).toStrictEqual([])
        })
        it('should return the history of transactions', () => {
            account1.history = ['300 withdrawn', '300 deposed']
            expect(account1.getHistory()).toStrictEqual(['300 withdrawn', '300 deposed'])
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
    })
})

describe('Account transfers', () => {
    let account1: Account
    let account2: Account
    beforeEach(() => {
        account1 = new Account(5000)
        account2 = new Account(2500)
        expect(account1.balance).toBe(5000)
        expect(account2.balance).toBe(2500)
    })
    describe('Transfer money', () => {
        it('should update the first account balance', () => {
            expect(account1.transfer(account2, 700)).toBe(4300)
        })
        it('should update the second account balance', () => {
            account1.transfer(account2, 600)
            expect(account2.balance).toBe(3100)
        })
        it('should update the 2 balance', () => {
            expect(account1.transfer(account2, 500)).toBe(4500)
            expect(account2.balance).toBe(3000)
        })
        it('should update the 2 balance', () => {
            expect(account1.transfer(account2, 1000)).toBe(4000)
            expect(account2.balance).toBe(3500)
        })
    })
    describe('Transaction history after transfer', () => {
        it('should return the first account history', () => {
            account1.transfer(account2, 500)
            expect(account1.history).toStrictEqual(["500 transfered"])
        })
        it('should return the first account history', () => {
            account1.transfer(account2, 600)
            expect(account1.history).toStrictEqual(["600 transfered"])
        })
        it('should return the second account history', () => {
            account1.transfer(account2, 400)
            expect(account2.history).toStrictEqual(["400 received"])
        })
        it('should return the second account history', () => {
            account1.transfer(account2, 700)
            expect(account2.history).toStrictEqual(["700 received"])
        })
    })
})