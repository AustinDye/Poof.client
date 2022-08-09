<template>
  <div class="col-12 position-absolute">
    <ReviewsSwiper />
  </div>
  <div class="spacer"></div>
  <div class="col-md-5 pt-5">
    <div class="py-5 top-text">
      <h1 class="">Call to Action Wow</h1>
      <div class="color-splash mb-3 bg-danger w-75"></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
      </p>
    </div>
  </div>
  <div class="col-md-7 d-flex justify-content-center align-items-end">
    <div class="d-flex container-fluid pt-5" ref="top">
      <img
        class="img-fluid three-dogs"
        src="/src/assets/img/3dogsnobackground.png"
        alt="3 dogs"
      />
    </div>
  </div>
</template>

<script>
import ReviewsSwiper from "./ReviewsSwiper.vue";
export default {
  setup() {
    return {};
  },
  components: { ReviewsSwiper },
};
</script>

<style lang="scss" scoped>
.spacer {
  @media (max-width: 576px) {
    height: 22vh;
  }
  height: 20vh;
}
</style>
