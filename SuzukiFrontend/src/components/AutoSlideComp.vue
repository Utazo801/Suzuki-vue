<template>
  <div class="Slider">
    <b-carousel id="carousel" indicators controls img-width="720" img-height="480">
      <b-carousel-slide
        caption="Suzuki Ignis"
        img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg/1920px-2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Suzuki SX4 S-Cross"
        img-src="https://www.suzuki.sk/automobily/sites/default/files/images_model_color/10_cosmic_black_790x427_0.jpg"
      ></b-carousel-slide>
      <b-carousel-slide caption="Suzuki Swift Sport" img-src="https://auto.suzuki.hu/swiftsport/assets/img/asvanyszurke@2x.webp"></b-carousel-slide>
      <b-carousel-slide
        caption="Suzuki Swift"
        img-src="https://ipravda.sk/res/2020/07/15/thumbs/suzuki-swift-2021_04-nestandard1.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Suzuki Vitara"
        img-src="https://upload.wikimedia.org/wikipedia/commons/f/fd/2016_Suzuki_Vitara_SZ5_Rugged_1.6.jpg"
      ></b-carousel-slide>
    </b-carousel>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AutoSlideComp extends Vue {
  private imageURLs: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg/1920px-2018_Suzuki_Ignis_SZ5_SHVS_Allgrip_1.2_Front.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2018_Suzuki_SX4_S-Cross_SZ5_DDIS_Allgrip_1.6_Front.jpg/300px-2018_Suzuki_SX4_S-Cross_SZ5_DDIS_Allgrip_1.6_Front.jpg",
    "https://auto.suzuki.hu/swiftsport/assets/img/asvanyszurke@2x.webp",
    "https://ipravda.sk/res/2020/07/15/thumbs/suzuki-swift-2021_04-nestandard1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/2016_Suzuki_Vitara_SZ5_Rugged_1.6.jpg"
  ];
}
</script>

<style scoped>
.Slider {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
}
#carousel {
  margin: auto;
  max-width: 50%;
  max-height: 50%;
}
#img {
  max-width: 50%;
  max-height: 80%;
}
</style>
