<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <div class="break">
          <NuxtLink class="navButton" to="/">
            <v-icon size="60px" >
              mdi-chevron-left
            </v-icon>
            Back to List
          </NuxtLink>
        </div>
        <controls :button="button" />
        <div class="tabs flex-grid">
        <div v-for="donor in donors" :key="donor.Cluster_ID">
          <donortab 
          :donor="donor" 
          :selected="donor.Cluster_ID == donorFile.donor.Cluster_ID"
          />
        </div>
        </div>
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
  computed: {
    donors() {
      return this.$store.state.donors.selected;
    },
    donorFile() {
      return this.$store.state.file.donorFile;
    },
    primaryGrey() {
      return this.$store.state.primaryGrey;
    }
  },
  beforeMount() {
    if (this.$store.state.donationsInfo.size == 0) {
      this.$store.dispatch("getDonorData");
    }
    if (this.$store.state.candidateInfo.length == 0) {
      this.$store.dispatch("getCandidateData");
    }
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
  text-align: left;
  height: 40px;
  padding: 20px;
  color: black;
  font-family: "Fjalla One", sans-serif;
  font-size: 30px;
}

</style>
<style lang="scss" scoped>

.tabs {
  text-align: left;
  width: 100%;
  margin-left: 6%;
}
.navButton {
  color: $primary-grey !important;
  background-color: $primary-blue;
  padding-top: 11px;
  padding-right: 20px;
  padding-bottom: 13px;
}
a {
  text-decoration: none;
  color: $primary-grey !important;
  cursor: pointer;
}
i {
  color: $primary-grey !important;
  background-color: $primary-blue !important;
}
</style>
