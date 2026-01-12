import axios, { AxiosInstance } from 'axios';
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

        this.payments = new Payments(this);
        this.subscriptions = new Subscriptions(this);
        this.transactions = new Transactions(this);
        this.wallet = new Wallet(this);
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
    public getClient(): AxiosInstance {
        return this.client;
    }
}
