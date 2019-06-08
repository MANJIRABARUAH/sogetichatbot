<template src="./ChatBlock.html"></template>
<style src="./ChatBlock.css"></style>
<script>
export default {
  name: 'ChatBlock',
  props: {
    sender: String, // based on sender is bot or user, css changes
    message: String, // this message is shown in the chatbox
  },
};
</script>