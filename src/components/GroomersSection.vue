<template>
  <div class="col-12 d-flex justify-content-center mb-5 pt-5" v-scrollanimation>
    <div class="">
      <h1 class="text-white">The Groomers</h1>
      <div class="color-splash mb-3 bg-success w-75 mb-5 align-self-end"></div>
    </div>
  </div>

  <div class="col-12 loader pb-5">
    <!--Medium Sized Profiles SECTION -->
    <MediumGroomers />

    <!--large profile SECTION-->
    <div class="row m-2 p-2">
      <div class="col-3" v-for="groomer in groomers" :key="groomer.id">
        <GroomIcons :groomer="groomer" :key="groomer.id"> </GroomIcons>
      </div>
    </div>

    <!--small profile SECTION-->
    <SmallGroomers />
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
      changePage(el) {
        let element = el.toString();
        let profile = document.getElementById(element);
        let userProfile = `

        <div class="row bg-white text-dark">
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="d-flex">
          <img
            @click="changePage('groomers')"
            src="src/assets/img/lizbitz.png"
            class="pt-4 mt-5 groomer-p"
          />
        </div>
        <h4 class="text-dark fs-2">Liz Jensen</h4>
        <div class="border w-25 border-danger"></div>
        <p class="fs-5">Dog Groomer</p>
        <p class="p-5 mx-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consequuntur provident est necessitatibus, nulla sapiente, quod
          quidem.
        </p>
        <div class="border w-100 border-primary"></div>
      </div>
      <div class="col-6 justify-content-center d-flex align-items-end">
        <div
          class="angle position-absolute d-flex justify-content-center align-items-center"
        ></div>
        <div
          class="row d-flex position-relative justify-content-center align-item-center"
        >
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>`;
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

.circle {
  height: 18em;
  width: 18em;
  background-color: rgb(187, 187, 255);
  border-radius: 50% 10%;
}

.circle-small {
  height: 8em;
  width: 8em;
  margin-bottom: 2em;
  background-color: rgba(187, 187, 255, 0.865);
  border-radius: 100%;
  border: 1em rgba($info, 1) solid;
}

.shape {
  height: 18em;
  width: 18em;

  border-radius: 20% 20% 80% 10%;
}

.shape-2 {
  height: 18em;
  width: 18em;

  border-radius: 100% 100% 100% 10%;
}

.shape-3 {
  height: 18em;
  width: 18em;

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
</style>
