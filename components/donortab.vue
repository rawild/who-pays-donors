<template>
  <div class="tab" :class="{'selected': this.selected }" >
    <div class="textalign" @click="openDonor(donor)">
      {{ donor.Donor }}
    </div>
    <v-icon class="closx " size="medium"  color="black" @click="closeDonor(donor)">
        mdi-close-circle
    </v-icon>
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
    },
    closeDonor(donor){
      this.$store.dispatch("closeDonorFile", donor)
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

  opacity: .7;
  
}
.textalign {
  margin: auto;
  cursor: pointer;
}
.selected {
  border-bottom: none;
  cursor: default;
  opacity: 1;
}
.closx{
  margin-left: 7px;
}
</style>
