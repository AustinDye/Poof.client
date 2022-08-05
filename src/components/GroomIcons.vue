<template>
  <div class="circle" style="background: {{groomer.color}}">
    <h3 class="fade-text">{{ groomer.name }}</h3>
    <img :src="groomer.img" class="groomer-p" />
    <h3 class="groomer-text">{{ groomer.name }}</h3>
    <div class="swirly"></div>
    <div class="profile-button btn">
      <h4>About</h4>
      <i class="mdi mdi-chevron-right"></i>
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
@import "src/assets/scss/_variables.scss";

.mdi-chevron-right {
  position: absolute;
  font-size: 3em;
  transition: 500ms;

  &:hover {
    animation: colorHover 2s;
    animation-iteration-count: infinite;
  }
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
  opacity: 0;
  bottom: 5em;
  right: 0.2em;
  transition: 200ms;
  font-size: 1.75em;
}
.circle {
  margin-top: 4em;
  height: 18em;
  width: 18em;
  background: rgba(114, 159, 255, 0.865);
  border-radius: 50%;
  transition: 400ms;
  position: relative;
  display: flex;

  &:hover {
    & > .swirly {
      position: absolute;
      width: 18em;
      height: 18em;
      background: rgba(208, 67, 255, 0);
      border-right: 6em rgb(255, 255, 255) solid;
      transition-delay: 400ms;
    }
    & > .groomer-text {
      left: 17em;
      top: 33vh;
      font-size: 0.5em;
      opacity: 0;
    }

    & > .profile-button {
      opacity: 100;
      transition-delay: 500ms;
    }

    & > .fade-text {
      opacity: 100;
      transition-delay: 400ms;
    }
    & > .groomer-p {
      border-radius: 50% 50%;
      border-bottom: 0em rgb(255, 255, 255) solid;
    }
  }
}

.groomer-p {
  padding-top: 1em;
  position: absolute;
  height: 18em;
  width: 18em;
  border-radius: 50% 10%;
  border-bottom: 3.5em rgb(255, 255, 255) solid;
  transition: 400ms;
}

.groomer-text {
  font-size: 1.7em;
  border-radius: 2%;
  color: black;
  position: absolute;
  left: 2%;
  top: 9em;
  bottom: 0.25em;
  z-index: 100;
  transition: 300ms;
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
@keyframes colorHover {
  0% {
    color: rgba($success, 0.8);
    text-shadow: 5px 0px 0px rgba($info, 0.8);
  }
  50% {
    color: rgba($info, 0.8);
    text-shadow: 5px 0px 0px rgba($success, 0.8);
  }

  100% {
    color: rgba($success, 0.8);
    text-shadow: 5px 0px 0px rgba($info, 0.8);
  }
}

@keyframes swirl {
  0% {
    border-left: 0em rgba(255, 255, 255, 0.523) solid;
    border-radius: 100%;
    border-bottom: 0em rgba(255, 255, 255, 0.523) solid;
    border-top: 0em rgba(255, 255, 255, 0.523) solid;
    border-right: 0em rgb(255, 255, 255) solid;
  }

  100% {
    border-left: 0em rgb(255, 255, 255) solid;
    border-radius: 100%;
    border-bottom: 0em rgb(255, 255, 255) solid;
    border-top: 0em rgb(255, 255, 255) solid;
    border-right: 6em rgb(255, 255, 255) solid;
  }
}
</style>
