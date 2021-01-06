<template>
  <div>
    <img id="logo" src="../assets/images/logo.png" alt="Logo" />
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

<style scoped>
#logo {
  max-width: 10%;
}
</style>
