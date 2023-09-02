<script setup>
defineProps(['name', 'link'])
</script>

<template>
  <div class="card">
  
      <a :href="link" target="_blank">
        <img src="../assets/mc23.PNG" alt="Avatar" style="width:100%">
        <h4> {{ name }} </h4>
      </a>
    
</div>
</template>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 16px 24px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background-color: #4b9cd3;
  text-align: center;
  margin: 1%;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 64px 96px 0 rgba(0,0,0,0.2);
  background-color: #003366;
}


</style>