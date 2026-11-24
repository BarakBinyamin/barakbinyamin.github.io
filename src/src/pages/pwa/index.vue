<template>
  <div class="center">
  <!-- PAGE FOR PWA ONLY -->
  <!-- Check for name, if not show name form -->
  <!-- Connect and wait for call otherwise -->
  <!-- TODO show if server connected -->
   <button v-if="!isSubscribed" @click="subscribe()">subscribe</button>
   <h1 v-if="isSubscribed">subscribed!</h1>
  </div>
</template>

<script>
export default{
  data(){
    return {
      isSubscribed : false,
      swRegistration: null,

    }
  },
  async mounted(){
    // check if subscribed, show subscribe button
    if ('serviceWorker' in navigator) {
      // Wait for vite-plugin-pwa's auto-registered service worker to become active
      const registration = await navigator.serviceWorker.ready;
      this.swRegistration = registration;

      // Check if the user is already subscribed
      const existingSub = await registration.pushManager.getSubscription();
      if (existingSub) {
        this.isSubscribed = true;
      }

      // Optional: Listen for messages sent FROM the service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('Message from SW:', event.data);
      });
    }
  },
  methods:   {
    urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
      const raw = atob(base64);
      return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
    },
    async subscribe(){
      console.log("pressed subscribe!")
      if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        alert('Push notifications are not supported in this browser.');
        return;
      }

      try {
        // 1. Request permission from the user
        const permission = await window.Notification.requestPermission();
        console.log("requested permission to do notifications")
        if (permission !== 'granted') return;

        // 2. Ensure we have the active registration
        const registration = this.swRegistration || (await navigator.serviceWorker.ready);

        const {topic} = await fetch('https://buzz.rockz.one/topic').then(res => res.json());

        console.log(this.urlBase64ToUint8Array(topic))
        console.log(topic)

        // 3. Subscribe with your VAPID public key
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(topic),
        });

        // 4. Send this subscription JSON to your backend API
        console.log('Push Subscription:', JSON.stringify(subscription));
        await fetch(`https://buzz.rockz.one/subscribe`, {
          method: 'POST',
          body: JSON.stringify({subscription: subscription}),
          headers: { 'Content-Type': 'application/json' }
        })
      } catch (error) {
        console.error('Failed to subscribe to push:', error);
      }
      // if ('serviceWorker' in navigator && 'PushManager' in window) {
      //   const reg = await navigator.serviceWorker.register('/sw.js');
      //   const {publickey} = await fetch('https://buzz.rockz.one/topic').then(res => res.json());

      //   let sub = await reg.pushManager.getSubscription();
      //   if (sub) {       await sub.unsubscribe() }
      //   sub  = await reg.pushManager.subscribe({
      //     userVisibleOnly: true,
      //     applicationServerKey: urlBase64ToUint8Array(publickey)
      //   })
      //   await fetch(`https://buzz.rockz.one/subscribe`, {
      //     method: 'POST',
      //     body: JSON.stringify({subscription: sub}),
      //     headers: { 'Content-Type': 'application/json' }
      //   })
      // }
    }
  }
}


</script>

<style scoped>
.center{
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>