import { auth } from '@/services/firebaseInit.js'

export default (store) => {
    // const {store} = store
    console.log(store.currentUser)
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('AUTH CHECK: Signed in user!')
            store.commit('setUser', user).then(console.log(store.currentUser))
        } else {
            console.log('AUTH CHECK: No user!')
            store.commit('removeUser').then(console.log(store.currentUser))
        }
    })
}
