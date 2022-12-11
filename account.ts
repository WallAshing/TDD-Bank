export class Account {
    balance: number
    history: Array<string> = []

    constructor(money: number) {
        this.balance = money
    }
    withdrawal(amount: number) {
        this.balance -= amount
        this.history.push(`${amount} withdrawn`)
        return this.balance
    }
    deposit(amount: number) {
        this.balance += amount
        this.history.push(`${amount} deposed`)
        return this.balance
    }
    getBalance() {
        return this.balance
    }
    getHistory() {
        return this.history
    }
    transfer(account: Account, amount: number) {
        this.balance -= amount
        this.history.push(`${amount} transfered`)
        account.balance += amount
        account.history.push(`${amount} received`)
        return this.balance
    }
    loan(amount: number) {
        this.balance += amount
        this.history.push(`${amount} loan`)
        return this.balance
    }
}
