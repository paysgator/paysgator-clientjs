export interface PaysGatorConfig {
    apiKey: string;
    debug?: boolean;
}
export interface ErrorResponse {
    error: {
        message: string;
        code: 'UNAUTHORIZED' | 'NOT_FOUND' | 'MISSING_FIELDS' | 'WALLET_NOT_FOUND' | 'CURRENCY_MISMATCH' | 'PAYMENT_FAILED' | 'INTERNAL_ERROR' | 'INVALID_ACTION' | 'MODE_MISMATCH';
    };
}
export interface PaymentCreateRequest {
    amount: number;
    currency: string;
    externalTransactionId?: string;
    payment_methods?: string[];
    fields?: ('name' | 'email' | 'phone' | 'address')[];
    returnUrl?: string;
    metadata?: Record<string, any>;
}
export interface PaymentCreateResponse {
    success: boolean;
    data: {
        paymentlinkId: string;
        checkoutUrl: string;
        transactionId: string;
    };
}
export interface PaymentConfirmRequest {
    paymentLinkId: string;
    paymentMethod: string;
    payment_fields?: Record<string, any>;
    customer?: {
        name?: string;
        email?: string;
        phone?: string;
        address?: string;
        country?: string;
    };
}
export interface PaymentConfirmResponse {
    success: boolean;
    data: {
        transactionId: string;
        fee: number;
        netAmount: number;
    };
}
export interface WalletBalanceResponse {
    walletId: string;
    currency: string;
    balance: string;
    mode: 'LIVE' | 'TEST';
}
export interface Transaction {
    id: string;
    amount: number;
    currency: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';
    method?: string | null;
    description?: string | null;
    createdAt: string;
    mode: 'LIVE' | 'TEST';
}
export interface SubscriptionUpdateRequest {
    action: 'cancel' | 'pause' | 'resume';
}
export interface SubscriptionUpdateResponse {
    id: string;
    status: 'ACTIVE' | 'CANCELED' | 'PAST_DUE' | 'PAUSED';
    customerEmail?: string;
    currentPeriodEnd?: string;
}
