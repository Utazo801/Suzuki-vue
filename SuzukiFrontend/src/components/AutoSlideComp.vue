<template>
  <div>
    <b-carousel>
      <b-carousel-slide v-for="i in 4" id="img" :key="i" :src="imageURLs[i]"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AutoSlideComp extends Vue {
  private imageURLs: string[] = [
    "../assets/images/Suzukik/suzuki_ignis.jpg",
    "../assets/images/Suzukik/suzuki_scross_sx4.jpg",
    "../assets/images/Suzukik/suzuki_sport.jpg",
    "../assets/images/Suzukik/suzuki_swift.jpg",
    "../assets/images/Suzukik/suzuki_vitara.jpg"
  ];
}
</script>

<style scoped>
#img {
  max-width: 40%;
}
</style>
