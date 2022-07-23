<template>
  <header class="sticky-top">
    <Navbar @scroll="scrollToElement" />
  </header>
  <main>
    <div class="container-fluid">
      <!--TOP SECTION-->

      <div class="row grad mt-5 px-5 top-area anchor" ref="top">
        <div class="col-lg-5 col-sm-5 mt-5 pt-5 px-5">
          <div class="py-5">
            <b class="text-center fs-1"
              >Our Fuzzy Friends Deserve to be Pampered</b
            >
            <div class="color-splash mb-3 bg-danger w-100"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa.
            </p>
          </div>
        </div>
        <div
          class="col-md-7 d-flex img-wrapper justify-content-center align-items-end"
        >
          <div class="d-flex" ref="top">
            <img
              class="img-fluid"
              src="src/assets/img/3dogsnobackground.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--MID SECTION-->

      <div id="midarea" class="row bg-info p-5" ref="middle">
        <div class="col-md-5 p-5 mt-5">
          <div class="rounded-circle bg-white">
            <img
              class=""
              src="https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-md-7 my-5 about-service">
          <div class="mb-5">
            <b class="text-center fs-1">What we do</b>
            <div class="color-splash mb-3 bg-success w-50"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa.
            </p>
          </div>

          <div class="content-box p-2 m-4 my-5">
            <h1><i class="mdi mdi-content-cut mx-3"></i>Grooming</h1>
            <div class="row">
              <div class="col-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                alias ipsa tempore impedit, sed odio mollitia cumque eligendi
                placeat quia quas. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit.
              </div>
            </div>
          </div>

          <div class="content-box p-2 m-4 my-5">
            <h1><i class="mdi mdi-shower mx-3"></i>Bathing</h1>
            <div class="color-splash mb-3 bg- w-50"></div>
            <div class="row">
              <div class="col-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                alias ipsa tempore impedit, sed odio mollitia cumque eligendi
                placeat quia quas.
              </div>
            </div>
          </div>
          <div class="content-box p-2 m-4 my-5">
            <h1><i class="mdi mdi-hair-dryer mx-3"></i>More!</h1>
            <div class="row">
              <div class="col-12 px-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                alias ipsa tempore impedit, sed odio mollitia cumque eligendi
                placeat quia quas.
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--BOTTOM SECTION-->

      <div ref="bottom" class="row bg-white p-5 shadow-sm">
        <div class="col-md-8 py-5">
          <div>
            <b class="text-center fs-1">Who We Are</b>
            <div class="color-splash mb-3 bg-danger w-50"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolores, earum velit aut vitae ut praesentium est a
              architecto, provident impedit porro natus. Praesentium dolor iusto
              neque eius, officia eligendi inventore!Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptate aliquid veritatis
              voluptatum enim a placeat deleniti quas ipsa. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolores, earum velit aut
              vitae ut praesentium est a architecto, provident impedit porro
              natus. Praesentium dolor iusto neque eius, officia eligendi
              inventore!
            </p>
          </div>
          <div>
            <div class="row pt-5">
              <div class="col-md-4 py-2">
                <div class="card p-3">
                  <div class="div d-flex justify-content-center pb-2">
                    <i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i>
                  </div>
                  <i class=""
                    >"My dog, Koda, was groomed by Jamie and I can’t even begin
                    to tell you how fantastic he looks! I love coming here!"
                  </i>
                  <h6 class="pt-3">- Reviewer</h6>
                </div>
              </div>
              <div class="col-md-4 py-2">
                <div class="card p-3">
                  <div class="div d-flex justify-content-center pb-2">
                    <i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i>
                  </div>
                  <i class=""
                    >"My dog, Koda, was groomed by Jamie and I can’t even begin
                    to tell you how fantastic he looks! I love coming here!"
                  </i>
                  <h6 class="pt-3">- Reviewer</h6>
                </div>
              </div>
              <div class="col-md-4 py-2">
                <div class="card p-3">
                  <div class="div d-flex justify-content-center pb-2">
                    <i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i
                    ><i class="mdi mdi-star text-success fs-4"></i>
                  </div>
                  <i class=""
                    >"My dog, Koda, was groomed by Jamie and I can’t even begin
                    to tell you how fantastic he looks! I love coming here!"
                  </i>
                  <h6 class="pt-3">- Reviewer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-4">
          <div class="img-container rounded-circle bg-info mt-5">
            <img
              src="src/assets/img/blackdoggo-removebg-preview.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <!--wayBottom SECTION-->
      <div class="row p-5" ref="wayBottom">
        <div class="col-12 justify-content-center align-items-center">
          <h1>LOCATION</h1>
          <div class="color-splash mb-3 bg-danger w-25"></div>
          <h4>10542 W Fairview Ave, Boise, ID 83704</h4>
        </div>
        <div class="col-md-6 p-5">
          <GMapMap
            :center="center"
            :zoom="13"
            map-type-id="roadmap"
            style="width: 100%; height: 100%; border-radius: 10px"
          >
            <GMapCluster>
              <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
            </GMapCluster>
          </GMapMap>
        </div>
        <div class="col-md-6 d-flex flex-column p-5 my-2">
          <h1 class="py-2 text-center">Hours</h1>

          <div class="row">
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Monday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Tuesday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Wednesday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Thursday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Friday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Saturday</h4>
              <h5>7:30am - 3:30pm</h5>
            </div>
            <div class="col-12 d-flex justify-content-between py-3">
              <h4>Sunday</h4>
              <h5>-CLOSED-</h5>
            </div>
          </div>
        </div>
        <!--<div class="col-md-4 d-flex flex-column p-5">
          <img
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/248908749_206727238259254_5009755208474238134_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O4LP8Hk3URUAX8pImHG&_nc_ht=scontent-sea1-1.xx&oh=00_AT-Ie5QN3GaJB7vnoQH3vt4Xi_IGHgnGVSwLifOpQMq1Rg&oe=62E210C7"
            alt=""
            class="rounded-3"
          />
        </div>-->
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
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
  setup() {
    return {
      center: { lat: 43.62036418660121, lng: -116.3136561693169 },
      markers: [
        {
          position: {
            lat: 43.62036418660121,
            lng: -116.3136561693169,
          },
        }, // Along list of clusters
      ],
    };
  },
  components: { Navbar },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";
.banner {
  margin-top: 1em;
  border: 0.5em white solid;
  background-color: white;
  // box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.195);
}

img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.color-splash {
  height: 0.2em;
}

.img-wrapper {
  right: 0;
  bottom: 0;
}
.anchor {
  position: relative;
}

.round-dog-top {
  border-radius: 15em;
}

h1 {
  font-family: "Bungee", cursive;
}

b {
  font-family: "Bungee", cursive;
}

.dog-text-mid {
  position: absolute;
  border-radius: 10px;
  z-index: 2;
  top: 80%;
  left: 35%;
  background-color: rgba(0, 0, 0, 0.404);
  color: yellow;
  font-family: "Bungee", cursive;
}

.mid-area {
  z-index: 100;
}
</style>
