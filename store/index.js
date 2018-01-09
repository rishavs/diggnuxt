import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            currentUser: null
        },
        getters: {
            getUser: (state) => {
                return state.currentUser
            }
        },
        mutations: {
            setUser: (state, payload) => {
                state.currentUser = payload
            }
        },
        actions: {
            autoLogin: ({commit}, payload) => {
                commit('setUser', payload)
            },
            autoLogout: ({commit}) => {
                commit('setUser', null)
            }
        }
    })
}

export default createStore
