<template>
  <div >
    <div v-if="candidateInfo.candidate" class="overlay" :info="candidateInfo">
      <div class="dialog">
        <div class="close">
           <span class="closex" @click="sendClose" > x</span>
          </div>
      <div class="infobox">
      <h1>
        {{
          this.candidateInfo.candidate.First_Name +
            " " +
            this.candidateInfo.candidate.Last_Name
        }}
      </h1>
      <div>
        {{
            this.candidateInfo.candidate.District === "Statewide"?this.candidateInfo.candidate.Role:"District: "+this.candidateInfo.candidate.District +
            ", " +
            this.candidateInfo.candidate.County
        }}
      </div>
      <div>{{ "Total Receipts: $" + this.total }}</div>
      <svg class="dialogsvg" />
    </div>
    </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import * as d3 from "d3";
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
      width: 375,
      y: "",
      x: ""
    };
  },
  computed: {
    candidateInfo() {
      return this.$store.getters.getCandidateInfoById(this.candidate);
    },
    height() {
      return this.candidateInfo.donors.length * 40;
    },
    total() {
      if (this.candidateInfo != "") {
        return d3.format("~s")(d3.sum(this.candidateInfo.donors, d => d.total));
      }
      return 0;
    },
    primaryblue() {
      return this.$store.state.primaryblue
    }
  },
  methods: {
    onClick() {
      // Let's warn the parent that a change was made
      this.$emit("clear");
    },
    drawBar() {
      let barSpace = 35;
      let width = (this.width-barSpace*2)/2
      this.y = d3
        .scaleBand()
        .domain(d3.map(this.candidateInfo.donors, d => d.donor.Donor))
        .rangeRound([this.height, 0])
        .paddingInner(0.1);

      this.x = d3
        .scaleLinear()
        .domain([0, d3.max(this.candidateInfo.donors, d => d.total)])
        .nice()
        .rangeRound([0, width]);

      let selector = ".dialogsvg";
      let svg = d3.select(selector);
      svg.selectAll(".barg").remove();
      // make an svg
      svg.attr("width", this.width).attr("height", this.height);

      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.candidateInfo.donors)
        .join("rect")
        .attr("x", width)
        .attr("height", d => this.y.bandwidth())
        .attr("y", d => this.y(d.donor.Donor))
        .attr("width", d => this.x(d.total))
        .attr("fill", this.primaryblue);

      // add the ticks on the left axis
      let yAxis = d3.axisLeft(this.y).tickSize(0);
      svg
        .append("g")
        .attr("class","barg")
        .attr("transform", `translate(${width},0)`)
        .call(yAxis)
        .call(g => g.select(".domain").remove())
        .selectAll(".tick text")
        .call(this.wrap, 150);

      // add labels with value on the right side
      const label = svg
        .selectAll("text")
        .data(this.candidateInfo.donors)
        .join("text")
        .attr("class", "label")
        .attr("y", d => this.y(d.donor.Donor) + (this.y.bandwidth() / 2))
        .attr("x", d => this.x(d.total) + barSpace);       
       label.append("tspan")
       .attr("x", d => this.x(d.total) + barSpace)
       .text( d => "$"+ d3.format(".3s")(d.total))
    },
    /// wrap funtion borrowed again from mBostock to wrap the tick labels
    wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
          words = text
            .text()
            .split(/\s+/)
            .reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          estLineNumber = text.text().length/20>1?text.text().length/20:0,
          y = text.attr("y") - (estLineNumber * 5),
          dy = parseFloat(text.attr("dy")),
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", -10)
            .attr("y", y)
            .attr("dy", dy + "em");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", -10)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    },
    sendClose() {
      this.$emit("closeDialog");
    }
  },
  updated() {
    if (this.candidateInfo.donors.length > 0) {
      this.drawBar();
    }
  }
};
</script>

<style>
.dialog {
  max-width: 550px;
  width: 100%;
  margin: auto;
  max-height: 600px;
  position: fixed; 
  top: 10%;
  left: 30%;
  text-align: left;
}
.infobox {
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  padding: 5%;
}
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  display: inline;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}


.tick text {
  fill: black;
}

.close {
  width: 100%;
  text-align: right;
  padding-right: 10px;
}

.closex {
  cursor: pointer;
  font-weight: bold;
}

</style>

<style lang="scss">
.dialog {
  background-color: $primary-tan;
}
.close {
  background-color: $primary-green;
  color: $primary-tan;
}
</style>
