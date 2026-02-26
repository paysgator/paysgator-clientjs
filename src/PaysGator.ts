import axios, { AxiosInstance } from 'axios';

export interface PaysGatorClient {
    getClient(): AxiosInstance;
    setBaseUrl(url: string): void;
}
import { PaysGatorConfig } from './types';
import { Payments } from './resources/payments';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';

export class PaysGator {
    private client: AxiosInstance;
    private config: PaysGatorConfig;
    private baseUrl: string = 'https://paysgator.com/api/v1';

    public payments: Payments;
    public subscriptions: Subscriptions;
    public transactions: Transactions;
    public wallet: Wallet;

    constructor(config: PaysGatorConfig) {
        this.config = config;
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.config.apiKey,
            },
        });

        this.payments = new Payments(this as PaysGatorClient);
        this.subscriptions = new Subscriptions(this as PaysGatorClient);
        this.transactions = new Transactions(this as PaysGatorClient);
        this.wallet = new Wallet(this as PaysGatorClient);
    }

    /**
     * Set a custom base URL (e.g. for testing)
     */
    public setBaseUrl(url: string) {
        this.baseUrl = url;
        this.client.defaults.baseURL = url;
    }

    /**
     * Internal helper to make requests.
     */
    private getClient(): AxiosInstance {
        return this.client;
    }
}
