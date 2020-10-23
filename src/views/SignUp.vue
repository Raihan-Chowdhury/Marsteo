<template>
    <div id="SignUp">
        <!-- <input type="email" placeholder="Email" v-model="email"> -->
        <!-- <br> -->
        <!-- <input type="password" placeholder="Password" v-model="password"> -->
        <v-text-field
            v-model="email"
            label="Email"
            required
            type="email"
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
        ></v-text-field>
        <v-btn color="orange" text outlined @click="signup">Sign Up</v-btn>
        <p>Have an account ? <router-link to="/login">Login</router-link> </p>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name:"SignUp",
    data(){
        return{
            email : '',
            password : '',
        }
    },
    methods:{
        signup(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
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