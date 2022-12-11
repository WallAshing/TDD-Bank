export class Account {
    balance: number
    history: Array<string> = []
    currency: string

    constructor(money: number, currency: string) {
        this.balance = money
        this.currency = currency
    }
    withdrawal(amount: number) {
        this.balance -= amount
        this.history.push(`${amount}${this.currency} withdrawn`)
        return `${this.balance}${this.currency}`
    }
    deposit(amount: number) {
        this.balance += amount
        this.history.push(`${amount}${this.currency} deposed`)
        return `${this.balance}${this.currency}`
    }
    getBalance() {
        return `${this.balance}${this.currency}`
    }
    getHistory() {
        return this.history
    }
    transfer(account: Account, amount: number) {
        this.balance -= amount
        this.history.push(`${amount}${this.currency} transfered`)
        account.balance += amount
        account.history.push(`${amount}${this.currency} received`)
        return `${this.balance}${this.currency}`
    }
    loan(amount: number) {
        this.balance += amount
        this.history.push(`${amount}${this.currency} loan`)
        return `${this.balance}${this.currency}`
    }
}
