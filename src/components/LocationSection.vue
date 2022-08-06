<template>
  <div class="col-md-4 mb-4">
    <GMapMap
      :center="center"
      :zoom="13"
      map-type-id="terrain"
      style="height: 350px; border-radius: 1%"
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
    <div class="row">
      <!-- <div class="col-12 justify-content-center d-flex">
				
			</div> -->
      <span class="text-center">
        <h4>
          <i class="mdi mdi-clock mx-1"></i>
          Mon - Sat: 7:30AM - 3:30PM
        </h4>
      </span>
      <span class="text-center">
        <h5>
          <i class="mdi mdi-phone mx-1"></i>

          208-555-5555
        </h5>
      </span>
    </div>
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
