const express = require("express");
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
		jwt.verify(req.token, "the_secret_key", (err) => {
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



router.get("/", API.fetchAllPost);
router.get("/:id", API.fetchPostByID);
router.post("/", verifyToken, upload, API.createPost);
router.post("/register", API.createUser);
router.post("/login", API.loginUser);
router.patch("/:id", upload, API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
