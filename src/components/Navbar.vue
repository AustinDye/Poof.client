<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 mt-5 sticky-top">
    <router-link
      class="navbar-brand d-flex position-relative"
      :to="{ name: 'Home' }"
    >
      <img
        class="logo position-absolute rounded"
        src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/242064109_178812744384037_1051300461320466782_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=0DBsIZgZbB0AX8UFNhk&_nc_ht=scontent-sea1-1.xx&oh=00_AT-vzGA4t90wiA-f7ttrJHi3dkaWJ56U3q9jcFi6ff4lKw&oe=62D517F9"
        alt=""
      />
    </router-link>
    <button
      class="navbar-toggler bg-primary"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon text-dark" />
    </button>
    <div class="collapse navbar-collapse text-dark" id="navbarText">
      <div class="row navbar-nav text-center w-100">
        <div class="col-2"></div>
        <div class="col-6 d-flex">
          <i class="mdi mdi-map mx-1"></i>
          <h6>10542 West Fairview Avenue, Boise, ID, United States, 83704</h6>
        </div>
        <div class="col-4 d-flex">
          <i class="mdi mdi-phone mx-1"></i>
          <h6>208-555-5555</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  width: 8em;
  top: -2.75em;
  z-index: 5;
  border-top: 3px black double;
  border-bottom: 3px black double;
  /*box-shadow: 0.5px 0.5px 2px black;*/
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.navbar {
  border-top: 3px black double;
  border-bottom: 3px black double;
  background-color: whitesmoke;
}
</style>
