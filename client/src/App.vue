<template>
	<div id="app">
		<NavBar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
	name: "App",
  components: { NavBar, Footer },
};
</script>

<style>

/* colors */
body {
  --color-light-400: #e5e9f1;
  --color-light-500: #c8d2df;
  --color-dark-400: #8190a5;
  --color-dark-500: #47515e;
  --color-white: #efeff0;
  --color-accent: #f61b16;
}
/* links */
.nav-link.active {
  background-color: var(--color-light-400);
}
.navbar-nav .nav-link {
  padding: 16px;
  color: var(--color-dark-500);
}
.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:active {
  background-color: var(--color-dark-400);
  color: var(--color-white);
}
/* btns */
.btn-login,
.btn-register {
  font-weight: bold;
}
.btn-login:hover,
.btn-login:active,
.btn-register:hover,
.btn-register:active {
  background-color: var(--color-light-400) !important;
}
/* card */
a.card {
  text-decoration: none;
}
h3.card-title {
  color: var(--color-dark-500);
}
.card-text {
  color: var(--color-dark-400);
}
.card-img-top {
  height: 134px;
  min-width: 220px;
  width: auto;
  background-color: var(--color-light-400);
}
.card-img-top {
  object-fit: cover;
  object-fit: contain;
}
/* h3.card-title {
  color: var(--color-accent);
} */
aside div {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-light-500);
}
aside h3 {
  position: relative;
  top: 50%;
  
   transform: rotate(0);
  font-weight: bold;
  font-size: 4rem;
  letter-spacing: 6px;
}
@media screen and (min-width: 1264px) {
  aside h3 {
transform: rotate(270deg);
 

}
}
/* footer */
footer a.nav-link:hover,
footer a.nav-link:active {
  color: var(--color-light-500);
}
footer .nav-link,
footer p {
  color: var(--color-white);
}
footer .logo {
  width: 100%;
  min-width: 60px;
  height: 30px;
  background-color: var(--color-dark-400);
}
footer button[type="submit"] {
  color: var(--color-dark-500);
}
</style>