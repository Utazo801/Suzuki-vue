<template>
  <div class="suzuki">
    <header id="fejlec">
      <div class="container-fluid h-50">
        <div class="row h-50 align-items-center">
          <div class="col-12 text-center">
            <img id="logo" src="https://www.carlogos.org/logo/Suzuki-logo-6500x1400.png" alt="suzuki_logo" title="suzuki_logo" />
            <h2 class="motto"><i>Ahol az autók életre kelnek</i></h2>
          </div>
        </div>
      </div>
    </header>
    <div class="conatiner">
      <h3>Nálunk megtalálja álomautóját!</h3>
    </div>
    <AutolistaComp></AutolistaComp>
    <!--Nem akarja betölteni a komponenst, pedig úgy csinálom, ahogy a template kódja is működik--->
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
