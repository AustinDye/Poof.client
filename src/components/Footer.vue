<template>
  <div>
    <div class="row d-flex navbar justify-content-between">
      <div class="col-6 text-center text-white">
        <p>PoofPets© 2022</p>
        <p>Website Developed by Austin Dye</p>
      </div>
      <div class="row position-absolute dog-items">
        <div class="col-12 d-flex justify-content-between">
          <div class="">
            <i class="mdi mdi-tennis-ball icon-fun"></i>
          </div>
          <div class="">
            <i class="mdi mdi-bone icon-fun"></i>
          </div>
          <div class="">
            <i class="mdi mdi-tennis-ball icon-fun"></i>
          </div>
        </div>
      </div>
      <div class="col-6 text-center d-block">
        <b class="btn text-white" @click="$emit('scroll', 'middle')"
          >Services</b
        >
        <b class="btn text-white" @click="$emit('scroll', 'wayBottom')"
          >Location</b
        >
        <b class="btn text-white" @click="$emit('scroll', 'bottom')">About</b>
      </div>
    </div>
  </div>
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
  background-color: var(--bs-info);
}

.icon-fun {
  font-size: 3em;
  color: rgba(172, 202, 144, 0.252);
}
</style>
