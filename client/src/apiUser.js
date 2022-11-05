import axios from "axios";

const url = "/api/user";
export default class API {

	static async createUser() {
		const res = await axios.post(url, credentials);
		console.log("🚀 ~ file: api.js ~ line 9 ~ API ~ getAllPost ~ res", res);
		return res.data;
	}
}
