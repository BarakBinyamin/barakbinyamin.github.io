// src/sw.js
import { precacheAndRoute } from 'workbox-precaching';

// Required for vite-plugin-pwa injectManifest
precacheAndRoute(self.__WB_MANIFEST);

// Listen for incoming push notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'New Alert', body: 'You have a message' };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/public/siteimages/icon.png',
    })
  );
});

// Handle user clicking the notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});
