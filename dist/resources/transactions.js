"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transactions = void 0;
class Transactions {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Get Transaction Details
     * @param id Transaction ID
     */
    async get(id) {
        const client = this.paysGator.getClient();
        const response = await client.get(`/api/v1/transactions/${id}`);
        return response.data;
    }
}
exports.Transactions = Transactions;
