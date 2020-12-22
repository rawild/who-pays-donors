<template>
    <div class="header light">
          <h1 class="titleheader">
            Who Pays?
          </h1>
          <div class="subheader">
            Explore New York City Political Donors
          </div>
          <div>
             <NuxtLink :to="linkTo">{{linkText}}</NuxtLink>
          </div>
        </div>
</template>

<script>
export default {
    name: "top",
    props: {
      linkTo: {
        type: String,
        required: false
      },
      linkText: {
        type: String,
        required: false
      }
    }
}
</script>

<style lang="scss">
.titleheader {
  font-family: 'Fjalla One', sans-serif;
  display: block;
  font-weight: 500;
  font-size: 7em;
  color: black;
  letter-spacing: 1px;
  padding-top: 80px;
}

.subheader {
  font-weight: 500;
  font-size: 36px;
  word-spacing: 5px;
  padding-bottom: 15px;
  color: black;
}

a {
  text-decoration: none;
  color: black !important;
  cursor: pointer;
  padding-bottom: 10px;
}
</style>