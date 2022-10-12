const version = 4; // whatsapp message composer shortcut
const cacheName = `shortcuts-${version}`;
var isOnline = true;
var urlsToCatch = [
    '/',
]

self.addEventListener('install', onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);
self.addEventListener("fetch", onFetch);

// main().catch(console.error);


// async function main() {
// 	await sendMessage({ statusUpdateRequest: true });
// 	await cacheLoggedOutFiles();
// 	return cacheAllPosts();
// }



// ---------------
// Handlers 
// ---------------

function onInstall(evt) {
    self.skipWaiting();
}

function onActivate(evt) {
    console.log(`Service Worker Activated (v-${version})`);
    evt.waitUntil(handleActivation());
}

async function onMessage(evt) {
    if (evt.data.statusUpdate) {
        // status update logic
        isOnline = evt.data.statusUpdate.isOnline;
        console.log(`(sw) statusUpdate: isOnline ${isOnline}`);
    }
    else if (evt.data.urlsToCatch) {

        urlsToCatch = ['/', ...evt.data.urlsToCatch];

        try {
            await cacheInitialPage();
        } catch (error) {
            console.log('(sw) /urlsTocatch');
            console.log(error);
        }
    }
}

function onFetch(evt) {
    evt.respondWith(router(evt.request));
}








// ---------------
// Actions 
// ---------------

async function handleActivation() {
    try {
        await clearCaches();
        // await cacheLoggedOutFiles(/*forceReload=*/true);
        await clients.claim();

    } catch (error) {
        console.error(error)
    }

}


async function clearCaches() {
    var cacheNames = await caches.keys();
    var oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {
        var [, cacheNameVersion] = cacheName.match(/^martian-(\d+)$/) || [];
        cacheNameVersion = cacheNameVersion != null ? Number(cacheNameVersion) : cacheNameVersion;
        return (
            cacheNameVersion > 0 &&
            version !== cacheNameVersion
        );
    });
    await Promise.all(
        oldCacheNames.map(function deleteCache(cacheName) {
            return caches.delete(cacheName);
        })
    );
}


async function cacheInitialPage(forceReload = false) {


    var cache = await caches.open(cacheName);

    return Promise.all(
        urlsToCatch.map(async function requestFile(url) {
            console.log(`caching url: ${url}`)
            try {
                let res;

                if (!forceReload) {
                    res = await cache.match(url);
                    if (res) {
                        return;
                    }
                }

                let fetchOptions = {
                    method: "GET",
                    cache: "no-store",
                    credentials: "omit"
                };
                res = await fetch(url, fetchOptions);
                if (res.ok) {
                    // headers filtering
                    let headers = []
                    for (let h of res.headers) {
                        headers.push(h);
                    }
                    // console.log({
                    //     req: url,
                    //     headers: headers
                    // })

                    if (headers[1] == '*') {
                        // console.log(`Problematic [ vary , * ] header found`);
                    }
                    else {
                        return cache.put(url, res);
                    }
                }
            }
            catch (err) { }
        })
    );
}



async function router(req) {
    var url = new URL(req.url);
    var reqURL = url.pathname;
    var cache = await caches.open(cacheName);

    // request for site's own URL?
    if (url.origin == location.origin) {

        // are we requesting a page?
        if (req.headers.get("Accept").includes("text/html")) {

            // otherwise, just use "network-and-cache"
            let fetchOptions = {
                method: req.method,
                headers: req.headers,
                cache: "no-store"
            };
            let res = await safeRequest(reqURL, req, fetchOptions,/*cacheResponse=*/false,/*checkCacheFirst=*/false,/*checkCacheLast=*/true);

            if (res) {
                if (!res.headers.get("X-Not-Found")) {
                    await cache.put(reqURL, res.clone());
                }
                else {
                    await cache.delete(reqURL);
                }
                return res;
            }

            // otherwise, return an offline-friendly page
            // return cache.match("/offline");

            // falback to home
            return cache.match("/");
        }

        // all other files use "cache-first"
        else {
            let fetchOptions = {
                method: req.method,
                headers: req.headers,
                cache: "no-store"
            };
            let res = await safeRequest(reqURL, req, fetchOptions,/*cacheResponse=*/true,/*checkCacheFirst=*/true);
            if (res) {
                return res;
            }

            // otherwise, force a network-level 404 response
            return notFoundResponse();
        }
    }
}


async function safeRequest(reqURL, req, options, cacheResponse = false, checkCacheFirst = false, checkCacheLast = false, useRequestDirectly = false) {
    var cache = await caches.open(cacheName);
    var res;

    if (checkCacheFirst) {
        res = await cache.match(reqURL);
        if (res) {
            return res;
        }
    }

    if (isOnline) {
        try {
            if (useRequestDirectly) {
                res = await fetch(req, options);
            }
            else {
                res = await fetch(req.url, options);
            }

            if (res && (res.ok || res.type == "opaqueredirect")) {
                if (cacheResponse) {
                    await cache.put(reqURL, res.clone());
                }
                return res;
            }

        }
        catch (err) { }
    }

    if (checkCacheLast) {
        res = await cache.match(reqURL);
        if (res) {
            return res;
        }
    }
}




function notFoundResponse() {
    return new Response("", {
        status: 404,
        statusText: "Not Found"
    });
}

function delay(ms) {
    return new Promise(function c(res) {
        setTimeout(res, ms);
    });
}