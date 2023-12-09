import { precacheAndRoute, PrecacheEntry } from "workbox-precaching";

declare const self: ServiceWorkerGlobalScope & typeof globalThis;

declare const __WB_MANIFEST: PrecacheEntry[];

precacheAndRoute(__WB_MANIFEST);

precacheAndRoute(self.__WB_MANIFEST);
