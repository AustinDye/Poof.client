<template>
  <div class="row bg-info holder" v-scrollanimation>
    <div
      class="col-lg-4 col-md-10 d-flex justify-content-center position-relative"
    >
      <div class="text-holder d-flex">
        <h1 class="text-white about-text">the</h1>
        <div class="d-flex flex-column">
          <h1 class="text-white about-text-big">Staff</h1>
          <div class="color-splash bg-success w-50 align-self-end"></div>
        </div>
      </div>
    </div>

    <div class="col-12 loader" id="loader">
      <div class="row d-md-flex justify-content-end">
        <div
          class="col-lg-3 col-md-6 d-flex"
          v-for="owner in owners"
          :key="owner.id"
        >
          <GroomIcons :groomer="owner" :key="owner.id"> </GroomIcons>
        </div>
      </div>
    </div>

    <div class="col-12 loader pb-5 mb-5" id="loader">
      <div class="row d-block d-md-flex groom-row justify-content-end">
        <div
          class="col-lg-3 col-md-6 d-flex"
          v-for="groomer in groomers"
          :key="groomer.id"
        >
          <GroomIcons :groomer="groomer" :key="groomer.id"> </GroomIcons>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../AppState";
import { data } from "../data";

import { useRoute } from "vue-router";
import GroomIcons from "../sections/GroomIcons.vue";

export default {
  setup() {
    return {
      groomers: computed(() => AppState.groomers),
      owners: computed(() => AppState.owners),
      changePage(el) {
        let element = el.toString();
        let profile = document.getElementById(element);

        let userProfile = `

        `;
        profile.innerHTML = userProfile;
        return profile;
      },
    };
  },
  components: { GroomIcons },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
.about-text-big {
  padding-top: 1.2em;
}
.holder {
  padding: 2.2em;
}

.text-holder {
  position: absolute;
}
@media only screen and (orientation: portrait) {
  .text-holder {
    position: relative;
  }
}
@media only screen and (orientation: landscape) {
  .text-holder {
    top: 6em;
    left: 10em;
  }
  .about-text {
    font-size: 4em;
  }
  .about-text-big {
    font-size: 12em;
    padding-left: 0.2em;
    padding-top: 0em;
  }
  .holder {
    padding: 5em;
    padding-top: 0em;
    padding-bottom: 0em;
    padding-right: 14em;
  }
}

.color-splash-hori {
  width: 1em;
  height: 100%;
}
</style>
