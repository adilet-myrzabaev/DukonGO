import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import axios from "axios";

import Cookies from "js-cookie";
import { isJwtValid, tokenName } from "~/stores/token";
import { useUserStore } from "~/stores/useUserStore";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore("auth", () => {
    const token: Ref<string | null> = ref(null);
    const router = useRouter();
    const isAuthenticate = computed(() => Boolean(token.value));
    const userStore = useUserStore();

    const login = async (loginModel: any) => {
        try {
            const { data } = await axios.post(`/api/v1/security/auth/login/`, loginModel);
            token.value = data.token as string;
            userStore.profile = data.profile;

            axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
            Cookies.set(tokenName, token.value, { expires: 7 });
                    
            await router.push("/");
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        try {
            router.push("login/signIn");
            token.value = null;
            userStore.profile = null;
            const userIdCookie = useCookie(tokenName);
            userIdCookie.value = null;
        } catch (error) {
            throw error;
        }
    };
    
    const tryLogin = (): boolean => {
        const _jwtToken = useCookie(tokenName);

        if (!isJwtValid(_jwtToken.value)) {
            token.value = null;
            return false;
        }

        token.value = _jwtToken.value as string;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
        return true;
    };
    

    const register = async (registerModel: any) => {
        try {
            const {data} = await axios.post(`/api/v1/security/auth/register/`, registerModel);

            token.value = data.token as string;
            userStore.profile = data.profile;

            axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`;
            Cookies.set(tokenName, token.value, { expires: 7 });
                    
            await router.push("/");

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return { isAuthenticate, token, login, register, tryLogin, logout };
});
