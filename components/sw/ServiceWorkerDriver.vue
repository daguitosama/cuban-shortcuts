<template></template>
<script>
import { onMounted, ref } from "@nuxtjs/composition-api";
import { useEventListener } from "@vueuse/core";
export default {
  setup() {
    if (process.client) {
      var isOnline = ref(
        (() => ("onLine" in navigator ? navigator.onLine : true))()
      );
      var usingSW = "serviceWorker" in navigator;
      var swRegistration;
      var svcworker;
      var urlsToCatch = [...getScriptsUrls()];

      onMounted(main);

      function main() {
        useEventListener(window, "online", onOnline);
        useEventListener(window, "offline", onOffline);
        if (usingSW) {
          initServiceWorker().catch(console.error);
        }
      }

      function onOnline() {
        isOnline.value = true;
        sendStatusUpdate();
      }

      function onOffline() {
        isOnline.value = false;
        sendStatusUpdate();
      }

      async function initServiceWorker() {
        swRegistration = await navigator.serviceWorker.register("/sw.js", {
          updateViaCache: "none",
          scope: "/",
        });

        svcworker =
          swRegistration.installing ||
          swRegistration.waiting ||
          swRegistration.active;

        sendStatusUpdate(svcworker);
        sendUrlsToCatch(svcworker);

        // listen for new service worker to take over
        navigator.serviceWorker.addEventListener(
          "controllerchange",
          async function onController() {
            svcworker = navigator.serviceWorker.controller;
            sendStatusUpdate(svcworker);
          }
        );

        navigator.serviceWorker.addEventListener("message", onSWMessage, false);
      }

      function sendStatusUpdate(target) {
        sendSWMessage({ statusUpdate: { isOnline: isOnline.value } }, target);
      }

      function sendUrlsToCatch(target) {
        sendSWMessage({ urlsToCatch: urlsToCatch }, target);
      }

      function sendSWMessage(msg, target) {
        if (target) {
          target.postMessage(msg);
        } else if (svcworker) {
          svcworker.postMessage(msg);
        } else if (navigator.serviceWorker.controller) {
          navigator.serviceWorker.controller.postMessage(msg);
        }
      }

      function onSWMessage(evt) {
        var { data } = evt;
        if (data.statusUpdateRequest) {
          console.log(
            "Status update requested from service worker, responding..."
          );
          sendStatusUpdate(evt.ports && evt.ports[0]);
        } 
      }

      function getScriptsUrls() {
        let scripts = document.scripts;
        scripts = Array.from(scripts);
        let scriptSources = scripts
          .map(function scriptToSource(script) {
            const source = script.src;
            return source;
          })
          .filter(function ignoreOnDocumentScripts(source) {
            return source != "";
          });

        return scriptSources;
      }

      //    TODO REMOVE FOR PRODUCTION
      async function testFetch() {
        var res;
        try {
          res = await fetch("/");
          const headers = [];

          for (let h of res.headers) {
            headers.push(h);

            if (res.headers[1] == "*") {
              // console.log(`Problematic [ vary , * ] header found` );
            }
          }

          console.log({
            extractedHeaders: headers,
            pureHeaders: res.headers,
          });
        } catch (error) {
          if (error) {
            console.log(error);
          }
        }
      }
      //   testFetch();
    }

    async function test() {
      if (process.client) {
        console.log("Doing Test");
        var res;

        try {
          res = await fetch(window.location.origin + "/non-existing-resource");
          if (res.ok) {
            console.log(res);
          } else {
            console.log("resource not founde it ");
          }
        } catch (error) {
          console.log({ error });
        }
      }
    }

    // test();

    return {
      isOnline,
      urlsToCatch,
    };
  },
};
</script>
