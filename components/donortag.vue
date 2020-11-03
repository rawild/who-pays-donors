<template>
  <div class="donortag">
    <h1>{{donor.name }}</h1>
    <p>{{donor.total}}</p>
  </div>
</template>

<script>
export default {
  name: "donortag",
  props: {
    donorid: {
      type: Number,
      required: true
    }
  },
  computed: {
    donor() {
      return this.$store.getters.getDonorInfoById(this.donorid);
    }
  },
  methods: {
  }
};
</script>

<style>
.addbutton {
  padding: 5px;
  margin: auto;
  border: 1px solid #eeeeee;
  width: 50px;
  height: 90%;
  cursor: pointer;
}
</style>

<style lang="scss">
.addbutton:hover {
  background-color: $primary-blue;
  color: white;
}
</style>
