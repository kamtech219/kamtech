import { JSDOM } from "jsdom";

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost'
});

const globalAny = global as any;

globalAny.window = dom.window;
globalAny.document = dom.window.document;

Object.defineProperty(globalAny, 'navigator', {
    value: {
        userAgent: 'node.js',
    },
    configurable: true,
});

globalAny.requestAnimationFrame = (callback: any) => {
    return setTimeout(callback, 0);
};
globalAny.cancelAnimationFrame = (id: any) => {
    clearTimeout(id);
};

// Copy other window properties to global
for (const key in dom.window) {
    if (!globalAny[key] && key !== "localStorage" && key !== "sessionStorage") {
        try {
            globalAny[key] = dom.window[key as keyof typeof dom.window];
        } catch (e) {
            // ignore
        }
    }
}
