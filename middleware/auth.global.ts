import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    authStore.tryLogin();
    console.log(authStore.isAuthenticate );
    
    if (authStore.isAuthenticate || to.path == '/login/signin' || to.path == '/login/signup') {
        console.log('not logged in', to.fullPath)
        return;
    }

    return navigateTo('/login/signin');
});