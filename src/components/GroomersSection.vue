<template>
  <div class="col-12 d-flex justify-content-center mb-5 pt-5">
    <div class="">
      <h1 class="text-white">The Groomers</h1>
      <div class="color-splash mb-3 bg-success w-75 mb-5 align-self-end"></div>
    </div>
  </div>

  <div class="col-12 loader pb-5">
    <!--Medium Sized Profiles SECTION -->
    <div
      class="row groomers-container d-none d-sm-flex d-md-flex d-lg-none"
      id="groomers"
    >
      <div class="col-12 justify-content-center d-flex">
        <i class="mdi mdi-circle text-primary fs-3"></i>
      </div>
      <div class="col-md-12 d-flex bg-info">
        <div class="container-fluid">
          <div
            class="circle position-relative d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage('groomers')"
              src="src/assets/img/lizbitz.png"
              class="pt-4 mt-5 groomer first-groomer img-fluid position-absolute"
            />
            <h3 class="groomer-text p-2">Liz Jensen</h3>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit.
          </p>

          <div class="btn d-flex">
            <p>Details</p>
            <i class="mdi mdi-chevron-right pt-1"></i>
          </div>
        </div>
      </div>
      <div class="col-12 justify-content-center d-flex">
        <i class="mdi mdi-circle text-success fs-3"></i>
      </div>
      <div class="col-md-12 col-lg-3 d-flex">
        <div class="container-fluid">
          <div
            class="shape position-relative d-flex bg-success justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/wowom-removebg-preview.png"
              class="groomer first-groomer img-fluid position-absolute pt-5 mt-2"
            />
            <h3 class="groomer-text p-2">The Poof</h3>
          </div>
        </div>
        <div
          class="d-md-flex d-lg-none justify-content-center align-items-center"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            laboriosam cupiditate necessitatibus distinctio.
          </p>
          <div class="btn d-flex">
            <p>Details</p>
            <i class="mdi mdi-chevron-right pt-1"></i>
          </div>
        </div>
      </div>
      <div class="col-12 justify-content-center d-flex">
        <i class="mdi mdi-circle text-warning fs-3"></i>
      </div>

      <div class="col-md-12 col-lg-3 d-flex bg-info">
        <div class="container-fluid">
          <div
            class="shape-2 position-relative d-flex bg-warning justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/John_marston.webp"
              class="groomer first-groomer img-fluid position-absolute pt-4 mt-2"
            />
            <h3 class="groomer-text p-2">John Marston</h3>
          </div>
        </div>
        <div
          class="d-md-flex d-lg-none justify-content-center align-items-center"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            laboriosam cupiditate necessitatibus distinctio.
          </p>
          <div class="btn d-flex">
            <p>Details</p>
            <i class="mdi mdi-chevron-right pt-1"></i>
          </div>
        </div>
      </div>
      <div class="col-12 justify-content-center d-flex">
        <i class="mdi mdi-circle text-secondary fs-3"></i>
      </div>
      <div class="col-md-12 col-lg-3 d-flex bg-info">
        <div class="container-fluid">
          <div
            class="shape-3 position-relative d-flex bg-secondary justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/152-1521917_bastion-bastion-overwatch-transparent (1).png"
              class="groomer first-groomer img-fluid position-absolute pt-3"
            />
            <h3 class="groomer-text p-2">Bastion</h3>
          </div>
        </div>
        <div
          class="d-md-flex d-lg-none justify-content-center align-items-center"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            laboriosam cupiditate necessitatibus distinctio.
          </p>
          <div class="btn d-flex">
            <p>Details</p>
            <i class="mdi mdi-chevron-right pt-1"></i>
          </div>
        </div>
      </div>
    </div>

    <!--large profile SECTION-->

    <div
      class="row groomers-container d-none d-lg-flex"
      id="groomers-large"
      v-for="groomer in groomers"
      :key="groomer.id"
    >
      <GroomIcons />
      <!--<div class="col-3 col-lg-3 d-flex">
        <div class="container-fluid">
          <div
            class="shape position-relative d-flex bg-success justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/wowom-removebg-preview.png"
              class="groomer first-groomer img-fluid position-absolute pt-5 mt-2"
            />
            <h3 class="groomer-text p-2">{{ groomers[1].name }}</h3>
          </div>
        </div>
      </div>

      <div class="col-3 col-lg-3 d-flex bg-info">
        <div class="container-fluid">
          <div
            class="shape-2 position-relative d-flex bg-warning justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/John_marston.webp"
              class="groomer first-groomer img-fluid position-absolute pt-4 mt-2"
            />
            <h3 class="groomer-text p-2">John Marston</h3>
          </div>
        </div>
      </div>

      <div class="col-3 col-lg-3 d-flex bg-info">
        <div class="container-fluid">
          <div
            class="shape-3 position-relative d-flex bg-secondary justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/152-1521917_bastion-bastion-overwatch-transparent (1).png"
              class="groomer first-groomer img-fluid position-absolute pt-3"
            />
            <h3 class="groomer-text p-2">Bastion</h3>
          </div>
        </div>
      </div>-->
    </div>
    <!--small profile SECTION-->
    <div class="row groomers-container d-flex d-sm-none" id="groomers-small">
      <div class="col-12 d-flex">
        <div class="container-fluid d-flex liz-wiz">
          <div
            class="circle-small d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage('groomers')"
              src="src/assets/img/lizbitz.png"
              class="sm-groomer img-fluid"
            />
          </div>
          <p class="fs-1">Liz Jensen</p>
        </div>
      </div>

      <div class="col-12">
        <div class="container-fluid d-flex liz-wiz">
          <div
            class="circle-small d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage('groomers')"
              src="src/assets/img/lizbitz.png"
              class="sm-groomer img-fluid"
            />
          </div>
          <p class="fs-1">Liz Jensen</p>
        </div>
      </div>
      <div class="col-12 d-flex bg-info">
        <div class="container-fluid d-flex liz-wiz">
          <div
            class="circle-small d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage('groomers')"
              src="src/assets/img/lizbitz.png"
              class="sm-groomer img-fluid"
            />
          </div>
          <p class="fs-1">Liz Jensen</p>
        </div>
      </div>

      <div class="col-12 d-flex bg-info">
        <div class="container-fluid d-flex liz-wiz">
          <div
            class="circle-small d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage('groomers')"
              src="src/assets/img/lizbitz.png"
              class="sm-groomer img-fluid"
            />
          </div>
          <p class="fs-1">Liz Jensen</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { data } from "../data";
import GroomIcons from "./GroomIcons.vue";

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
  components: { GroomIcons },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

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
.groomer-profile {
  animation: growFade 1000ms;
}
@keyframes growFade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
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
