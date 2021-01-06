<template>
  <section class="AutoSzuro">
    <b-container fluid class="Kereses">
      <b-row>
        <b-col class="Param">
          <p>Kategória:</p>
          <select></select>
        </b-col>
        <br />
        <b-col class="Param">
          <p>Teljesítmény:</p>
          <select></select>
        </b-col>
        <br />
        <b-col class="Param">
          <p>Szín:</p>
          <select></select>
        </b-col>
        <br />
        <b-col class="Param">
          <p>Ár:</p>
          <select></select>
        </b-col>
        <b-button>Keress</b-button>
      </b-row>
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
}
</script>
<style scoped></style>
