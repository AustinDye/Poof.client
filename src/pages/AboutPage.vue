<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="d-flex">
          <img
            @click="changePage('groomers')"
            src="src/assets/img/lizbitz.png"
            class="pt-4 mt-5 groomer"
          />
        </div>
        <h4 class="text-dark fs-2">Liz Jensen</h4>
        <div class="border w-25 border-danger"></div>
        <p class="fs-5">Dog Groomer</p>
        <p class="p-5 mx-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consequuntur provident est necessitatibus, nulla sapiente, quod
          quidem.
        </p>
        <div class="border w-50 border-primary"></div>
      </div>
      <div class="col-6 justify-content-center d-flex align-items-end">
        <div
          class="circle position-absolute d-flex justify-content-center align-items-center"
        ></div>
        <div
          class="row d-flex position-relative justify-content-center align-item-center"
        >
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
          <div class="col-3 profile-grooms">
            <img
              class="pet-pic"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/273648312_274104028188241_5668297739781079396_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WYhvOdCf6n4AX8lVot0&_nc_ht=scontent-sea1-1.xx&oh=00_AT_FOkT41fmPEYrd_l7gHJvfG_WHYwne-gk4r8ivkmYqHA&oe=62E570F1"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/_variables.scss";

.groomer {
  height: 14em;
  width: 14em;
  background-color: rgb(187, 187, 255);
  border-radius: 100%;
}
.profile-grooms {
  padding: 1em;
}
.pet-pic {
  border-radius: 1em;
}

.circle {
  background-color: rgba($info, 1);
  bottom: 16em;
  height: 40%;
  width: 40%;
  border-radius: 100% 0% 0% 0%;
}
</style>
