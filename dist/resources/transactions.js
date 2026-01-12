"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
class Transactions {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Get a transaction by ID
     * @param id Transaction ID
     */
    async get(id) {
        const client = this.paysGator.getClient();
        const response = await client.get(`/transactions/${id}`);
        return response.data;
    }
}
exports.Transactions = Transactions;
