"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class Wallet {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Get Wallet Balance
     */
    async getBalance() {
        const client = this.paysGator.getClient();
        const response = await client.get('/api/v1/wallet/balance');
        return response.data;
    }
}
exports.Wallet = Wallet;
