import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/clearlight.woff2","fonts/ortica-light.woff2","fonts/source-serif-pro.woff2"]),
	mimeTypes: {".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b7d990b6.js","imports":["_app/immutable/entry/start.b7d990b6.js","_app/immutable/chunks/index.265b9c8a.js","_app/immutable/chunks/singletons.f191d556.js","_app/immutable/chunks/index.e0e6d577.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5e6a2b17.js","imports":["_app/immutable/entry/app.5e6a2b17.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.265b9c8a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
