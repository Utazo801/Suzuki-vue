<template>
  <div>
    <b-card v-for="car in $store.getters.cars" :key="car.id" class="card">
      <h5>{{ car.CarName }}</h5>
      <b-card-text>Lóerő: {{ car.BHP }}</b-card-text>
      <b-card-text>Elérherő színek: {{ car.AvailableColors }}</b-card-text>
      <b-card-text>Ár {{ car.Price }} Ft</b-card-text>
      <b-card-text>Lóerő {{ car.description }}</b-card-text>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AutoEredmenyComp extends Vue {
  public mounted() {
    this.$store.dispatch("getCars");
  }
}
</script>

<style scoped>
#auto_kep {
  max-width: 20%;
}
.card {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
