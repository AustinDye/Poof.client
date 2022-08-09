<template>
  <div>
    <div class="row mobile-mt navbar justify-content-between">
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
      <div
        class="order-3 col-md-3 d-flex flex-column align-items-center text-center text-dark"
      >
        <p class="mb-0">PoofPets© 2022</p>
        <p>Website Developed by <b class="">The Squad</b></p>
      </div>
      <div class="col-md-3 order-2 text-center">
        <img
          class="my-3 logo"
          src="/src/assets/img/pooflogo-removebg.png"
          alt="Poof Pets logo"
        />
      </div>
      <div class="col-md-3 order-1 d-flex justify-content-center">
        <div class="links">
          <b class="text-dark" @click="$emit('scroll', 'middle')">Services</b>
          <b class="text-dark" @click="$emit('scroll', 'wayBottom')"
            >Location</b
          >
          <b class="text-dark" @click="$emit('scroll', 'bottom')">Staff</b>
        </div>
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

<style lang="scss" scoped>
$icons: 15;
$angles: (45, 15, 25, 80);

.navbar {
  position: relative;
  background-color: #acca90;
  z-index: 5;
}

.mobile-mt {
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 2;
  }
  .order-3 {
    order: 3;
  }
}

.links {
  display: flex;
  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-around;
  }
  @media (min-width: 576px) {
    flex-direction: column;
    width: min-content;
  }
}

.bone-banner {
  position: absolute;
  display: flex;
  justify-content: space-around;
  inset: 0;
  @media (min-width: 768px) {
    margin: auto;
    width: 91vw;
  }
  z-index: -1;
}

@for $i from 1 through 40 {
  .bone-banner i:nth-child(#{$i}) {
    $angle: (random(360));
    display: inline-block;
    transform: rotate($angle + deg);
  }
}

.min-width {
  word-wrap: avoid;
  width: min-content;
}

b {
  display: block;
  position: relative;
  padding: 0.2em 0;
}

b::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2em;
  background-color: white;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

b {
  overflow: hidden;
  font-family: "Inter", sans-serif;
}

b::after {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

b:hover {
  cursor: pointer;
  // background-color: lighten(#acca90, 10);
}

b:hover::after,
b:focus::after {
  transform: translate3d(0, 0, 0);
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
