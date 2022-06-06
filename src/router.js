import { createRouter, createWebHistory } from "vue-router";

import Main from '@/windows/Main.vue'
import Settings from '@/windows/Settings.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'main',
          component: Main
        },
        {
          path: '/settings',
          name: 'settings',
          component: Settings
        }
    ]
});

export default router;