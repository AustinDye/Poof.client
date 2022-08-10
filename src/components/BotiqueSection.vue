<template>
  <div class="col-md-12 col-lg-6 pt-md-4 pb-md-5 mb-md-5 text-hold ps-0 pe-5">
    <p class="big-the dimbo text-info">the</p>
    <h1>Boutique</h1>
    <div class="color-splash mb-3 bg-warning w-50"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi
      obcaecati enim, labore eius vero, necessitatibus officia totam saepe
      delectus provident quis earum facere mollitia eum exercitationem deserunt
      aut quo!
    </p>
    <br />
  </div>

  <div
    class="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center align-items-center"
  >
    <div class="flower d-flex">
      <img
        class="round-image"
        src="/src/assets/img/botique_round-removebg.png"
        alt="shelves with dog treats"
      />
      <div class="petal-1"></div>
      <div class="petal-2"></div>
      <div class="petal-3"></div>
      <div class="petal-4"></div>
      <div class="circle-3"></div>
    </div>
  </div>
  <div
    class="col-lg-12 d-md-flex d-block anim-holder justify-content-center align-items-center"
  >
    <div class="circle-2">
      <img
        class="small-image-2 img-fluid"
        src="/src/assets/img/dog-shirts-removebg.png"
        alt="dog shirts"
      />
    </div>
    <ul class="fs-2 text-info modak d-none d-md-block">
      <li>Treats</li>
      <li>Dog Clothes</li>
      <li>Toys</li>
      <li>Leashes</li>
      <li>Collars</li>
      <li>Brushes</li>
    </ul>
    <div class="circle">
      <img
        class="small-image"
        src="/src/assets/img/botiaue_items-removebg.png"
        alt="dog toys and brushes"
      />
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
@import "src/assets/scss/_variables.scss";

.big-the {
  font-size: 4em;
}

.circle,
.circle-2,
.circle-3 {
  z-index: 2;
  position: absolute;
  height: 280px;
  width: 280px;
  border-radius: 100%;
}
.anim-holder {
  height: 40vh;
  border-radius: 200px;
  padding: 12em;
  border: 19px rgba($success, 0.2) solid;
  outline: 19px rgba($info, 0.2) solid;
}
.circle {
  right: 20vw;
  background-color: rgba($success, 0.6);
  border: 0.3em rgba(255, 255, 255, 0.54) solid;
}
.circle-2 {
  left: 20vw;
  background-color: rgba($info, 0.6);
  border: 0.3em rgba(255, 255, 255, 0.454) solid;
}

.flower {
  position: relative;
}

.round-image {
  height: 420px;
  width: 420px;
  z-index: 1;
}

.small-image {
  z-index: 3;
  margin-top: 1em;
}
.small-image-2 {
  z-index: 3;
  padding-top: 4em;
}

.petal-1,
.petal-2,
.petal-3,
.petal-4 {
  overflow: hidden;
  z-index: 0;
  position: absolute;
  background-color: rgba($info, 0.4);
  height: 420px;
  width: 420px;
  border-radius: 100% 0 100% 0;
  animation: spin 5s;
  animation-iteration-count: infinite;
}
.text-hold {
  z-index: 3;
}

.petal-2 {
  transform: rotate(90deg);
  background-color: rgba($success, 0.4);
}
.petal-3 {
  transform: rotate(90deg);
  background-color: rgba($success, 0.4);
  border-radius: 0% 100% 0% 100%;
}
.petal-4 {
  transform: rotate(0deg);

  border-radius: 0% 100% 0% 100%;
}
@media screen and (orientation: portrait) {
  .petal-1,
  .petal-2,
  .petal-3,
  .petal-4 {
    z-index: 0;
  }
  .flower {
    margin-right: 0.5em;
    margin-left: 50vw;
    margin-bottom: 8em;
  }

  .anim-holder {
    padding: 1em;
    height: 30vh;
    z-index: 2;
  }
  .circle,
  .circle-2 {
    width: 220px;
    height: 220px;
  }
  .circle {
    right: 10vw;
  }
  .circle-2 {
    left: 10vw;
  }
}
.circle-holder,
.circle-holder-2 {
  margin-bottom: 5em;
}

@media screen and (orientation: landscape) {
  .circle-holder-2 {
    margin-top: 2em;
  }
  .circle-holder {
    margin-top: 29em;
  }
  .anim-holder {
    margin-top: 10vh;
    margin-bottom: 5vh;
  }
}

@media only screen and (max-width: 759px) {
  .circle,
  .circle-2 {
    width: 160px;
    height: 160px;
  }
  .anim-holder {
    margin-top: 1vh;
    padding: 1em;
    height: 27vh;
  }

  .flower {
    margin-left: 0em;
    margin-top: 1em;
    position: relative;
  }
}
.small-image-2 {
  z-index: 3;
  padding-top: 3em;
}

@keyframes spin {
  to {
    transform: rotate(180deg);
  }
}
</style>
