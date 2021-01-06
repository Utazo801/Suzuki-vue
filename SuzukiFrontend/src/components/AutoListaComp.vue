<template>
  <section class="AutoSzuro">
    <b-container class="Kereses">
      <b-row>
        <b-col class="Param">
          <p>Kategória:</p>
          <b-form-select v-model="selected">
            <option value="">Válasszon egy kategóriát</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Teljesítmény:</p>
          <b-form-select v-model="selected">
            <option value="">Válasszon egy teljesítményt</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Szín:</p>
          <b-form-select v-model="selected">
            <option value="">Válasszon egy színt</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Ár:</p>
          <span>Minimum</span><b-form-input id="minPrice" value="-1"></b-form-input> <span>Maximum</span
          ><b-form-input id="maxPrice" value="42"></b-form-input>
          <b-form-input v-model="rangeValue" type="range"></b-form-input>
          <span v-text="SeekedPrice"></span>
        </b-col>
      </b-row>
      <br />
      <b-button @click="SearchCar()">Keress</b-button>
    </b-container>
    <AutoEredmenyComp v-if="startedSearch" />
  </section>
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
