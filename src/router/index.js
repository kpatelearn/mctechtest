import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Juniors from '../views/Juniors.vue'
import Seniors from '../views/Seniors.vue'
import Year9 from '../views/Year9.vue'
import Year9R from '../views/Year9R.vue'
import Year9M from '../views/Year9M.vue'
import Year10 from '../views/Year10.vue'

const router = createRouter({
  history: createWebHistory(import.meta.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/juniors',
      name: 'juniors',
      component: Juniors
    },
    {
      path: '/seniors',
      name: 'seniors',
      component: Seniors
    },
    {
      path: '/year9',
      name: 'year9',
      component: Year9
    },
    {
      path: '/year9R',
      name: 'year9R',
      component: Year9R
    },
    {
      path: '/year9M',
      name: 'year9M',
      component: Year9M
    },
    {
      path: '/year10',
      name: 'year10',
      component: Year10
    }
  ]
})

export default router
