<template>
  <div>
    <p id="Description">Valami leírás</p>
    <img id="auto_kep" src="../assets/images/test_kep.jpg" alt="teszt kép" title="teszt kép" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AutoEredmenyComp extends Vue {}
</script>

<style scoped>
#auto_kep {
  max-width: 20%;
}
</style>
