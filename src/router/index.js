import Vue from 'vue';
import Router from 'vue-router';

import Chat from '@/views/Chat/Chat';
import DeclarationOverview from '@/views/DeclarationOverview/DeclarationOverview';
import Landing from '@/views/Landing/Landing';
import Login from '@/views/Login/Login';
import Overview from '@/views/Overview/Overview';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: '/SogetiProduct/',

  routes: [
    {
      path: '/',
      component: Login,
    },
    {
      path: '/landing',
      component: Landing,
    },
    {
      path: '/chat/:step',
      component: Chat,
    },
    {
      path: '/declaration',
      component: DeclarationOverview,
    },
    {
      path: '/overview',
      component: Overview,
    },
  ],
});
