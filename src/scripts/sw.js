import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Service Worker: installed');
  self.skipWaiting();
});

self.addEventListener('push', () => {
  console.log('Service Worker: pushed');
});
