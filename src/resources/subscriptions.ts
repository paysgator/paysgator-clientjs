import { PaysGator } from '../PaysGator';
import { SubscriptionResponse, SubscriptionUpdateRequest } from '../types';

export class Subscriptions {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Update Subscription Status
     * @param id Subscription ID
     * @param action Action to perform (cancel, pause, resume)
     */
    public async update(id: string, action: 'cancel' | 'pause' | 'resume'): Promise<SubscriptionResponse> {
        const data: SubscriptionUpdateRequest = { action };
        const client = this.paysGator.getClient();
        const response = await client.patch<SubscriptionResponse>(`/api/v1/subscriptions/${id}`, data);
        return response.data;
    }
}
