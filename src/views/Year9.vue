<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
        <div class="row">
            <div class="column" id="y9R">
                <RouterLink to="/Year9R">
                    <h1>9R Games</h1> 
                </RouterLink>     
            </div> 
            <div class="column" id="y9M">
                <RouterLink to="/Year9M">
                    <h1>9M Games</h1> 
                </RouterLink>   
            </div>
        </div>
</template>

<style>
   #y9R, #y9M{
            background-color: #437952; 
            background-size: 110%;
            text-shadow: 2px 2px #121311; 
            border-color: black; 
            border-style: solid; 
            width: 23%;
            margin-left: 1%;
            margin-right: 1%;
        }

</style>