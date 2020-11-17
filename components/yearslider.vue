<template>
    <v-range-slider
      v-model="yearrange"
      :max="max"
      :min="min"
      :tick-labels="tickLabels"
      thumb-label
      thumb-size="32"
      ticks="always"
      tick-size="5"
      color="#214167"
    >
    </v-range-slider>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "yearslider",
  props: {
  },
  data() {
    return {
      min: 2015,
      max: 2020
    };
  },
  computed: {
    yearrange: {
      get: function() {
        return this.$store.state.year.range;
      },
      set: function(newValue) {
        this.$store.commit("year/updateRange", newValue);
      }
    },
    tickLabels() {
      return d3.range(this.min, this.max + 1);
    }
  },
  methods: {
  },
  beforeMount() {
    this.$store.commit("year/updateRange", [this.min, this.max]);
  }
};
</script>

<style>
.yearslider {
  position: relative;
  height: 50px;
  width: 40%;
}
</style>
<style lang="scss">
  .v-input__slider {
    background-color: $primary-grey;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    font-size: 12px;
  }
  .v-messages {
    min-height: 1px;
  }
</style>