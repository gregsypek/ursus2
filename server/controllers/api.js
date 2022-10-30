module.exports = class API {
	//fetch all posts
	static async fetchAllPost(req, res) {
		res.send("hello from API");
	}
	//fetch post by ID
	static async fetchPostByID(req, res) {
		res.send("fetchPostByID");
	}
	//create a post
	static async createPost(req, res) {
		res.send("createPost API");
	}
	//update post
	static async updatePost(req, res) {
		res.send("updatePost  API");
	}
	//delete a post
	static async deletePost(req, res) {
		res.send("deletePost API");
	}
};