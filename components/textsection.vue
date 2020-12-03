<template>
  <div class="section intro">

      <div v-if="header" class="sectionheader">
        {{this.header}}
      </div>
      <div v-else />
      <div v-if="body" class="bodytext">
        {{this.body}}
      </div>
      <div v-else />
  </div>
</template>

<script>
export default {
    name: "textsection",
    props: {
      header: {
        type: String,
        required: false
      },
      body: {
        type: String,
        required: false
      }
  },
};
</script>

<style lang="scss">
.intro {
  margin-top: 100px;
}
.bodytext {
  background-color: $primary-grey;
  text-align: left;
  width: 80%;
  padding: 20px;
  font-weight: 300;
}
</style>
