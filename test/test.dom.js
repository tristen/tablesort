import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const html = path.resolve(__dirname, 'index.html');

const options = {
  runScripts: "dangerously",
  resources:  "usable"
};

JSDOM.fromFile(html, options);