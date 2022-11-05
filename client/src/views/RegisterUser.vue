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
										<v-card-title>Create new account</v-card-title>
										<v-divider></v-divider>
										<v-form
											ref="form"
											@submit.prevent="register"
											class="pa-5"
											enctype="multipart/form-data"
										>
											<v-text-field
												label="Name"
												v-model="name"
												prepend-icon="mdi-note"
											></v-text-field>
											<v-text-field
												label="Email"
												v-model="email"
												type="email"
												prepend-icon="mdi-view-list"
											></v-text-field>
											<v-text-field
												label="password"
												v-model="password"
												prepend-icon="mdi-note-plus"
											></v-text-field>

											<v-btn type="submit" class="mt-3">Register</v-btn>
                      <div class="isRegister my-5">

											<router-link to="/login">
												Already have an account? Login.
											</router-link>
                      </div>
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

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({
            name: "home",
            params: {
              message: "Congratulations, you've just created your new account",
            },
          });
        });
    },
  },
};
</script>

<style>
.isRegister a {
  color: var(--color-dark-500);
}
</style>
