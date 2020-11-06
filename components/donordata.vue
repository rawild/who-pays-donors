<template>
  <div class="donordata">
     <dialogcandidate :candidate=dialogcandidate />
      <div class="controls flex-grid">
        <div class="search col" >
          <autocomplete />
        </div>
        <div class="slider col">
          <yearslider />
        </div>
      </div>
       <div class="donorlist" v-for="donor in selectedDonors"
        :key="donor.Cluster_ID">
        <donortag :donor="donor" />
        <fingerprint :donor="donor" :divClass="'fingerprint'+donor.Cluster_ID" @dialog=showdialog($event) />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "donordata",
  props: {},
  data() {
      return {
          dialogcandidate: "",
          }
      },
  computed: mapState({
    selectedDonors: state => state.donors.selected
  }),
  methods: {
      showdialog(candidate){
            this.dialogcandidate=candidate.split("n")[1].split(" ")[0]
          }
  },
  beforeMount() {
    this.$store.dispatch('getDonorData')
    this.$store.dispatch('getCandidateData')
  }

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
.search {
    min-width: 50%;
  display: flex;
}
.slider {
    min-width: 50%;
}
.donorlist {
    min-width: 90%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

</style>

<style lang="scss"></style>
