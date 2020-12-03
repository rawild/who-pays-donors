<template>
  <div class="donorsummary">
    <div class="recipientlist"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "recipientlist",
  data() {
    return {
      width: "100%",
      height: 600
    };
  },
  watch: {
    donorFile: function(){
      this.drawTable()
    }
  },
  props: {
    donorFile: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    drawTable() {
      let width = this.width;
      let contributionsRollup = d3.rollups(
        this.donorFile.contributions,
        v => {
          return [d3.sum(v, d => d.Total), d3.max(v, d => d.Total), v.length];
        },
        d => d.Candidate_ID
      );
      contributionsRollup.sort((a, b) => b[1][0] - a[1][0]);
      contributionsRollup.forEach(d => {
        let candidate = this.$store.getters.getCandidateInfoById(d[0], [
          this.donorFile.donor
        ]).candidate;
        d[1].splice(0, 0, candidate.First_Name + " " + candidate.Last_Name);
        d[1].splice(
          1,
          0,
          candidate.County == "Statewide"
            ? candidate.Role
            : candidate.Role +
                " District " +
                candidate.District +
                ", " +
                candidate.County
        );
        d[1][2] = d3.format("$.4~s")(d[1][2]);
        d[1][3] = d3.format("$.4~s")(d[1][3]);
      });

      let height = contributionsRollup.length * 50;
      let columns = [
        "Candidate Name",
        "Position",
        "Total Recieved",
        "Max Amount",
        "Number of Donations"
      ];
      d3.select(".recipientlist").select("table").remove()
      //Adapted from http://forrestcoward.github.io/examples/scrollable-table/index.html
      let outerTable = d3
        .select(".recipientlist")
        .append("table")
        .attr("width", width);
      outerTable
        .append("tr")
        .append("td")
        .append("table")
        .attr("class", "headerTable")
        .attr("width", this.width)
        .append("tr")
        .selectAll("th")
        .data(columns)
        .join("th")
        .text(d => d);
      let inner = outerTable
        .append("tr")
        .append("td")
        .append("div")
        .classed("scroll", true)
        .append("table")
        .classed("bodyTable", true)
        .attr("width", width)
        .attr("height", height)
        .attr("style", "table-layout:fixed");

      let tbody = inner.append("tbody");
      let rows = tbody
        .selectAll("tr")
        .data(contributionsRollup)
        .join("tr");

      let cells = rows
        .selectAll("td")
        .data(d => d[1])
        .join("td")
        .text(d => d);
    }
  },
  mounted() {
    this.drawTable();
  },
 
};
</script>

<style lang="scss">
.recipientrow {
  max-height: 50px;
}

.headerTable th {
  width: 20%;
  padding-bottom: 10px;
}
.headerTable {
  border-bottom: 1px black solid;
  width:98%;
}

.bodyTable tr:hover {
  background-color:$primary-grey;
}

.bodyTable tr {
  background-color: white;
}
.scroll {
  overflow: scroll;
  max-height: 600px;
  width: 100%;
}
</style>
