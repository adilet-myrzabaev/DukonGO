import { defineStore } from "pinia";
import { computed, ComputedRef, ref, Ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";
import { isJwtValid, tokenName } from "~/stores/token";
import { useUserStore } from "~/stores/useUserStore";
import {useCartStore} from "~/stores/useCartStore";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore("auth", () => {
    const token: Ref<string | null> = ref(null);
    const router = useRouter();
    const isAuthenticate: ComputedRef = computed(() => Boolean(token.value));
    const userStore = useUserStore();
    const cartStore = useCartStore();
    const baseUrl = "https://manage.dukongo.kg/api/v1";

    const login = async (loginModel: any) => {
        try {
            const { data } = await axios.post(`${baseUrl}/security/auth/login/`, loginModel);

            console.log(data);
            token.value = data.token as string;
            userStore.profile = data.profile;

            axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
            Cookies.set(tokenName, token.value, { expires: 7 });
            await router.push("/");
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const logout = async (event: any) => {
        console.log(event)
        token.value = null;
        Cookies.remove(tokenName);
        localStorage.clear();
        await router.push("/login/signIn")
    };

    const tryLogin = () => {
        const _jwtToken: string = Cookies.get(tokenName) as string;
        if (!isJwtValid(_jwtToken)) {
            token.value = null;
            Cookies.remove(tokenName);
            return false;
        }

        token.value = _jwtToken;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
        Cookies.set(tokenName, token.value, { expires: 7 });
        console.log(token.value);
        return true;
    };

    const register = async (registerModel: any) => {
        console.log(registerModel.email+ registerModel.password);
        try {
            const {data} = await axios.post(`${baseUrl}/security/auth/register/`, registerModel);

            token.value = data.token;
            userStore.profile = data.profile;

            axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
            Cookies.set(tokenName, token.value, { expires: 7 });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return { isAuthenticate, token, login, register, tryLogin, logout };
});
