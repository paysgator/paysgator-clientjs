import { PaysGator } from '../PaysGator';
import { TransactionResponse } from '../types';
export declare class Transactions {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Get Transaction Details
     * @param id Transaction ID
     */
    get(id: string): Promise<TransactionResponse>;
}
