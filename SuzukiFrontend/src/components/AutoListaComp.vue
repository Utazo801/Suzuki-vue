<template>
  <div class="Suzuki">
    <section class="AutoSzuro"></section>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="CategorySelect" label="Cars:" label-for="category"><b-form-select id="category" v-model=""></b-form-select></b-form-group>
    </b-form>
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
