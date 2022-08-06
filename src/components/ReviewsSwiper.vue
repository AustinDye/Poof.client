<template>
  <swiper
    :slides-per-view="1"
    :autoplay="{
      delay: 15000,
      disableOnInteraction: false,
    }"
    :space-between="50"
    :loop="true"
    :navigation="true"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide v-for="r in reviews" :key="r.id">
      <div class="review-container">
        <p class="review-body">
          <i class="mdi mdi-format-quote-open"></i>{{ r.body
          }}<i class="mdi mdi-format-quote-close"></i>
        </p>
      </div>
      <div class="div d-flex justify-content-center pb-2">
        <i class="mdi mdi-star text-success fs-4"></i
        ><i class="mdi mdi-star text-success fs-4"></i
        ><i class="mdi mdi-star text-success fs-4"></i
        ><i class="mdi mdi-star text-success fs-4"></i
        ><i class="mdi mdi-star text-success fs-4"></i>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {};
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
      reviews: computed(() => AppState.reviews),
    };
  },
};
</script>

<style lang="scss" scoped>
.review-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.review-body {
  position: relative;
}
.mdi-format-quote-open {
  position: absolute;
  top: -10px;
  transform: translateX(-19px);
}
.mdi-format-quote-close {
  position: absolute;
  top: -10px;
}

@media (max-width: 576px) {
  .review-body {
    display: -webkit-box;
    line-clamp: 6;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
