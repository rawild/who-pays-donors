<template>
  <div class="donordata">
     <dialogcandidate v-show="dialogOpen" :candidate=dialogcandidate @closeDialog=closeDialog() />
       <div class="donorlist" v-for="donor in selectedDonors"
        :key="donor.Cluster_ID">
        <donortag :donor="donor" @removeDonor=removeDonor($event) />
        <fingerprint :donor="donor" :divClass="'slideLeft fingerprint'+donor.Cluster_ID" @dialog=showDialog($event) />
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
          dialogOpen: false,
          }
      },
  computed: mapState({
    selectedDonors: state => state.donors.selected
  }),
  methods: {
      showDialog(candidate){
            this.dialogcandidate=candidate.split("n")[1].split(" ")[0]
            this.dialogOpen = !this.dialogOpen
          },
      closeDialog(){
          this.dialogOpen = !this.dialogOpen
      },
      removeDonor(id) {
          this.$store.commit("donors/removeSelected",id)
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
 width: 95%;
 min-height: 500px;
 margin-top: auto;
 margin-bottom: auto;
 margin-left: 1%;
 margin-right: -7%;
}

.donorlist {
    min-width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

</style>

<style lang="scss">
  .donordata {
    background-color: $primary-blue;
    padding: 40px;
  }
</style>
