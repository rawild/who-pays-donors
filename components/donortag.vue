<template>
  <div class="donortag" >
    <div class="left">
      <NuxtLink @click.native="openDonorFile" to="/donorfile">
      <v-icon class="top" size="21px"  color="black" >
        mdi-folder-text
        </v-icon>
      </NuxtLink>
      <br>
         <v-icon size="21px" color="black" @click="removeDonor">
        mdi-trash-can
        </v-icon>
    </div>
    <div class="right">
      <h1>{{ donor.Donor }}</h1>
      <div class="normal">{{ "$" + donorTotal }}</div>
      <div class="normal">
        {{
          (donorInfo.recipients != null ? donorInfo.recipients : 0) +
            " Recipients"
        }}
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "donortag",
  props: {
    donor: {
      type: Object,
      required: true
    }
  },
  computed: {
    donorInfo() {
      return this.$store.getters.getDonorInfoById(this.donor.Cluster_ID);
    },
    donorTotal() {
      if (this.donorInfo != null) {
        if (this.donorInfo.total != null) {
          return d3.format(".4~s")(this.donorInfo.total);
        }
      }
      return 0;
    }
  },
  methods: {
    removeDonor() {
      this.$emit("removeDonor",this.donor)
    },
    openDonorFile() {
      this.$store.dispatch("openDonorFile", this.donor)
    }
  }
};
</script>

<style scoped>
.donortag {
  width: 25%;
  text-align: left;
  display:flex;
}
.left {
  padding-right: 15px;
  padding-left: 5px;
  padding-top: 2px;
  max-width:100px;
}
.right {
  min-width:200px;
}
.top{
  padding-bottom:10px;
}
.normal {
  font-size:.7em;
}
h1 {
  font-size: .9em;
}
a {
  text-decoration: none;
}
</style>

<style lang="scss"></style>
