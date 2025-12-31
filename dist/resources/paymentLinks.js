"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinks = void 0;
class PaymentLinks {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Create a Payment Link or Direct Charge
     * @param data Payment link creation data
     */
    async create(data) {
        const client = this.paysGator.getClient();
        const response = await client.post('/api/v1/payment-links', data);
        return response.data;
    }
}
exports.PaymentLinks = PaymentLinks;
