export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/clearlight.woff2","fonts/ortica-light.woff2","fonts/source-serif-pro.woff2"]),
	mimeTypes: {".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.7f406106.js","imports":["_app/immutable/entry/start.7f406106.js","_app/immutable/chunks/index.5560d792.js","_app/immutable/chunks/singletons.9471b48f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.062c7edc.js","imports":["_app/immutable/entry/app.062c7edc.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5560d792.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
};
