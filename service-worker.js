"use strict";var precacheConfig=[["index.html","de0aaf4713c434f553c5132b2774de51"],["service-worker.js","a46cf9c005b6e2fa441971a76903b4b9"],["static/css/app.4a975119403b62bf9a80e5ab7ead1af2.css","501693621b5e31480405357073aeb8c6"],["static/img/flat-icons/cookies-line.svg","3b9d86ace5fc0f534400e2ba66c4e17d"],["static/img/flat-icons/desktop-pencil-line.svg","8332947445223f4da8b4169790e59d87"],["static/img/flat-icons/egg-dragon.svg","f9a5bdf8d17282083c916d063fea12a2"],["static/img/flat-icons/green-potion-line.svg","3178f3d2517d78abed47b3ab24e8c46c"],["static/img/flat-icons/offline-reading-line.svg","bb1aef31972c26766ef06cf9ca458519"],["static/img/flat-icons/open-source.svg","70ad2c2b4f7419a50f0345822899d7da"],["static/img/flat-icons/plug.svg","b27a2e0987151ba82f78128f631b4f5f"],["static/img/flat-icons/purple-hat.svg","ef93c8fbd866f4b423f9bedff73973a6"],["static/img/flat-icons/red-dragon-line.svg","7cdb182d9e19d1eeec55747c0c74a752"],["static/img/flat-icons/red-dragon.svg","67e7eb569427738d216f4dc21d21a3cc"],["static/img/flat-icons/sword-line.svg","e721c7208946e31ed0889eb686e711c4"],["static/img/flat-icons/unicorn-line.svg","091a7100881dc9f675ad9ae9a9929600"],["static/img/flat-icons/working.svg","98a376ccea4408f3fd2b08b68a67594d"],["static/img/icons/safari-pinned-tab.svg","ef93c8fbd866f4b423f9bedff73973a6"],["static/js/app.503ffa069d84da67b4fa.js","3e4152f616d8bbcefddcaffc6f7630cb"],["static/js/manifest.2ae2e69a05c33dfc65f8.js","2f4fd3b092ed7f7e76dbb3976729742e"],["static/js/vendor.445ccef7b0bd77e8c2d3.js","ae606624bf55aa69a9a962de83d235b8"]],cacheName="sw-precache-v3-prog-novel-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});