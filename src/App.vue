<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>        
      <div class="topnav">
         <RouterLink to="/">Home</RouterLink>
         <RouterLink to="/juniors">Juniors</RouterLink>
         <RouterLink to="/seniors">Seniors</RouterLink>
      </div>
      <RouterView />
            
</template>


