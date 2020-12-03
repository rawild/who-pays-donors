<template>
  <div class="donorsummary">
    <div class="flex-grid">
      <div class="left col">
        {{ "Total Donated: $" + total }}
        <br />
        {{ "Average Donation: $" + average }}
      </div>
      <div class="right col">
        {{ "Total Donations Rank: " + donorFile.totalRank + "/" + totalDonors }}
        <br />
        {{
          "Average Donations Rank: " + donorFile.averageRank + "/" + totalDonors
        }}
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "donationsummary",
  data() {
    return {
      width: 600,
      height: 350
    };
  },
  props: {
    donorFile: {
      type: Object,
      required: false,
      default: {}
    }   
  },
  computed: {
    total() {
      if ((this.donorFile.donor != null) && (this.donationsInfo.size >0)) {
          let summary = this.donationsInfo.get(
            this.donorFile.donor.Cluster_ID
          );
          return d3.format(".4~s")(summary.total);
      } else {
        return 0;
      }
    },
    average() {
      if ((this.donorFile.donor != null) && (this.donationsInfo.size >0)){
          let summary = this.donationsInfo.get(
            this.donorFile.donor.Cluster_ID
          );
          return d3.format(".4~s")(summary.average);
      } else {
        return 0;
      }
    },
    totalDonors() {
      if (this.donationsInfo != null){
        return this.donationsInfo.size;
      }
    },
    donationsInfo() {
      return this.$store.state.donationsInfo;
    }
  },
};
</script>

<style>
.left {
  text-align: left;
}
.right {
  text-align: left;
}
</style>
