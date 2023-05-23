import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/views/Home.vue";
import Journal from "@/views/Journal.vue";
import Fleet from "@/views/Fleet.vue";
import Auth from "@/views/Auth.vue";
import Register from "@/views/Register.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/fleet',
            name: 'fleet',
            component: Fleet
        },
        {
            path: '/journal',
            name: 'journal',
            component: Journal
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: Auth
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
})

export default router
