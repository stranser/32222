<template>
  <div class="login-container">
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Логин:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const username = ref('');
const password = ref('');

const login = () => {
  console.log(`Username: ${username.value}, Password: ${password.value}`)
}
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  max-width: 400px;
  margin: 50px auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  width: 100%;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}
</style>