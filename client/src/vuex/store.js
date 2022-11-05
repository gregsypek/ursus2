import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import API from "../api.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
	},
	mutations: {},
	actions: {
		async register({ commit }, credentials) {
			// return axios
			// 	.post("//localhost:5001/api/post/register", credentials)
			// 	.then(({ data }) => {
			// 		console.log("user data is", credentials);
			// 	});
			// console.log("dd", credentials, arguments);
			// const obj = credentials;
			const data = await API.createUser(credentials);
			console.log("data", data);
		},
	},
});
