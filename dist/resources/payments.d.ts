import { PaysGator } from '../PaysGator';
import { PaymentCreateRequest, PaymentCreateResponse, PaymentConfirmRequest, PaymentConfirmResponse } from '../types';
export declare class Payments {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Create a new payment
     * @param data Payment creation data
     */
    create(data: PaymentCreateRequest): Promise<PaymentCreateResponse>;
    /**
     * Confirm a payment
     * @param data Payment confirmation data
     */
    confirm(data: PaymentConfirmRequest): Promise<PaymentConfirmResponse>;
}
