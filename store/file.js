export const state = () => ({
    donorFile: {}
  });
  
  export const mutations = {
    setDonorFile(state, donorFile) {
        state.donorFile = donorFile;
    }
  };
  