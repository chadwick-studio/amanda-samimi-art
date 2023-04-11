import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Breve.ttf","fonts/BreveSC.woff2"]),
	mimeTypes: {".ttf":"font/ttf",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7b16d123.js","imports":["_app/immutable/entry/start.7b16d123.js","_app/immutable/chunks/index.5560d792.js","_app/immutable/chunks/singletons.2f2f6145.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.45b8e86d.js","imports":["_app/immutable/entry/app.45b8e86d.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5560d792.js"],"stylesheets":[],"fonts":[]}},
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
