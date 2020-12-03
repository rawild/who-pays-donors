<template>
  <div class="searchbar flex-grid">
    <div class="autocomplete col">
      <input
        type="text"
        @input="onChange"
        v-model="search"
        @keydown.down="onArrowDown"
        @keydown.up="onArrowUp"
        @keydown.enter="onEnter"
        placeholder=" Search for Donor"
      />
      <ul
        id="autocomplete-results"
        v-show="isOpen"
        class="autocomplete-results"
      >
        <li class="loading" v-if="isLoading">
          Loading results...
        </li>
        <li
          v-else
          v-for="(result, i) in results"
          :key="result.Cluster_ID"
          @click="setResult(result)"
          class="autocomplete-result"
          :class="{ 'is-active': i === arrowCounter }"
        >
          {{ result.Donor }}
        </li>
      </ul>
    </div>
    <addbutton :type="this.button" @clear="onClear" />
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "autocomplete",
  props: {
    button: {
      type: String,
      required: false,
      default: "Add"
    }
  },

  data() {
    return {
      isOpen: false,
      results: [],
      search: "",
      isLoading: false,
      arrowCounter: -1,
      options: []
    };
  },
  computed: {
    items() {
      return this.$store.state.donors.options;
    }
  },

  methods: {
    onChange() {
      // Let's warn the parent that a change was made
      this.$emit("input", this);

      // Let's  our flat array
      this.filterResults();
      this.isOpen = true;
    },
    filterResults() {
      // first uncapitalize all the things
      if (this.search.length > 0) {
        if (this.search.length < 2) {
          this.results = this.items.filter(item => {
            return (
              item.Donor.toLowerCase().indexOf(this.search.toLowerCase()) == 0
            );
          });
        } else {
          this.results = this.items.filter(item => {
            return (
              item.Donor.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            );
          });
        }
      }
    },
    setResult(result) {
      this.search = result.Donor;
      this.isOpen = false;
      this.$store.commit("donors/queue", result);
    },
    onArrowDown(evt) {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter = this.arrowCounter + 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter = this.arrowCounter - 1;
      }
    },
    onEnter() {
      this.search = this.results[this.arrowCounter].Donor;
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    onClear() {
      this.search = "";
    }
  },
  watch: {
    items: function(val, oldValue) {
      // actually compare them
      if (val.length !== oldValue.length) {
        this.results = val;
        this.isLoading = false;
      }
    }
  },
  beforeMount() {
    this.$store.dispatch("donors/loadOptions");
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<style>
.searchbar {
  min-width: 250px;
  width: 100%;
}

.autocomplete {
  min-width: 200px;
  width: 100%;
  height: 70px;
  flex: 4;
  padding: 10px;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 150px;
  overflow: auto;
  width: 100%;
  background-color: white;
  z-index: 2;
  position: relative;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}
.autocomplete input {
  margin: auto;
  width: 100%;
  height: 100%;
  padding-left: 5px;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
<style lang="scss">
.autocomplete input {
  background-color: $primary-grey;
}
</style>
