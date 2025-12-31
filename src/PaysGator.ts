import axios, { AxiosInstance } from 'axios';
import { AuthResponse, PaysGatorConfig, WalletBalanceResponse } from './types';
import { PaymentLinks } from './resources/paymentLinks';
import { Subscriptions } from './resources/subscriptions';
import { Transactions } from './resources/transactions';
import { Wallet } from './resources/wallet';

export class PaysGator {
    private client: AxiosInstance;
    private config: PaysGatorConfig;
    private token: string | null = null;
    private baseUrl: string = 'https://paysgator.com'; // Default production

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
     * Set a custom base URL (e.g. for testing)
     */
    public setBaseUrl(url: string) {
        this.baseUrl = url;
        this.client.defaults.baseURL = url;
    }

    /**
     * Authenticate and get an access token.
     * This is usually called automatically if no token is present, 
     * but can be called manually.
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
     * Internal helper to make authenticated requests.
     * Simple wrapper to ensure token might be refreshed if we had refresh logic, 
     * but here we just ensure we have one or throw/re-auth.
     */
    public getClient(): AxiosInstance {
        // For now, we rely on the user to ensure they assume authentication is handled
        // or we could auto-authenticate on 401. 
        // Given the spec, let's keep it simple: access the client.
        return this.client;
    }
}
