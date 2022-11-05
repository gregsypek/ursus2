import axios from "axios";
// const url = "/api/v1/tractors";
const url = "/api/post";
const urlUser = "/api/post/register";
export default class API {
	//to get all the posts from the server
	static async getAllPost() {
		const res = await axios.get(url);
		// console.log("🚀 ~ file: api.js ~ line 9 ~ API ~ getAllPost ~ res", res);
		return res.data;
	}
	//to get single post by id
	static async getPostByID(id) {
		const res = await axios.get(`${url}/${id}`);
		return res.data;
	}
	// to insert post into database
	static async addPost(post) {
		const res = await axios.post(url, post);
		return res.data;
	}
	//to update post into database
	static async updatePost(id, post) {
		const res = await axios.patch(`${url}/${id}`, post);
		return res.data;
	}
	//to delete a post
	static async deletePost(id) {
		const res = await axios.delete(`${url}/${id}`);
		return res.data;
	}
	static async createUser(credentials) {
		const res = await axios.post(urlUser, credentials);
		console.log(
			"🚀 ~ file: api.js ~ line 34 ~ API ~ createUser ~ credentials",
			credentials
		);
		console.log("🚀 ~ file: api.js ~ line 34 ~ API ~ createUser ~ res", res);
		return res.data;
	}
}
