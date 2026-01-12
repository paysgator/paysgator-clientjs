import { PaysGator } from '../PaysGator';
import { Transaction } from '../types';

export class Transactions {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Get a transaction by ID
     * @param id Transaction ID
     */
    public async get(id: string): Promise<Transaction> {
        const client = this.paysGator.getClient();
        const response = await client.get<Transaction>(`/transactions/${id}`);
        return response.data;
    }
}
