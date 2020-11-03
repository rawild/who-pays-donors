export const state = () => ({
    range: []
  })

export const mutations = {
    updateRange(state,range) {
        if ((state.range[0] != range[0]) || (state.range[1] != range[1])) {
            state.range.splice(0,2,range[0],range[1])
        }
    },
    
}