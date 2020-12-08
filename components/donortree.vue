<template>
  <div class="treewrap section">
      <div class="sectionheader">
        The Top 1,000 Donors to New York City Reps in Albany Gave almost $67.5 Million.
      </div>
      <div class="flex-grid">
        <svg class="treemap" />
        <div v-if="donor.name" class="donorinfo">
          <div class="nestedinfo">
            <div class="bold">{{ this.donor.name }}</div>
            {{ "Total: $" + donor.total }}
            <br />
            {{ "To " + donor.recipients + " recipients" }}
          </div>
        </div>
        <div v-else class="donorinfo" >
          <div class="nestedinfo">
          That means just 1.9% of the donors gave almost 65% of the money. Mouse over the squares to see who they are.
          </div>
          </div>
      </div>
   
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "donortree",
  data() {
    return {
      width: 800,
      height: 250,
      donor: {}
    };
  },
  watch: {
    donationsInfo: function() {
      this.drawTreemap();
    }
  },
  computed: {
    donationsInfo() {
      return this.$store.state.donationsInfo;
    }
  },
  methods: {
    drawTreemap() {
      let top_1000_arr = Array.from(this.donationsInfo).slice(0, 1000);
      let top_1000_map = new Map(top_1000_arr);
      let root = d3
        .hierarchy(top_1000_map, ([key, values]) => values)
        .sum(([key, values]) => values.total)
        .sort((a, b) => b.value - a.value);

      let tree = d3
        .treemap()
        .size([this.width, this.height])
        .padding(1)
        .round(true);
      tree(root);
      d3.select(".treemap")
        .selectAll("g")
        .remove();
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
        .attr("class", "treesquare")
        .on("mouseover", e => {
          let key = e.srcElement.__data__.data[0];
          this.populateDonor(key);
          e.srcElement.setAttribute("class", "rectHighlighted");
        })
        .on("mouseout", e => {
          this.populateDonor("");
          e.srcElement.setAttribute("class", "prevHighlighted");
        });
    },
    populateDonor(donorId) {
      if (donorId == "") {
        this.donor = {};
      } else {
        this.donor = this.$store.getters.getDonorInfoById(donorId);
        this.donor.total = d3.format(".4~s")(this.donor.total);
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("getDonorData");
  },
  mounted() {
    if (this.$store.state.donationsInfo != "") {
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
  fill: $primary-grey;
}
.sectionheader {
  text-align: left;
  color: $primary-grey;
  padding-bottom: 20px;
  background-color: $primary-blue;
  width: 110%;
  text-align: left;
  font-weight: 500;
  font-family: "Fjalla One", sans-serif;
  font-size: 1.5em;
}
.treewrap {
  margin-top:100px;
}
.rectHighlighted {
  stroke: $primary-green;
  stroke-width: 2;
  fill: $primary-blue;
  fill-opacity: 0.5;
  cursor: pointer;
}
.prevHighlighted {
  stroke: $primary-blue;
  stroke-width: 2;
  fill: $primary-green;
  fill-opacity: 0.9;
  cursor: pointer;
}
.donorinfo {
  color: black;
  margin-left: 40px;
  padding: 40px;
  width: 25%;
  text-align: left;
  background-color: $primary-tan;
  height: 250px;
  margin-top: auto;
  margin-bottom: auto;
  display: inherit;
}
.nestedinfo {
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
}
.bold {
  font-weight: bold;
  font-size: 1.5em;
}
</style>

<style>
.sectionpadding {
  padding: 20px;
}
  

.left {
  text-align: left;
}
.right {
  text-align: left;
}
</style>
