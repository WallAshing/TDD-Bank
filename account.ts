export class Account {
    solde: number

    constructor(money: number) {
        this.solde = money
    }
    withdrawal(amount: number) {
        this.solde -= amount
        return this.solde
    }
}
