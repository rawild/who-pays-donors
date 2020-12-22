<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <top :linkTo="this.linkTo" :linkText="linkText" />
        <div class="break" />
        <textsection :header="topheader" :body="topbody"/>
        <textsection :header="bottomheader" :body="bottombody"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//import * as d3 from "d3";
export default {
    data() {
      return {
        topheader:"About this data",
        topbody:"The donation data comes from the New York State Board of Elections reports.\
          The donations include those filed for \
         the current politicians and their committees from January 2015 through the January 2020 \
         filing date. The candidates included are those politicians that currently represent \
         the five boroughs in the State Senate and Assembly, plus the majority leader of the senate, \
         Andrea Stewart Cousins, and the four statewide positions: governor, lieutenant governor, \
         comptroller, and attorney general. ",
         bottomheader: "Matching the data",
         bottombody: "The filing committees were compiled by searching for\
          the policitians' names in the name of all of the filing committees that had ever filed. \
         This is an imperfect search that is ongoing. There were some candidates that weren't \
         included because they had no filing committees that had recent filings clearly associated \
         with their names. A review to include them is ongoing.\
                                                                                                     \
        Because of the lack of clarity about committees that are associated with the politicians, as \
        well as the conservative nuture of the clustering of donors together, these numbers \
        can be considered a 'minimum'. \
                                                                                                      \
        The donors were clustered across different candidates' filings with the dedupe python \
        library: https://github.com/dedupeio/dedupe. Additional human review is ongoing. \
        There are still different clusters within the dataset that should be considered the same 'donor', \
        The intention is to continue to improve the mapping and naming of the linked donors.",
        linkTo: "/",
        linkText: "Back to Main Page"
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
</style>
