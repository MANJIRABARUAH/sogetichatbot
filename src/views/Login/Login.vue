<template src="./Login.html"></template>
<style src="./Login.css"></style>
<script>
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     username: '',
//   },
//   mutations: {
//     setUsername(name) {
//       state.username = name;
//     },
//   },
// });

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      promptPassword: false,
    };
  },
  methods: {
    next: function() {
      this.promptPassword = true;
    },
    login: function() {
      this.$router.push({ path: '/landing' });
    },
  },
};
</script>