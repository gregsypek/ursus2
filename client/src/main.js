import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./vuex/store";
import axios from "axios";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	created() {
		const userString = localStorage.getItem("user");
		if (userString) {
			const userData = JSON.parse(userString);
			this.$store.commit("SET_USER_DATA", userData);
		}

		//works wth verifyToken method to prevent from fake token
		axios.interceptors.response.use(
			(response) => response,
			(error) => {
				console.log(error.response);
				if (error.response.status === 401 && this.$route.name === "add-post") {
					// this.$router.push("/");
					this.$router.push({
						name: "home",
						params: {
							warning: "You are not authorized to perform this action!",
						},
					});
					//to hide add-post page from navbar
					setTimeout(() => {
						this.$store.dispatch("logout");
					}, 5000);
				}
				if (
					(error.response.status === 403 && this.$route.name === "post") ||
					this.$route.name === "edit-post"
				) {
					this.$router.push({
						name: "home",
						params: {
							warning: "You do not have permission to perform this action!",
						},
					});
				}
				if (error.response.status === 403 && this.$route.name === "add-post") {
					this.$router.push({
						name: "home",
						params: {
							warning:
								"You do not have permission to create posts! Log in as admin!",
						},
					});
				}
				return Promise.reject(error);
			}
		);
	},
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
