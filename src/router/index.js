import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../App.vue';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home},
  { path: '/login',  component: Login},
  { path: '*', component:NotFound}
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;