<template>
  <div>
    <div class="row navbar justify-content-between">
      <div class="bone-banner">
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-dog icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-dog icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-dog icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-dog icon-fun ps-2"></i>
        <i class="mdi mdi-dog icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
        <i class="mdi mdi-bone icon-fun ps-2"></i>
        <i class="mdi mdi-tennis-ball icon-fun ps-2"></i>
        <i class="mdi mdi-content-cut icon-fun ps-2"></i>
      </div>
      <div class="col-1"></div>
      <div class="col-3 text-center text-white">
        <p>PoofPets© 2022</p>
        <p>Website Developed by Austin Dye</p>
      </div>
      <div class="col-3 text-center">
        <img
          class="my-3 logo"
          src="src/assets/img/pooflogo-removebg.png"
          alt=""
        />
      </div>
      <div class="col-3 d-flex justify-content-center">
        <div class="links">
          <b
            class="btn text-white selectable"
            @click="$emit('scroll', 'middle')"
            >Services</b
          >
          <b
            class="btn text-white selectable"
            @click="$emit('scroll', 'wayBottom')"
            >Location</b
          >
          <b
            class="btn text-white selectable"
            @click="$emit('scroll', 'bottom')"
            >About</b
          >
        </div>
      </div>
      <div class="col-1"></div>
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

  <style lang="scss" scoped>
$icons: 15;
$angles: (45, 15, 25, 80);

.navbar {
  position: relative;
  background-color: #acca90;
  z-index: 5;
}

.links {
  display: flex;
  flex-direction: column;
  width: min-content;
}

.bone-banner {
  position: absolute;
  display: flex;
  justify-content: space-around;
  inset: 0;
  margin: auto;
  z-index: -1;
  width: 91vw;
}

@for $i from 1 through 40 {
  .bone-banner i:nth-child(#{$i}) {
    $angle: (random(360));
    display: inline-block;
    transform: rotate($angle + deg);
  }
}

a:hover {
  text-decoration: none;
}
.logo {
  width: 10em;
  height: auto;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.icon-fun {
  font-size: 3em;
  color: rgba(28, 29, 28, 0.252);
}
</style>
