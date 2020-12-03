<template>
  <div class="tab" :class="{'selected': this.selected }" @click="openDonor(donor)">
    <div class="textalign">
      {{ donor.Donor }}
    </div>
  </div>
</template>
<script>
export default {
  name: "donortab",
  props: {
    donor: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods:{
    openDonor(donor){
      this.$store.dispatch("openDonorFile", donor)
    }
  },
};
</script>
<style lang="scss">
.tab {
  background-color: $primary-tan;
  max-width: 250px;
  height: 70px;
  color: black;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px 5px 0px 0px;
  display: inline-flex;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  cursor: pointer;
  opacity: .7;
  
}
.textalign {
  margin: auto;
}
.selected {
  border-bottom: none;
  cursor: default;
  opacity: 1;
}
</style>
