import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddPost from "../views/AddPost.vue";
import EditPost from "../views/EditPost.vue";
import PostView from "../views/PostView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import LoginUser from "../views/LoginUser.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/add-post",
		name: "add-post",
		component: AddPost,
		meta: { requiresAuth: true },
	},
	{
		path: "/post/:id",
		name: "post",
		component: PostView,
	},
	{
		path: "/edit-post/:id",
		name: "edit-post",
		component: EditPost,
	},
	{
		path: "/register",
		name: "register",
		component: RegisterUser,
	},
	{
		path: "/login",
		name: "login",
		component: LoginUser,
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	const loggedIn = localStorage.getItem("user");

	if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
		next("/");
	}
	next();
});

export default router;
