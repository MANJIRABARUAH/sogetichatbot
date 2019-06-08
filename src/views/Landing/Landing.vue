<template src="./Landing.html"></template>
<style src="./Landing.css"></style>
<script>
import ChatBlock from '../../shared/ChatBlock/ChatBlock';
import DeclarationsOverview from '../../shared/DeclarationsOverview/DeclarationsOverview';
import FixedRoundButton from '../../shared/FixedRoundButton/FixedRoundButton';
import Header from '../../shared/Header/Header';

export default {
  name: 'Landing',
  components: {
    Header,
    DeclarationsOverview,
    ChatBlock,
    FixedRoundButton,
  },
};
</script>