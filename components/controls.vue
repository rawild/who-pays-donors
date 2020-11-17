<template>
    <div class="controls flex-grid">
          <div class="search col">
            <autocomplete />
          </div>
          <div class="slider col">
            <yearslider />
          </div>
    </div>
</template>

<script>
export default {
  name: "controls",
}
</script>

<style >
.controls {
  width: 90%;
  height: 150px;
  max-width: 1000px;
  margin: auto;
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
</style>

