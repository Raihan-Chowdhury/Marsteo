<template>
  <div class="team" >
    <h1 class="display-1">Team</h1>

    <v-container class="my-6">
      <v-row>
        <v-col xs12 sm6 md4 lg3 v-for="(person,index) in team" :key="index" >
          <v-card class="text-center ma-3 pa-3">
            <v-responsive>
              <v-avatar size="120" color="orange accent-2"><img :src="`https://robohash.org/hello${person.name}`"></v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="subheading">{{person.role}}</div>
            </v-card-text>
            <v-card-action>
              <v-btn text color="orange">
                <v-icon>mdi-email-send</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer' },
        { name: 'Ryu', role: 'Graphic designer' },
        { name: 'Chun Li', role: 'Web developer' },
        { name: 'Gouken', role: 'Social media' },
        { name: 'Yoshi', role: 'Sales guru'}
      ]
    }
  }
}
</script>