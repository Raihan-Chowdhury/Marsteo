import firebase from './fb'
import store from './store'

firebase.auth().onAuthStateCHanged(function (user) {
    if (user) {
        store.commit(`user/USER_DETAILS`, user);
    } else {
        store.commit(`user/LOGOUT`);
    }
})