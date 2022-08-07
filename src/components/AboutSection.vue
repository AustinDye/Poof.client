<template>
  <div class="row bg-info" @click.stop="goBack()" v-scrollanimation>
    <div
      class="col-4 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="groom-circle" :style="`--bg-color: ${groomer.color}`">
        <h3 class="fade-text">{{ groomer.name }}</h3>
        <img :src="groomer.img" class="groomer-p" />
        <p class="groomer-text">{{ groomer.name }}</p>
        <div class="swirly"></div>
        <div class="profile-button btn">
          <h4>About</h4>
          <i class="mdi mdi-chevron-right" @click="showGroomerDetails()"></i>
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

<style lang="scss" scoped></style>
