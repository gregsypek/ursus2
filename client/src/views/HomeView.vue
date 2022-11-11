<template>
	<!-- main -->
	<section class="my-5">
		<v-container>
			<v-alert
				class="success"
				close-text="Close Alert"
				color="green accent-4"
				green
				dismissible
				v-if="this.$route.params.message"
			>
				{{ this.$route.params.message }}
			</v-alert>
			<v-alert
				class="warning"
				close-text="Close Alert"
				color="red accent-4"
				red
				dismissible
				v-if="this.$route.params.warning"
				>{{ this.$route.params.warning }}
			</v-alert>
			<!-- You are not authorized to perform this action! -->
		</v-container>
		<div class="container">
			<div class="d-flex row justify-content-center gap-5">
				<aside class="d-none d-lg-block col-3">
					<div class="rounded">
						<h3>URSUS</h3>
					</div>
				</aside>
				<main class="row col-10 col-lg-7 gap-3 gap-lg-3">
					<h1 class="mt-0">&nbsp;</h1>
					<template v-if="isLoading">
						<h3 class="text-center">Loading...</h3>
					</template>
					<div
						v-else
						class="col-md"
						v-for="(post, i) in paginatedData"
						:key="post._id"
					>
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
					<v-pagination
						v-model="pageNumber"
						:length="pageCount"
						@input="handlePageChange"
					></v-pagination>
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
      isLoading: true,
      posts: [],
      pageNumber: 1,
      size: 4,
    };
  },
  async created() {
    this.posts = await API.getAllPost();
    this.isLoading = false;
  },
  methods: {
    handlePageChange(value) {
      this.pageNumber = value;
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.posts.length / this.size);
    },
    paginatedData() {
      const start = (this.pageNumber - 1) * this.size;
      const end = start + this.size;
      return this.posts.slice(start, end);
    },
  },
};
</script>
<style >
.success {
  background-color: #4caf50;
  color: white;
}
.warning {
  background-color: #f61b16;
  color: white;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: red;
}
</style>
