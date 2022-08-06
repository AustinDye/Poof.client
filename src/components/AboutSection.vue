<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="d-flex">
          <img src="src/assets/img/lizbitz.png" class="pt-4 mt-5 groomer" />
        </div>
        <h4 class="text-dark fs-2">Liz Jensen</h4>
        <div class="border w-25 border-danger"></div>
        <p class="fs-5">Dog Groomer</p>
        <p class="p-5 mx-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consequuntur provident est necessitatibus, nulla sapiente, quod
          quidem.
        </p>
      </div>
      <div class="col-6 justify-content-center d-flex align-items-end">
        <div
          class="circle position-absolute d-flex justify-content-center align-items-center"
        ></div>
        <div
          class="row d-flex position-relative justify-content-center align-item-center"
        >
          <div class="col-3 profile-grooms"></div>
          <div class="col-3 profile-grooms"></div>
          <div class="col-3 profile-grooms"></div>
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
