<template>
  <div class="section donordata">
    <dialogcandidate
      v-show="dialogOpen"
      :candidate="dialogcandidate"
      @closeDialog="closeDialog()"
    />
    <div v-if="candidate" class="candidate">
      Recipient:
      <br>
      <div class="bold">{{candidate.First_Name+" "+candidate.Last_Name}}</div>
      {{
          this.candidate.County == "Statewide"
            ? this.candidate.Role
            : this.candidate.Role +
              " District " +
              this.candidate.District +
              ", " +
              this.candidate.County
        }}<br>
        *click on bar to compare donation amounts
      </div>
      <div v-else class="candidate">Add donors below and hover over bars to view recipients</div>
    <div
      class="donorlist"
      v-for="donor in selectedDonors"
      :key="donor.Cluster_ID"
    >
      <donortag :donor="donor" @removeDonor="removeDonor($event)" />
      <fingerprint
        :donor="donor"
        :divClass="'slideLeft fingerprint' + donor.Cluster_ID"
        @dialog="showDialog($event)"
        @candidate="showCandidate($event)"
      />
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
      candidate: ""
    };
  },
  computed: mapState({
    selectedDonors: state => state.donors.selected
  }),
  methods: {
    showDialog(candidate) {
      this.dialogcandidate = candidate.split("n")[1].split(" ")[0];
      this.dialogOpen = !this.dialogOpen;
    },
    closeDialog() {
      this.dialogOpen = !this.dialogOpen;
    },
    removeDonor(id) {
      this.$store.commit("donors/removeSelected", id);
    },
    showCandidate(candidate){
      this.candidate = this.$store.getters.getCandidateName(candidate.split("n")[1].split(" ")[0])
      console.log(this.candidate)
    }
    
  }
};
</script>

<style>
.donorlist {
  min-width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>

<style lang="scss">
.section {
  background-color: $primary-blue;
  padding: 40px;
  width: 97%;
  margin-bottom: auto;
  margin-right: -7%;
}
.donordata {
  min-height: 400px;
}
.candidate {
  min-height:50px;
  width: 100%;
  background-color:$primary-grey;
  margin-bottom: 10px;
  text-align: left;
  padding: 20px;
}
</style>
