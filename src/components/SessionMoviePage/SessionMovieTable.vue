<template>
  <div class="session-movie-table">
    <div class="session-movie-table__row">
      <div class="session-movie-table__cell">id</div>
      <div class="session-movie-table__cell">Название</div>
      <div class="session-movie-table__cell">Дата</div>
      <div class="session-movie-table__cell">Действия</div>
    </div>
    <div v-for="session in sessions" :key="session.id" class="session-movie-table__row">
      <div class="session-movie-table__cell">{{ session.id }}</div>
      <div class="session-movie-table__cell">{{ session.name }}</div>
      <div class="session-movie-table__cell">{{ session.date }}</div>
      <div class="session-movie-table__cell session-movie-table__actions">
        <button class="session-movie-table__button session-movie-table__button--edit"
          @click="editSession(session)">Редактировать</button>
        <button class="session-movie-table__button session-movie-table__button--delete"
          @click="deleteSession(session.id)">Удалить</button>
          
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type sessionMovieType = {
  id: number
  name: string
  date: string
}

const props = defineProps<{
  sessions: sessionMovieType[]
}>()

const emit = defineEmits<{
  (e: 'delete-session', sessionId: number): void;
}>()

const deleteSession = (sessionId: number) => {
  emit('delete-session', sessionId)
}

const editSession = (session: sessionMovieType) => {
  const newName = prompt('Редактировать название сеанса: ', session.name)
  if (newName !== null) {
    session.name = newName
  }
  const newDate = prompt('Редактировать дату сеанса: ', session.date)
  if (newDate !== null) {
    session.date = newDate
  }
}
</script>

<style scoped>
.session-movie-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;
}

.session-movie-table__row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #ddd;
}

.session-movie-table__cell {
  min-width: 120px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  text-align: center;
  padding: 8px;
  font-size: 14px;
}

.session-movie-table__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.session-movie-table__button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 4px;
}

.session-movie-table__button--edit {
  background-color: rgb(112, 187, 250);
}

.session-movie-table__button--delete {
  background-color: rgb(247, 148, 148);
}
</style>