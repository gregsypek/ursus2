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
		CLEAR_USER_DATA() {
			localStorage.removeItem("user");
			location.reload();
		},
	},
	actions: {
		async register({ commit }, credentials) {
			const data = await API.createUser(credentials);
			// console.log("data from store", data);
			commit("SET_USER_DATA", data);
		},
		async login({ commit }, credentials) {
			const data = await API.loginUser(credentials);
			// console.log("data from store", data);
			commit("SET_USER_DATA", data);
		},
		logout({ commit }) {
			commit("CLEAR_USER_DATA");
		},
	},
	getters: {
		loggedIn(state) {
			return !!state.user;
			// return !!localStorage.getItem("user");
		},
	},
});
