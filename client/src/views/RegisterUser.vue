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
											ref="registerForm"
											v-model="formValidity"
											@submit.prevent="register"
											class="pa-5"
											enctype="multipart/form-data"
										>
											<v-text-field
												label="Name"
												v-model="name"
												:rules="nameRules"
												required
												prepend-icon="mdi-note"
											></v-text-field>
											<v-text-field
												label="Email"
												v-model="email"
												:rules="emailRules"
												type="email"
												required
												prepend-icon="mdi-view-list"
											></v-text-field>
											<v-text-field
												label="password"
												:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
												:type="showPassword ? 'text' : 'password'"
												:rules="passwordRules"
												@click:append="showPassword = !showPassword"
												required
												counter
												v-model="password"
												prepend-icon="mdi-note-plus"
											></v-text-field>

											<v-btn
												type="submit"
												class="mt-3 me-3"
												:disabled="!formValidity"
												>Register</v-btn
											>
											<v-btn
												class="mt-3 me-3"
												color="success"
												@click="validateForm"
												>Validate Form</v-btn
											>
											<v-btn
												color="warning"
												class="mt-3 me-3 btn btn-validation mx-3"
												@click="resetValidation"
												>Reset Validation</v-btn
											>
											<v-btn
												color="error"
												class="mt-3 me-3 btn btn-reset"
												@click="resetForm"
												>Reset</v-btn
											>
											<ul class="errors">
												<li
													v-for="(error, index) in errors"
													:key="index"
													class="error"
												>
													{{ error }}
												</li>
											</ul>
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
			errors: null,
			showPassword: false,

			emailRules: [
				(value) => value.indexOf("@") !== 0 || "Email should have a username.",
				(value) => value.includes("@") || "Email should include an @ symbol.",
				(value) =>
					value.indexOf(".") - value.indexOf("@") > 1 ||
					"Email should contain a valid domain.",
				(value) =>
					value.includes(".") || "Email should include a period symbol.",
				(value) =>
					value.indexOf(".") <= value.length - 3 ||
					"Email should contain a valid domain extension.",
			],
			nameRules: [(value) => !!value || "Name is required"],
			passwordRules: [
				(value) => !!value || "Password is required",
				(value) => (!!value && value.length > 5) || "Minimum length is 6",
			],
			formValidity: false,
		};
	},
	methods: {
		register() {
			this.$store
				.dispatch("register", {
					name: this.name,
					// ma
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
				})
				.catch((err) => {
					this.errors = err.response.data.errors;
				});
		},
		resetValidation() {
			this.$refs.registerForm.resetValidation();
		},
		resetForm() {
			this.$refs.registerForm.reset();
		},
		validateForm() {
			this.$refs.registerForm.validate();
		},
	},
};
</script>

<style>
.v-icon {
	margin-right: 1rem;
}
/* .isRegister a {
  color: var(--color-dark-500);
} */
button .btn {
	color: black;
}
.v-btn:not(.v-btn--outlined).error {
	color: red;
}
.v-btn:not(.v-btn--outlined).warning {
	color: orange;
}
.v-btn:not(.v-btn--outlined).success {
	color: green;
}
</style>
