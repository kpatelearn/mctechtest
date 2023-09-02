
<script setup>
import Card from '../components/Card.vue'
import { ref } from 'vue'

const students = ref([
  { id: 1, name: 'Agnes', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EZWexCE6HutJuZek555vAWYBjBaqdvUPMnc8ZeI-NOGAZA?e=2HldoC'},
  { id: 2, name: 'Amy', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EfMuUv-Svf9MstWVxGG3LxsB2kx12tJTMPWplu47Q4fYHw?e=Oiw9Vi'},
  { id: 3, name: 'Chaska', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EaxJjBfgW6REnVZlCTqiUXABTqVz251cHP1Oa4TVmMgsBw?e=zWglrC' },
  { id: 4, name: 'Danielle', link: 'https://clipchamp.com/watch/vQKc8p6b7ce' },
  { id: 5, name: 'Eden', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EfCFUxqX9ilFoImUIhbV8rwBirYNyGC7P_AxvatcUp00oA?e=YAlpdA'},
  { id: 6, name: 'Emily', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EZnlI-fSo2pBla9ei59YVr0BwgW-RObY6L2lzsgdLZrjxw?e=ISlyIr' },
  { id: 7, name: 'Evie', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ESKLjo2NtGNBviA7LZbpzocBk72lCsOVsJA1iYhbyIZ9xQ?e=WaxQ6M' },
  { id: 8, name: 'Fleur', link: 'https://clipchamp.com/watch/xdfqyJtQ2gq' },
  { id: 9, name: 'Haru', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EXUqj3ilm2tIr6OitJiJGIsB1XzQgltFcrTYLvFRsZ9VAw?e=EVAFTY' },
  { id: 10, name: 'Kate D', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ESGAl-zEX8hHreu7IIYlEw8B6EfiAQAYdl9UVJfuoNsoDg?e=AZr7QV' },
  { id: 11, name: 'Kristina', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Ee-AlpvKaetLru-AOqoD6BoBDgEtUSoN86bUBH8fVW2G6g?e=Jfl5V7' },
  { id: 12, name: 'Leanne', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EWHEU1Vr1OxEsK5N7pZ-5OoBBQop2uI1P9nwXyHc8MOUtg?e=M7HfWN' },
  { id: 13, name: 'Lucy T', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EavusD-nz7JKnF7pRqZ2g58B5LPPpvif3gBZAEiHMu7Lxg?e=FAelsg' },
  { id: 14, name: 'Maya', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ERJR5TPB1M1DqPqK8WwVaqEBo5bFYjahH7MbzKdl9hyL3Q?e=lcprcF' },
  { id: 15, name: 'Micah', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EfKUgNG9DjpOscsHJZIo_OIBuUzlOb8Kl7It8EXQtAJ1aA?e=hjmhtY' },
  { id: 16, name: 'Rita', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EZIypL6K2PJMqQgUP7KJ0iUBFXUvTOpS7WAbmgT32UaDWg?e=gya9Ut'},
  { id: 17, name: 'Sienna', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EclgNJyX3UlJhTc-9vq8DngBVa0SMqQQMAVbCaRvQ32oaQ?e=6HjcSC' },
  { id: 18, name: 'Sophia', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ETdCmA7tul5BnsalbO3yUbwBAMQADcHP5Y08PAeXN5_QSw?e=iikIsU' },
  { id: 19, name: 'Tylah-Grace', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EUl09E-22RxJnEoa88-MRZQBfALLMRGZew4PveYI_kRXYg?e=RyZnE9' }
])
</script>

<template>
        <header class="headers">
            <h1>9R Games 2023</h1>
        </header>
   
        <div class="studentCard">
            <Card   	v-for="student in students"
	                    :key="student.id"
  	                    :name="student.name"
                        :link="student.link"/> 
        </div>
  
</template>