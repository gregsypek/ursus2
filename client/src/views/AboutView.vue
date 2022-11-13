<template>
	<!-- main -->
	<section class="my-5">
		<div class="container">
			<div class="d-flex row justify-content-center g-5">
				<aside class="d-none d-lg-block col-3 me-5">
					<div class="rounded">
						<!-- <h3>URSUS</h3> -->
						<img
							src="../assets/380-2.jpeg"
							alt="ursus 380-2"
							class="about--photo w-100 h-100"
						/>
					</div>
				</aside>
				<main
					class="row col-12 col-lg-8 gap-2 gap-lg-5 flex justify-content-evenly"
				>
					<div class=" col-12">
						<h3 class="mb-5">About application:</h3>
						<div class="about--info">
						<p>
						I've created this application only for learning purposes and of course for fun. All pictures and information I copied from the original URSUS website link below.<strong
								><a
									class="nav-link text-center py-3"
									href="https://www.ursus.com/pl"
									style="color: red"
									>https://www.ursus.com/pl.</a
								></strong
							>
							This is a Full Stack App with a login and register option. It includes three roles:
							<ul>
							<li>admin</li>
							<li>editor</li>
							<li>user</li>
						</ul>
						</p>
						
						<p>
						Admin has full access(create, update, edit and delete all posts). An editor can only update and delete. Users can only preview all content. Each new user after registration will gain a 'user' role by default.
						</p>
						<p>
						For authentication, I use JSON Web Tokens. When the user types their name and password into my app it'll send info to a server so it can authenticate it. If everything is good to go server returns a token. The token is stored in local storage. When the user logs out, the token is cleared from local storage.
						</p>
						<p>
						The backend is built in Node.js with express and mongoose. Data is sent to my MongoDB account. I handle errors and display them by vuetify template v-error. For a security measure, I intercept the response from axios to log out when an ill-intentioned person tries to save a fake token in local storage. Each form has proper validation with additional buttons to help write new posts.
						</p>
						</div>
					</div>
					<div class="col-4 col-md-4 col-lg-3">
						<h3>Stack:</h3>
						<ul class="card-text py-3">
							<li>MongoDB</li>
							<li>Express</li>
							<li>Vue</li>
							<li>Node</li>
						</ul>
					</div>
					<div class="col-8 col-md-4 col-lg-md">
						<h3>Login access:</h3>
						<ul class="card-text py-3">
							<li>
								admin
								<ul>
									<li>email: admin@gmail.com</li>
									<li>password: 123456</li>
								</ul>
							</li>
							<li>
								editor
								<ul>
									<li>email: editor@gmail.com</li>
									<li>password: 123456</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="col-4 col-lg-md">
						<h3>Back-End</h3>
						<ul class="card-text py-3">
							<li>Node</li>
							<li>Express</li>
							<li>Mongoose</li>
							<li>MongoDB</li>
							<li>Multer</li>
							<li>JsonWebToken</li>
						</ul>
					</div>
					<div class="col-4 col-md">
						<h3>Front-End</h3>
						<ul class="card-text py-3">
							<li>Vue</li>
							<li>VueRouter</li>
							<li>Vuex</li>
							<li>Axios</li>
							<li>Bootstrap</li>
							<li>Vuetify</li>
							<li>LocalStorage</li>
						</ul>
					</div>
				</main>
			</div>
		</div>
	</section>
</template>
<style scoped>
.about--photo {
	object-fit: cover;
}
@media(min-width: 992px){
	.about--info  {
	column-count:2;
	}

}
.about--info p {
	max-width: 50ch;
}
</style>
