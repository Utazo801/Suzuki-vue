<template>
  <div>
    <h2>Legnépszerűbb autó az választékunkból a szavazatok szerint:</h2>
    <p>{{ topFoods }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class TopFoodsComp extends Vue {
  private get topFoods(): string {
    let legnepszerubbEtel: string[] = ["Még nem szavaztak autóra!"];
    if (this.$store.getters.topFoods.length > 0) {
      legnepszerubbEtel = this.$store.getters.topFoods;
    }
    return legnepszerubbEtel.join(" és a(z) ");
  }

  public mounted() {
    this.$store.dispatch("getTopFoodsList");
  }
}
</script>

<style scoped></style>
