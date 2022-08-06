<template>
  <header class="sticky-top">
    <NewNavbar @scroll="scrollToElement" />
  </header>
  <main>
    <div class="container-fluid">
      <!--TOP SECTION-->

      <div class="row grad mx-5 top-area anchor" ref="top">
        <HomeSection />
      </div>

      <!--SERVICES SECTION-->

      <div id="midarea" class="row bg-info p-4" ref="middle">
        <ServicesSection />
      </div>
      <div
        class="row d-flex pb-5 mb-5"
        ref="gallery"
        v-scrollanimation="{ before: 'before-enter', after: 'upon-exit' }"
      >
        <BotiqueSection />
      </div>
      <router-view />

      <!--ABOUT SECTION-->

      <!--<div ref="bottom" class="row bg-white p-5 my-5">
        <AboutSection />
      </div>-->

      <!--GROOMERS SECTION-->
      <div ref="groomers" class="row bg-info">
        <GroomersSection />
      </div>

      <!--GALLERY SECTION-->

      <!--wayBottom SECTION-->
      <div class="row py-5 p-2" ref="wayBottom">
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
</style>
