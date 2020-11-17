<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <top />
        <div class="break" />
        <controls />
        <donordata />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import * as d3 from "d3";
export default {};
</script>

<style>

.links {
  padding-top: 15px;
}
.break {
  flex-basis: 100%;
}
</style>

<style lang="scss">
.light {
  background-color: $primary-tan;
  color: $primary-blue;
}
</style>
