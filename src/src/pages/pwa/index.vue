<template>
  <div class="center">
  <!-- PAGE FOR PWA ONLY -->
  <!-- Check for name, if not show name form -->
  <!-- Connect and wait for call otherwise -->
  <!-- TODO show if server connected -->
   <button @click="subscribe()">subscribe</button>
  </div>
</template>

<script>
export default{
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
      const {publickey} = await fetch('https://buzz.rockz.one/topic').then(res => res.json());
      let sub = await reg.pushManager.getSubscription();
      if (sub) {       await sub.unsubscribe() }
        sub  = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publickey)
      })
      await fetch(`https://buzz.rockz.one/subscribe`, {
        method: 'POST',
        body: JSON.stringify({subscription: sub}),
        headers: { 'Content-Type': 'application/json' }
      })
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