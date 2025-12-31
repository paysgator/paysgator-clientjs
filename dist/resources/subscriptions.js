"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriptions = void 0;
class Subscriptions {
    constructor(paysGator) {
        this.paysGator = paysGator;
    }
    /**
     * Update Subscription Status
     * @param id Subscription ID
     * @param action Action to perform (cancel, pause, resume)
     */
    async update(id, action) {
        const data = { action };
        const client = this.paysGator.getClient();
        const response = await client.patch(`/api/v1/subscriptions/${id}`, data);
        return response.data;
    }
}
exports.Subscriptions = Subscriptions;
