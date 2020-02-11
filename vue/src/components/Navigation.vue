<template>
  <ul>
    <li>
      <router-link :to="{name:'home'}">HOME</router-link>
    </li>
    <li>
      <router-link :to="{name:'login'}">Login</router-link>
    </li>
    <li>
      <router-link :to="{name:'register'}">Register</router-link>
    </li>
    <li>
      <router-link :to="{name:'dashboard'}">Dashboard</router-link>
    </li>
  </ul>
</template>