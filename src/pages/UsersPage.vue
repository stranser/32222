<template>
  <h1 style="text-align: center;">Юзеры</h1>
  <button @click="openModal">Добавить пользователя</button>
  <UsersTable :users="users" @delete-user="handleDeleteUser" />
  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">×</span>
      <h2>Добавить пользователя</h2>
      <input type="text" placeholder="Имя" v-model="newUser.name" />
      <input type="email" placeholder="Email" v-model="newUser.email" />
      <button @click="createUser">Создать</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import UsersTable from '../components/UsersPage/UsersTable.vue'
import { ref, computed } from 'vue';


type UserType = {
  id: number
  name: string
  email: string
  created: string | Date
}
const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
})


const isModalOpen = ref(false);
const users = ref<UserType[]>([
  {
    id: 0,
    name: 'Ann',
    email: 'alex@alex.alex',
    created: createdMockDate.value,
  },
  {
    id: 1,
    name: 'Alex',
    email: 'ann@ann.ann',
    created: createdMockDate.value,
  },
  {
    id: 2,
    name: 'Art',
    email: 'art@art.art',
    created: createdMockDate.value,
  },
  {
    id: 3,
    name: 'you',
    email: 'you@you.you',
    created: createdMockDate.value,
  }
])


const newUser = ref({
  name: '',
  email: ''
})
const openModal = () => {
  isModalOpen.value = true;
}
const closeModal = () => {
  isModalOpen.value = false;
}
const createUser = () => {
  const nextId = users.value.length > 0 ? Math.max(...users.value.map(user => user.id)) + 1 : 0;
  const newUserObject: UserType = {
    id: nextId,
    name: newUser.value.name,
    email: newUser.value.email,
    created: createdMockDate.value
  };
  users.value.push(newUserObject);
  newUser.value = { name: '', email: '' }
  closeModal();
}

const handleDeleteUser = (userId: number) => {
  users.value = users.value.filter(user => user.id !== userId)
}
</script>

<style scoped>
/* Modal styles */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>