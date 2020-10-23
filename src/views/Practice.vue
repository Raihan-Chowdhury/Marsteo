<template>
    <div>
        <p>Practice {{counter}} {{half}}</p>
        <v-btn @click="redu">Reduce</v-btn>
        <router-link to="/login">check</router-link>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions } from 'vuex';
export default {
    data(){
        return{
            // counter : this.$store.state.counter
        }
    },
    computed:{
        // half(){
        //     return this.$store.getters.half;
        // },
        ...mapGetters([
            'half'
        ]),
        counter() {
            return this.$store.state.counter
        }
    },
    methods :{
        // reduceNumber(){
        //     this.$store.commit('reduceNumber');
        // },
        // redu(){
        //     this.$store.dispatch('reduceNumber');
        // }
        ...mapActions([
            'redu'
        ])
    }
}
</script>