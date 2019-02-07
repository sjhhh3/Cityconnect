import Policy from './components/Policy.vue'
import Home from './components/HelloWorld.vue'
import Bus from './components/bus.vue'

export const routes = [
    { path:'', component: Home},
    { path:'/home', component:Home },
    { path:'/policy', component: Policy},
    { path:'/bus', component: Bus}
];