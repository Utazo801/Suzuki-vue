<template>
  <div>
    ZA WARUDO
    <p>TESTING TESTING</p>
  </div>
</template>

<script lang="ts">
import AutoListaComp from "@/components/AutoListaComp.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    AutoListaComp
  }
})
export default class CsudijoView extends Vue {}
</script>

<style scoped></style>
