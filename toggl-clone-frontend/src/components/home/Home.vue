<template>
  <div class="home-component">
      <section class="home" ref="Home">
            <h1 class="text-xs-center pt-5 display-3 home-header">Take control of your time</h1>
            <h4 class="text-xs-center pt-3 headline">The newest time-tracking solution for your business</h4>
            <v-layout justify-center class="buttons">
                <v-btn color="#C3E4DF" @click="logIn = true" class="btn-log">LOG IN</v-btn>
                <v-btn color="#FBBEBC" @click="signUp = true" class="btn-sign">SIGN UP</v-btn>
            </v-layout>
            <v-dialog v-model="logIn" max-width="600px">
              <Login />
            </v-dialog>
            <v-dialog v-model="signUp" max-width="600px">
              <Register />
            </v-dialog>
      </section>

      <section class="product" ref="Product">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Modern features, the perfect solution for your business</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-top>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">access_alarm</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Built-in timer</div>
                    </v-card-title>
                    <v-card-text class="subheading">
                      Easy-to-use and precise, our built-in timer allows you and your employees to track time without worrying about it, it's as simple as the press of a button. No need to use outdated time-tracking methods when you have the newest one right here!
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">assessment</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Graphs</div>
                    </v-card-title>
                    <v-card-text class="subheading">
                      With our solution you can see how much you have worked for the past week, as well as how much your co-workers have worked for the past week. Our graphs allow your business to analyze the time spent working better than ever.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">folder</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Projects</div>
                    </v-card-title>
                    <v-card-text class="subheading">
                      Divide your working time into multiple projects for a cleaner workspace.
                      See how much time has been spent on a project in just a few clicks
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section class="about pt-5 text-xs-center" ref="About">
        <h1 class="headline">Our Moto</h1>
        <h4 class="title pt-3 font-italic">Time is the most valuable thing a man can spend</h4>
        <v-icon x-large class="pt-5">av_timer</v-icon>
        <h1 class="headline pt-5">Our Story</h1>
        <p class="pt-3 story-text subheading">We, at title, are passionate about the value of time. We believe that there is a better
        and more efficient way to track it. Our goal is to give you a simple, easy-to-use and fun
        tool, which you are going to use as a part of your workflow every day.</p>
        <v-icon x-large class="pt-5 pb-5">av_timer</v-icon>
      </section>

      <v-bottom-nav
      light
      :value="true"
      active.sync
      app
      >
        <v-btn v-for="item in items" :key="item.title" @click="goto(item.title)">
          <span>{{item.title}}</span>
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-bottom-nav>
  </div>
</template>

<script>
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'

export default {
  name: 'Home',
  components: {
    Login,
    Register
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'home'},
        { title: 'Product', icon: 'info'},
        { title: 'About', icon: 'timer'}
      ],
      logIn: false,
      signUp: false
    }
  },
   methods: {
    goto(refName) {
    	let element = this.$refs[refName];
      let top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>
<style lang="css">
html {
  scroll-behavior: smooth;
}

.home {
  height: 100vh;
  background-image: url("../../assets/background.jpg");
  min-height: 500px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 100%;
  padding-top: 5%;
}

.buttons {
  position: relative;
  top: 55%;
}

.about {
  background-color: #C3E4DF;
}

.story-text {
  margin-right: 24%;
  margin-left: 24%;
}


/* start of media queries*/
@media screen and (max-width: 750px) {
  .home-header {
    font-size: 40px!important;
    margin-top: 5%;
  }

  .headline {
    font-size: 23px!important;
  }
}

@media screen and (max-width: 500px) {
  .home-header {
    font-size: 32px!important;
    margin-top: 4%;
  }

  .headline {
    font-size: 20px!important;
  }

  .subheading {
    font-size: 15px!important;
  }

  .title {
    font-size: 18px!important
  }
  .about, .product {
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
