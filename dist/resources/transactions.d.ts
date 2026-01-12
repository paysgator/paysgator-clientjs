import { PaysGator } from '../PaysGator';
import { Transaction } from '../types';
export declare class Transactions {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Get a transaction by ID
     * @param id Transaction ID
     */
    get(id: string): Promise<Transaction>;
}
