<template>
  <div>
    <div class="container-fluid">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">

          <li class="breadcrumb-item"><a href="/">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">Профиль пользователя</li>
        </ol>
      </nav>
      <h1>Личные данные</h1>

      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Телефон номер</label>
        <input
            v-model="userStore.profile.phoneNumber"
            v-mask="'+### ### ##-##-##'"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="+### ### ##-##-##"
            aria-describedby="textHelp">
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ФИО</label>
        <input
            v-model="userStore.profile.fullName"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="textHelp" required>
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Адрес</label>
        <input
            v-model="userStore.profile.address"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="textHelp" required>
        <div v-if="false" id="textHelp" class="form-text text-danger">We'll never share your email with anyone else.</div>
      </div>
      <button class="btn btn-primary" @click="submit">Изменить</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import axios from "axios";
useHead({
  title: "DukonGO - Профиль пользователя",
})

const userStore = reactive(useUserStore())

const formated = (phoneNumber) => {
  return phoneNumber.replace(/[+\s-]/g, '').toString();
}

const submit = async () => {

  const model = reactive({
    id: userStore.profile.id,
    PhoneNumber: "",
    NewPhoneNumber: formated(userStore.profile.phoneNumber),
    FullName: userStore.profile.fullName,
    FirstName: "",
    LastName: "",
    Address: userStore.profile.address,
  })
  try {
    const {data} = await axios.put("/api/v1/Account/", model)
    await userStore.get()
  }catch (e) {
    console.error(e)
  }
}

</script>

<style scoped>

</style>