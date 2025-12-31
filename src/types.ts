export interface PaysGatorConfig {
  apiKey: string;
  walletId: string;
  sandbox?: boolean; // Defaults to false, but spec implies "mode" in response could test?
}

export interface AuthRequest {
  apiKey: string;
  walletId: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  mode: 'LIVE' | 'TEST';
}

export interface PaymentLinkCreateRequest {
  title: string;
  amount: number;
  currency: string;
  description?: string;
  returnUrl?: string;
  fields?: string[];
  methods?: string[];
  confirm?: boolean;
  payment_fields?: Record<string, any>;
}

export interface PaymentLinkResponse {
  id: string;
  url: string;
  status: string;
  mode: string;
}

export interface SubscriptionUpdateRequest {
  action: 'cancel' | 'pause' | 'resume';
}

export interface SubscriptionResponse {
  id: string;
  status: string;
  customerEmail?: string;
  currentPeriodEnd?: string;
}

export interface TransactionResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  method?: string;
  description?: string;
  createdAt?: string;
  mode?: string;
}

export interface WalletBalanceResponse {
  walletId: string;
  currency: string;
  balance: string;
  mode: string;
}
