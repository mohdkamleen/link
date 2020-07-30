var appVersion = '1.0';

var files = [
    './index.html',
    './project.html',
    './a1.html',
    './a2.html',
    './a3.html',
    './a4.html',
    './a5.html', 
    './t1.html',
    './t2.html',
    './t3.html',
    './t4.html',
    './t5.html',
    './other.html',
    './README.md',
    './css/dark.css',
    './css/style.css',
    './css/bootstraph.css',
    './css/kamleen.jpg',
    './css/resume.png',
    './css/download.jpg',
    './css/sound.mp3',
    './source/a1.txt',
    './source/a2.txt',
    './source/a3.txt',
    './source/a4.txt',
    './source/a5.txt',
    './source/t1.txt',
    './source/t2.txt',
    './source/t3.txt',
    './source/t4.txt',
    './source/t5.txt',
    './source/t5.1.html',
    './source/t5.2.html',
    './source/t5.3.html',
    './source/t5.4.html',
    './source/t5.5.html',
    './source/t4.1.html',
    './source/t4.2.html',
    './source/t4.3.html',
    './source/t2.3.html',
    './source/t1.1.html',
    './source/t1.2.html',
    './source/t1.3.html',
    './script.js',
    './sw.js',
    'notebook.ipynb',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Short+Stack&display=swap',
    'https://unpkg.com/sweetalert/dist/sweetalert.min.js',
    'https://www.gstatic.com/firebasejs/7.15.4/firebase.js'
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(appVersion)
        .then(cache => {
            return cache.addAll(files)
            .catch(err => {
                console.error('Error adding files to cache', err);
            })
        })
    )
    console.info('Service Worker is Installed');
    self.skipWaiting();
})


self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
        .then(cachename => {
            return Promise.all(
                cachename.map(cache => {
                    if(cache != appVersion){
                        console.info('delete old caches', cache)
                        return caches.delete(cache);
                    }
                })
              )
           })
         )
            return self.clients.claim();
        })


        self.addEventListener("fetch", event => {
            console.info('Service Worker fetch', event.request.url);
            event.respondWith(
                caches.match(event.request)
                .then(res => {
                    return res || fetch(event.request);
                })
            )
         })