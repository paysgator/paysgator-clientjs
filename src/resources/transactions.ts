import { PaysGator } from '../PaysGator';
import { TransactionResponse } from '../types';

export class Transactions {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Get Transaction Details
     * @param id Transaction ID
     */
    public async get(id: string): Promise<TransactionResponse> {
        const client = this.paysGator.getClient();
        const response = await client.get<TransactionResponse>(`/api/v1/transactions/${id}`);
        return response.data;
    }
}
