<template>
      <div>

        <v-bottom-nav>
          <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <div class="hidden-sm-and-down">
            <v-btn @click="$router.push('/')">
              <span>Home</span>
              <v-icon>home</v-icon>
            </v-btn>

            <v-btn @click="$router.push('login')">
              <span>Login</span>
              <v-icon>account_circle</v-icon>
            </v-btn>

            <v-btn @click="$router.push('register')">
              <span>Register</span>
              <v-icon>how_to_reg</v-icon>
            </v-btn>

            <v-btn @click="$router.push('about')">
              <span>About</span>
              <v-icon>info</v-icon>
            </v-btn>

            <v-btn @click="$router.push('timer')">
              <span>Timer</span>
              <v-icon>timer</v-icon>
            </v-btn>
          </div>
        </v-bottom-nav>

        <!--side navigation drawer visible only in small devices-->
        <div class="hidden-md-and-up">
          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
          >
            <v-list class="pa-1">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <v-icon>apps</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>Title</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>

            <v-list class="pt-0" dense>
              <v-divider></v-divider>

              <v-list-tile
              v-for="item in items"
              :key="item.title"
              :to="item.to"
              >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          </v-navigation-drawer>
        </div>
      </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'home', to: '/' },
        { title: 'Login', icon: 'account_circle', to: 'login' },
        { title: 'Register', icon: 'how_to_reg', to: 'register' },
        { title: 'About', icon: 'info', to: 'about' },
        { title: 'Timer', icon: 'timer', to: 'timer' }
      ]
    }
  }
}
</script>

<style>

</style>
