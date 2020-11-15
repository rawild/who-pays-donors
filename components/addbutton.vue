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
  border: 1px solid #eeeeee;
  min-width: 30px;
  max-width: 80px;
  max-height: 40px;
  width: 5%;
  cursor: pointer;
}
</style>

<style lang="scss">

.addbutton:hover {
  background-color: $primary-blue;
  color: white;
}

</style>
