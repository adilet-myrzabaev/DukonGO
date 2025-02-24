import { defineNuxtRouteMiddleware, navigateTo } from '#app';

export default defineNuxtRouteMiddleware(   async (to, from) => {
    const auth = useAuthStore();
    await auth.tryLogin()
    // alert(auth.isAuthenticate)
    // if (auth.isAuthenticate && to.path !== '/login/signIn') {
    //     return navigateTo(to.fullPath);
    // }
    if (auth.isAuthenticate && to.path === '/login/signIn') {
        return navigateTo('/');
    }
    if (!auth.isAuthenticate && to.path !== '/login/signIn') {
        return navigateTo('/login/signIn');
    }
});