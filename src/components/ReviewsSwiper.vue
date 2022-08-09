<template>
  <swiper
    :slides-per-view="1"
    :autoplay="{
      delay: 15000,
      disableOnInteraction: false,
    }"
    :space-between="50"
    :loop="true"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="mySwiper"
  >
    <swiper-slide v-for="r in reviews" :key="r.id">
      <div class="review-container pb-0">
        <p class="review-body mb-0 text-center">
          <q class="text-dark">
            {{ r.body }}
          </q>
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
.mySwiper {
  margin-top: 4rem;
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
}
.review-container {
  padding: 1rem;
  display: flex;
  justify-content: center;
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
