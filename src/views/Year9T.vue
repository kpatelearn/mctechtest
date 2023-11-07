
<script setup>
import Card from '../components/Card.vue'
import { ref } from 'vue'

const students = ref([
  { id: 1, name: 'Alexia', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EXaChUoK_G1NsRxgS7zk79ABCHZKD6iDfNRV9Ecpu5JAmw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=rJBXxc'},
  { id: 2, name: 'Bella', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Ednn1ts50R9IkVXJ_SlMbOAB_3_9XICYc2GUFJZ4vO81-g?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=mulKsl'},
  { id: 3, name: 'Ella', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EdciZiLBMABLi7Jlnb-qSAABG_bJ92wUMWRRdr4tpvXsuQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=A6hZln' },
  { id: 4, name: 'Evelyn', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ETdZFkU0Zj1FjepZs4g0jVUBfYAZF163DB7Cza672fLuxw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=FSGX1B' },
  { id: 5, name: 'Hannah', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EeOisfMddQ5NtNV0Zgsg5nEBzgy7TJCaNCxRmQxdZQzhTA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=O1aHD1'},
  { id: 6, name: 'Joanna', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EdLOy-BDR1RGolWLkGqrl_0BIMNz4kMpRgydu3r8s371MA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=mGsxMJ' },
  { id: 7, name: 'Lucy', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Ebx8d_p76KBJldNCmpVRehUBp62G9-clTSj0_bBC6aT4DA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=rF01dG' },
  { id: 8, name: 'Matilda', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Ee8NKauPWD9Oq4FrC7ZnDBEBl7aFDJ1Slh1cOvL8g5ANNQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=0RajMQ' },
  { id: 9, name: 'Nevayah', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EbiJxLl6cTlLhRz1MixANDIB42VcdGMGOfRrLppeNj3Zuw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=U2Lc4A' },
  { id: 10, name: 'Olivia C', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EbCn5-AiPeNMpxawFwY7-CMBy8YlYQtZ0UKgX_mc-1lzdw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=KbxoEO' },
  { id: 11, name: 'Olivia J', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EbCn5-AiPeNMpxawFwY7-CMBy8YlYQtZ0UKgX_mc-1lzdw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=KbxoEO' },
  { id: 12, name: 'Rhianne', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EQmQfdcYnf5Ekk3rjcmyFWEBHNEtx7u6VqowCDR7vEZkHA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=aENbot' },
  { id: 13, name: 'Sophia', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EdQ_ie3xCIhPiZTGr7792LwBJIYAsulyyFy7xcMWy9n8Bw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=vDJnCq' },
  { id: 14, name: 'Zera', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EaDbZq2BTEdEtWajpAqU4vUBpS5qWYazG1nSHTfhFHHyJg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=aoXBsz' }
])
</script>

<template>
        <header class="headers">
            <h1>9T Games 2023</h1>
        </header>
   
        <div class="studentCard">
            <Card   	v-for="student in students"
	                    :key="student.id"
  	                    :name="student.name"
                        :link="student.link"/> 
        </div>
  
</template>