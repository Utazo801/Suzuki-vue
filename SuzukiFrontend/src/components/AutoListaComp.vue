<template>
  <div class="Suzuki">
    <section class="AutoSzuro">
      <b-form>
        <label for="category">Kategória</label>
        <b-form-select id="category">
          <b-select-option v-for="car in $store.getters.cars" :key="car.id" :value="car.CarName">{{ car.CarName }}</b-select-option>
        </b-form-select>
        <hr />
        <label for="color">Szín</label>
        <b-form-select id="color">
          <b-select-option v-for="car in $store.getters.cars" :key="car.id" :value="car.Color">{{ car.Color }}</b-select-option>
        </b-form-select>
        <hr />
        <label for="BHP">Lóerő</label>
        <b-form-select id="BHP">
          <b-select-option v-for="car in $store.getters.cars" :key="car.id" :value="car.BHP">{{ car.BHP }}</b-select-option>
        </b-form-select>
        <hr />
        <label for="price">Ár</label>
        <b-form-input id="price" v-model="priceRange" lazy type="range" min="0" max="5000000" step="100000" />
        <div>{{ priceRange }} Ft</div>
        <b-button type="button" @click="Search">Keresés</b-button>
      </b-form>
    </section>
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
  private priceRange: string = "";
  private startedSearch: boolean = false;
  public mounted() {
    this.$store.dispatch("getCars");
  }
  public Search() {
    this.startedSearch = true;
  }
}
</script>
<style scoped>
.AutoSzuro {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
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
