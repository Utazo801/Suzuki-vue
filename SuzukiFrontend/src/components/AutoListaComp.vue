<template>
  <div>
    <p>Kategória:</p>
    <p>
      <select v-model="selected">
        <option disabled value="">Válasszon egy modellt</option>
        <option>Swift</option>
        <!--AB-ból kellene ide behúzni a kocsik típusát, innen lépne tovább a többi lehetős égre--->
      </select>
      <span>Kiválasztott modell: {{ selected }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AutoListaComp extends Vue {}
</script>
<style scoped></style>
