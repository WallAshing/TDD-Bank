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

}
