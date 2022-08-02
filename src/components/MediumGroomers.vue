<template>
  <div
    class="row groomers-container d-none d-sm-flex d-md-flex d-lg-none"
    id="groomers"
  >
    <div class="col-12 justify-content-center d-flex">
      <i class="mdi mdi-circle text-primary fs-3"></i>
    </div>
    <div class="col-md-12 d-flex bg-info">
      <div class="container-fluid">
        <div
          class="circle position-relative d-flex justify-content-center align-items-center"
        >
          <img
            @click="changePage('groomers')"
            src="src/assets/img/lizbitz.png"
            class="pt-4 mt-5 groomer first-groomer img-fluid position-absolute"
          />
          <h3 class="groomer-text p-2">Liz Jensen</h3>
        </div>
      </div>
    </div>
    <div class="col-12 justify-content-center d-flex">
      <i class="mdi mdi-circle text-success fs-3"></i>
    </div>
    <div class="col-md-12 col-lg-3 d-flex">
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
      <div
        class="d-md-flex d-lg-none justify-content-center align-items-center"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          laboriosam cupiditate necessitatibus distinctio.
        </p>
        <div class="btn d-flex">
          <p>Details</p>
          <i class="mdi mdi-chevron-right pt-1"></i>
        </div>
      </div>
    </div>
    <div class="col-12 justify-content-center d-flex">
      <i class="mdi mdi-circle text-warning fs-3"></i>
    </div>

    <div class="col-md-12 col-lg-3 d-flex bg-info">
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
      <div
        class="d-md-flex d-lg-none justify-content-center align-items-center"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          laboriosam cupiditate necessitatibus distinctio.
        </p>
        <div class="btn d-flex">
          <p>Details</p>
          <i class="mdi mdi-chevron-right pt-1"></i>
        </div>
      </div>
    </div>
    <div class="col-12 justify-content-center d-flex">
      <i class="mdi mdi-circle text-secondary fs-3"></i>
    </div>
    <div class="col-md-12 col-lg-3 d-flex bg-info">
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
      <div
        class="d-md-flex d-lg-none justify-content-center align-items-center"
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
          laboriosam cupiditate necessitatibus distinctio.
        </p>
        <div class="btn d-flex">
          <p>Details</p>
          <i class="mdi mdi-chevron-right pt-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
