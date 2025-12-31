const { PaysGator } = require('./dist');

try {
    const client = new PaysGator({
        apiKey: 'test_key',
        walletId: 'test_wallet'
    });

    console.log('Client instantiated successfully');

    if (client.paymentLinks && client.subscriptions) {
        console.log('Resources initialized');
    } else {
        throw new Error('Resources not initialized');
    }

} catch (e) {
    console.error('Verification failed:', e);
    process.exit(1);
}
