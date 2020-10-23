<template>
    <nav>
        <div class="text-center">
                <v-snackbar v-model="snackbar" top outlined color="orange" text>Awsome! You added a new project 
                <template v-slot:action="{ attrs }">
                    <v-btn color="orange" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                </template>
            </v-snackbar>
        </div>
        
        <v-toolbar app >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <v-icon>mdi-rocket-launch-outline</v-icon>
                <span class="font-weight-light">Mars</span><span>teo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-podcast</v-icon>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="mx-auto overflow-hidden">
            <!--  -->
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    Marsteo
                </v-list-item-title>
                <v-list-item-subtitle>
                    Alien👽
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <Popup @projectAdded="snackbar = true" />
            <!--  -->
            
            <v-list dense nav>
                <v-list-item v-for="(link,index) in links" :key="index" router :to="link.route">
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ link.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                    
                    <v-btn class="my-4"  block @click="drawer = !drawer">Close</v-btn>
            </v-list>


        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from "./Popup"

export default {
    components:{
        Popup
    },
    data(){
        return{
            drawer : false,
            links:[
                {icon:'mdi-view-dashboard',title:'Dashboard',route:'/'},
                {icon:'mdi-folder-account',title:'My Projects',route:'/projects'},
                {icon:'mdi-account-supervisor-circle',title:'Team',route:'/team'},
            ],
            snackbar: false,
        }
    }
}
</script>