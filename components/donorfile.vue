<template>
  <div class="donorfile">
    <div v-if="donationsInfo.size > 0" >
    <div v-if="donorFile.donor" info="donorFile.donor">
      <div class="donorname">File: {{ donorFile.donor.Donor }}</div>
      <donationsummary :donorFile="this.donorFile" />
      <recipientbar :donorFile="this.donorFile" />
      <recipientlist :donorFile="this.donorFile" />
    </div>
    <div v-else></div>
    </div>
    <div v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";
import donationsummary from './donationsummary.vue';
export default {
  components: { donationsummary },
  name: "donorfile",
  props: {
  },
  data() {
    return {};
  },
  computed: {
    donorFile() {
      return this.$store.state.file.donorFile;
    },
    donationsInfo(){
      return this.$store.state.donationsInfo;
    },
    options() {
      if (this.$store.state.donors.options.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {},
};
</script>

<style>

.flex-grid {
  display: flex;
  align-items: center;
}
.col {
  flex: 1;
}
</style>

<style lang="scss">
.donorfile {
  background-color: $primary-tan;
  width: 95%;
  min-height: 500px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1%;
  margin-right: -6%;
  padding: 40px;
  font-weight: bold;
}
.donorsummary {
  background-color: $primary-grey;
  padding: 20px;
  border-radius: 25px;
  margin-right: -6%;
  margin-bottom: 50px;
  margin-left: 7%;
  border: 3px black solid;
}
.donorname {
  background-color: $primary-grey;
  padding: 20px;
  border: 3px black solid;
  margin-top: 30px;
  margin-right: -7%;
  margin-bottom: 50px;
  margin-left: 7%;
  font-size: 1.3em;
  text-align: left;
}
</style>
