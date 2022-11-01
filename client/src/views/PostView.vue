<template>
	<section class="my-5">
		<div class="container">
			<div class="d-flex row justify-content-center g-5">
				<main class="row col-12 g-5">
					<div class="col-12">
						<h1>{{ post.name }}</h1>
						<div class="card rounded-0 border-0">
							<div class="row gallery gap-lg-5 justify-content-between">
								<img
									:src="`/${post.image}`"
									:alt="post.name"
									class="img-fluid rounded-0 col-lg-8"
								/>
								<div
									class="thumbnails py-2 py-lg-0 rounded-0 border-0 d-flex flex-lg-column justify-content-center align-items-center gap-3 gap-lg-5 col-lg-2"
								>
									<!-- <img
                  v-for="(photo,index) in post.images" :key="index"
                    :src="`/img/${photo}.jpeg`"
                    :alt="`${post.name}-${index + 1}`"
                    class="img-thumbnail rounded-0"             
                  />                   -->
								</div>
							</div>
							<div
								class="d-flex flex-column flex-lg-row mt-5 gap-5 align-items-baseline justify-content-between"
							>
								<div class="d-flex align-items-center flex-wrap gap-2">
									<h3 class="card-price mb-0 text-left fw-light h5">Cena:</h3>
									<p class="btn btn-outline-secondary h4 m-0">
										{{ post.price }} <span>zł</span>
									</p>
								</div>
								<div
									class="buttons col-12 col-lg-4 d-flex gap-3 justify-content-start justify-content-lg-end"
								>
									<v-btn
										:to="{ name: 'edit-post', params: { id: post._id } }"
										class="btn btn-light"
										>edit</v-btn
									>
									<v-btn @click="removePost(post._id)" class="btn btn-danger">delete</v-btn>
								</div>
							</div>
							<div
								class="card-body bg-transparent px-0 col-12 d-flex justify-content-between mt-lg-5"
							>
								<aside class="d-none d-lg-block col-3">
									<div class="rounded">
										<h3 class="fs-5">{{ post.name }}</h3>
									</div>
								</aside>
								<p class="card-text col-12 col-lg-8 py-3">
									{{ post.info }}
								</p>
							</div>
						</div>
					</div>
					<div class="col-12 d-flex flex-row-reverse">
						<v-btn :to="{ name: 'home' }">&larr; back</v-btn>
					</div>
				</main>
			</div>
		</div>
	</section>
</template>

<script>
import API from "../api";
export default {
	data() {
		return {
			post: {},
		};
	},
	async created() {
		const response = await API.getPostByID(this.$route.params.id);
		this.post = response;
	},
  methods: {
    async removePost(id){
      const response = await API.deletePost(id);
      this.$router.push({name: "home", params: {message: response.message}})
    }
  }
};
</script>

<style scoped>
.thumbnails {
	background-color: var(--color-light-500);
}
.img-thumbnail {
	width: 100px;
}
aside {
	position: relative;
}
aside div {
	background-color: var(--color-accent);
}
aside h3 {
	position: absolute;
	letter-spacing: 0;
	color: var(--color-white);

	left: 50%;
	top: 50%;
	transform: rotate(0) translate(-50%, -50%);
	width: max-content;
	margin: 0;
	padding: 0;
}

.btn-danger,
.btn-danger:hover {
	color: var(--color-accent);
}
.btn-outline-secondary:hover {
	color: var(--color-dark);
	background-color: var(--color-white);
}
@media (min-width: 800px) {
	.img-thumbnail {
		width: 200px;
	}
}
</style>
