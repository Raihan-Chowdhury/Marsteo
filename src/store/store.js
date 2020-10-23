import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 5,
        email : ''
    },
    getters: {
        half: state => {
            return state.counter/2 ;
        }
    },
    mutations: {
        reduceNumber: state => {
            state.counter--;
        }
    },
    actions: {
        redu: context => {
            context.commit('reduceNumber')
        }
    }
})