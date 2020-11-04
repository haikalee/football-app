const webpush = require('web-push');

const vapidKeys = {
    publicKeys: 'BEWus5STm2I0d2iIfES2ZlPeXHZ74DsL1WKBvqYDQW7C2HEBlv7N7dGw-Q--c0j2_cmK-HpQrl3E53SO02ZxDVY',
    privateKeys: 'nn-T_UDQsSr0IyxF9eWFlcuZLABWNY4j1AdPjxJF8jU'
}

webpush.setVapidDetails(
    'mailto:haikalnwn996@gmail.com',
    vapidKeys.publicKeys,
    vapidKeys.privateKeys
)

const pushSubscription = {
    "endpoint": "https://sg2p.notify.windows.com/w/?token=BQYAAACtUqOk06q7gWkJ%2f5YFeEtaEJDx590gulQzVMH5M2DXX0ftlUFO7GIADWjjto3TwPG0xCY%2fPgJFI06HeeMh%2fo3OZNP4mfcyYo4%2fbEFMTqeBHnx%2bv2nj4rNunFZIWaHSguu5%2fSJfKblxqRYnSyVIpf8iGsjHd7lmpVpA20m%2bt9qnPpsPrY4Pkf5SQzHYZYZvH%2blUfqIZCVo2E3MBjgOWSrzTHEdad23YxBSVtYMaIooDc5Gh4mH9YLnyQnwcqSdKhT4yCyEDrqz5wJJyJeTeRcUTO8iHuC8z1x6kiQx3ykK8mTMEiKgD%2f8nzN3U6vqXKqnQ%3d",
    "keys" : {
        "p256dh": "BOXzUQM9XMR3SVBSZFNEB2dqHSJA4PV4im2MnW7tGcbV6diRYL2z0ik6TIzU3JQU5blbR1vcAxrQbDnkQih/fiY=",
        "auth": "X5sstv+9qyVr+6Ir/Iwjcw=="
    }
}

const payload = 'Footballl App sukses';

const options = {
    gcmAPIKey: '1028497395894',
    TTL: 60
}

webpush.sendNotification(
    pushSubscription,
    payload,
    options
)