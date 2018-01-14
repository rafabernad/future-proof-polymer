import { JSDOM } from 'jsdom';
import { readFileSync } from 'fs';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', {
    resources: 'usable',
    runScripts: 'dangerously',
});

global.window = dom.window;
global.document = dom.window.document;

const adapterScript = window.document.createElement('script')
adapterScript.textContent = readFileSync(require.resolve('@webcomponents/webcomponentsjs/custom-elements-es5-adapter')).toString();
window.document.head.appendChild(adapterScript);


const loaderScript = window.document.createElement('script')
loaderScript.textContent = readFileSync(require.resolve('@webcomponents/webcomponentsjs/webcomponents-loader')).toString();
window.document.head.appendChild(loaderScript);

console.log("hola")