<template>
  <div class="row bg-info" @click.stop="goBack()" v-scrollanimation>
    <div
      class="col-4 d-flex flex-column justify-content-center align-items-center"
    >
      <!-- NOTE can use the color property somewhere -->
      <div class="d-flex">
        <img :src="groomer.img" class="pt-4 mt-5 groomer" />
      </div>
      <h4 class="text-dark fs-2">{{ groomer.name }}</h4>
      <div class="border w-25 border-danger"></div>
      <p class="fs-5">Dog Groomer</p>
      <p class="p-5 mx-5 text-center">
        {{ groomer.description }}
      </p>
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
