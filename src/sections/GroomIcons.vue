<template>
  <div class="groom-circle" :style="`--bg-color: ${groomer.color}`">
    <p class="title-text fade-text">{{ groomer.name }}</p>
    <img
      :src="groomer.img"
      class="groomer-p"
      :alt="'image of {{groomer.name}}'"
    />
    <p class="groomer-text">{{ groomer.name }}</p>
    <div class="swirly"></div>
    <div class="profile-button btn">
      <i class="mdi mdi-chevron-right" @click="showGroomerDetails()"></i>
    </div>
  </div>

  <router-view groomer="groomer" />
</template>

<script>
import { AppState } from "../AppState";
import { useRouter } from "vue-router";

export default {
  props: {
    groomer: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      showGroomerDetails() {
        router.push({ name: "details", params: { id: props.groomer.id } });
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
  width: 285px;
  height: 285px;
  background: rgba(208, 67, 255, 0);
  border-right: 0em rgb(255, 255, 255) solid;
  border-radius: 100%;
}

.profile-button {
  position: absolute;
  display: flex;
  opacity: 1;
  color: rgba(174, 174, 174, 0.203);
  bottom: 7em;
  left: 200px;
  transition: 200ms;
  font-size: 1.75em;
}

.groom-circle {
  --bg-color: rgba(0, 0, 255, 0.145);
  margin-top: 6em;
  height: 285px;
  width: 285px;
  background: var(--bg-color);
  border-radius: 50%;
  transition: 400ms;
  position: relative;

  &:hover {
    & > .swirly {
      position: absolute;
      width: 18em;
      height: 18em;
      background: rgba(208, 67, 255, 0);
      border-right: 6em rgb(255, 255, 255) solid;
      transition-delay: 200ms;
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
      animation: colorHover 2s;
      animation-iteration-count: infinite;
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

.groom-circle {
  animation: createBox 0.25s;
  // width: 98px;
  // height: 98px;
}
@keyframes createBox {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.groomer-p {
  position: absolute;
  height: 285px;
  width: 285px;
  border-radius: 50% 0%;
  border-bottom: 50px rgb(255, 255, 255) solid;
  transition: 500ms;
}

.groomer-text {
  font-size: 1.4em;
  border-radius: 2%;
  color: black;
  position: absolute;
  left: 2%;
  top: 11em;
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
</style>
