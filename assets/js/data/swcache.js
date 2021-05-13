const resource = [

  /* --- CSS --- */
  '/codenotes/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/codenotes/assets/js/dist/home.min.js',
  '/codenotes/assets/js/dist/page.min.js',
  '/codenotes/assets/js/dist/post.min.js',
  '/codenotes/assets/js/dist/categories.min.js',
  '/codenotes/assets/js/data/search.json',
  '/codenotes/app.js',
  '/codenotes/sw.js',

  /* --- HTML --- */
  '/codenotes/index.html',
  '/codenotes/404.html',
  
    '/codenotes/categories/',
  
    '/codenotes/tags/',
  
    '/codenotes/archives/',
  
    '/codenotes/about/',
  

  /* --- Favicons --- */
  

  '/codenotes/assets/img/favicons/android-chrome-192x192.png',
  '/codenotes/assets/img/favicons/android-chrome-512x512.png',
  '/codenotes/assets/img/favicons/apple-touch-icon.png',
  '/codenotes/assets/img/favicons/favicon-16x16.png',
  '/codenotes/assets/img/favicons/favicon-32x32.png',
  '/codenotes/assets/img/favicons/favicon.ico',
  '/codenotes/assets/img/favicons/mstile-150x150.png',
  '/codenotes/assets/img/favicons/site.webmanifest',
  '/codenotes/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  '',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

