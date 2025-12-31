import { AxiosInstance } from 'axios';
import { AuthResponse, PaysGatorConfig } from './types';
import { PaymentLinks } from './resources/paymentLinks';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';
export declare class PaysGator {
    private client;
    private config;
    private token;
    private baseUrl;
    paymentLinks: PaymentLinks;
    subscriptions: Subscriptions;
    transactions: Transactions;
    wallet: Wallet;
    constructor(config: PaysGatorConfig);
    /**
     * Set a custom base URL (e.g. for testing)
     */
    setBaseUrl(url: string): void;
    /**
     * Authenticate and get an access token.
     * This is usually called automatically if no token is present,
     * but can be called manually.
     */
    authenticate(): Promise<AuthResponse>;
    /**
     * Internal helper to make authenticated requests.
     * Simple wrapper to ensure token might be refreshed if we had refresh logic,
     * but here we just ensure we have one or throw/re-auth.
     */
    getClient(): AxiosInstance;
}
