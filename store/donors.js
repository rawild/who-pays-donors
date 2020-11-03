import * as d3 from 'd3'
export const state = () => ({
  selected: [],
  options: [],
  queued: ""
});

export const mutations = {
  queue(state, donor) {
    state.queued = donor;
  },
  addQueued(state) {
    if (state.queued) {
      state.selected.push(state.queued);
      state.queued = "";
    }
    console.log("selected", state.selected);
  },
  removeSelected(state, { id }) {
    state.selected.splice(state.selected.indexOf(id), 1);
  },
  setOptionsfromDonorList(state, options) {
    state.options = options;
  }
};

export const actions ={
    loadOptions: ({commit}) => {
        d3.csv("/donors_15-20.csv", d3.autoType).then(donors => {
            commit("setOptionsfromDonorList",donors)
          });
    }
}
