import { Account } from './account';
import {v4 as uuidv4} from 'uuid';

export class Bank {
    accounts: Map<string, Account> = new Map

    constructor() {

    }

    getAccount(key: string) {
        return this.accounts.get(key)
    }

    createAccount(startingAmount: number,currency: string): string{
        let account = new Account(startingAmount, currency)
        let accountId = uuidv4()
        this.accounts.set(accountId, account)
        console.log(this.accounts)
        return accountId
    }

    closeAccount() {

    }
}

