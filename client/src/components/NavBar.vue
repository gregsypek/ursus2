<template>
	<!-- navbar -->
	<nav
		class="navbar navbar-expand-lg p-0"
		style="background-color: var(--color-light-500)"
	>
		<div class="container">
			<router-link to="/" class="navbar-brand btn-logo my-2 me-5"
				><img src="../../src/assets/logo-ursus.png" alt="logo"
			/></router-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navmenu"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse justify-content-between my-4 my-lg-0"
				id="navmenu"
			>
				<ul class="navbar-nav">
					<li class="nav-item py-3 px-1">
						<router-link to="/" class="p-3">Home</router-link>
					</li>
					<li v-show="loggedIn" class="nav-item py-3 px-1">
						<router-link v-if="loggedIn" to="/add-post" class="p-3"
							>Add post</router-link
						>
					</li>
					<li class="nav-item py-3 px-1">
						<router-link to="/about" class="p-3">About</router-link>
					</li>
				</ul>
				<div v-if="!loggedIn">
					<router-link
						to="/login"
						class="btn btn-login d-block d-lg-inline rounded-0"
						>login</router-link
					>
					<router-link
						to="/register"
						class="btn btn-register d-block d-lg-inline rounded-0"
						>register</router-link
					>
				</div>
				<div v-else>
					<p class="btn m-0 rounded-0">Witaj {{ getUserName }}</p>
					<button class="btn btn-login rounded-0" type="button" @click="logout">
						Logout
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { authComputed } from "../vuex/helpers.js";
export default {
	name: "NavBar",
	computed: {
		...authComputed,
		getUserName() {
			return this.$store.state.user.name
				? this.$store.state.user.name
				: this.$store.state.user.email.split("@")[0];
		},
	},
	methods: {
		logout() {
			this.$store.dispatch("logout");
		},
	},
};
</script>

<style lang="scss">
nav {
	a {
		color: inherit;
		text-decoration: none;
		transition: 0.3s color ease-in-out;

		&.router-link-exact-active:not(.btn-logo) {
			background-color: var(--color-light-400);
		}
		&:hover:not(.btn-logo) {
			color: var(--color-accent);
			background-color: var(--color-light-400);

			color: inherit;
		}
		&:active {
			color: var(--color-white);
		}
	}
}
</style>
