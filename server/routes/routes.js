const express = require("express");
const { promisify } = require("util");
const router = express.Router();
const API = require("../controllers/api");
const multer = require("multer");
const jwt = require("jsonwebtoken");
//multer middleware
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
	},
});

let upload = multer({
	storage: storage,
}).single("image");

// MIDDLEWARE
function verifyToken(req, res, next) {
	const bearerHeader = req.headers["authorization"];

	if (typeof bearerHeader !== "undefined") {
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;

		// verifies token
		jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
			if (err) {
				return res.sendStatus(401);
			} else {
				next();
			}
		});
	} else {
		res.sendStatus(401);
	}
}
const restrictTo = (...roles) => {
	return async (req, res, next) => {
		const decoded = await promisify(jwt.verify)(
			req.token,
			process.env.JWT_SECRET
		);
		// console.log(
		// 	"🚀 ~ file: routes.js ~ line 46 ~ return ~ decoded",
		// 	decoded.user
		// );

		if (!roles.includes(decoded.user.role)) {
			// console.log(
			// 	"🚀 ~ file: routes.js ~ line 61 ~ return ~ decoded.user.role",
			// 	decoded.user.role
			// );
			return res.sendStatus(403);
		}
		next();
	};
};

router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostByID);
router.post("/", verifyToken, restrictTo("admin"), upload, API.createPost);
router.post("/register", API.createUser);
router.post("/login", API.loginUser);
router.patch(
	"/:id",
	verifyToken,
	restrictTo("admin", "editor"),
	upload,
	API.updatePost
);
router.delete(
	"/:id",
	verifyToken,
	restrictTo("admin", "editor"),
	API.deletePost
);

module.exports = router;
