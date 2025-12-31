import { PaysGator } from '../PaysGator';
import { PaymentLinkCreateRequest, PaymentLinkResponse } from '../types';

export class PaymentLinks {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Create a Payment Link or Direct Charge
     * @param data Payment link creation data
     */
    public async create(data: PaymentLinkCreateRequest): Promise<PaymentLinkResponse> {
        const client = this.paysGator.getClient();
        const response = await client.post<PaymentLinkResponse>('/api/v1/payment-links', data);
        return response.data;
    }
}
