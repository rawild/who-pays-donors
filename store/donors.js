import donorOptions from '~/static/donors_15-20.json'
export const state = () => ({
  selected: [],
  options: donorOptions,
  queued: ""
});

export const mutations = {
  queue(state, donor) {
    state.queued = donor;
  },
  addQueued(state) {
    if (state.queued) {
      if(state.selected.indexOf(state.queued) =="-1"){
        state.selected.push(state.queued);
      }   
      state.queued = "";
    }
  },
  removeSelected(state, donor) {
    console.log(donor)
    state.selected.splice(state.selected.indexOf(donor), 1);
  },
  setOptionsfromDonorList(state, options) {
    state.options = options;
  }
};

export const actions ={
  
}
