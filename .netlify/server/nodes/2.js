import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/entry/_page.svelte.a8992e35.js","_app/immutable/chunks/index.265b9c8a.js","_app/immutable/chunks/_commonjsHelpers.28e086c5.js","_app/immutable/chunks/index.e0e6d577.js","_app/immutable/entry/_page.js.d87b4ffe.js","_app/immutable/chunks/_page.ad435ed2.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/_page.3d9da953.css"];
export const fonts = [];
