<template>
  <div class="users-table">
    <div class="users-table__row">
      <div class="users-table__cell">id</div>
      <div class="users-table__cell">Имя</div>
      <div class="users-table__cell">Почта</div>
      <div class="users-table__cell">Дата создания</div>
      <div class="users-table__cell">Действия</div>
    </div>
    <div v-for="user in users" :key="user.id" class="users-table__row">
      <div class="users-table__cell">{{ user.id }}</div>
      <div class="users-table__cell">{{ user.name }}</div>
      <div class="users-table__cell">{{ user.email }}</div>
      <div class="users-table__cell">{{ user.created }}</div>
      <div class="users-table__cell users-table__actions">
        <button class="users-table__button users-table__button--edit" @click="editUser(user)">Редактировать</button>
        <button class="users-table__button users-table__button--delete" @click="deleteUser(user.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type UserType = {
  id: number
  name: string
  email: string
  created: string | Date
}

const props = defineProps<{
  users: UserType[];
}>();

const emit = defineEmits<{
  (e: 'delete-user', userId: number): void
}>()


const deleteUser = (userId: number) => {
  emit('delete-user', userId)
}

const editUser = (user: UserType) => {
  const newName = prompt("Редактировать имя:", user.name);
  if (newName !== null) {
    user.name = newName;
  }
  const newEmail = prompt("Редактировать почту:", user.email);
  if (newEmail !== null) {
    user.email = newEmail;
  }
}
</script>

<style scoped>
.users-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;
}

.users-table__row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-bottom: 1px solid #ddd;
}

.users-table__cell {
  min-width: 120px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  text-align: center;
  padding: 8px;
  font-size: 14px;
}

.users-table__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.users-table__button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 4px;
}

.users-table__button--edit {
  background-color: rgb(112, 187, 250);
}

.users-table__button--delete {
  background-color: rgb(247, 148, 148);
}
</style>