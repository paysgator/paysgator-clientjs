const { PaysGator } = require('./dist');

async function verify() {
    try {
        const client = new PaysGator({
            apiKey: '',
            walletId: ''
        });

        console.log('Client instantiated successfully');

        // Authenticate first
        console.log('Attempting authentication...');
        try {
            await client.authenticate();
            client.paymentLinks.create({
                title: 'Test Product',
                amount: 100,
                currency: 'MZN',
                methods: ['MPESA'],
                payment_fields: {
                    phoneNumber: '842383770'
                },
                confirm: true,
                return_url: 'https://example.com/return'
            }).then(console.log).catch(console.error);
        } catch (authError) {

        }

        if (client.paymentLinks && client.subscriptions) {
            console.log('Resources initialized');
        }

        if (typeof client.authenticate === 'function') {
            console.log('authenticate method exists');
        } else {
            throw new Error('authenticate method missing');
        }

    } catch (e) {
        console.error('Verification failed:', e);
        process.exit(1);
    }
}

verify();
