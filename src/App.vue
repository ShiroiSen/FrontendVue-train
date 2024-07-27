<script setup>

</script>

<template>
  <div>
    <nav data-bs-theme="dark">
      <div>
        <router-link :to="{ name: 'home' }">HOME</router-link>
      </div>
    </nav>

    <!--- render router view -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>