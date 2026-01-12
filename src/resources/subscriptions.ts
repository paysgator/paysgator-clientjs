import { PaysGator } from '../PaysGator';
import { SubscriptionUpdateRequest, SubscriptionUpdateResponse } from '../types';

export class Subscriptions {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Update subscription status
     * @param id Subscription ID
     * @param action Action to perform: 'cancel', 'pause', 'resume'
     */
    public async update(id: string, action: SubscriptionUpdateRequest['action']): Promise<SubscriptionUpdateResponse> {
        const client = this.paysGator.getClient();
        const response = await client.patch<SubscriptionUpdateResponse>(`/subscriptions/${id}`, { action });
        return response.data;
    }
}
