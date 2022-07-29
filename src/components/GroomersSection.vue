<template>
  <div class="row"></div>
  <div class="col-12 loader">
    <div class="row groomers-container" id="groomers">
      <div class="col-3">
        <div class="container-fluid">
          <div
            class="circle position-relative d-flex justify-content-center align-items-center"
          >
            <img
              @click="changePage()"
              src="src/assets/img/lizbitz.png"
              class="pt-5 mt-3 groomer first-groomer img-fluid position-absolute btn"
            />
            <h3 class="groomer-text p-2">Liz Jensen</h3>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="container-fluid">
          <div
            class="shape position-relative d-flex bg-success justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/wowom-removebg-preview.png"
              class="groomer first-groomer img-fluid position-absolute pt-5 mt-2"
            />
            <h3 class="groomer-text p-2">The Poof</h3>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="container-fluid">
          <div
            class="shape-2 position-relative d-flex bg-warning justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/John_marston.webp"
              class="groomer first-groomer img-fluid position-absolute pt-4 mt-2"
            />
            <h3 class="groomer-text p-2">John Marston</h3>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="container-fluid">
          <div
            class="shape-3 position-relative d-flex bg-secondary justify-content-center align-items-center"
          >
            <img
              src="src/assets/img/152-1521917_bastion-bastion-overwatch-transparent (1).png"
              class="groomer first-groomer img-fluid position-absolute pt-3"
            />
            <h3 class="groomer-text p-2">Bastion</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      changePage() {
        let profile = document.getElementById("groomers");

        let userProfile = `
  
       <div class="col-12 d-flex bg-primary">
        <div class="container-fluid">
          <div class="row groomer-profile">
            <div class="col-3">
              <img
                src="src/assets/img/lizbitz.png"
                class=" bg-primary w-75"
              />
            </div>
            <div class="col-8">
              <h3 class="groomer-text p-2">Liz Jensen</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                laboriosam cupiditate necessitatibus distinctio. Adipisci
                doloribus obcaecati voluptate, error a consequatur magnam, nemo
                aliquam perferendis quos voluptatem laborum! Sit, repellendus
                modi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 bg-black">
        <div
          class="row d-flex justify-content-end "
        >
       

          <div class="col-12 d-flex justify-content-end">

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
          
        </div>
      </div>`;
        profile.innerHTML = userProfile;
        return profile;
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/_variables.scss";

.groomer-text {
  background: rgba(32, 32, 32, 0.591);
  color: white;
  position: absolute;
  bottom: 0;
  z-index: 100;
}

.loader {
  height: 100%;
}

.groomer-profile {
  animation: growFade 1000ms;
}
@keyframes growFade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
.circle {
  height: 18em;
  width: 18em;
  background-color: rgb(187, 187, 255);
  border-radius: 50% 10%;
}

.shape {
  height: 18em;
  width: 18em;

  border-radius: 40% 20% 80% 10%;
}

.shape-2 {
  height: 18em;
  width: 18em;

  border-radius: 100% 100% 100% 10%;
}

.shape-3 {
  height: 18em;
  width: 18em;

  border-radius: 80% 50% 80% 100%;
}
</style>
