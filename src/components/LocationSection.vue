<template>
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
      <tbody class="justify-content-center">
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
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped></style>
