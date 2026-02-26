import PaysGator from '../PaysGator';
import { PaymentCreateRequest, PaymentCreateResponse, PaymentConfirmRequest, PaymentConfirmResponse } from '../types';

export class Payments {
    private paysGator: PaysGator;

    constructor(paysGator: PaysGator) {
        this.paysGator = paysGator;
    }

    /**
     * Create a new payment
     * @param data Payment creation data
     */
    public async create(data: PaymentCreateRequest): Promise<PaymentCreateResponse> {
        const client = this.paysGator.getClient(); // TODO: Refactor to remove direct client exposure
        const response = await client.post<PaymentCreateResponse>('/payment/create', data);
        return response.data;
    }

    /**
     * Confirm a payment
     * @param data Payment confirmation data
     */
    public async confirm(data: PaymentConfirmRequest): Promise<PaymentConfirmResponse> {
        const client = this.paysGator.getClient(); // TODO: Refactor to remove direct client exposure
        const response = await client.post<PaymentConfirmResponse>('/payment/confirm', data);
        return response.data;
    }
}
