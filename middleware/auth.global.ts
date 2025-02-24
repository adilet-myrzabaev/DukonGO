import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    console.log('From auth middleware')
    console.log('to', to)
    console.log('from', from)
    console.log('authenticated', authStore.isAuthenticate)

    if (authStore.isAuthenticate) {
        console.log('not logged in', to.fullPath)
        return;
    }

    return navigateTo('/login/signin');
});