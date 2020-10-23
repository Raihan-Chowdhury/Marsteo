<template>
  <div class="project" >
    <h1 class="display-1">Project</h1>

    <v-container class="my-5">
      <v-expansion-panels >
        <v-expansion-panel v-for="(project,index) in myProject" :key="index">
          <v-expansion-panel-header>
            <div>
              <v-icon color="orange" class="mr-2" >mdi-podcast</v-icon>
              <span class="orange--text">{{project.title}}</span>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="mb-4">
              <span class="pink--text font-weight-medium">Due : </span><span class="red--text font-weight-medium">{{project.due}}</span>
            </div>
            <p>{{project.content}}</p>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>

  </div>
</template>

<script>

export default {
  data(){
    return{
      projects: [
        { title: 'Design a new website', person: 'Pikachu', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed:{
    myProject(){
      return this.projects.filter(project=>{
        return project.person == 'Pikachu'
      })
    }
  }
}

</script>