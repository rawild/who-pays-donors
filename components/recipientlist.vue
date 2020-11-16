<template>
  <div class="recipientlist"></div>
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
  computed: {
    donorFile() {
      return this.$store.state.file.donorFile;
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
        d[1].splice(1, 0, candidate.County == "Statewide"
            ? candidate.Role
            : candidate.Role +
                " District " +
                candidate.District +
                ", " +
                candidate.County
        );
        d[1][2]=d3.format("$.4~s")(d[1][2])
        d[1][3]=d3.format("$.4~s")(d[1][3])
      });

      let height = contributionsRollup.length * 50;
      let columns = [
        "Candidate Name",
        "Position",
        "Total Recieved",
        "Max Amount",
        "Number of Donations"
      ];
      console.log("contributionsRollup", contributionsRollup);
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
        .attr("width", width)
        .attr("height", this.height)
        .append("table")
        .classed("bodyTable", true)
        .attr("border", 1)
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

      // TO DO: join the candidate data to the dononation data so there is the candidate name and position available
      // and format the $ numbers
    }
  },
  mounted() {
    this.drawTable();
  }
};
</script>

<style scoped>
td {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.recipientrow {
  max-height: 50px;
}

tr:hover {
  background-color: grey;
}

th:hover {
  background-color: grey;
}

.scroll {
  overflow: auto;
}
</style>
