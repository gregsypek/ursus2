<template>
    		<!-- footer -->
		<footer class="p-5" style="background-color: var(--color-dark-500)">
			<div class="container">
				<div class="row d-flex justify-content-between">
					<div class="col-lg-6 col-xl-4">
						<div class="row g-4">
							<div class="col-lg">
								<div class="logo rounded-2 mt-2"></div>
							</div>
							<div class="col-lg">
								<ul class="nav flex-column">
									<li class="nav-item">
										<router-link class="nav-link" to="/">Home</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/add-post">Add Post</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/about">About</router-link>
									</li>							
								</ul>
							</div>
							<div class="col-lg">
								<ul class="nav flex-column">
									<li class="nav-item">
										<a class="nav-link" href="https://www.ursus.com/pl">link</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="https://www.ursus.com/pl/aktualnosci">info-link</a>
									</li>

								</ul>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-xl-4 mt-2">
						<p>Get our newsletter</p>
						<form class="row g-3">
							<div class="col-auto">
								<label for="inputEmail" class="visually-hidden rounded-1"
									>Email</label
								>
								<input
									type="email"
									class="form-control"
									id="inputEmail"
									placeholder="Enter your email"
								/>
							</div>
							<div class="col-auto">
								<button type="submit" class="btn btn-light mb-3 px-4 rounded-1">
									Subscribe
								</button>
							</div>
						</form>

						<ul class="nav nav-icons">
							<li class="nav-item">
								<a class="nav-link ps-0 pe-2 py-2" href="#"
									><i class="bi bi-facebook"></i
								></a>
							</li>
							<li class="nav-item">
								<a class="nav-link p-2" href="#"
									><i class="bi bi-instagram"></i
								></a>
							</li>
							<li class="nav-item">
								<a class="nav-link p-2" href="#"
									><i class="bi bi-snapchat"></i
								></a>
							</li>
							<li class="nav-item">
								<a class="nav-link p-2" href="#"
									><i class="bi bi-twitter"></i
								></a>
							</li>
							<li class="nav-item">
								<a class="nav-link p-2" href="#"
									><i class="bi bi-youtube"></i
								></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
</template>

<script>
export default {};
</script>

<style>
</style>