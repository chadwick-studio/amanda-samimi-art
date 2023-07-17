import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/clearlight.woff2","fonts/ortica-light.woff2","fonts/source-serif-pro.woff2"]),
	mimeTypes: {".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.cd36dd0d.js","imports":["_app/immutable/entry/start.cd36dd0d.js","_app/immutable/chunks/index.265b9c8a.js","_app/immutable/chunks/singletons.bf5f84bf.js","_app/immutable/chunks/index.e0e6d577.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d4c6ecae.js","imports":["_app/immutable/entry/app.d4c6ecae.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.265b9c8a.js"],"stylesheets":[],"fonts":[]}},
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
