# PaysGator Client for Node.js

Official JavaScript/TypeScript client library for the PaysGator API.

## Installation

Install the package using npm:

```bash
npm install paysgator-clientjs
```

## Configuration

Import and configure the client with your credentials:

```javascript
const { PaysGator } = require('paysgator-clientjs');

const client = new PaysGator({
  apiKey: 'YOUR_API_KEY'
});
```

For TypeScript/ES Modules:

```typescript
import { PaysGator } from 'paysgator-clientjs';

const client = new PaysGator({
  apiKey: 'YOUR_API_KEY'
});
```

## Usage

### Create Payment

```javascript
const payment = await client.payments.create({
  amount: 100,
  currency: 'MZN', // or USD, AOA
  payment_methods: ['MPESA', 'CARD'],
  returnUrl: 'https://example.com/callback'
});

console.log('Payment Link:', payment.checkoutUrl);
console.log('Transaction ID:', payment.transactionId);
```

### Confirm Payment (Server-side)

```javascript
const confirmation = await client.payments.confirm({
  paymentLinkId: 'payment_link_id',
  paymentMethod: 'MPESA',
  payment_fields: {
      phoneNumber: '841234567' 
  }
});

console.log('Payment Confirmed:', confirmation.transactionId);
```

### Check Balance

```javascript
const balance = await client.wallet.getBalance();
console.log('Balance:', balance.balance, balance.currency);
```

### Get Transaction

```javascript
const transaction = await client.transactions.get('transaction_id');
console.log('Transaction Status:', transaction.status);
```

### Manage Subscriptions

```javascript
// Pause a subscription
await client.subscriptions.update('subscription_id', 'pause');
```

## Support

For more information or support, please contact info@paysgator.com.
