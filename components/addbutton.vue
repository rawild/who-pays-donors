<template>
  <input class="addbutton col" type="button" @click="onClick" value="Add" />
</template>

<script>
export default {
  name: "addbutton",
  props: {},
  methods: {
    onClick() {
      // Let's warn the parent that a change was made
      this.$emit("clear");
      // update selected list with queued value
      this.$store.commit("donors/addQueued");
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
