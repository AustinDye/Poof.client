<template>
  <div class="fixed-nav">
    <div
      class="
        w-100
        d-lg-flex d-md-block d-none
        justify-content-end
        py-1
        contact-hours
      "
    >
      <span class="fs-3 dimbo d-flex pt-1">
        <i class="mdi mdi-phone pe-1"></i>
        <a class="text-info" href="tel:555-555-5555">1-208-555-5555</a>
      </span>

      <span class="dimbo text-dark d-flex mx-5 pt-1 fs-3">
        <h1 class="fs-3 text-info">
          <i class="mdi mdi-clock-outline pe-1"></i>
          Mon - Sat: 7:30AM - 3:30PM
        </h1>
      </span>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="loader">
        <router-link class="navbar-brand d-flex" :to="{ path: '/home' }">
          <div class="position-absolute logo-container">
            <img
              src="/src/assets/img/pooflogo-removebg.png"
              class="logo position-absolute"
              @click="$emit('scroll', 'top')"
              alt="Poof Pets logo"
            />
          </div>
        </router-link>
      </div>
      <div class="container-fluid">
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-md-end"
          id="navbar-items"
        >
          <div class="nav-content">
            <ul class="navbar-nav">
              <li class="nav-item">
                <b
                  class="btn"
                  @click="$emit('scroll', 'middle')"
                  aria-describedby="Services navigation button"
                  >Services</b
                >
              </li>
              <li class="nav-item">
                <b
                  class="btn"
                  @click="$emit('scroll', 'bottom')"
                  aria-describedby="About navigation button"
                  >About</b
                >
              </li>
              <li class="nav-item">
                <b
                  class="btn"
                  @click="$emit('scroll', 'gallery')"
                  aria-describedby="Gallery navigation button"
                  >Gallery</b
                >
              </li>
              <li class="nav-item dropdown">
                <b
                  class="btn"
                  @click="$emit('scroll', 'wayBottom')"
                  aria-describedby="Location navigation button"
                  >Location</b
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="spacer"></div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";
.navbar {
  position: relative;
  padding: 1.75rem;
  background: rgba($success, 1);
  @media (max-width: 578px) {
    padding-right: 1rem;
  }
}
.spacer {
  height: 10em;
}
.fixed-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
}

.logo-container {
  top: -2.6em;
  left: 7em;
  background: white;
  border-radius: 50%;
  height: 11em;
  width: 11em;
  border: 1em rgba($success, 1) solid;
}
.logo {
  height: 8.8em;
  padding-left: 0.2em;
  padding-top: 0.2em;
  width: 8.8em;
  /*box-shadow: 0.5px 0.5px 2px black;*/
}
.nav-content {
  display: flex;
}
.navbar-nav {
  @media (max-width: 578px) {
    width: 50%;
    margin-top: 0.5rem;
  }
}

.nav-item {
  display: flex;
  justify-content: start;
}

.contact-container {
  top: 13px;
  right: 20px;
  @media (max-width: 578px) {
    bottom: 10px;
    position: relative;
    width: 75%;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.contact-container div {
  display: flex;
  justify-content: flex-end;
}

.contact-container div span {
  text-align: end;
}

.btn {
  @media (max-width: 578px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
}

b {
  font-family: "Inter", sans-serif;
  color: rgb(39, 39, 39);
  font-weight: bold;
  font-size: 1.3em;
  display: block;
  position: relative;
}

b::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: white;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

b {
  overflow: hidden;
}

b::after {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

b:hover {
  cursor: pointer;
}

b:hover::after,
b:focus::after {
  transform: translate3d(0, 0, 0);
}

.navbar-collapse {
  @media only screen and (orientation: landscape) {
    margin-right: 7em;
  }
}

@media (max-width: 578px) {
  .loader {
    position: relative;
  }
  .logo-container {
    top: -2em !important;
    left: 9em;
    border-radius: 50%;
    height: 7.3em;
    width: 7.3em;
  }
  .logo {
    right: -0.9em;
    top: -1em;
    border-radius: 100% 100% 0% 0%;
    height: 147px;
    width: 147px;
  }
}
@media only screen and (orientation: portrait) {
  .contact-hours {
    position: absolute;
    top: 0.5em;
    left: 25em;
    z-index: 5;
  }
  .logo-container {
    top: -0.5em;
    height: 8.5em;
    width: 8.5em;
  }
  .logo {
    right: -0.9em;
    top: -1em;
    height: 172px;
    width: 172px;
  }
}
@media only screen and (orientation: landscape) {
  .contact-hours {
    background-color: white;
  }
}
</style>
