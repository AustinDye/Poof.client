<template>
  <header class="sticky-top">
    <NewNavbar @scroll="scrollToElement" />
  </header>
  <main>
    <div class="container-fluid">
      <!--TOP SECTION-->

      <div class="row grad mx-2 mx-lg-5 top-area anchor px-lg-5" ref="top">
        <HomeSection />
      </div>

      <!--SERVICES SECTION-->

      <div id="midarea" class="row bg-info" ref="middle">
        <ServicesSection />
      </div>

      <div class="row d-flex bot" ref="gallery" v-scrollanimation>
        <BotiqueSection />
      </div>
      <!-- <router-view /> -->

      <!--GROOMERS SECTION-->
      <a ref="groomers">
        <router-view />
      </a>

      <!--GALLERY SECTION-->

      <!--wayBottom SECTION-->
      <div class="row justify-content-center py-5 p-2 mb-lg-5" ref="wayBottom">
        <LocationSection />
      </div>

      <!--Footer SECTION-->
    </div>
    <Footer @scroll="scrollToElement" />
  </main>
</template>

<script>
import NewNavbar from "../components/NewNavbar.vue";
import Footer from "../components/Footer.vue";
import HomeSection from "../components/HomeSection.vue";
import AboutPage from "./AboutPage.vue";
import AboutSection from "../components/AboutSection.vue";
import GallerySection from "../components/GallerySection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import BotiqueSection from "../components/BotiqueSection.vue";
import LocationSection from "../sections/LocationSection.vue";
export default {
  name: "Home",
  methods: {
    scrollToElement(target) {
      console.log(target);
      let el = this.$refs[target];
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },

  components: {
    NewNavbar,
    Footer,
    HomeSection,
    AboutPage,
    AboutSection,
    GallerySection,
    ServicesSection,
    BotiqueSection,
    LocationSection,
  },
  setup() {
    const route = useRoute();
    const showDetails = ref(false);
    watchEffect(() => {
      if (route.name == "details") {
        showDetails.value = true;
      }
    });
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";
.banner {
  margin-top: 1em;
  border: 0.5em white solid;
  background-color: rgba($info, 1);
  // box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.195);
}
h1 {
  font-family: "Dimbo", sans-serif;
  font-size: 8em;
  color: rgb(39, 39, 39);
}
.bot {
  padding: 2em;
}
.bot {
  @media only screen and (orientation: landscape) {
    padding-left: 15em;
    padding-right: 15em;
    padding-top: 4em;
  }
}
#midarea {
  padding: 2em;
  @media only screen and (orientation: landscape) {
    padding: 5em;
    padding-left: 12em;
    padding-right: 15em;
  }
}
</style>
