<template lang="html">
  <div class="text-xs-center align-middle">
    <v-card>
				<h1>Track your time!</h1>
        <h1><time>{{ `${hours}:${minutes}:${seconds}` }}</time></h1>
        <v-btn fab small dark color="green" v-on:click="startTimer">
          <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-btn  fab small dark color="red" v-on:click="stopTimer">
          <v-icon dark>pause</v-icon>
        </v-btn>
    </v-card>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/Footer'
export default {
  components: {
    Footer
  },
  data () {
    return {
      hours: "00",
      minutes: "00",
      seconds: "00",
      timer: "",
      working: false
    }
  },
  methods: {
    startTimer (event) {
			if(this.working == false){
     		this.timer = setInterval(this.add, 1000)
				this.working = true
			}
    },
    stopTimer () {
      clearInterval(this.timer)
      this.working = false
    },
    add() {
      this.seconds++
      if (this.seconds === 60) {
        this.seconds = 0
        this.minutes++
        if (this.minutes === 60) {
          this.minutes = 0
          this.hours++
        }
      }
    }
  }
}
</script>

<style lang="css">
.align-middle{
	margin-top: 30vh;
}
</style>
