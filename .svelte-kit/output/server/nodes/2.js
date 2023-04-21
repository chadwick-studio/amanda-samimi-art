import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/entry/_page.svelte.b40ae929.js","_app/immutable/chunks/index.e0c1dd86.js","_app/immutable/chunks/_commonjsHelpers.28e086c5.js","_app/immutable/chunks/index.cd539fef.js","_app/immutable/entry/_page.js.ef2ba012.js","_app/immutable/chunks/_page.83c56b41.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/_page.58c44ce6.css"];
export const fonts = [];
