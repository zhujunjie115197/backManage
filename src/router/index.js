import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/home'
import User from '../components/basedata/user'
import ApplyList from '../components/apply/applylist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id/',
      name: 'user',
      component: User
    },
    {
      path: '/applist',
      name: 'applist',
      component: ApplyList
    }
  ]
})
