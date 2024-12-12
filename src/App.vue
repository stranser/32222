<template>
  <nav>
    <ul>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
      <li>
        <router-link to="/sessions">Sessions</router-link>
      </li>
      <li>
        <router-link to="/tickets">Tickets</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<style scoped>
nav {
  background: #f0f0f0;
  padding: 10px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav ul li a:hover {
  color: #007bff;
}
</style>