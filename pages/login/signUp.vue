<template>
  <div class="login">
    <div class="wrapper">
      <h2 class="text-center mb-3">Регистрация</h2>
      <div class="mb-1">
        <label for="exampleInputEmail1" class="form-label">Телефон номер</label>
        <input
            v-model="registerModel.email"
            v-mask="'+### ### ##-##-##'"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="+### ### ##-##-##"
            aria-describedby="textHelp">
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-1">
        <label for="exampleInputEmail1" class="form-label">ФИО</label>
        <input
            v-model="registerModel.userProfile.fullName"
            type="text"
            class="form-control"
            placeholder="Например: Иванов Иван Иванович"
            aria-describedby="textHelp">
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-1">
        <label for="exampleInputEmail1" class="form-label">Адрес</label>
        <input
            v-model="registerModel.userProfile.address"
            type="text"
            class="form-control"
            placeholder="Введите адрес  "
            aria-describedby="textHelp">
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-1">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <input  v-model="registerModel.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="!@#$%^" />
      </div>
      <button @click="register()" class="btn btn-primary w-100 mt-4" type="submit">Зарегистрироваться</button>
      <div class="registerOrLogin">
        <a href="/login/signIn">Войти</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "#imports";
import axios from "axios";
import {useRouter} from "vue-router";

definePageMeta({
  layout: 'empty'
})

useHead({
  title: "DukonGO - Регистрация",
})

const authStore = useAuthStore();
const router = useRouter()

const registerModel = reactive({
  email: '+996',
  password: '',
  userProfile: {
    fullName: '',
    phoneNumber: '',
    address: ''
  }
})

const register = async () => {
  registerModel.email = registerModel.email.replace(/\D/g, '');
  try{
    await authStore.register(registerModel);
  } catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;500;600;700&display=swap");


</style>