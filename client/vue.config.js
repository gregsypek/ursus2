const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify", 'my-dep',],
	devServer: {
		proxy: "http://localhost:5001",
		// proxy: {
		// 	"/api": {
		// 		target: "http://localhost:5001",
		// 	},
		// },
	},
})
