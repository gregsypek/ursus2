const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "A tractor must have a name"],
		unique: true,
	},
	slug: String,
	price: {
		type: Number,
		required: [true, "A tractor must have a price"],
	},
	info: {
		type: String,
		trim: true,
		required: [true, "A tractor must have some description"],
		minLength: [
			10,
			"A tractor info must have more or equal then 10 characters",
		],
	},
	image: {
		type: String,
		requierd: [true, "A tractor must have a cover image"],
	}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;