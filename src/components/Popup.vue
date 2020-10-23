<template>
  <v-row justify="center" class="kalam">

    <v-dialog
      v-model="dialog"
      max-width="600px"
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="orange--text mt-3"
          outlined
          v-bind="attrs"
          v-on="on"
        >
          Add Project
        </v-btn>
      </template>
      
      <v-card>
        <v-toolbar
          dark
          color="pink"
        >
          <v-btn
            icon
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="kalam">Add A Project</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="submit"
              class="kalam"
              :loading="loading"
            >
              Post
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          
          <v-form class="ma-8 kalam" ref="form">
                <v-text-field :rules="inputRules" v-model="title" label="Title"></v-text-field>
                <v-textarea label="Information" v-model="content" :rules="inputRules"></v-textarea>
                  <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    >
                    <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        persistent
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Picker in dialog"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-dialog>
                    </v-col>
                </v-row>
          </v-form>

          <div class="mt-4 mx-6">
              <v-alert color="orange" dense outlined text type="success">Add information carefully , Because there is no edit mode!</v-alert>
          </div>

        </v-list>
        <!-- <v-divider></v-divider> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
// import DatePick from "./small_component/date" 
import db from '../fb'

  export default {
    components:{
        // DatePick
    },
    data () {
      return {
        title: '',
        content: '',
        inputRules:[
          v => v.length >= 3 || 'Minimum length is 3 characters'
        ],
        //   popup
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        loading:false,
        // date
        date: new Date().toISOString().substr(0, 10),
        modal: false,
        // snackbar
          multiLine: true,
          snackbar: false,
      }
    },
    methods:{
        submit(){
          if(this.$refs.form.validate()){
            this.loading=true;
            const project ={
              title : this.title,
              content : this.content,
              due : this.date,
              person : 'Raihan Chowdhury',
              status : 'ongoing'
            }
            db.collection('projects').add(project).then(()=>{
              this.loading = false;
              console.log("Done");
              this.$emit('projectAdded')
            }
            );
            // Trash
            this.dialog = false;
            console.log(this.title,this.content,this.date);
            this.title='';
            this.content='';
            this.date='';
          }

        }
    }
  }
</script>
<style >

    @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');
    .kalam{
        font-family: 'Kalam', cursive;
    }

</style>