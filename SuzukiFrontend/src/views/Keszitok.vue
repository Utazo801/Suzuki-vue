<template>
  <div class="content">
    <div id="BAJ">
      <b-card class="card">
        <h4>Bognár Áron János</h4>
        <b-card-text>Github Link: <a href="https://github.com/bognararon">bognararon</a></b-card-text>
      </b-card>
    </div>
    <div id="FL">
      <b-card class="card">
        <h4>Fábry László</h4>
        <b-card-text>Github Link: <a href="https://github.com/fabrylaszlo">fabrylaszlo</a></b-card-text>
      </b-card>
    </div>
    <div id="SZB">
      <b-card class="card">
        <h4>Szabó Bence</h4>
        <b-card-text>Github Link: <a href="https://github.com/Utazo801">Utazo801</a></b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class Keszitok extends Vue {}
</script>

<style scoped>
.content {
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.card {
  margin-left: 20px;
}
</style>
