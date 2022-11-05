const User = require("../models/users");

module.exports = class API {
	static async createUser(req, res) {
		const user = req.body;

		try {
			await User.create(user);
			res.status(201).json({ message: "User created successfully!" });
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	}
};
