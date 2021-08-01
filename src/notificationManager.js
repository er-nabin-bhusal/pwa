export default function notificationManager() {
    navigator.serviceWorker.ready.then(function (registration) {
        if (!registration.pushManager) {
            alert('No push notifications support.');
            return false;
        }
        //To subscribe `push notification` from push manager
        registration.pushManager.subscribe({
            userVisibleOnly: true //Always show notification when received
        })
            .then(function (subscription) {
                console.log('Subscribed. noti');
            })
            .catch(function (error) {
                console.log('Subscription error: noti', error);
            });
    })
}
