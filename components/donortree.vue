<template>
  <div class="donorsummary">
    <div class="flex-grid">
      <div class="left col">
        {{ "Total Donated: $" + total }}
        <br />
        {{ "Average Donation: $" + average }}
      </div>
      <div class="right col">
        {{
          "Total Donations Rank: " +
            donorFile.totalRank +
            "/" +
            donorFile.donationsInfo.size
        }}
        <br />
        {{
          "Average Donations Rank: " +
            donorFile.averageRank +
            "/" +
            donorFile.donationsInfo.size
        }}
      </div>
    </div>
    <div class="donortreemap">
        <div class="sectionheader">
      Compared to all Donors:
      </div>
      <svg class="treemap" />
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "donortree",
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
    total() {
      if (this.donorFile.donor != null) {
        let summary = this.donorFile.donationsInfo.get(
          this.donorFile.donor.Cluster_ID
        );
        return d3.format(".4~s")(summary.total);
      } else {
        return 0;
      }
    },
    average() {
      if (this.donorFile.donor != null) {
        let summary = this.donorFile.donationsInfo.get(
          this.donorFile.donor.Cluster_ID
        );
        return d3.format(".4~s")(summary.average);
      } else {
        return 0;
      }
    }
  },
  methods: {
    drawTreemap() {
      let root = d3
        .hierarchy(this.donorFile.donationsInfo, ([key, values]) => values)
        .sum(([key, values]) => values.total)
        .sort((a, b) => b.value - a.value);
      let tree = d3
        .treemap()
        .size([this.width, this.height])
        .padding(1)
        .round(true);
      tree(root);
      let svg = d3
        .select(".treemap")
        .attr("width", this.width)
        .attr("height", this.height);

      const leaf = svg
        .selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr("transform", d => `translate(${d.x0},${d.y0})`);
      leaf
        .append("rect")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("class", d =>
          d.data[0] == this.donorFile.donor.Cluster_ID
            ? "donortreesquare"
            : "treesquare"
        );
    }
  },
  mounted() {
    if (this.donorFile.donationsInfo != "") {
      this.drawTreemap();
    }
  }
};
</script>

<style lang="scss">
.donortreesquare {
  fill: $primary-green;
}
.treesquare {
  fill: $primary-blue;
}
.sectionheader {
    text-align: left;
}
</style>

<style>
.donorsummary {
  width: 90%;
}
.sectionheader {
    text-align: left;
}
.left {
    text-align: left;
}
.right {
    text-align: left;
}
</style>