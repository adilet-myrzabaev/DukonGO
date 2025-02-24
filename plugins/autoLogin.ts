export default defineNuxtPlugin(async (nuxtApp) => {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    const cartStore = useCartStore();
    try {
        const auth = authStore.tryLogin();
        if (auth) {
            if(!userStore.profile){
                await userStore.get();
            }
            if(!cartStore.cart){
                await cartStore.get();
            }
        }
    } catch (error) {
        console.error('Error during plugin initialization:', error);
    }
})