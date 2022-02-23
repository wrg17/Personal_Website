export const manifest = {
	appDir: "_app",
	assets: new Set(["app.css","favicon.png","img/Self_Portrait.jpg","img/dino.png","img/icons/LinkedIn.png","img/icons/github.png","img/icons/github.svg","img/icons/image2vector (1).svg","img/icons/linkedin.svg","img/icons/linkedin1.svg","img/icons/linkedin2.png","img/icons/linkedin5.png","img/icons/linkedin5.svg","img/ocean.jpeg","img/svg/back-arrow.svg","img/what_are_you_doing_here.png","projects/p1/graph_theory.png","theme/dark.css","theme/light.css"]),
	_: {
		mime: {".css":"text/css",".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
		entry: {"file":"start-c2a089f7.js","js":["start-c2a089f7.js","chunks/vendor-469c7b6c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/projects\/project\/p1\/?$/,
				params: null,
				path: "/projects/project/p1",
				shadow: null,
				a: [4,5],
				b: []
			},
			{
				type: 'page',
				pattern: /^\/hobbies\/?$/,
				params: null,
				path: "/hobbies",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		]
	}
};
