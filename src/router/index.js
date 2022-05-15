import { createRouter, createWebHistory } from 'vue-router';
import RobotBuilder from '../build/RobotBuilder.vue';
import Success from '../build/Success.vue';
import Fail from '../build/Fail.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'RobotBuilder',
      component: RobotBuilder,
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail,
    },
  ],
});
