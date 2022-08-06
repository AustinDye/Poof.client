<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="logo-container">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <img
          class="logo rounded"
          src="src/assets/img/pooflogo.jpeg"
          alt=""
          @click="$emit('scroll', 'top')"
        />
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
        class="collapse navbar-collapse justify-content-md-center"
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
          <div class="contact-container">
            <div>
              <span><i class="mdi mdi-phone mx-1"></i>208-555-5555</span>
            </div>
            <div>
              <span>
                <i class="mdi mdi-clock mx-1"></i>Mon - Sat: 7:30AM - 3:30PM
              </span>
            </div>
          </div>
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
.navbar {
  position: relative;
  padding: 1.5rem;
  @media (max-width: 578px) {
    padding-right: 1rem;
  }
}
.logo-container {
  z-index: 5;
  top: 13px;
  position: absolute;
  @media (max-width: 578px) {
    right: 5px;
  }
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
  position: absolute;
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

.logo {
  width: 10em;
  /*box-shadow: 0.5px 0.5px 2px black;*/
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
}
</style>