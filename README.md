# @paysgator/clientjs

Official JavaScript/TypeScript client library for the PaysGator API.

## Installation

Install the package using npm:

```bash
npm install @paysgator/clientjs
```

## Configuration

Import and configure the client with your credentials:

```javascript
const { PaysGator } = require('@paysgator/clientjs');

const client = new PaysGator({
  apiKey: 'YOUR_API_KEY',
  walletId: 'YOUR_WALLET_ID'
});
```

For TypeScript/ES Modules:

```typescript
import { PaysGator } from '@paysgator/clientjs';

const client = new PaysGator({
  apiKey: 'YOUR_API_KEY',
  walletId: 'YOUR_WALLET_ID'
});
```

## Usage

### Create Payment Link

```javascript
const link = await client.paymentLinks.create({
  title: 'My Product',
  amount: 100,
  currency: 'MZN',
  description: 'Test payment',
  methods: ['MPESA', 'CARD']
});

console.log('Payment created:', link.url);
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
