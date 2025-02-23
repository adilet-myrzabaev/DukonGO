import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware((to) => {
    const authStore = useAuthStore();
    const successAuth = authStore.tryLogin();

    if (!successAuth && to.name !== 'signIn' && !(to.meta?.allowAnonymous as boolean)) {
        return navigateTo('/login/signIn');
    }
});