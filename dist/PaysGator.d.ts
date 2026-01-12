import { AxiosInstance } from 'axios';
import { PaysGatorConfig } from './types';
import { Payments } from './resources/payments';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';
export declare class PaysGator {
    private client;
    private config;
    private baseUrl;
    payments: Payments;
    subscriptions: Subscriptions;
    transactions: Transactions;
    wallet: Wallet;
    constructor(config: PaysGatorConfig);
    /**
     * Set a custom base URL (e.g. for testing)
     */
    setBaseUrl(url: string): void;
    /**
     * Internal helper to make requests.
     */
    getClient(): AxiosInstance;
}
