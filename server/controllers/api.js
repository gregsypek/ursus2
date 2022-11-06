const Post = require("../models/posts");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const fs = require("fs");

module.exports = class API {
	//fetch all posts
	static async fetchAllPost(req, res) {
		try {
			const posts = await Post.find();
			res.status(200).json(posts);
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
	//fetch post by ID
	static async fetchPostByID(req, res) {
		const id = req.params.id;
		try {
			const post = await Post.findById(id);
			res.status(200).json(post);
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
	//create a post
	static async createPost(req, res) {
		const post = req.body;
		const imagename = req.file.filename;
		post.image = imagename;
		try {
			await Post.create(post);
			res.status(201).json({ message: "Post created successfully!" });
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	}
	//update post
	static async updatePost(req, res) {
		const id = req.params.id;
		let new_image = "";
		if (req.file) {
			new_image = req.file.filename;
			try {
				fs.unlinkSync("./uploads/" + req.body.old_image);
				console.log(
					"🚀 ~ file: api.js ~ line 46 ~ API ~ updatePost ~ req.body",
					req.body
				);
			} catch (err) {
				console.log(err);
			}
		} else {
			new_image = req.body.old_image;
		}
		const newPost = req.body;
		newPost.image = new_image;
		try {
			await Post.findByIdAndUpdate(id, newPost);
			res.status(200).json({ message: "Post updated successfully" });
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
	//delete a post
	static async deletePost(req, res) {
		const id = req.params.id;
		try {
			const result = await Post.findByIdAndDelete(id);
			if (result.image != "") {
				try {
					fs.unlinkSync("./uploads/" + result.image);
				} catch (err) {
					console.log(err);
				}
			}
			res.status(200).json({ message: "Post deleted sucessfully" });
		} catch (err) {
			res.status(404).json({ message: err.message });
		}
	}
	//create user
	static async createUser(req, res) {
		// const user = req.body;

		try {
			if (req.body) {
				const user = {
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					// TODO encrypt the password in a live app
				};
				console.log(
					"🚀 ~ file: api.js ~ line 95 ~ API ~ createUser ~ user?????",
					user
				);
				const token = jwt.sign({ user }, "the_secret_key");

				await User.create(user);
				res.status(201).json({
					token,
					email: user.email,
					name: user.name,
				});
			}
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	}

	static async loginUser(req, res) {
		// const userDB = fs.readFileSync("./db/user.json");
		// const userInfo = JSON.parse(userDB);
		const { email, password, name } = req.body;
		const user = await User.findOne({ email });

		if (req.body && email === user.email && password === user.password) {
			console.log(
				"🚀 ~ file: api.js ~ line 114 ~ API ~ loginUser ~ user",
				user
			);
			const token = jwt.sign({ user }, "the_secret_key");
			res.json({
				token,
				email,
				name,
			});
		} else {
			res.status(401).json({ message: "Please provide email and password!" });
		}
	}
};
