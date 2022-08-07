<template>
  <div class="col-md-6 d-flex justify-content-center" v-scrollanimation>
    <div class="popout-circle bg-white">
      <img
        class="popout-image"
        src="https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png"
        alt=""
      />
    </div>
  </div>
  <div class="col-md-6 about-service">
    <div class="">
      <h1 class="text-white">What We Do</h1>
      <div class="color-splash mb-3 bg-success w-50"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
      </p>
    </div>

    <div class="content-box p-2 m-4 my-5">
      <h3><i class="mdi mdi-content-cut mx-3"></i>Grooming</h3>
      <div class="row">
        <div class="col-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
          tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>

    <div class="content-box p-2 m-4 my-5">
      <h3><i class="mdi mdi-shower mx-3"></i>Bathing</h3>
      <div class="color-splash mb-3 bg- w-50"></div>
      <div class="row">
        <div class="col-12">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
          tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
        </div>
      </div>
    </div>
    <div class="content-box p-2 m-4 my-5">
      <h3><i class="mdi mdi-hair-dryer mx-3"></i>More!</h3>
      <div class="row">
        <div class="col-12 px-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias ipsa
          tempore impedit, sed odio mollitia cumque eligendi placeat quia quas.
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
.popout-image {
  height: 38em;
  width: 38em;
  z-index: 1;
  position: absolute;
}
.popout-circle {
  margin-top: 2.8em;
  position: relative;
  height: 38em;
  width: 38em;
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

@media only screen and (max-width: 820px) {
  .popout-circle {
    margin-top: 5em;
    position: relative;
    height: 18em;
    width: 18em;
    z-index: 0;
    border-radius: 100%;
  }
  .popout-image {
    height: 18em;
    width: 18em;
    z-index: 1;
    position: absolute;
  }
}
</style>
