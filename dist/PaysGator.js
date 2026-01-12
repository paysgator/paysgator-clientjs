"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaysGator = void 0;
const axios_1 = __importDefault(require("axios"));
const payments_1 = require("./resources/payments");
const subscriptions_1 = require("./resources/subscriptions");
const transactions_1 = require("./resources/transactions");
const wallet_1 = require("./resources/wallet");
class PaysGator {
    constructor(config) {
        this.baseUrl = 'https://paysgator.com/api/v1';
        this.config = config;
        this.client = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.config.apiKey,
            },
        });
        this.payments = new payments_1.Payments(this);
        this.subscriptions = new subscriptions_1.Subscriptions(this);
        this.transactions = new transactions_1.Transactions(this);
        this.wallet = new wallet_1.Wallet(this);
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
