export const eventdone = ({ commit }, param) => {
    commit('EVENTDONE', { id: param });
}