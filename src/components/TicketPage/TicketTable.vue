<template>
  <div class="ticket-table">
    <div class="ticket-table__row">
      <div class="ticket-table__cell">id</div>
      <div class="ticket-table__cell">User ID</div>
      <div class="ticket-table__cell">User Name</div>
      <div class="ticket-table__cell">User Email</div>
      <div class="ticket-table__cell">Movie ID</div>
      <div class="ticket-table__cell">Movie Name</div>
      <div class="ticket-table__cell">Movie Date</div>
      <div class="ticket-table__cell">Действия</div>
    </div>
    <div v-for="ticket in tickets" :key="ticket.id" class="ticket-table__row">
      <div class="ticket-table__cell">{{ ticket.id }}</div>
      <div class="ticket-table__cell">{{ ticket.user.id }}</div>
      <div class="ticket-table__cell">{{ ticket.user.name }}</div>
      <div class="ticket-table__cell">{{ ticket.user.email }}</div>
      <div class="ticket-table__cell">{{ ticket.movie.id }}</div>
      <div class="ticket-table__cell">{{ ticket.movie.name }}</div>
      <div class="ticket-table__cell">{{ ticket.movie.date }}</div>
      <div class="ticket-table__cell ticket-table__actions">
        <button class="ticket-table__button ticket-table__button--edit"
          @click="editTicket(ticket)">Редактировать</button>
        <button class="ticket-table__button ticket-table__button--delete"
          @click="deleteTicket(ticket.id)">Удалить</button>
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
type sessionMovieType = {
  id: number
  name: string
  date: string
}

type TicketType = {
  id: number
  user: UserType
  movie: sessionMovieType
}

const props = defineProps<{
  tickets: TicketType[]
}>()

const emit = defineEmits<{
  (e: 'delete-ticket', ticketId: number): void;
}>()

const tickets = props.tickets;

const deleteTicket = (ticketId: number) => {
  emit('delete-ticket', ticketId)
}

const editTicket = (ticket: TicketType) => {
  const newUserId = prompt('Редактировать User ID:', String(ticket.user.id));
  if (newUserId !== null) {
    ticket.user.id = Number(newUserId)
  }
  const newUserName = prompt('Редактировать User Name:', ticket.user.name);
  if (newUserName !== null) {
    ticket.user.name = newUserName
  }
  const newUserEmail = prompt('Редактировать User email:', ticket.user.email);
  if (newUserEmail !== null) {
    ticket.user.email = newUserEmail
  }
  const newMovieId = prompt('Редактировать Movie ID:', String(ticket.movie.id));
  if (newMovieId !== null) {
    ticket.movie.id = Number(newMovieId)
  }
  const newMovieName = prompt('Редактировать Movie Name:', ticket.movie.name);
  if (newMovieName !== null) {
    ticket.movie.name = newMovieName
  }
  const newMovieDate = prompt('Редактировать Movie Date:', ticket.movie.date);
  if (newMovieDate !== null) {
    ticket.movie.date = newMovieDate
  }
}
</script>

<style scoped>
.ticket-table {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-collapse: collapse;
}

.ticket-table__row {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-bottom: 1px solid #ddd;
}

.ticket-table__cell {
  min-width: 120px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  text-align: center;
  padding: 8px;
  font-size: 14px;
}

.ticket-table__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.ticket-table__button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 4px;
}

.ticket-table__button--edit {
  background-color: rgb(112, 187, 250);
}

.ticket-table__button--delete {
  background-color: rgb(247, 148, 148);
}
</style>