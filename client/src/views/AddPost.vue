<template>
	<section class="my-5">
		<div class="container">
			<div class=" d-flex row justify-content-center g-5" >
				<aside class="d-none d-lg-block col-3">
					<div class="rounded">
						<h3>
							<img
								src="../../src/assets/logo-ursus.png"
								alt="logo"
								class="d-none d-xxl-block"
							/>
						</h3>
					</div>
				</aside>
				<main class="row col-12 col-lg-9 g-5">
					<!-- <h1 class="mt-0">Add new Post</h1> -->

					<div class="col-md">
						<v-container>
							<v-row no-gutters>
								<v-col sm="10" class="mx-auto ">
									<template v-if="!isLoggedIn" >
					
										<h3 class="text-center" >Logged in to be able add post!</h3>

					
									</template>
									<v-card v-else class="p-5 my-5">
										<v-card-title>Add New Post</v-card-title>
										<v-divider></v-divider>

										<v-form
											ref="form"
											@submit.prevent="submitForm"
											class="pa-5"
											enctype="multipart/form-data"
										>
											<v-text-field
												label="Name"
												v-model="post.name"
												prepend-icon="mdi-note"
												:rules="rules"
											></v-text-field>
											<v-text-field
												label="Price"
												v-model="post.price"
												type="number"
												prepend-icon="mdi-view-list"
												:rules="rules"
											></v-text-field>
											<v-textarea
												label="Info"
												v-model="post.info"
												prepend-icon="mdi-note-plus"
												:rules="rules"
											></v-textarea>
											<v-file-input
												@change="selectFile"
												:rules="rules"
												show-size
												counter
												multiple
												label="Select Image"
											></v-file-input>
											<v-btn type="submit" class="mt-3">Add Post</v-btn>
										</v-form>
									</v-card>
								</v-col>
							</v-row>
						</v-container>
					</div>
				</main>
			</div>
		</div>
	</section>
</template>

<!--  -->

<script>
import API from "../api";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required!"],
      post: {
        name: "",
        price: "",
        info: "",
        image: "",
      },
      image: "",
      errorMessage: "",
    };
  },
  methods: {
    selectFile(file) {
      console.log("🚀 ~ file: AddPost.vue ~ line 37 ~ selectFile ~ file", file);
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.post.name);
      formData.append("price", this.post.price);
      formData.append("info", this.post.info);
      if (this.$refs.form.validate()) {
        const response = await API.addPost(formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
    },
  },
  computed: {
    isLoggedIn() {
      // return this.$store.state.user != null;
      return localStorage.getItem("user") != null;
    },
  },
};
</script>

<style scoped>
.v-messages__message {
  color: var(--color-accent);
}
.container {
  min-height: 50vh;
}
</style>
