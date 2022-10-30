<template>
	<!-- main -->
	<section class="my-5">
		<v-container>
			<v-alert
				close-text="Close Alert"
				color="green accent-4"
				green
				dismissible
				v-if="this.$route.params.message"
			>
				{{ this.$route.params.message }}
			</v-alert>
		</v-container>
		<div class="container">
			<div class="d-flex row justify-content-center g-5">
				<aside class="d-none d-lg-block col-3">
					<div class="rounded">
						<h3>URSUS</h3>
					</div>
				</aside>
				<main class="row col-12 col-lg-9 g-5">
					<h1 class="mt-0">Title 1</h1>

					<div class="col-md" v-for="(post, i) in posts" :key="post._id">
						<router-link
							:to="{ name: 'post', params: { id: post._id } }"
							class="card rounded-0 border-0"
						>
							<img
								:src="`/${post.image}`"
								:alt="post.name"
								class="card-img-top rounded-0"
							/>
							<div class="card-body bg-transparent px-0">
								<h3 class="card-title pt-3">{{ post.name }}</h3>
								<p class="card-text py-3">
									{{ post.info.substring(0, 150) + "..." }}
								</p>
							</div>
						</router-link>
					</div>
				</main>
			</div>
		</div>
	</section>
</template>

<script>
import API from "../api.js";

export default {
	name: "Home",
	data() {
		return {
			posts: [],
		};
	},
	async created() {
		this.posts = await API.getAllPost();
	},
};
</script>
<style scoped>
.v-sheet.v-alert:not(.v-sheet--outlined) {
	background-color: #4caf50;
	color: white;
}
</style>
