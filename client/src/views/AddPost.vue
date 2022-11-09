<template>
	<section class="my-5">
		<div class="container">
			<div class="d-flex row justify-content-center g-5">
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
								<v-col sm="10" class="mx-auto">
									<v-card class="p-5 my-5">
										<v-card-title>Add New Post</v-card-title>
										<v-divider></v-divider>

										<v-form
											ref="addPostForm"
											v-model="formValidity"
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
												:rules="infoRules"
												counter
											></v-textarea>
											<v-file-input
												@change="selectFile"
												:rules="rules"
												show-size
												counter
												multiple
												label="Select Image"
											></v-file-input>
											<v-btn
												type="submit"
												:disabled="!formValidity"
												class="mt-3 me-3"
												>Add Post</v-btn
											>
											<v-btn
												class="mt-3 me-3"
												color="success"
												@click="validateForm"
												>Validate Form</v-btn
											>
											<v-btn
												color="warning"
												class="mt-3 me-3 btn btn-validation"
												@click="resetValidation"
												>Reset Validation</v-btn
											>
											<v-btn
												color="error"
												class="mt-3 me-3 btn btn-reset"
												@click="resetForm"
												>Reset</v-btn
											>
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
      infoRules: [
        (value) => !!value || "Informations about post are required",
        (value) =>
          value.length > 9 ||
          "A post info must have more or equal then 10 characters",
      ],
      post: {
        name: "",
        price: "",
        info: "",
        image: "",
      },
      image: "",
      errorMessage: "",
      formValidity: false,
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
      if (this.$refs.addPostForm.validate()) {
        const response = await API.addPost(formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
    },
    resetValidation() {
      this.$refs.addPostForm.resetValidation();
    },
    resetForm() {
      this.$refs.addPostForm.reset();
    },
    validateForm() {
      this.$refs.addPostForm.validate();
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

<style>
.v-messages__message {
  color: #f61b16;
}
</style>
