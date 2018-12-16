<template lang="html">
  <div>
    <v-bottom-nav
    light
    :value="true"
    active.sync
    app
    >
      <v-btn
        v-for="link in links"
        :key="link.index"
        flat
        router :to="link.route"
      >
        <span>{{ link.title }}</span>
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
  </v-bottom-nav>
</div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Track', icon: 'timelapse', route: '/track' },
        { title: 'Plan', icon: 'calendar_today', route: '/plan' },
        { title: 'Settings', icon: 'settings', route: '/settings' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
