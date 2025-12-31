import { PaysGator } from '../PaysGator';
import { WalletBalanceResponse } from '../types';
export declare class Wallet {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Get Wallet Balance
     */
    getBalance(): Promise<WalletBalanceResponse>;
}
