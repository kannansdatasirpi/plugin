<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <MyHeader></MyHeader>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from './components/MyHeader.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    MyHeader
  },

  data: () => ({
    //
  }),
}
</script>
