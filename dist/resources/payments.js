"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
class Payments {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Create a new payment
     * @param data Payment creation data
     */
    async create(data) {
        const client = this.paysGator.getClient();
        const response = await client.post('/payment/create', data);
        return response.data;
    }
    /**
     * Confirm a payment
     * @param data Payment confirmation data
     */
    async confirm(data) {
        const client = this.paysGator.getClient();
        const response = await client.post('/payment/confirm', data);
        return response.data;
    }
}
exports.Payments = Payments;
