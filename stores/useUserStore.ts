import {computed, ref, Ref} from "vue";
import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", () => {
    const authStore = useAuthStore();
    const profile: Ref = ref(null);
    const baseUrl = "https://manage.dukongo.kg/api/v1";
    const get = async () => {
        try {
            if(profile.value != null) return profile.value;
            const { data } = await axios.get(`${baseUrl}/account`, {
                headers: {
                    Authorization: `Bearer ${authStore.token}`
                }
            });
            console.log(data);
            profile.value = data.profile;
            return data;
        } catch (e) {
            throw e;
        }

    };
    return { get, profile };
});
