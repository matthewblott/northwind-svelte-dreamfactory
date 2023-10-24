export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f48bf93b.js","imports":["_app/immutable/start-f48bf93b.js","_app/immutable/chunks/index-867ab049.js","_app/immutable/chunks/singletons-f29a21f8.js","_app/immutable/chunks/index-4c777d76.js","_app/immutable/chunks/preload-helper-41c905a7.js","_app/immutable/chunks/control-e7f5239e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/categories",
				pattern: /^\/categories\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/categories/new",
				pattern: /^\/categories\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/categories/[id]",
				pattern: /^\/categories\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/customers",
				pattern: /^\/customers\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/customers/new",
				pattern: /^\/customers\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/customers/[id]",
				pattern: /^\/customers\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/employees",
				pattern: /^\/employees\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/employees/new",
				pattern: /^\/employees\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(app)/employees/[id]",
				pattern: /^\/employees\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/employees/[id]/territories",
				pattern: /^\/employees\/([^/]+?)\/territories\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/employees/[id]/territories/new",
				pattern: /^\/employees\/([^/]+?)\/territories\/new\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/employees/[id]/territories/[id]",
				pattern: /^\/employees\/([^/]+?)\/territories\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(app)/orders",
				pattern: /^\/orders\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(app)/orders/new",
				pattern: /^\/orders\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(app)/orders/[id]",
				pattern: /^\/orders\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(app)/orders/[id]/items",
				pattern: /^\/orders\/([^/]+?)\/items\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(app)/orders/[id]/items/new",
				pattern: /^\/orders\/([^/]+?)\/items\/new\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(app)/orders/[id]/items/[id]",
				pattern: /^\/orders\/([^/]+?)\/items\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(app)/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(app)/products/new",
				pattern: /^\/products\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(app)/products/[id]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(app)/regions",
				pattern: /^\/regions\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(app)/regions/[id]",
				pattern: /^\/regions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(app)/shippers",
				pattern: /^\/shippers\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(app)/shippers/new",
				pattern: /^\/shippers\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(app)/shippers/[id]",
				pattern: /^\/shippers\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(app)/suppliers",
				pattern: /^\/suppliers\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(app)/suppliers/new",
				pattern: /^\/suppliers\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(app)/suppliers/[id]",
				pattern: /^\/suppliers\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/territories",
				pattern: /^\/territories\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(app)/territories/new",
				pattern: /^\/territories\/new\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(app)/territories/[id]",
				pattern: /^\/territories\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 36 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
