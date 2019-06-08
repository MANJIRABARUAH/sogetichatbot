<template src="./Chat.html"></template>
<style src="./Chat.css"></style>
<script>
import ChatBlock from '../../shared/ChatBlock/ChatBlock';
import Header from '../../shared/Header/Header';
import SendChatButton from '../../shared/SendChatButton/SendChatButton'

import moment from 'moment';

export default {
  name: 'Chat',
  components: {
    Header,
    ChatBlock,
    SendChatButton
  },
  created() {
    if (this.$route.params.step){
      this.step = +this.$route.params.step;
    }
  },
  data() {
    return {
      declaration: {
        type: '',
        location: '',
        cost: 0,
        date: '',
        document: false,
        note: '',
      },
      message: '',
      chattingDisabled: true,
      step: 2,
      whereDidYouEatAnswer: '',
      dateAnswer: '',
      costIncurredAnswer: '',
      note: ''
    };
  },
  methods: {
    loadFile(event) {
      var preview = document.getElementById('output');
      preview.src = URL.createObjectURL(event.target.files[0]);
      this.step = 18;
    },
    openLoadFile() {
      document.getElementById('upload-hidden').click();
    },
    addDeclarationType(step, declarationType) {
      this.step = step;
      this.declaration.type = declarationType;
      this.chattingDisabled = false;
    },
    addLocation(step, event) {
      this.step = step;
      this.declaration.location = event.target.value;
    },
    addCost(step, event) {
      this.step = step;
      this.declaration.cost = event.target.value;
    },
    addDate(step, event) {
      this.step = step;
      // this.declaration.date = moment(event.target.value).format('Do of MMMM, YYYY');
      this.declaration.date = event.target.value;
    },
    addDocument(step, uploadDocument) {
      this.step = step;
      this.declaration.document = uploadDocument;
      if(uploadDocument === true) {
      this.openLoadFile();
      }
    },
    addNote(step, event) {
      this.step = step;
      this.declaration.note = event.target.value;
    },
    showDeclarationOverview() {
      this.$router.push({ path: '/declaration' });
    },
    navigateTo(path) {
      this.$router.push({ path: '/' + path});
    },
    sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if (new Date().getTime() - start > milliseconds) {
          break;
        }
      }
    },
  },
};
</script>