import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import scratch from './components/scratch.vue'
function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}
function loadComponent(component) {
  return () => import(`./components/${component}.vue`)
}

const routes = [

  {
    path: '/home',
    name: 'Home',
    component: loadPage('HomePage'),
    children: [
      {
        name: 'groomers',
        path: '',
        component: loadComponent('GroomersSection'),
      },
      {
        name: 'details',
        path: '/groomers/:id',
        component: loadComponent('AboutSection'),
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
