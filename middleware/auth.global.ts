import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    authStore.tryLogin();
    
    if (authStore.isAuthenticate || to.path == '/login/signIn' || to.path == '/login/signUp') {
        return;
    }

    return navigateTo('/login/signIn');
});