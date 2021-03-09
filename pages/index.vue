<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <top :linkTo="this.linkTo" :linkText="this.linkText"/>
        <div class="break" />
        <textsection :header="topheader" :body="topbody"/>
        <donortree />
        <textsection :header="listheader" />
        <controls />
        <donordata />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import * as d3 from "d3";
export default {
    data() {
      return {
        topheader:"70,382 donors gave $93,964,888 to 96 candidates from 2016-2020",
        topbody:"This is a database of the donations to the 96 state representatives who\
         represent the five boroughs of New York City in Albany. \
        Explore who they are and who they donated to below.",
        listheader:"Create your own list of donors below to explore who donated to whom",
        linkTo: "/about",
        linkText: "More about this data"
      };
    },
    beforeMount() {
     if (this.$store.state.donationsInfo.size == 0) {
      this.$store.dispatch("getDonorData");
    }
    if (this.$store.state.candidateInfo.length == 0) {
      this.$store.dispatch("getCandidateData");
    }
  }
};
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
