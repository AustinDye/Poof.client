<template>
  <div
    class="col-md-12 col-lg-6 d-md-flex d-block justify-content-center align-items-center large-mover"
    v-scrollanimation
  >
    <div class="popout-circle bg-white">
      <img
        class="popout-image"
        src="https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png"
        alt="dog"
      />
    </div>
  </div>
  <div class="col-lg-6 col-md-12 about-service" v-scrollanimation>
    <div class="d-flex">
      <p class="dimbo text-success fs-1 pe-3">what</p>
      <div>
        <h1 class="text-white">We Do</h1>
        <div class="color-splash mb-3 bg-success w-100"></div>
      </div>
    </div>

    <div class="content-box p-2 my-2">
      <div class="d-flex">
        <i class="title-text mdi mdi-content-cut fs-1 mx-3 pt-2"></i>
        <p class="dimbo big-letter">G</p>
        <p class="fs-2 service-sec pt-3">rooming</p>
      </div>
      <p class="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
        tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
        Lorem ipsum dolor.
      </p>
    </div>
    <div class="content-box p-2 my-2">
      <div class="d-flex">
        <i class="title-text mdi mdi-shower fs-1 mx-3 pt-2"></i>
        <p class="dimbo big-letter">B</p>
        <p class="fs-2 service-sec pt-3">athing</p>
      </div>
      <p class="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
        tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
        Lorem ipsum dolor.
      </p>
    </div>
    <div class="content-box p-2 my-2">
      <div class="d-flex">
        <i class="title-text mdi mdi-hair-dryer fs-1 mx-3 pt-1"></i>
        <p class="dimbo big-letter">O</p>
        <p class="fs-2 service-sec pt-3">ther</p>
      </div>
      <p class="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
        tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
        Lorem ipsum dolor.
      </p>
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
.popout-image {
  height: 600px;
  width: 600px;
  z-index: 1;
  position: absolute;
}
.big-letter {
  font-size: 3em;
}
.popout-circle {
  margin-top: 2.8em;
  position: relative;
  height: 600px;
  width: 600px;
  z-index: 0;
  border-radius: 100%;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (max-width: 1000px) {
  .popout-circle {
    margin-top: 2em;
    height: 328px;
    width: 328px;
    z-index: 0;
    border-radius: 100%;
  }
  .popout-image {
    height: 300px;
    width: 300px;

    z-index: 1;
  }
}

@media (min-width: 1400px) {
}

@media (max-width: 1400px) {
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}

.service-sec {
  font-family: sans-serif;
}

@media only screen and (max-width: 820px) {
  .popout-circle {
    margin-top: 2em;
    height: 328px;
    width: 328px;
    left: -1em;
    z-index: 0;
    border-radius: 100%;
  }
  .popout-image {
    height: 300px;
    width: 300px;

    z-index: 1;
  }
}
</style>
