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
          <donorfile />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
transition: {
    name: 'home'
}

};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  line-height: 1.2;
}

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
.header {
  min-width: 300px;
  flex-basis: 100%;
}
.break{
  flex-basis: 100%;
}
</style>