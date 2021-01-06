<template>
  <section class="AutoSzuro">
    <b-container class="Kereses">
      <b-row>
        <b-col class="Param">
          <p>Kategória:</p>
          <b-form-select v-model="selected">
            <option disabled value="">Válasszon egy kategóriát</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Teljesítmény:</p>
          <b-form-select v-model="selected">
            <option disabled value="">Válasszon egy teljesítményt</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Szín:</p>
          <b-form-select v-model="selected">
            <option disabled value="">Válasszon egy színt</option>
          </b-form-select>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="Param">
          <p>Ár:</p>
          <p id="minPrice">-1</p>
          <p id="maxPrice">42</p>
          <b-form-input type="range"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-button @click="SearchCar()">Keress</b-button>
    </b-container>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AutoListaComp extends Vue {
  // Példa komponensnek átadott (input) adatra:
  // ==========================================
  @Prop() private msg!: string;

  public SearchCar() {
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
</style>
