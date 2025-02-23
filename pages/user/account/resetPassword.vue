<template>
  <div class="container-fluid">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
      <ol class="breadcrumb">

        <li class="breadcrumb-item"><a href="/">Главная</a></li>
        <li class="breadcrumb-item active" aria-current="page">Смена пароля</li>
      </ol>
    </nav>
    <h1>Изменить пароль</h1>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Текущий пароль</label>
      <input  v-model="model.Password" type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Новый пароль</label>
      <input  v-model="model.NewPassword" type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Подтвердить пароль</label>
      <input  v-model="confirmPassword" type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div>{{errors.value}}</div>
    <button class="btn btn-primary" @click="submitPassword">Изменить</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
useHead({
  title: "DukonGO - Смена пароля",
})
definePageMeta({ middleware: ["auth"] });
const userStore = useUserStore()
const confirmPassword = ref('')

const errors = ref("")

const model = reactive({
  Id: userStore.profile?.id,
  PhoneNumber: userStore.profile?.phoneNumber,
  Password: '',
  NewPassword: ''
})
console.log(userStore.profile?.phoneNumber)
const submitPassword = async (event: any) => {
console.log(model)
  if (model.Password === '' && model.NewPassword === '' && confirmPassword.value) {
    errors.value="Поле не должно быть пустым"
    return;
  }
  if (confirmPassword.value !== model.NewPassword){
    errors.value="Пароль не правильный"
    return
  }
  try {
    await axios.put('https://manage.dukongo.kg/api/v1/Account/changePassword', model)
    await router.push('/')
  } catch(e) {
    console.log(e)
  }
}

watch(confirmPassword, () => {
  if (model.password !== confirmPassword.value) {
    errors.value = "Пароль не правильный"
  }
})

</script>

<style scoped>

</style>