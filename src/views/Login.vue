<template>
    <div>
        <v-text-field
            v-model="email"
            label="Email"
            required
            dark
            autocomplete="off"
            type="email"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            dark
            autocomplete="off"
            type="password"
            required
        ></v-text-field>
        <v-btn color="orange" text outlined @click="login">Login</v-btn>
        <p>Need an account ? <router-link to="/signup">Sign Up</router-link> </p>
        <h1>{{half}}</h1>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name:"Login",
    data(){
        return{
            email : '',
            password : '',
        }
    },
    computed:{
        half(){
            return this.$store.getters.half;
        }
    },
    methods:{
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
                user =>{
                    console.log(user.data);
                },
                err =>{
                    alert(err);
                }
            )
        }
    }
}
</script>