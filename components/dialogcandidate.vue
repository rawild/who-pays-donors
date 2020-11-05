<template>
  <div class="dialog" :info="candidateInfo">
    <svg class="dialogsvg" />
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  name: "addbutton",
  props: {
    candidate: {
      type: String,
      default: []
    }
  },
  data() {
    return {
      width: 300,
      y: "",
      x: "",
    };
  },
  computed: {
    candidateInfo() {
      return this.$store.getters.getCandidateInfoById(this.candidate);
    },
    height() {
      return this.candidateInfo.length * 70
    },
  },
  methods: {
    onClick() {
      // Let's warn the parent that a change was made
      this.$emit("clear");
    },
    drawBar() {
      console.log("inDrawBar")
      this.y = d3
        .scaleBand()
        .domain(d3.map(this.candidateInfo, d => d.donor.Donor))
        .rangeRound([this.height, 0])
        .paddingInner(0.1);

      this.x = d3
        .scaleLinear()
        .domain([0, d3.max(this.candidateInfo, d => d.total)])
        .nice()
        .rangeRound([0, this.width]);

      let selector = ".dialogsvg"
      let svg = d3.select(selector);
      svg.selectAll(".barg").remove();
      // make an svg
      svg
        .attr("width", this.width)
        .attr("height", this.height);

      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.candidateInfo)
        .join("rect")
        .attr("x", this.x(0))
        .attr("height", d => this.y.bandwidth())
        .attr("y", d => this.y(d.donor.Donor))
        .attr("width", d => this.x(d.total))
        .attr("fill", this.primaryblue);
    }
  },
  updated() {
    if (this.candidateInfo.length > 0) {
      this.drawBar();
    }
  }
};
</script>

<style>
.dialog {
  max-width: 400px;
  width: 100%;
  margin: auto;
}
</style>

<style lang="scss"></style>
