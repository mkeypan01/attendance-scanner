// Service Workerの最低限の実装
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
});

self.addEventListener('fetch', (event) => {
  // ネットワークから取得するだけ（キャッシュ機能が必要な場合はここを拡張）
  event.respondWith(fetch(event.request));
});
