<template>
  <h1 style="text-align: center;">Сеансы/Фильмы</h1>
  <SessionMovieTable :sessions="sessions" @delete-session="handleDeleteSession" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SessionMovieTable from '../components/SessionMoviePage/SessionMovieTable.vue'

type sessionMovieType = {
  id: number
  name: string
  date: string
}

const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
})

const sessions = ref<sessionMovieType[]>([
  {
    id: 0,
    name: 'Session 1',
    date: createdMockDate.value,
  },
  {
    id: 1,
    name: 'Session 2',
    date: createdMockDate.value,
  },
  {
    id: 2,
    name: 'Session 3',
    date: createdMockDate.value,
  }
])

const handleDeleteSession = (sessionId: number) => {
  sessions.value = sessions.value.filter(session => session.id !== sessionId);
}
</script>