import { auth } from '@/services/firebaseInit.js'

export default ({store}) => {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            console.log('AUTH CHECK: Signed in user!')
            store.dispatch('autoLogin', user).then(console.log(store.getters.getUser.email))
        } else {
            console.log('AUTH CHECK: No user!')
            store.dispatch('autoLogout').then(console.log(store.getters.getUser))
        }
    })
}
