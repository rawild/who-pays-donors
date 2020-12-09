import * as d3 from "d3";
import donorsList from "~/static/summarized_year_filings_15-20.json";
import candidateInfo from "~/static/Electeds_List_05_13.json";

export const state = () => ({
  primaryblue: "#214167",
  primarygrey: "#EDEEF3",
  donorslist: donorsList,
  candidates: [],
  candidateInfo: candidateInfo,
  donationsInfo: new Map([])
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
    let sorted_donations = new Map(
      [...donationsInfo.entries()].sort((a, b) => b[1].total - a[1].total)
    );
    return sorted_donations;
  },
  getDonationsInfoinYears: state => {
    let donationsFiltered = state.donorslist.filter(d => {
      if (d.Contribution_Year >= state.year.range[0]) {
        if (d.Contribution_Year <= state.year.range[1]) {
          return true;
        }
      }
    })
    let donationsInfo = d3.rollup(
      donationsFiltered,
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
    let sorted_donations = new Map(
      [...donationsInfo.entries()].sort((a, b) => b[1].total - a[1].total)
    );
    return sorted_donations;
  }
};

export const actions = {
  getDonorData: ({ getters, commit }) => {
    let donationsInfo = getters.getDonationsInfo;
    commit("setDonationsInfo", donationsInfo);
  },
  getCandidateData: ({ commit, state }) => {
    let candidates = Array.from(
      d3.group(state.candidateInfo, d => d.Elected_Id).keys()
    );
    candidates.sort(d3.ascending);
    commit("setCandidates", candidates);
  },
  openDonorFile: ({ getters, commit, state }, donor) => {
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
  closeDonorFile: ({dispatch, commit, state}, donor) => {
    if (state.file.donorFile.donor.Cluster_ID == donor.Cluster_ID) {
      let donorIndex = state.donors.selected.findIndex(d => d == donor)
      if (donorIndex > 0){
        dispatch('openDonorFile', state.donors.selected[donorIndex-1])
      } else if ((donorIndex == 0) && (state.donors.selected.length > 1)){
        dispatch('openDonorFile',state.donors.selected[donorIndex+1])
      } else {
        commit('file/setDonorFile',{})
      }
    }
    commit('donors/removeSelected', donor)
  } 
};
