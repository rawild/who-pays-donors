<template>
  <div class="donorsummary">
    <div class="flex-grid">
      <div class="left col">
        {{ "Number of Recipients: " + this.recipients }}
      </div>
      <div class="right col">
        {{ "Compared to Median:  " + this.medianRecipients }}
      </div>
    </div>
    <div class="recipientbar">
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "recipientbar",
  data() {
    return {
      width: 600,
      height: 350
    };
  },
  computed: {
    donorFile() {
      return this.$store.state.file.donorFile;
    },
    recipients() {
      return d3.group(this.donorFile.contributions, d => d.Candidate_ID).size;
    },
    medianRecipients() {
      if (this.recipients > this.donorFile.medianRecipients) {
        return (
          "+" + (this.recipients - this.donorFile.medianRecipients).toString()
        );
      } else if (this.recipients == this.donorFile.medianRecipients) {
        return 0;
      } else if (this.recipients < this.donorFile.medianRecipients) {
        return (
          "-" + (this.donorFile.medianRecipients - this.recipients).toString()
        );
      }
    },
     primaryblue() {
      return this.$store.state.primaryblue
    }
  },
  methods: {
    drawRecipientBar() {
      let margin = 20
      let contributionsRollup = d3.rollup(
        this.donorFile.contributions,
        v => d3.sum(v, d => d.Total),
        d => d.Contribution_Year,
        d => d.Candidate_ID
      );
      var keys = d3.range(1, 97);
      let stackedContributions = d3
        .stack()
        .keys(keys)
        .value((d, key) => {
          return d[1].get(key) != null ? d[1].get(key) : 0;
        })(contributionsRollup);

    let svg = d3
        .select(".recipientbar")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height)
    

      let xScale = d3
        .scaleBand()
        .domain(Array.from(contributionsRollup.keys()).sort((a,b) => a-b))
        .rangeRound([0, this.width])
        .paddingInner(0.1)
      
      let xAxis = d3.axisBottom(xScale).tickSize(0)
      
      let yScale = d3
        .scaleLinear()
        .domain([0, d3.max(contributionsRollup, v => d3.sum(v[1].values()))])
        .rangeRound([this.height-margin, 0]);
      let colorScale = d3.scaleSequential(d3.interpolateBlues).domain([1, 96])
      
      d3.selectAll("g.series").remove()
      
      let series= svg
        .append("g")
        .selectAll("g.series")
        .data(stackedContributions)
        .join("g")
        .classed("series", true)
        .style('fill', d => colorScale(d.key))
        
        series
        .selectAll("rect")
        .data((d) => d)
        .join("rect")
        .attr("x", d => xScale(d.data[0]))
        .attr("y", d => yScale(d[1]))
        .attr("width", () => xScale.bandwidth())
        .attr("height", d => yScale(d[0]) - yScale(d[1]));

     svg
        .append("g")
        .classed("series", true)
        .attr("transform", `translate(0,${this.height-margin+5})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove())
    }
  },
  mounted() {
    this.drawRecipientBar();
  }
};
</script>

<style scoped></style>
