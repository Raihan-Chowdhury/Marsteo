<template>
  <div class="dashboard" >
    <h1 class="display-1">Dashboard</h1>
    <v-container>

      <v-row class="mb-3">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
              <v-btn small text color="orange" @click="sortBy('title')"
                v-bind="attrs"
                v-on="on"
              ><v-icon left small>mdi-folder</v-icon>
                <span caption >by project name</span>
              </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="orange"  @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account-supervisor</v-icon>
              <span caption >by person</span>
            </v-btn>
            </template>
            <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card :class="`pa-4 project ${project.status} `" v-for="(project,index) in projects" :key="index" >
        <v-row >
          <v-col lg="6" md="6" xs="12" sm="12" >
            <div class="caption">Project title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption">Due By</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="d-flex justify-center">
              <div>
                <p>Status</p>
                <p :class="`status ${project.status} kalam`">{{project.status}}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>

export default {
  data(){
    return{
      projects: [
        { title: 'Design a new website', person: 'Pikachu', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Mecha', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Lue', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Goku', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1:1);
    },
  }
}

</script>

<style scoped>
.project.complete{
  border-left: 4px solid lightseagreen;
}
.project.ongoing{
  border-left: 4px solid greenyellow;
}
.project.overdue{
  border-left: 4px solid orangered;
}
.status.complete{
  color:lightseagreen;
}
.status.ongoing{
  color:greenyellow;
}
.status.overdue{
  color:orangered;
}
</style>
