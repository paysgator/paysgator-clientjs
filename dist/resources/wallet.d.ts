import { PaysGator } from '../PaysGator';
import { WalletBalanceResponse } from '../types';
export declare class Wallet {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Get wallet balance
     */
    getBalance(): Promise<WalletBalanceResponse>;
}
