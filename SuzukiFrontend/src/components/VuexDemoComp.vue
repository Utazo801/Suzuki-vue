<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="!totalTvCount">I can't buy any..</p>
    <button :disabled="!totalTvCount" @click="buyTv(1)">Buy TV</button>
    <button :disabled="totalTvCount < 2" @click="buyTv(2)">Buy Two TVs</button>

    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class VuexDemoComp extends Vue {
  get totalTvCount(): number {
    return this.$store.getters.getTotalTvCount;
  }

  private buyTv(amount: number) {
    this.$store.dispatch("removeTv", amount);
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
