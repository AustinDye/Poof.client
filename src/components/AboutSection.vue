<template>
  <div class="row bg-info" @click.stop="goBack()" v-scrollanimation>
    <div class="col-md-3 d-flex align-items-center flex-column text-center">
      <h2>
        {{ groomer.name }}
      </h2>
      <div class="groom-circle m-0">
        <img
          :src="groomer.img"
          :alt="groomer.name + `'s picture`"
          class="groomer-p"
        />
      </div>
    </div>
    <div class="col-9">
      <div class="row">
        <div class="col-12">
          <p>
            {{ groomer.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
export default {
  setup() {
    const router = useRouter();
    return {
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
