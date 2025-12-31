import { PaysGator } from '../PaysGator';
import { PaymentLinkCreateRequest, PaymentLinkResponse } from '../types';
export declare class PaymentLinks {
    private paysGator;
    constructor(paysGator: PaysGator);
    /**
     * Create a Payment Link or Direct Charge
     * @param data Payment link creation data
     */
    create(data: PaymentLinkCreateRequest): Promise<PaymentLinkResponse>;
}
