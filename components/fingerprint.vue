<template>
  <div :class="divClass" ></div>
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
      width: 1000,
      height: 80,
      mapped: [],
      localDonor: [],
      x: "",
      y: ""
    };
  },
  watch: {
    yearrange: function() {
      this.updateFingerprint();
    }
  },
  computed: mapState({
    yearrange: state => state.year.range,
    primaryblue: state => state.primaryblue,
    candidateInfo: state => state.candidateInfo,
    donorslist: state => state.donorslist
  }),
  methods: {
    drawFingerprint() {
      let topMargin = 14
      let rightMargin = 40
      let bottomMargin = 12
      let leftMargin = 16
      this.localDonor = this.donorslist.filter(
        d => d.Cluster_ID == this.donor.Cluster_ID
      );
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
      this.mapped = d3.map(this.candidateInfo, d => {
        if (data.get(d.Elected_Id)) {
          return { candidate: d.Elected_Id, 
          amount: data.get(d.Elected_Id), 
          name: d.First_Name + " " + d.Last_Name};
        }
        return { candidate: d.Elected_Id, amount: 0 , name:''};
      });
      // get the axes
      this.x = d3
        .scaleBand()
        .domain(d3.map(this.mapped, d => d.candidate))
        .rangeRound([0, this.width-rightMargin-leftMargin])
        .paddingInner(0.1);

      let maxvalue = d3.max(this.mapped, d => d.amount)
      this.y = d3
        .scaleLinear()
        .domain([0, maxvalue])
        .nice()
        .rangeRound([this.height-topMargin-bottomMargin, 0]);

      let selector = ".fingerprint" + String(this.donor.Cluster_ID);

      // make an svg
      let svg = d3
        .select(selector)
        .append("svg")
        .attr("class", "barsvg" + this.donor.Cluster_ID)
        .attr("width", this.width)
        .attr("height", this.height);

      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.mapped)
        .join("rect")
        .attr("x", d => leftMargin+this.x(d.candidate))
        .attr("width", d => this.x.bandwidth())
        .attr("y", d => topMargin+this.y(d.amount))
        .attr("height", d => this.y(0) - this.y(d.amount))
        .attr("fill", this.primaryblue)
        .attr("name", d => d.name)
        .attr("amount", d => d.amount)
        .attr("candidate", d=>d.candidate)
        .attr("class",d =>"can"+d.candidate)
        .on("mouseover", e =>{
            d3.selectAll("."+e.srcElement.getAttribute("class"))
            .classed("barHighlighted", true)
            d3.selectAll(".label"+e.srcElement.getAttribute("candidate"))
            .classed("hiddenlabel",false).classed("showlabel",true)
            this.$emit("candidate",e.srcElement.getAttribute("class"))         
        })
        .on("mouseout", e => {
            d3.selectAll(".barHighlighted")
                .classed("barHighlighted", false)
            d3.selectAll(".label"+e.srcElement.getAttribute("candidate"))
            .classed("hiddenlabel",true).classed("showlabel",false)    
        })
        .on("click", e => {
            this.$emit("dialog",e.srcElement.getAttribute("class"))
        })
        let moneytext = svg.append('g')
          .attr("class", "barg")
          .selectAll("text")
          .data(this.mapped)
          .join("text")
          .attr("x", d => leftMargin+this.x(d.candidate))
          .attr("y", topMargin-2)
          .attr("class", d=>"hiddenlabel " +"label"+d.candidate)
          .text(d => {
            if (d.amount > 0) {
              return d3.format("$.4~s")(d.amount)
            }
          })
        let nametext = svg.append('g')
          .attr("class", "barg")
          .selectAll("text")
          .data(this.mapped)
          .join("text")
          .attr("x", d => leftMargin+this.x(d.candidate))
          .attr("y", this.height-2)
          .attr("class", d=>"hiddenlabel " +"label"+d.candidate)
          .text(d => {
            if (d.name != '') {
              return d.name
            }
          })

    },
    updateFingerprint() {
      let topMargin = 14
      let rightMargin = 40
      let bottomMargin = 12
      let leftMargin = 16
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
      this.mapped = d3.map(this.candidateInfo, d => {
        if (data.get(d.Elected_Id)) {
          return { candidate: d.Elected_Id, 
          amount: data.get(d.Elected_Id), 
          name: d.First_Name + " " + d.Last_Name};
        }
        return { candidate: d.Elected_Id, amount: 0 , name:''};
      });
      let maxvalue = d3.max(this.mapped, d => d.amount)
      this.y.domain([0,maxvalue])
      // make an svg
      let svg = d3.select(".barsvg" + this.donor.Cluster_ID);
      svg.selectAll(".barg").remove();
      // add the rectangles
      let rects = svg
        .append("g")
        .attr("class", "barg")
        .selectAll("rect")
        .data(this.mapped)
        .join("rect")
        .attr("x", d => leftMargin+this.x(d.candidate))
        .attr("width", d => this.x.bandwidth())
        .attr("y", d => topMargin+this.y(d.amount))
        .attr("height", d => this.y(0) - this.y(d.amount))
        .attr("fill", this.primaryblue)
        .attr("name", d => d.name)
        .attr("amount", d => d.amount)
        .attr("candidate", d=>d.candidate)
        .attr("class",d =>"can"+d.candidate)
        .on("mouseover", e =>{
            d3.selectAll("."+e.srcElement.getAttribute("class"))
            .classed("barHighlighted", true)
            d3.selectAll(".label"+e.srcElement.getAttribute("candidate"))
            .classed("hiddenlabel",false).classed("showlabel",true)
            this.$emit("candidate",e.srcElement.getAttribute("class"))         
        })
        .on("mouseout", e => {
            d3.selectAll(".barHighlighted")
                .classed("barHighlighted", false)
            d3.selectAll(".label"+e.srcElement.getAttribute("candidate"))
            .classed("hiddenlabel",true).classed("showlabel",false)    
        })
        .on("click", e => {
            this.$emit("dialog",e.srcElement.getAttribute("class"))
        })
        let moneytext = svg.append('g')
          .attr("class", "barg")
          .selectAll("text")
          .data(this.mapped)
          .join("text")
          .attr("x", d => leftMargin+this.x(d.candidate))
          .attr("y", topMargin-2)
          .attr("class", d=>"hiddenlabel " +"label"+d.candidate)
          .text(d => {
            if (d.amount > 0) {
              return d3.format("$.4~s")(d.amount)
            }
          })
        let nametext = svg.append('g')
          .attr("class", "barg")
          .selectAll("text")
          .data(this.mapped)
          .join("text")
          .attr("x", d => leftMargin+this.x(d.candidate))
          .attr("y", this.height-2)
          .attr("class", d=>"hiddenlabel " +"label"+d.candidate)
          .text(d => {
            if (d.name != '') {
              return d.name
            }
          })

    },
    
    
  },
  beforeMount(){
    if (this.$store.state.candidateInfo.length == 0){
      this.$store.dispatch("getCandidateData")
    }
  },
  mounted() {
    this.drawFingerprint();
  },
  updated() {
      this.updateFingerprint();
  }
};
</script>
<style>
    .slideLeft{
      margin-left: -70px;
    }
   
</style>
<style lang="scss">
   .barHighlighted {
        stroke: $primary-blue;
        stroke-width: 3;
        fill: $primary-grey;
        cursor: pointer;
        }

    .donorlist {
      background-color: $primary-tan;
      padding: 3px;
      border-radius: 15px;
      overflow: auto;
    }
    .hiddenlabel {
      display: none;
    }
    .showlabel {
      font-size:12px;
      font-weight: bolder;
      text-anchor: middle
    }
</style>
