<template>
  <div class="col-md-6 d-flex justify-content-center mt-5" v-scrollanimation>
    <div class="text-holder">
      <h1 class="text-white">Who We Are</h1>
      <div class="color-splash bg-success w-75 align-self-end"></div>
    </div>
  </div>
  <div
    class="col-md-6 d-flex justify-content-center"
    v-for="owner in owners"
    :key="owner.id"
  >
    <GroomIcons :groomer="owner" :key="owner.id"> </GroomIcons>
  </div>

  <div class="col-12 loader pb-5 mb-5" id="loader">
    <div class="row d-block d-md-flex p-2 flex-row-reverse groom-row">
      <div
        class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
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

.groomer-text {
  background: rgba(32, 32, 32, 0.591);
  color: white;
  position: absolute;
  bottom: -0.3em;
  z-index: 100;
}

.text-holder {
  padding-top: 5em;
}
.loader {
  height: 100%;
}

.sm-groomer {
  width: 100%;
}

.liz-wiz {
  height: 20vh;
}

.color-splash-hori {
  width: 1em;
  height: 100%;
}

.circle-small {
  height: 8em;
  width: 8em;
  margin-bottom: 2em;
  background-color: rgba(187, 187, 255, 0.865);
  border-radius: 100%;
  border: 1em rgba($info, 1) solid;
}

.shape,
.shape-2,
.shape-3 {
  height: 18em;
  width: 18em;
}
.shape {
  border-radius: 20% 20% 80% 10%;
}

.shape-2 {
  border-radius: 100% 100% 100% 10%;
}

.shape-3 {
  border-radius: 80% 50% 80% 100%;
}

.groomer-p {
  height: 14em;
  width: 14em;
  background-color: rgb(187, 187, 255);
  border-radius: 100%;
}
.profile-grooms {
  padding: 1em;
}
.pet-pic {
  border-radius: 1em;
}

.angle {
  background-color: rgba($success, 1);

  height: 15em;
  width: 100em;
  border-radius: 100% 0% 0% 0%;
}

.groom-row {
}
</style>
