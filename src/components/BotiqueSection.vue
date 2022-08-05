<template>
  <div class="col-md-4 p-5">
    <h1>The Boutique</h1>
    <div class="color-splash mb-3 bg-warning w-50"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quasi
      obcaecati enim, labore eius vero, necessitatibus officia totam saepe
      delectus provident quis earum facere mollitia eum exercitationem deserunt
      aut quo!
    </p>
    <br />
  </div>

  <div class="col-lg-4 col-md-8 col-sm-12 d-flex">
    <div class="flower d-flex">
      <img
        class="round-image img-fluid"
        src="src/assets/img/botique_round-removebg.png"
        alt=""
      />
      <div class="petal-1"></div>
      <div class="petal-2"></div>
      <div class="petal-3"></div>
      <div class="petal-4"></div>
      <div class="circle-3"></div>
    </div>
  </div>
  <div class="col-lg-4 d-md-flex d-lg-block d-flex">
    <div
      class="d-flex position-relative justify-content-center circle-holder-2"
    >
      <img
        class="small-image-2 img-fluid"
        src="src/assets/img/dog-shirts-removebg.png"
        alt=""
      />
      <div class="circle-2"></div>
    </div>
    <div class="d-flex position-relative justify-content-center circle-holder">
      <img
        class="small-image img-fluid"
        src="src/assets/img/botiaue_items-removebg.png"
        alt=""
      />
      <div class="circle"></div>
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

.circle-holder {
}
.circle-holder-2 {
}
.circle,
.circle-2 {
  z-index: 0;
  position: absolute;
  height: 20em;
  width: 20em;
  border-radius: 100%;
}
.circle {
  background-color: rgba($success, 0.9);
  border: 0.3em white solid;
}
.circle-2 {
  background-color: rgba($primary, 0.9);
  border: 0.3em white solid;
}
.circle-3 {
  position: absolute;
  background-color: rgba($info, 0.4);
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: none;
}

.flower {
  margin-top: 15em;
  position: relative;
}

.round-image {
  height: 25em;
  width: 25em;
  z-index: 1;
}

.small-image {
  z-index: 2;
  margin-top: 2em;
  width: 22em;
}
.small-image-2 {
  z-index: 2;
  padding-top: 5em;
  padding-right: 1em;
  width: 23em;
}

.petal-1,
.petal-2,
.petal-3,
.petal-4 {
  overflow: hidden;
  z-index: 0;
  position: absolute;
  background-color: rgba($primary, 0.5);
  height: 25em;
  width: 25em;
  border-radius: 100% 0 100% 0;
  animation: spin 5s;
  animation-iteration-count: infinite;
}

.petal-2 {
  transform: rotate(90deg);
  background-color: rgba($success, 0.7);
}
.petal-3 {
  transform: rotate(90deg);
  background-color: rgba($success, 0.7);
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
    display: none;
  }
  .flower {
    margin-top: 14em;
    background-color: rgba($info, 0.4);
    border-radius: 100%;
    margin-bottom: 5em;

    position: absolute;
  }
}

@media screen and (orientation: landscape) {
  .circle-holder,
  .circle-holder-2 {
    margin-top: 7em;
  }
  .flower {
    left: 8em;
  }
}

@media only screen and (max-width: 759px) {
  .circle-holder,
  .circle-holder-2 {
    top: 17em;
    z-index: 3;
    margin-bottom: 15em;
  }
  .circle,
  .circle-2 {
    width: 10em;

    height: 10em;
  }

  .flower {
    margin-top: 0.5em;
    left: 0.2em;
  }
}

@keyframes spin {
  to {
    transform: rotate(180deg);
  }
}
</style>
