<template>
  <div class="donortag">
    <h1>{{donor.Donor }}</h1>
    {{"$"+donorTotal}}
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: "donortag",
  props: {
    donor: {
      type: Object,
      required: true
    }
  },
  computed: {
    donorTotal() {
      if (this.$store.getters.getDonorInfoById(this.donor.Cluster_ID).total != null){
        return d3.format("~s")(this.$store.getters.getDonorInfoById(this.donor.Cluster_ID).total);
      } else{
        return 0
      }
    }
  },
  methods: {
  }
};
</script>

<style>
.donortag {
  width: 15%;
}
h1{
  font-size: 1em;
}
</style>

<style lang="scss">
</style>
