<template>
  <div class="donordata">
    <div v-if="donorFile.donor">
      <div class="donorname">File: {{ donorFile.donor.Donor }}</div>
        <donortree  />
        <recipientbar />
        <recipientlist />
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "donorfile",
  props: {},
  data() {
    return {};
  },
  computed: {
    donorFile() { return this.$store.state.file.donorFile },
    options() {
        if (this.$store.state.donors.options.length > 0) {
            return true
        } else {
            return false
        }
    }
  },
  methods: {},
  beforeMount(){
    this.$store.dispatch('getCandidateData')
    this.$store.dispatch('getDonorData')
  },

};
</script>

<style>
.donordata {
  width: 90%;
  min-height: 500px;
  margin: auto;
}
.controls {
  width: 90%;
  height: 150px;
  max-width: 1000px;
  margin: auto;
}
.flex-grid {
  display: flex;
  align-items: center;
}
.col {
  flex: 1;
}
</style>

<style lang="scss"></style>
