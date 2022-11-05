import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import API from "../api.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
	},
	mutations: {
		SET_USER_DATA(state, userData) {
			state.user = userData;
			localStorage.setItem("user", JSON.stringify(userData));
			axios.defaults.headers.common[
				"Authorization"
			] = `Bearer ${userData.token}`;
			console.log("state.user", state.user);
		},
	},
	actions: {
		async register({ commit }, credentials) {
			const data = await API.createUser(credentials);
			// console.log("data from store", data);
			commit("SET_USER_DATA", data);
		},
	},
});
