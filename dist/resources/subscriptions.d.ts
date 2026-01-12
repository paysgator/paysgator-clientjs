import { PaysGator } from '../PaysGator';
import { SubscriptionUpdateRequest, SubscriptionUpdateResponse } from '../types';
export declare class Subscriptions {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Update subscription status
     * @param id Subscription ID
     * @param action Action to perform: 'cancel', 'pause', 'resume'
     */
    update(id: string, action: SubscriptionUpdateRequest['action']): Promise<SubscriptionUpdateResponse>;
}
