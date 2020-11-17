<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div class="break" />
        <controls :button="button" />
        <donorfile />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      button: "Open"
    };
  },
  transition: {
    name: "home"
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  line-height: 1.2;
}


.links {
  padding-top: 15px;
}

.break {
  flex-basis: 100%;
}
</style>
<style lang="scss">
.dark {
  background-color: $primary-blue;
  color: $primary-tan;
}
</style>
