<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AutoListaComp extends Vue {
  // Példa komponensnek átadott (input) adatra:
  // ==========================================
  @Prop() private msg!: string;
}
</script>
<style scoped></style>
