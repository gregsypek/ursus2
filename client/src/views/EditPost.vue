<template>
	<section class="my-5">
		<div class="container">
			<div class="d-flex row justify-content-center g-5">
				<aside class="d-none d-lg-block col-3">
					<div class="rounded">
         
						<h3>
							<!-- <img
								src="../../src/assets/logo-ursus.png"
								alt="logo"
								class="d-none d-xxl-block"
							/> -->           
                 <img :src="`/${post.image}`" width="100%" class="d-none d-xxl-block " ></img>
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
										<v-card-title>Edit This Post</v-card-title>
										<v-divider></v-divider>
										<v-form
											ref="form"
											@submit.prevent="updateForm"
											class="pa-5"
											enctype="multipart/form-data"
										>
											<v-text-field
												label="Name"
												v-model="post.name"
												prepend-icon="mdi-note"
												
											></v-text-field>
											<v-text-field
												label="Price"
												v-model="post.price"
												type="number"
												prepend-icon="mdi-view-list"
											
											></v-text-field>
											<v-textarea
												label="Info"
												v-model="post.info"
												prepend-icon="mdi-note-plus"
												
											></v-textarea>
											<v-file-input
												@change="selectFile"
											
												show-size
												counter
												multiple
												label="Select Image"
                        
											></v-file-input>
                      <v-img :src="`/${post.image}`" width="120" class="d-block d-xxl-none" ></v-img>
											<v-btn type="submit"  class="mt-3">Update Post</v-btn>
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

		};
	},
  async created(){
    const response = await API.getPostByID(this.$route.params.id);
    this.post = response
  },
	methods: {
		selectFile(file) {
			console.log("🚀 ~ file: AddPost.vue ~ line 37 ~ selectFile ~ file", file);
			this.image = file[0];
		},
		async updateForm() {
			const formData = new FormData();
			formData.append("image", this.image);
			formData.append("old_image", this.post.image);
			formData.append("name", this.post.name);
			formData.append("price", this.post.price);
			formData.append("info", this.post.info);
			if (this.$refs.form.validate()) {
				const response = await API.updatePost(this.$route.params.id,formData);
				this.$router.push({
					name: "home",
					params: { message: response.message },
				});
			}
		},
	},
};
</script>

<style scoped>
.v-messages__message {
	color: var(--color-accent);
}

aside h3 {
  transform:rotate(0);
}


</style>
