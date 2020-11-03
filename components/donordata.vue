<template>
  <div class="donordata">
      <div class="controls flex-grid">
        <div class="search col">
          <autocomplete />
          <addbutton />
        </div>
        <div class="slider col">
          <yearslider />
        </div>
      </div>
       <div class="donorlist" v-for="donor in selectedDonors"
        :key="donor.Cluster_ID">
        <fingerprint :donor="donor" :divClass="'fingerprint'+donor.Cluster_ID"/>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "donordata",
  props: {},
  computed: mapState({
    selectedDonors: state => state.donors.selected
  }),
  methods: {},
  beforeMount() {
    this.$store.dispatch('getDonorData')
  }

};
</script>

<style>
.donordata {
 width: 90%;
 min-height: 500px;
}
.controls {
  width: 90%;
  height: 150px;
}
.flex-grid {
  display: flex;
  align-items: center;
}
.col {
  flex: 1;
}
.search {
    min-width: 50%;
  display: flex;
}
.slider {
    min-width: 50%;
}
.donorlist {
    min-width: 90%;
}
</style>

<style lang="scss"></style>
