import { PaysGator } from '../PaysGator';
import { SubscriptionResponse } from '../types';
export declare class Subscriptions {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Update Subscription Status
     * @param id Subscription ID
     * @param action Action to perform (cancel, pause, resume)
     */
    update(id: string, action: 'cancel' | 'pause' | 'resume'): Promise<SubscriptionResponse>;
}
