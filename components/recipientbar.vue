<template>
  <div class="donorsummary" >
    <div class="flex-grid">
      <div class="left col">
        {{ "Number of Recipients: " + this.recipients }}
      </div>
      <div class="right col">
        {{ "Compared to Median:  " + this.medianRecipients }}
      </div>
    </div>
    <div class="flex-grid">
      <div class="recipientbar"></div>
      <div v-if="candidate.First_Name" class="recipientinfo">
       <div class="bold"> {{ this.candidate.First_Name + " " + this.candidate.Last_Name }}</div>
        {{
          this.candidate.County == "Statewide"
            ? this.candidate.Role
            : this.candidate.Role +
              " District " +
              this.candidate.District +
              ", " +
              this.candidate.County
        }}
        <br>
        {{ "$" + this.candidate.amount }}
      </div>
      <div v-else />
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
      height: 350,
      candidate: {}
    };
  },
  watch: {
    donorFile: function(){
      this.drawRecipientBar()
    },
    yearrange: function(){
      this.drawRecipientBar()
    }
  },
  props: {
    donorFile: {
      type: Object,
      required: false,
      default: {}
    }
  },
  computed: {
    recipients() {
      let contributions = this.donorFile.contributions.filter(d => {
        if (d.Contribution_Year >= this.yearrange[0]) {
          if (d.Contribution_Year <= this.yearrange[1]) {
            return true;
          }
        }
      })
      return d3.group(contributions, d => d.Candidate_ID).size;
    },
    medianRecipients() {
      if (this.recipients > this.donorFile.medianRecipients) {
        return (
          "+" + (this.recipients - this.donorFile.medianRecipients).toString()
        );
      } else if (this.recipients == this.donorFile.medianRecipients) {
        return "Same";
      } else if (this.recipients < this.donorFile.medianRecipients) {
        return (
          "-" + (this.donorFile.medianRecipients - this.recipients).toString()
        );
      }
    },
    primaryblue() {
      return this.$store.state.primaryblue;
    },
    yearrange() {
      return this.$store.state.year.range
    }
  },
  methods: {
    drawRecipientBar() {
      let margin = 20;
      let contributions = this.donorFile.contributions.filter(d => {
        if (d.Contribution_Year >= this.yearrange[0]) {
          if (d.Contribution_Year <= this.yearrange[1]) {
            return true;
          }
        }
      })
      let contributionsRollup = d3.rollup(
        contributions,
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
      d3.select(".recipientbar").selectAll("svg").remove()
      let svg = d3
        .select(".recipientbar")
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);

      let xScale = d3
        .scaleBand()
        .domain(Array.from(contributionsRollup.keys()).sort((a, b) => a - b))
        .rangeRound([0, this.width])
        .paddingInner(0.1);

      let xAxis = d3.axisBottom(xScale).tickSize(0);

      let yScale = d3
        .scaleLinear()
        .domain([0, d3.max(contributionsRollup, v => d3.sum(v[1].values()))])
        .rangeRound([this.height - margin, 0]);
      let colorScale = d3.scaleSequential(d3.interpolateBlues).domain([1, 96]);

      d3.selectAll("g.series").remove();

      let series = svg
        .append("g")
        .selectAll("g.series")
        .data(stackedContributions)
        .join("g")
        .classed("series", true)
        .attr("class", d => "candidate" + d.key)
        .style("fill", d => colorScale(d.key));

      series
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", d => xScale(d.data[0]))
        .attr("y", d => yScale(d[1]))
        .attr("width", () => xScale.bandwidth())
        .attr("height", d => yScale(d[0]) - yScale(d[1]))
        .attr("amount", d => d[1]-d[0])
        .attr("year", d => d.data[0])
        .on("mouseover", e => {
          let key = e.srcElement.parentElement.__data__.key;
          this.populateCandidate(key, e.srcElement.getAttribute("amount"));
          d3.selectAll(".candidate" + key).classed("barHighlighted", true);
        })
        .on("mouseout", e => {
          d3.selectAll(
            ".candidate" + e.srcElement.parentElement.__data__.key
          ).classed("barHighlighted", false);
          this.populateCandidate("",0);
        });

      svg
        .append("g")
        .classed("series", true)
        .attr("transform", `translate(0,${this.height - margin + 5})`)
        .call(xAxis)
        .call(g => g.select(".domain").remove());
    },
    populateCandidate(candidateId, amount) {
      if (candidateId == "") {
        this.candidate = {};
      } else {
        this.candidate = this.$store.getters.getCandidateInfoById(candidateId, [
          this.donorFile.donor
        ]).candidate;
        this.candidate.amount = d3.format(".4~s")(amount)
      }
    }
  },
  mounted() {
    this.drawRecipientBar();
  },
};
</script>

<style scoped>
.recipientbar {
  width: 65%;
  text-align: left
}
.recipientinfo {
  width: 45%;
  text-align: left;
}

.bold {
  font-weight: 1500;
  font-size: 1.3em;
}
</style>

<style lang="scss">
.barHighlighted {
  stroke: $primary-green;
  stroke-width: 3;
  fill: $primary-green;
  //fill-opacity: 0.5;
  cursor: pointer;
}
</style>
