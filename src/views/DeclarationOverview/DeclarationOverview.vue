<template src="./DeclarationOverview.html"></template>
<style src="./DeclarationOverview.css" scope></style>
<script>
import Header from '../../shared/Header/Header';

export default {
  name: 'DeclarationOverview',
  components: {
    Header,
  },
  methods: {
    returnToChatStep(step) {
      this.$router.push({ path: 'chat/' + step });
    }
  },
};
</script>