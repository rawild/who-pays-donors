<template>
  <input class="addbutton col" type="button" @click="onClick" :value="this.type" />
</template>

<script>
export default {
  name: "addbutton",
  props: {
    type: {
      type: String,
      required: false,
      default: "Add"
    }
  },
  computed: {
    donor() {
      return this.$store.state.donors.queued
    }
  },
  methods: {
    onClick() {
      // Let's warn the parent that a change was made
      this.$emit("clear");

      if (this.type == "Add") {
      // update selected list with queued value
      this.$store.commit("donors/addQueued");
      } else if (this.type == "Open") {
        this.$store.dispatch("openDonorFile", this.donor)
      }
    }
  }
};
</script>

<style>
.addbutton {
  padding: 5px;
  margin: auto;
  min-width: 30px;
  max-width: 80px;
  min-height: 46px;
  max-height: 100px;
  width: 5%;
  cursor: pointer;
}
</style>

<style lang="scss">
.addbutton {
  background-color: $primary-blue;
  color: $primary-grey;
  font-weight: 1.2em;
}

.addbutton:hover {
  background-color: $primary-grey;
  color: $primary-blue;
  font-weight: 1.2em;
}


</style>
