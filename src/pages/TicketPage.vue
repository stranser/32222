<template>
  <h1 style="text-align: center;">Билеты</h1>
  <TicketTable :tickets="tickets" @delete-ticket="handleDeleteTicket" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TicketTable from '../components/TicketPage/TicketTable.vue'

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

const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
})

const tickets = ref<TicketType[]>([
  {
    id: 0,
    user: {
      id: 0,
      name: 'Ann',
      email: 'alex@alex.alex',
      created: createdMockDate.value,
    },
    movie: {
      id: 0,
      name: 'Session 1',
      date: createdMockDate.value,
    }
  },
  {
    id: 1,
    user: {
      id: 1,
      name: 'Alex',
      email: 'ann@ann.ann',
      created: createdMockDate.value,
    },
    movie: {
      id: 1,
      name: 'Session 2',
      date: createdMockDate.value,
    }
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Art',
      email: 'art@art.art',
      created: createdMockDate.value,
    },
    movie: {
      id: 2,
      name: 'Session 3',
      date: createdMockDate.value,
    }
  }
])

const handleDeleteTicket = (ticketId: number) => {
  tickets.value = tickets.value.filter(ticket => ticket.id !== ticketId)
}
</script>