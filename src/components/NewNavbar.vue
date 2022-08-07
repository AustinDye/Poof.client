<template>
  <div class="w-100 bg-white d-flex justify-content-end py-1 contact-hours">
    <span class="fs-3 dimbo d-flex pt-1"
      ><PhoneFilled /><a class="" href="tel:555-555-5555">1-208-555-5555</a>
    </span>

    <span class="dimbo text-dark d-flex mx-5 pt-1 fs-3">
      <Time />
      <a> Mon - Sat: 7:30AM - 3:30PM</a>
    </span>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="position-absolute logo-container">
          <img
            src="src/assets/img/pooflogo-removebg.png"
            class="logo position-absolute"
            @click="$emit('scroll', 'top')"
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
              <b class="btn" @click="$emit('scroll', 'middle')">Services</b>
            </li>
            <li class="nav-item">
              <b class="btn" @click="$emit('scroll', 'bottom')">About</b>
            </li>
            <li class="nav-item">
              <b class="btn" @click="$emit('scroll', 'gallery')">Gallery</b>
            </li>
            <li class="nav-item dropdown">
              <b class="btn" @click="$emit('scroll', 'wayBottom')">Location</b>
            </li>
          </ul>
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

.logo-container {
  top: -2.6em;
  left: 7em;
  background: white;
  border-radius: 50%;
  height: 11em;
  width: 11em;
  border: 1em rgba($success, 1) solid;
  @media (max-width: 578px) {
    right: 5px;
  }
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
    width: 25%;
    margin-top: 0.5rem;
  }
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
}

.navbar-collapse {
  @media only screen and (orientation: landscape) {
    margin-right: 7em;
  }
}
</style>
