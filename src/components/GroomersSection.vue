<template>
  <div class="col-lg-4 d-flex justify-content-center" v-scrollanimation>
    <div class="text-holder p-5">
      <h1 class="text-white">Who We Are</h1>
      <div class="color-splash bg-success w-75 align-self-end"></div>
      <p class="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos,
        nihil. Et explicabo cum accusamus cumque qui numquam quas, temporibus
        officia.
      </p>
    </div>
  </div>

  <div class="col-12 loader mt-5" id="loader">
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
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { data } from "../data";
import GroomIcons from "./GroomIcons.vue";
import MediumGroomers from "./MediumGroomers.vue";

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
  components: { MediumGroomers, GroomIcons },
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

.text-holder {
}
@media only screen and (orientation: landscape) {
  .text-holder {
    padding-top: 3em;
    position: absolute;
  }
}
.loader {
  height: 100%;
}

.sm-groomer {
  width: 100%;
}

.color-splash-hori {
  width: 1em;
  height: 100%;
}
</style>
