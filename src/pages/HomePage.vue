<template>
  <header class="sticky-top">
    <Navbar @scroll="scrollToElement" />
  </header>
  <main>
    <div class="container-fluid">
      <!--TOP SECTION-->

      <div class="row grad mx-5 top-area anchor" ref="top">
        <div class="col-md-5 pt-5">
          <div class="py-5 top-text">
            <h1 class="text-center top-dog">Title Text Wow So Cool</h1>
            <div class="color-splash mb-3 bg-danger w-100"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa.
            </p>
          </div>
        </div>
        <div
          class="col-md-7 d-flex img-wrapper justify-content-center align-items-end position-relative"
        >
          <div class="d-flex" ref="top">
            <img
              class="img-fluid three-dogs"
              src="src/assets/img/3dogsnobackground.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <!--MID SECTION-->

      <div id="midarea" class="row bg-info p-2" ref="middle">
        <div class="col-md-5 mt-5">
          <div class="rounded-circle bg-white">
            <img
              class=""
              src="https://jankrepl.github.io/assets/images/symbolic_regression/main_files/cute-dog-transparent-background.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-md-7 my-5 about-service">
          <div class="p-3">
            <h1 class="text-white">What We Do</h1>
            <div class="color-splash mb-3 bg-success w-50"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa.
            </p>
          </div>

          <div class="content-box p-2 m-4 my-5">
            <h3><i class="mdi mdi-content-cut mx-3"></i>Grooming</h3>
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
            <h3><i class="mdi mdi-shower mx-3"></i>Bathing</h3>
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
            <h3><i class="mdi mdi-hair-dryer mx-3"></i>More!</h3>
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

      <div ref="bottom" class="row bg-white p-5 my-5">
        <div class="col-md-8 py-5">
          <div>
            <h1 class="">Who We Are</h1>
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

      <div class="row bg-info this-place d-flex justify-content-end">
        <!--<div class="col-12 w-100 pt-5">
          <img
            class="img-fluid rounded shop-image"
            src="https://www.smoochyapooch.com.au/uploads/1/0/2/1/102124530/panorama_orig.jpeg"
            alt=""
          />
        </div>-->
        <div class="col-md-8 rounded-bottom">
          <div
            class="row d-flex justify-content-between align-content-center p-3 py-4 pb-5 gallery-holder"
          >
            <h3 class="text-end fs-1">Gallery</h3>
            <div class="color-splash mb-3 bg-primary w-75"></div>
            <div class="col-12 d-flex justify-content-end">
              <div></div>
            </div>
            <div class="col-2 rounded">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KiQDXz5Dv0sAX8y-Vd7&_nc_ht=scontent-sea1-1.xx&oh=00_AT95209dwNDznhuoY1bDlkerP8GSkqmV44xlw_J8cubixA&oe=62E460DF"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/274506110_285661043699206_3788085950883516724_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pVJK1PGMGaMAX-qb3ub&_nc_ht=scontent-sea1-1.xx&oh=00_AT8ZsnrJo_GDZro1btDMWTmTzMBL2-IbEeUZc4O7kvC7fg&oe=62E4E93F"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/283516196_344714747793835_2385254879953852717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KiQDXz5Dv0sAX8y-Vd7&_nc_ht=scontent-sea1-1.xx&oh=00_AT95209dwNDznhuoY1bDlkerP8GSkqmV44xlw_J8cubixA&oe=62E460DF"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/274506110_285661043699206_3788085950883516724_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pVJK1PGMGaMAX-qb3ub&_nc_ht=scontent-sea1-1.xx&oh=00_AT8ZsnrJo_GDZro1btDMWTmTzMBL2-IbEeUZc4O7kvC7fg&oe=62E4E93F"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
            <div class="col-2">
              <img
                class="img-fluid pet-pics"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <!--wayBottom SECTION-->
      <div class="row py-5 p-2" ref="wayBottom">
        <div class="col-12 justify-content-center align-items-center p-5 ms-3">
          <h1 class="fs-1">LOCATION</h1>
          <div class="color-splash mb-3 bg-danger w-25"></div>
          <h4>10542 W Fairview Ave, Boise, ID 83704</h4>
        </div>
        <div class="col-md-6">
          <GMapMap
            class="d-flex justify-content-center align-items-center"
            :center="center"
            :zoom="13"
            map-type-id="roadmap"
            style="width: 80%; height: 50vh; border-radius: 10px"
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
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <table class="table table-striped" style="width: 80%; height: 50vh">
            <thead class="thead">
              <th>Day</th>
              <th>Hours</th>
            </thead>
            <tbody class="table table-striped justify-content-center">
              <tr>
                <td>Monday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>7:30 AM - 3:30 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td class="">-closed-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer @scroll="scrollToElement" />
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
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
  components: { Navbar, Footer },
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

.top-dog {
  font-family: "Inter", sans-serif;
  font-size: 6em;
  color: rgb(39, 39, 39);
  font-weight: bold;
}

h1 {
  font-family: "Inter", sans-serif;
  font-size: 4em;
  color: rgb(39, 39, 39);
  font-weight: bold;
}
h2 {
  font-family: "Inter", sans-serif;
  font-size: 3em;
  color: rgb(39, 39, 39);
  font-weight: bold;
}

h3 {
  font-family: "Inter", sans-serif;
  font-size: 2em;
  color: #ffffff;
  font-weight: bold;
}

b {
  font-family: "Modak", cursive;
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

.date-box {
  outline: 2px rgba(6, 6, 6, 0.297) solid;
}
.mid-area {
  z-index: 100;
}

.this-place {
  background-image: url("https://www.smoochyapooch.com.au/uploads/1/0/2/1/102124530/panorama_orig.jpeg");
}

.gallery-holder {
  background-color: rgba(0, 0, 0, 0.763);
  position: relative;
  height: 70vh;
}
.pet-pics {
  transition: 1000ms;
  padding-top: 1em;
}

.pet-pics:active {
  transition: 1000ms;
  margin-left: 0%;
  width: 100%;
  position: absolute;
  height: 100%;
  left: -50vw;
  top: 0;
}

.dog-items {
  top: 10%;
}

.icon-fun {
  font-size: 10em;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100em);
  }
  to {
    transform: translateX(0em);
  }
}

.three-dogs {
  animation: fadeIn;
  animation-duration: 2000ms;
}

.top-text {
  animation: slideIn;
  animation-duration: 2000ms;
}
</style>
