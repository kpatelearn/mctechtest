<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="page">
        <div class="row"> 
            <div class="column" id="year9">
                <RouterLink to="/year9">
                    <h1>Year 9</h1> 
                </RouterLink>  
            </div>
            
            <div class="column" id="year10" >
                <RouterLink to="/year10">
                    <h1>Year 10</h1> 
                </RouterLink> 
            </div>
        </div>

        <div class="row"> 
            <div class="column" id="archiveTile">
                <a>
                    <h1>2022</h1> 
                </a> 
            </div>
        </div>
    </div>
</template>

<style>
 #year9 {
            background-image: url("../assets/mc23.PNG"); 
            text-shadow: 2px 2px #121311; 
            border-color: black; 
            border-style: solid; 
            margin-left: 6%; 
            margin-right: 6%;
        }
        #year10 {
            background-image: url("../assets/matrixRain.gif"); 
            text-shadow: 2px 2px #121311; 
            border-color: black; 
            border-style: solid; 
            margin-left: 6%; 
            margin-right: 6%;
        }
        #archiveTile {
            background-color: #003366; 
            text-shadow: 2px 2px #121311; 
            text-align: center;
            border-color: black; 
            border-style: solid; 
            margin-left: 20%; 
            margin-right: 20%;
        }
        a {color: #ffffff;}

        a:visited {
            color: #ffffff;
        }

 
</style>
