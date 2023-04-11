export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Breve.ttf","fonts/BreveSC.woff2"]),
	mimeTypes: {".ttf":"font/ttf",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.55fb9968.js","imports":["_app/immutable/entry/start.55fb9968.js","_app/immutable/chunks/index.5560d792.js","_app/immutable/chunks/singletons.ec751f02.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.107a6583.js","imports":["_app/immutable/entry/app.107a6583.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.5560d792.js"],"stylesheets":[],"fonts":[]}},
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
