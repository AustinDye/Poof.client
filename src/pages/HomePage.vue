<template>
  <button class="btn" @click="scrollToElement">sffgf</button>
  <div class="container-fluid">
    <!--TOP SECTION-->

    <div class="row grad mt-5 px-5 top-area">
      <div class="col-md-5 mt-5 pt-5 px-5">
        <div class="py-5">
          <b class="text-center fs-1"
            >Our Fuzzy Friends Deserve to be Pampered</b
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
          </p>
        </div>
      </div>
      <div class="col-md-7 d-flex">
        <div class="img-container d-none d-md-flex">
          <img
            class="img-fluid"
            src="src/assets/img/3dogsnobackground.png"
            alt=""
          />
        </div>
        <div class="img-container d-md-none d-flex">
          <img
            class="img-fluid"
            src="src/assets/img/3dogsnobackground.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <!--MID SECTION-->

    <div id="mid-area" class="row bg-info p-5" ref="middle">
      <div class="col-md-5 p-5 mt-5">
        <div class="rounded-circle bg-dark">
          <img class="" src="src/assets/img/dog_PNG50322.png" alt="" />
        </div>
      </div>
      <div class="col-md-7 my-5 about-service">
        <div class="mb-5">
          <b class="text-center fs-1">What we do:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
          </p>
        </div>

        <div class="content-box p-2 m-4 my-5">
          <h1><i class="mdi mdi-content-cut mx-3"></i>Grooming</h1>
          <div class="row">
            <div class="col-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias
              ipsa tempore impedit, sed odio mollitia cumque eligendi placeat
              quia quas. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit.
            </div>
          </div>
        </div>

        <div class="content-box p-2 m-4 my-5">
          <h1><i class="mdi mdi-shower mx-3"></i>Bathing</h1>
          <div class="row">
            <div class="col-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias
              ipsa tempore impedit, sed odio mollitia cumque eligendi placeat
              quia quas.
            </div>
          </div>
        </div>
        <div class="content-box p-2 m-4 my-5">
          <h1><i class="mdi mdi-hair-dryer mx-3"></i>More!</h1>
          <div class="row">
            <div class="col-12 px-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A alias
              ipsa tempore impedit, sed odio mollitia cumque eligendi placeat
              quia quas.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--BOTTOM SECTION-->

    <div class="row bg-white p-5 shadow-sm">
      <div class="col-md-8 py-5">
        <div>
          <b class="text-center fs-1">Who We Are:</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            earum velit aut vitae ut praesentium est a architecto, provident
            impedit porro natus. Praesentium dolor iusto neque eius, officia
            eligendi inventore!Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptate aliquid veritatis voluptatum enim a
            placeat deleniti quas ipsa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolores, earum velit aut vitae ut praesentium est
            a architecto, provident impedit porro natus. Praesentium dolor iusto
            neque eius, officia eligendi inventore!
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
                  >"My dog, Koda, was groomed by Jamie and I can’t even begin to
                  tell you how fantastic he looks! I love coming here!"
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
                  >"My dog, Koda, was groomed by Jamie and I can’t even begin to
                  tell you how fantastic he looks! I love coming here!"
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
                  >"My dog, Koda, was groomed by Jamie and I can’t even begin to
                  tell you how fantastic he looks! I love coming here!"
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

    <div class="row p-5">
      <div class="col-md-8 p-5">
        <h1 class="py-2">Come See Us</h1>
        <img
          class="img-fluid my-5"
          src="https://developers.google.com/static/codelabs/maps-platform/full-stack-store-locator/img/58a6680e9c8e7396.png"
          alt=""
        />

        <h6>10542 West Fairview Avenue, Boise, ID, United States, 83704</h6>
      </div>
      <div class="col-md-4 p-5">
        <h1 class="py-2">Hours</h1>
        <h5>Monday: 7:30am - 3:30pm</h5>
        <h5>Tuesday: 7:30am - 3:30pm</h5>
        <h5>Wednsday: 7:30am - 3:30pm</h5>
        <h5>Thursday: 7:30am - 3:30pm</h5>
        <h5>Friday: 7:30am - 3:30pm</h5>
        <h5>Saturday: 7:30am - 3:30pm</h5>
        <h5>Sunday: Closed</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$refs.middle;
  },

  methods: {
    scrollToElement() {
      let el = this.$refs.middle;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
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
