import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    const isAuthenticated = authStore.tryLogin();


    console.log('From auth middleware')
    console.log('to', to)
    console.log('from', from)
    console.log('authenticated', authStore.isAuthenticate)

    // If the user is authenticated, continue to the requested route
    if (authStore.isAuthenticate === true) {
        console.log('not logged in', to.fullPath)
        return;
    }

    // If the user is not authenticated, redirect to the login page
    return navigateTo('/login');

});