<template>
  <div class="row bg-info" v-scrollanimation>
    <div
      class="col-md-3 d-flex align-items-center flex-column text-center pt-5"
      @click.stop="goBack()"
    >
      <h2>{{ groomer.name }}</h2>
      <div class="groom-circle m-0">
        <img
          :src="groomer.img"
          :alt="groomer.name + `'s picture`"
          class="groomer-p"
        />
      </div>
    </div>
    <div class="col-6 p-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <Bee32 />
          <p>
            {{ groomer.description }}
          </p>
        </div>

        <div class="col-6">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF"
                alt="" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF"
                alt="" /></swiper-slide
            ><swiper-slide
              ><img
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF"
                alt=""
            /></swiper-slide>
            <swiper-slide
              ><img
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=30y38CrzFGwAX9JCMro&_nc_ht=scontent-sea1-1.xx&oh=00_AT8QbFzxM12Lb730CxJD2sTwjJR9Y9mq-MGzr_bokjkKcA&oe=62F432DF"
                alt=""
            /></swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { AppState } from "../AppState";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import { Apps32 } from '@carbon/icons-vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
		const route = useRoute()
		onMounted(() => {
			const staff = [...AppState.groomers, ...AppState.owners]
			AppState.activeGroomer = staff.find(g => g.id = route.params.id)
		})
    return {
      modules: [EffectCards],
      groomer: computed(() => AppState.activeGroomer),
      goBack() {
        router.go(-1);
        AppState.activeGroomer = {};
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.mdi-chevron-right {
  position: absolute;
  font-size: 3em;
  transition: 500ms;
}

h4 {
  opacity: 0;
}
.swirly {
  border-radius: 100%;
  transition: 400ms;
  position: absolute;
  width: 18em;
  height: 18em;
  background: rgba(208, 67, 255, 0);
  border-right: 0em rgb(255, 255, 255) solid;
  border-radius: 100%;
}
.profile-button {
  position: absolute;
  display: flex;
  opacity: 1;
  color: rgba(174, 174, 174, 0.203);
  bottom: 5.5em;
  right: 0.2em;
  transition: 200ms;
  font-size: 1.75em;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
.groom-circle {
  --bg-color: rgba(0, 0, 255, 0.145);
  margin-top: 6em;
  height: 18em;
  width: 18em;
  background: var(--bg-color);
  border-radius: 50%;
  transition: 400ms;
  position: relative;
  display: flex;
}

.groomer-p {
  position: absolute;
  height: 18em;
  width: 18em;

  border-radius: 100%;
  transition: 500ms;
}

.groomer-text {
  font-size: 1.5em;
  border-radius: 2%;
  color: black;
  position: absolute;
  left: 2%;
  top: 10em;
  bottom: 0.25em;
  z-index: 100;
  transition: 300ms;
  font-family: "Inter", sans-serif;
  font-weight: bold;
}

.fade-text {
  position: absolute;
  opacity: 0;
  z-index: 100;
  top: -2em;
  width: 8em;
  height: 1.5em;
  text-align: center;
  border-radius: 10%;
  transition: 400ms;
}
</style>
