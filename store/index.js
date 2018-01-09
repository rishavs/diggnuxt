import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            currentUser: null
        },
        mutations: {
            setUser (state, data) {
                state.currentUser = data
            },
            removeUser (state) {
                state.currentUser = null
            }
        }
    })
}

export default createStore
