<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div class="header">
          <h1 class="title">
            who-pays-donors
          </h1>
        </div>
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
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.break {
  flex-basis: 100%;
}
</style>

<style lang="scss">
.header {
  background-color: $primary-tan;
  margin-top: 0%;
  width: 95%;
  margin-left: 1%;
  margin-right: -7%;
  flex-basis: 100%;
  min-height: 100px;
  min-width: 300px;
}
</style>
