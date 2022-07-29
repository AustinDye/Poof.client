<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 sticky-top">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <img
        class="logo rounded"
        src="src/assets/img/pooflogo.jpeg"
        alt=""
        @click="$emit('scroll', 'top')"
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
      <div class="row navbar-nav w-100">
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col-3 text-center">
              <b class="btn" @click="$emit('scroll', 'middle')">Services</b>
            </div>
            <div class="col-3 text-center">
              <b class="btn" @click="$emit('scroll', 'bottom')">About</b>
            </div>
            <div class="col-3 text-center">
              <b class="btn" @click="$emit('scroll', 'gallery')">Gallery</b>
            </div>
            <div class="col-3 text-center">
              <b class="btn" @click="$emit('scroll', 'wayBottom')">Location</b>
            </div>
          </div>
        </div>

        <div class="col-md-4 ps-5">
          <span class="d-flex">
            <i class="mdi mdi-phone mx-1"></i>
            <h5>208-555-5555</h5>
          </span>
          <span class="d-flex">
            <i class="mdi mdi-clock mx-1"></i>
            <h6>Mon - Sat: 7:30AM - 3:30PM</h6>
          </span>
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
  width: 10em;

  z-index: 5;
  margin-left: 5vw;

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
  background-color: rgba(244, 244, 244, 0.959);
  font-family: "Lato", sans-serif;
}
.color-splash {
  height: 0.2em;
}

b {
  font-family: "Inter", sans-serif;

  color: rgb(39, 39, 39);
  font-weight: bold;
}
</style>
