"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaysGator = void 0;
const axios_1 = __importDefault(require("axios"));
const paymentLinks_1 = require("./resources/paymentLinks");
const subscriptions_1 = require("./resources/subscriptions");
const transactions_1 = require("./resources/transactions");
const wallet_1 = require("./resources/wallet");
class PaysGator {
    constructor(config) {
        this.baseUrl = 'https://paysgator.com'; // Default production
        this.token = null;
        this.config = config;
        this.client = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.paymentLinks = new paymentLinks_1.PaymentLinks(this);
        this.subscriptions = new subscriptions_1.Subscriptions(this);
        this.transactions = new transactions_1.Transactions(this);
        this.wallet = new wallet_1.Wallet(this);
    }
    /**
     * Authenticate and get an access token.
     */
    async authenticate() {
        try {
            const response = await this.client.post('/api/v1/auth', {
                apiKey: this.config.apiKey,
                walletId: this.config.walletId,
            });
            this.token = response.data.accessToken;
            this.client.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
            return response.data;
        }
        catch (error) {
            throw error;
        }
    }
    /**
     * Set a custom base URL (e.g. for testing)
     */
    setBaseUrl(url) {
        this.baseUrl = url;
        this.client.defaults.baseURL = url;
    }
    /**
     * Internal helper to make requests.
     */
    getClient() {
        return this.client;
    }
}
exports.PaysGator = PaysGator;
