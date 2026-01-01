import axios, { AxiosInstance } from 'axios';
import { AuthResponse, PaysGatorConfig } from './types';
import { PaymentLinks } from './resources/paymentLinks';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';

export class PaysGator {
    private client: AxiosInstance;
    private config: PaysGatorConfig;
    private baseUrl: string = 'https://paysgator.com'; // Default production
    private token: string | null = null;

    public paymentLinks: PaymentLinks;
    public subscriptions: Subscriptions;
    public transactions: Transactions;
    public wallet: Wallet;

    constructor(config: PaysGatorConfig) {
        this.config = config;
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.paymentLinks = new PaymentLinks(this);
        this.subscriptions = new Subscriptions(this);
        this.transactions = new Transactions(this);
        this.wallet = new Wallet(this);
    }

    /**
     * Authenticate and get an access token.
     */
    public async authenticate(): Promise<AuthResponse> {
        try {
            const response = await this.client.post<AuthResponse>('/api/v1/auth', {
                apiKey: this.config.apiKey,
                walletId: this.config.walletId,
            });

            this.token = response.data.accessToken;
            this.client.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            return response.data;
        } catch (error) {
            throw error;
        }
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
