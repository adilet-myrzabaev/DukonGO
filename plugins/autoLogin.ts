export default defineNuxtPlugin(async (nuxtApp) => {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    const cartStore = useCartStore();
    try {
        // Пытаемся выполнить вход
        const auth = authStore.tryLogin();
        // Если вход успешен, загружаем данные пользователя
        if (auth) {

            await userStore.get();
            await cartStore.get();
        }
    } catch (error) {
        console.error('Error during plugin initialization:', error);
    }
})