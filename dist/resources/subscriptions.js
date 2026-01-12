"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
class Subscriptions {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Update subscription status
     * @param id Subscription ID
     * @param action Action to perform: 'cancel', 'pause', 'resume'
     */
    async update(id, action) {
        const client = this.paysGator.getClient();
        const response = await client.patch(`/subscriptions/${id}`, { action });
        return response.data;
    }
}
exports.Subscriptions = Subscriptions;
