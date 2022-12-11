import { Account } from './account';
import { v4 as uuidv4 } from 'uuid';

export class Bank {
    accounts: Map<string, Account>

    constructor() {
        this.accounts = new Map
    }

    getAccount(key: string): Account {
        return this.accounts.get(key)
    }

    createAccount(startingAmount: number,currency: string): string{
        let account = new Account(startingAmount, currency)
        let accountId = uuidv4()
        this.accounts.set(accountId, account)
        return accountId
    }

    closeAccount(key: string): void {
        this.accounts.delete(key)
    }
}

