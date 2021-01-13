<template>
  <div class="Suzuki">
    <section class="AutoSzuro"></section>
    <b-form-select id="category" :options="$store.getters.cars" :value="$store.getters.cars.CarName"></b-form-select>
    <AutoEredmenyComp v-if="startedSearch" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AutoEredmenyComp from "@/components/AutoEredmenyComp.vue";
import { component } from "vue/types/umd";

@Component({
  components: {
    AutoEredmenyComp
  }
})
export default class AutoListaComp extends Vue {
  // Példa komponensnek átadott (input) adatra:
  // ==========================================
  @Prop() private msg!: string;
  private startedSearch: boolean = false;
  public mounted() {
    this.$store.dispatch("getCars");
  }
  public SearchCar() {
    this.startedSearch = true;
    alert("Siker");
  }
}
</script>
<style scoped>
.Kereses {
  text-align: left;
  max-width: 50%;
  margin: 0px;
}
.Param {
  float: left;
}
#minPrice {
  width: 10% !important;
}
#maxPrice {
  width: 10% !important;
}
</style>
