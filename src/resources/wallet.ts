import { PaysGator } from '../PaysGator';
import { WalletBalanceResponse } from '../types';

export class Wallet {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Get Wallet Balance
     */
    public async getBalance(): Promise<WalletBalanceResponse> {
        const client = this.paysGator.getClient();
        const response = await client.get<WalletBalanceResponse>('/api/v1/wallet/balance');
        return response.data;
    }
}
