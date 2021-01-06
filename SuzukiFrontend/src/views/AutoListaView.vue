<template>
  <div>
    <img src="https://www.cleanpng.com/png-suzuki-sx4-logo-car-suzuki-jimny-1975847/" alt="Logo" />
    <br />
    <span>Ahol az autók életre kelnek</span>
    <AutoSlideComp />
    <AutoListaComp />
  </div>
</template>

<script lang="ts">
import AutoSlideComp from "@/components/AutoSlideComp.vue";
import AutoListaComp from "@/components/AutoListaComp.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AutoSlideComp,
    AutoListaComp
  }
})
export default class CsudijoView extends Vue {}
</script>

<style scoped></style>
