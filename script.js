navigator.serviceWorker.register('/sw.js').then(regis => {
    return regis;
})

if ('Notification' in window) {
    Notification.requestPermission();
}

if ('PushManager' in window) {
    navigator.serviceWorker.getRegistration().then(registration => {
        registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: "BEWus5STm2I0d2iIfES2ZlPeXHZ74DsL1WKBvqYDQW7C2HEBlv7N7dGw-Q--c0j2_cmK-HpQrl3E53SO02ZxDVY"
        }).then(sub => {
            console.log("endpoint : ", sub.endpoint)
            console.log("p256dh : ", btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('p256dh')))))
            console.log("auth : ", btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('auth')))))
        })
    })
} else {
    console.log('gak ada')
}

function showNotif() {
    const title = "Football App";
    const options = {
        "body": "Belajar notif"
    };

    if (Notification.permission !== "denied") {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, options);
        })
    }
}