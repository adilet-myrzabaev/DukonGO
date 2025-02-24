<template>
  <div class="login">
    <div class="wrapper">
        <h2 class="text-center mb-5">Войти</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Телефон номер</label>
          <input
              v-model="signInModel.email"
              v-mask="'+### ### ##-##-##'"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="+### ### ##-##-##"
              aria-describedby="textHelp">
          <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input  v-model="signInModel.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="!@#$%^" />
        </div>
        <div class="forget">
          <a href="#">Забыли пароль?</a>
        </div>
        <button @click="login()" class="btn btn-primary w-100" type="submit">Войти</button>
        <div class="registerOrLogin">
          <p> <a href="/login/signup">Зарегистрироваться</a></p>
        </div>
    </div>
  </div>
  <Toast ref="toastComponent" />
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/useAuthStore";
import Toast from "~/components/Toast.vue";
definePageMeta({
  layout: 'empty'
})
useHead({
  title: "DukonGO - Войти",
})
const authStore = useAuthStore();
const toastComponent = ref();

const signInModel = reactive({
  email: '+996',
  password: ''
})

const login = async () => {
  signInModel.email = signInModel.email.replace(/\D/g, '');
  await authStore.login(signInModel);
}

</script>

<style scoped>

</style>