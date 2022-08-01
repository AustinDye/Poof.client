<template>
  <div class="col-3 d-flex bg-info">
    <div class="container-fluid">
      <div
        class="circle position-relative d-flex justify-content-center align-items-center"
      >
        <img
          @click="changePage('groomers-large')"
          src="src/assets/img/lizbitz.png"
          class="pt-4 mt-5 groomer first-groomer img-fluid position-absolute"
        />
        <h3 class="groomer-text p-2">{{ groomer.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";

export default {
  props: {
    groomer: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
