<template>
  	<!-- navbar -->
		<nav class="navbar navbar-expand-lg p-0" style="background-color: var(--color-light-500)">
			<div class="container">
				<router-link to="/" class="navbar-brand btn-logo my-2"><img src="../../src/assets/logo-ursus.png" alt=""></router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse justify-content-between my-4 my-lg-0" id="navmenu">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link to="/" class="nav-link active p-3">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/add-post" class="nav-link p-3">Add post</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link p-3">About</router-link>
						</li>			
					</ul>
					<div>

						<button class="btn btn-login d-block d-lg-inline ">login</button>
						<button class="btn btn-register  d-block  d-lg-inline">register</button>
					</div>
				</div>
			</div>
		</nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>