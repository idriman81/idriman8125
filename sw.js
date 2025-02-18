{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh15260\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'todo-list-v1';\
const ASSETS = [\
  '/',\
  '/index.html',\
  '/styles.css',\
  '/script.js',\
  '/icon-192x192.png',\
  '/icon-512x512.png'\
];\
\
// Installer le service worker et mettre en cache les assets\
self.addEventListener('install', (event) => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME).then((cache) => \{\
      return cache.addAll(ASSETS);\
    \})\
  );\
\});\
\
// Intercepter les requ\'eates et servir les assets depuis le cache\
self.addEventListener('fetch', (event) => \{\
  event.respondWith(\
    caches.match(event.request).then((response) => \{\
      return response || fetch(event.request);\
    \})\
  );\
\});}