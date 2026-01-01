import { AxiosInstance } from 'axios';
import { AuthResponse, PaysGatorConfig } from './types';
import { PaymentLinks } from './resources/paymentLinks';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';
export declare class PaysGator {
    private client;
    private config;
    private baseUrl;
    private token;
    paymentLinks: PaymentLinks;
    subscriptions: Subscriptions;
    transactions: Transactions;
    wallet: Wallet;
    constructor(config: PaysGatorConfig);
    /**
     * Authenticate and get an access token.
     */
    authenticate(): Promise<AuthResponse>;
    /**
     * Set a custom base URL (e.g. for testing)
     */
    setBaseUrl(url: string): void;
    /**
     * Internal helper to make requests.
     */
    getClient(): AxiosInstance;
}
