<template>
  <div class="div">
    <div
      class="circle d-flex justify-content-center align-items-end position-relative"
    >
      <img
        @click="changePage('groomers-large')"
        :src="groomer.img"
        class="pt-4 mt-5 groomer-p img-fluid position-absolute"
      />
      <h3 class="groomer-text p-2">{{ groomer.name }}</h3>
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

<style lang="scss" scoped>
.circle {
  height: 18em;
  width: 18em;
  background-color: rgb(187, 187, 255);
  border-radius: 50% 10%;
}

.groomer-p {
  height: 18em;
  width: 18em;
  border-radius: 50% 10%;
  border-bottom: 5px black solid;
}

.groomer-text {
  background: rgba(32, 32, 32, 0.591);
  color: white;
  position: absolute;
  bottom: -0.3em;
  z-index: 100;
}
</style>
