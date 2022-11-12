const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please tell your name"],
	},
	email: {
		type: String,
		required: [true, "Please provide your email"],
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
		minLength: 6,
	},
	role: {
		type: String,
		enum: ["user", "admin", "editor"],
		default: "user",
	},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
