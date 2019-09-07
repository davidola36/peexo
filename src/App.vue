<template>
  <v-app id="app">
    <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
  @import './main.css';
</style>
