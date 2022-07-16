<template>
  <div class="">
    <div class="row">
      <div class="col-md-5 p-5">
        <div>
          <b class="text-center fs-1"
            >Our Fuzzy Friends Deserve to be Pampered</b
          >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            aliquid veritatis voluptatum enim a placeat deleniti quas ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            earum velit aut vitae ut praesentium est a architecto, provident
            impedit porro natus. Praesentium dolor iusto neque eius, officia
            eligendi inventore!
          </p>
        </div>
      </div>
      <div class="col-md-7 position-relative mt-5">
        <span class="d-flex justify-content-around">
          <i>Baths</i>
          <b>|</b>

          <i>Haircuts</i>
          <b>|</b>
          <i>Nails</i>
          <b>|</b>
          <i>and More!</i>
        </span>
        <img
          class="img-fluid position-absolute mt-2 shadow"
          src="src/assets/img/threedogs2.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="row mt-5 justify-content-center bg-info p-3">
      <div class="col-12 d-flex p-3">
        <div class="row mt-5">
          <div class="col-md-6 d-flex">
            <div class="m-3">
              <img
                class="img-fluid shadow"
                src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PiZ1gYKvM7sAX9RbjIv&_nc_ht=scontent-sea1-1.xx&oh=00_AT-pJbM2R8ca5BDxUu4yRZ2wpsder8QkPwXB_Ggyli7e9Q&oe=62D59EF1"
                alt=""
              />
            </div>
            <span class="d-none d-md-block side-imgs">
              <div class="m-3 my-4">
                <img
                  class="img-fluid shadow"
                  src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244635352_193956576202987_8323056181212453055_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VkBavAoPWoEAX-YgZg4&_nc_ht=scontent-sea1-1.xx&oh=00_AT-10ulBGwPRTe2fbhNpm79pLKFEJGxKwHiPHxJQyi_EpA&oe=62D511B8"
                  alt=""
                />
              </div>
              <div class="shadow m-3">
                <img
                  class="img-fluid shadow"
                  src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244635352_193956576202987_8323056181212453055_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VkBavAoPWoEAX-YgZg4&_nc_ht=scontent-sea1-1.xx&oh=00_AT-10ulBGwPRTe2fbhNpm79pLKFEJGxKwHiPHxJQyi_EpA&oe=62D511B8"
                  alt=""
                />
              </div>
            </span>
          </div>
          <div class="col-md-6 mt-5">
            <b class="text-center fs-1">What we do:</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate aliquid veritatis voluptatum enim a placeat deleniti
              quas ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolores, earum velit aut vitae ut praesentium est a
              architecto, provident impedit porro natus. Praesentium dolor iusto
              neque eius, officia eligendi inventore!
            </p>
            <div class="shadow p-2 m-4">
              <h1><i class="mdi mdi-content-cut mx-3"></i>Grooming</h1>
              <div class="row">
                <div class="col-6">
                  <ul>
                    <li>Stuff</li>
                    <li>A feature!</li>
                    <li>We do!</li>
                    <li>We got that!</li>
                    <li>Fun times</li>
                  </ul>
                </div>
                <div class="col-6 px-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  alias ipsa tempore impedit, sed odio mollitia cumque eligendi
                  placeat quia quas.
                </div>
              </div>
            </div>
            <span class="d-flex">
              <div class="shadow rounded w-100 m-4">
                <h1><i class="mdi mdi-shower mx-3"></i>Bathing</h1>
                <ul>
                  <li>Stuff</li>
                  <li>A feature!</li>
                  <li>We do!</li>
                  <li>We got that!</li>
                  <li>Fun times</li>
                </ul>
              </div>
              <div class="shadow rounded w-100 m-4">
                <h1><i class="mdi mdi-hair-dryer mx-3"></i>More!</h1>
                <ul>
                  <li>Stuff</li>
                  <li>A feature!</li>
                  <li>We do!</li>
                  <li>We got that!</li>
                  <li>Fun times</li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.banner {
  margin-top: 1em;
  border: 0.5em white solid;
  background-color: white;
  // box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.195);
}

.headImg {
  border: 0.1em rgba(0, 0, 0, 0.327) solid;
  // box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.195);
}

.shadow {
  background-color: #4a314d8d;
}
.side-imgs {
  margin-top: 15vh;
}
</style>
