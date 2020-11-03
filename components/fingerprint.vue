<template>
    <div :class=divClass >
        <p >
        {{donor.Donor }}<br>{{ yearrange }}
      </p>
      
    </div>
</template>

<script>
import * as d3 from "d3";
import { mapState } from "vuex";
export default {
  name: "fingerprint",
  props: {
    donor: {
      type: Object,
      required: true
    },
    divClass: {
    type: String,
    required: true
    }
  },
  data() {
    return {
      width: 700,
      height: 150,
      mapped: [],
      localDonor: [],
      x: "",
      y: "",
    };
  },
  computed: mapState({
    yearrange: state => state.year.range,
    primaryblue: state => state.primaryblue,
    candidates: state => state.candidates,
    donorslist: state => state.donorslist
  }),
  methods: {
    drawFingerprint() {
      console.log("in draw");
      this.localDonor = this.donorslist.filter(d => d.Cluster_ID == this.donor.Cluster_ID);
      //get the right data
      let yearRange = this.yearrange;
      let data = this.localDonor.filter(d => {
        if (d.Contribution_Year >= yearRange[0]) {
          if (d.Contribution_Year <= yearRange[1]) {
            return true;
          }
        }
        return false;
      });
      // sum from the years
      data = d3.rollup(
        data,
        v => d3.sum(v, d => d.Total),
        d => d.Candidate_ID
      );
      // map to 0 for candidates that don't exist
      this.mapped = d3.map(this.candidates, d => {
        if (data.get(d)) {
          return { candidate: d, amount: data.get(d) };
        }
        return { candidate: d, amount: 0 };
      });
       //console.log("localDonor", this.localDonor)
      // get the axes
      this.x = d3
        .scaleBand()
        .domain(d3.map(this.mapped, d => d.candidate))
        .rangeRound([0, this.width])
        .paddingInner(0.1);

      this.y = d3
        .scaleLinear()
        .domain([0, d3.max(this.mapped, d => d.amount)])
        .nice()
        .rangeRound([this.height, 0]);

    let selector = ".fingerprint"+String(this.donor.Cluster_ID)
    console.log("selector", d3.select(selector))
      // make an svg
      let svg = d3
        .select(selector)
        .append("svg")
        .attr("class", "barsvg"+this.donor.Cluster_ID)
        .attr("width", this.width)
        .attr("height", this.height);
        console.log("svg", svg)
      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.mapped)
        .join("rect")
        .attr("x", d => this.x(d.candidate))
        .attr("width", d => this.x.bandwidth())
        .attr("y", d => this.y(d.amount))
        .attr("height", d => this.y(0) - this.y(d.amount))
        .attr("fill", this.primaryblue);
     console.log("rects", rects)
    },
    updateFingerprint() {
        console.log("updating draw")
      let yearRange = this.yearrange;
      let data = this.localDonor.filter(d => {
        if (d.Contribution_Year >= yearRange[0]) {
          if (d.Contribution_Year <= yearRange[1]) {
            return true;
          }
        }
        return false;
      });
      // sum from the years
      data = d3.rollup(
        data,
        v => d3.sum(v, d => d.Total),
        d => d.Candidate_ID
      );
      // map to 0 for candidates that don't exist
      this.mapped = d3.map(this.candidates, d => {
        if (data.get(d)) {
          return { candidate: d, amount: data.get(d) };
        }
        return { candidate: d, amount: 0 };
      });

      // make an svg
      let svg = d3.select(".barsvg"+this.donor.Cluster_ID);
      svg.selectAll(".barg").remove();
      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.mapped)
        .join("rect")
        .attr("x", d => this.x(d.candidate))
        .attr("width", d => this.x.bandwidth())
        .attr("y", d => this.y(d.amount))
        .attr("height", d => this.y(0) - this.y(d.amount))
        .attr("fill", this.primaryblue);
    },
  },
  mounted() {
      this.drawFingerprint()
    },
  updated() {
    this.updateFingerprint();
  }
};
</script>
<style>


</style>
