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
				// console.log(
				// 	"🚀 ~ file: api.js ~ line 46 ~ API ~ updatePost ~ req.body",
				// 	req.body
				// );
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
		try {
			let errorsToSend = [];
			const { email, password, name } = req.body;

			if (!email || !password || !name) {
				errorsToSend.push("Email,  password and name are required!");
			}
			const dbUserEmail = await User.findOne({ email });

			if (dbUserEmail) {
				errorsToSend.push("An account with this email already exists");
			}
			if (password.length < 6) {
				errorsToSend.push("Password to short");
			}
			if (errorsToSend.length > 0) {
				res.status(400).json({ errors: errorsToSend }); // send errors back with status code
			} else {
				const user = {
					name,
					email,
					password,
					// TODO encrypt the password in a live app
				};
				const token = jwt.sign({ user }, "the_secret_key");

				console.log("user before create", user);
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
		try {
			const { email, password } = req.body;
			if (!email || !password) {
				return res
					.status(401)
					.json({ message: "Please provide email and password!" });
			}
			const user = await User.findOne({ email });

			if (!user) {
				return res
					.status(401)
					.json({ message: "Incorrect email or passwordd" });
			}
			if (user.email === email && user.password === password) {
				const token = jwt.sign({ user }, "the_secret_key");
				res.json({
					token,
					email,
				});
			} else {
				return res
					.status(401)
					.json({ message: "Incorrect email or passwordd" });
			}
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	}
};
