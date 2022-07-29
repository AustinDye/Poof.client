<template>
  <header class="sticky-top">
    <Navbar @scroll="scrollToElement" />
  </header>
  <main>
    <div class="container-fluid">
      <!--TOP SECTION-->

      <div class="row grad mx-5 top-area anchor" ref="top"><HomeSection /></div>

      <!--MID SECTION-->

      <div id="midarea" class="row bg-info p-4" ref="middle">
        <ServicesSection />
      </div>

      <!--BOTTOM SECTION-->

      <div ref="bottom" class="row bg-white p-5 my-5"><AboutSection /></div>

      <div ref="groomers" class="row bg-info p-5 my-5">
        <GroomersSection />
      </div>

      <div
        class="row bg-info this-place d-flex justify-content-end px-5"
        ref="gallery"
      >
        <GallerySection />
      </div>

      <!--wayBottom SECTION-->
      <div class="row py-5 p-2" ref="wayBottom">
        <LocationSection />
      </div>
      <div class="row" id="other"><h1>hello</h1></div>
    </div>
    <Footer @scroll="scrollToElement" />
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
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
    Navbar,
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
