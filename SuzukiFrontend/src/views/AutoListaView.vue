<template>
  <div class="auto">
    <img id="logo" src="https://www.carlogos.org/logo/Suzuki-logo-6500x1400.png" alt="suzuki_logo" title="suzuki_logo" />
    <h2 class="motto">Ahol az autók életre kelnek</h2>
  </div>
</template>

<script lang="ts">
import AutoListaComp from "@/components/AutoListaComp.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AutoListaComp
  }
})
export default class AutoListaView extends Vue {}
</script>

<style scoped>
#logo {
  max-width: 30%;
}
</style>
