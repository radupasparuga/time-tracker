<template lang="html">
  <div>
    <h1>Plan component</h1>
    <v-fab-transition>
    <v-btn
      color="pink"
      fab
      dark
      absolute
      right
      class="fab-button"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-fab-transition>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/footer/Footer'

export default {
  components: {
    Footer
  }
}
</script>

<style lang="css">
.fab-button {
  bottom: 10px;
}
</style>
