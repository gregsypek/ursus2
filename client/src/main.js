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
				if (error.response.status === 401) {
					this.$router.push("/");
					this.$store.dispatch("logout");
				}
				return Promise.reject(error);
			}
		);
	},
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
