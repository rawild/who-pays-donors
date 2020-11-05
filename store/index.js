import * as d3 from "d3";
export const state = () => ({
  primaryblue: "#214167",
  donorslist: [],
  candidates: []
});

export const mutations = {
  setDonors(state, donorsObj) {
    state.donorslist = donorsObj;
  },
  setCandidates(state, candidates) {
    state.candidates = candidates;
  },
  setCandidatesfromDonors(state, donors) {
    let candidates = Array.from(d3.group(donors, d => d.Candidate_ID).keys());
    candidates.sort(d3.ascending);
    state.candidates = candidates;
  },
  getDonorData(state) {
    d3.csv("/summarized_year_filings_15-20.csv", d3.autoType).then(donors => {
      let candidates = Array.from(d3.group(donors, d => d.Candidate_ID).keys());
      state.donorslist = donors;
      state.candidates = candidates;
    });
  }
};

export const getters = {
  getDonorName: state => id => {
    return state.donors.options.find(d => d.Cluster_ID == id).Donor;
  },
  getDonorInfoById: state => id => {
    let contributions = state.donorslist.filter(d => d.Cluster_ID == id);
    contributions = contributions.filter(d => {
      if (d.Contribution_Year >= state.year.range[0]) {
        if (d.Contribution_Year <= state.year.range[1]) {
          return true;
        }
      }
      return false;
    });
    let rollup = d3.rollup(
      contributions,
      v => d3.sum(v, d => d.Total),
      d => d.Cluster_ID
    );
    let donor = { id: id, total: rollup.get(id) };
    return donor;
  },
  getCandidateInfoById: state => id => {
    let selectedDonors = state.donors.selected.map(d => d.Cluster_ID)
    let contributions = state.donorslist.filter(d => {
      return selectedDonors.includes(d.Cluster_ID)
    });
    contributions = contributions.filter(d => d.Candidate_ID == id);
    contributions = contributions.filter(d => {
      if (d.Contribution_Year >= state.year.range[0]) {
        if (d.Contribution_Year <= state.year.range[1]) {
          return true;
        }
      }
    });
    let rollup = d3.rollup(
      contributions,
      v => d3.sum(v, d => d.Total),
      d => d.Cluster_ID
    );
    let candidateInfo = [];
    for (let [key,value] of rollup ){
      let donor = state.donors.options.filter(d=>d.Cluster_ID == key)
      if  (donor.length > 0){
        let info = {
            "donor": donor[0],
            "total": value
            }
        candidateInfo.push(info)
      }
    }
    return candidateInfo;
  }
};

export const actions = {
  getDonorData: ({ commit }) => {
    d3.csv("/summarized_year_filings_15-20.csv", d3.autoType).then(donors => {
      let candidates = Array.from(d3.group(donors, d => d.Candidate_ID).keys());
      candidates.sort(d3.ascending);
      commit("setDonors", donors);
      commit("setCandidates", candidates);
    });
  }
};
