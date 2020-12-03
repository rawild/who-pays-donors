import * as d3 from "d3";
export const state = () => ({
  primaryblue: "#214167",
  donorslist: [],
  candidates: [],
  candidateInfo: [],
  donationsInfo: new Map([]),
});

export const mutations = {
  setDonors(state, donorsObj) {
    state.donorslist = donorsObj;
  },
  setCandidates(state, candidates) {
    state.candidates = candidates;
  },
  setCandidateInfo(state, candidateInfo) {
    state.candidateInfo = candidateInfo;
  },
  setDonationsInfo(state, donationsInfo) {
    state.donationsInfo = donationsInfo;
  }
};

export const getters = {
  getDonorName: state => id => {
    return state.donors.options.find(d => d.Cluster_ID == id).Donor;
  },
  getCandidateName: state => id => {
    return state.candidateInfo.find(d => d.Elected_Id == id);
  },
  getDonorById: state => id => {
    let donor = state.donors.options.find(d => d.Cluster_ID == id);
    return donor;
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
    let recipients = d3.group(contributions, d => d.Candidate_ID);
    let rollup = d3.rollup(
      contributions,
      v => d3.sum(v, d => d.Total),
      d => d.Cluster_ID
    );
    let donorName = state.donors.options.find(d => d.Cluster_ID == id).Donor;
    let donor = {
      id: id,
      total: rollup.get(id),
      recipients: recipients.size,
      name: donorName
    };
    return donor;
  },
  getCandidateInfoById: state => (id, donors) => {
    if (donors == null) {
      donors = state.donors.selected;
    }
    let candidate = state.candidateInfo.filter(d => d.Elected_Id == id)[0];
    let selectedDonors = donors.map(d => d.Cluster_ID);
    let contributions = state.donorslist.filter(d => {
      return selectedDonors.includes(d.Cluster_ID);
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
    let candidateInfo = { candidate: candidate, donors: [] };
    for (let [key, value] of rollup) {
      let donor = state.donors.options.filter(d => d.Cluster_ID == key);
      if (donor.length > 0) {
        let info = {
          donor: donor[0],
          total: value
        };
        candidateInfo.donors.push(info);
      }
    }
    return candidateInfo;
  },
  getDonorContributionsbyId: state => id => {
    let contributions = state.donorslist.filter(d => d.Cluster_ID == id);
    return contributions;
  },
  getDonationsInfo: state => {
    let donationsInfo = d3.rollup(
      state.donorslist,
      v => {
        let total = d3.sum(v, d => d.Total);
        let average = d3.mean(v, d => d.Total);
        let size = v.length;
        return {
          total: total,
          average: average,
          size: size
        };
      },
      d => d.Cluster_ID
    );
    return donationsInfo;
  }
};

export const actions = {
  getDonorData: ({ getters, commit }) => {
    d3.csv("/summarized_year_filings_15-20.csv", d3.autoType).then(donors => {
      commit("setDonors", donors);
      let donationsInfo = getters.getDonationsInfo;
      commit("setDonationsInfo", donationsInfo);
    });
  },
  getCandidateData: ({ commit }) => {
    d3.csv("/Electeds_List_05_13.csv", d3.autoType).then(candidateInfo => {
      let candidates = Array.from(
        d3.group(candidateInfo, d => d.Elected_Id).keys()
      );
      candidates.sort(d3.ascending);
      commit("setCandidates", candidates);
      commit("setCandidateInfo", candidateInfo);
    });
  },
  openDonorFile: ({ getters, commit, dispatch, state }, donor) => {
    let contributions = getters.getDonorContributionsbyId(donor.Cluster_ID);

      let donorArray = Array.from(state.donationsInfo);
      donorArray.sort((a, b) => b[1].Total - a[1].Total);
      let totalRank = donorArray.findIndex(x => x[0] == donor.Cluster_ID);
      donorArray.sort((a, b) => b[1].average - a[1].average);
      let averageRank = donorArray.findIndex(x => x[0] == donor.Cluster_ID);
      let medianRecipients = d3.median(donorArray, d => d[1].size);
      let donorFile = {
        donor: donor,
        contributions: contributions,
        totalRank: totalRank,
        averageRank: averageRank,
        medianRecipients: medianRecipients
      };
      commit("file/setDonorFile", donorFile);
    },
  
};
