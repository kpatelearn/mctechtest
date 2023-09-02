
<script setup>
import Card from '../components/Card.vue'
import { ref } from 'vue'

const students = ref([
  { id: 1, name: 'Alexis', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EQrxjTyskm5MllmYGCwFzggBhDMzhPHxWqJW4QRELMKWBA?e=q7c2Mb'},
  { id: 2, name: 'Angel', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EWXOuya_DetNi0zZ4vbUHTkB3-oHVhwy4BMMUhXBG-YUYA?e=dfLSBP'},
  { id: 3, name: 'Angelina', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EQiKtOOqSndHjLQwQva4HLYBwJZH95c_1VaH7Q4oX6pSoA?e=Pf1rpB' },
  { id: 4, name: 'Ava B', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EaHDSOXybK5LgC-AVV99-2EBLXqk56V904ehwhAzuFIL5g?e=ufsaM7' },
  { id: 5, name: 'Ava C', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EVcUdxzTr3NHsSiu4--4N-0B8xgOoOUf88j32y8LE6X8KQ?e=g5rB74'},
  { id: 6, name: 'Carolyn', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EYxBeh2-vSZLgzCyHwHTZ-8BU3FMeY1Mu1TFHkcDB8Sr9g?e=bfrUZp' },
  { id: 7, name: 'Celine', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ERpqnFztAQdAgkE3jfVEczEBXn-A8DYxB3ooq4uDF2VEAQ?e=ZN8icG' },
  { id: 8, name: 'Charlie', link: '' },
  { id: 9, name: 'Emily', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EcSRIMZplABLry1v6slnzq0BXzxoGsW58UHkUkUL4YtlEg?e=QKgd6P' },
  { id: 10, name: 'Esther', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Edninv4UDypPi4r4mBr7EmoBb3EXfi8Z0EbMJ4f4ZKdRNQ?e=kDhOdh' },
  { id: 11, name: 'Eva', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EXSGIcdz2ANBlSjMAcsDx2sBCImr47gLiWgofH8YdIBihw?e=8IPvGb' },
  { id: 12, name: 'Grace Mary', link: 'https://clipchamp.com/watch/F1ImgFdxYf1?utm_source=share&utm_medium=social&utm_campaign=watch' },
  { id: 13, name: 'Mereana', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Eb2mTRoQ-ftDqagS2DWODqoBy-p3sV_BjS2ajkQeSnXLCw?e=A6rtgf' },
  { id: 14, name: 'Mia', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/ESIPcY-sHcZImQEyAHkn18UB0QjkEMC39XYltVe9n88CsA?e=KxrTZK' },
  { id: 15, name: 'Michalle', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EV-9XdiVVn1IuiSr-ydVnogBtagu8ISornxO0cjuuM9_ug?e=JtGbha' },
  { id: 16, name: 'Rosy', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/EXdIBVDUEe5LuTkM675YUfUBW-iSyYkBJfJsIaZHEsHhrg?e=gd0xkC'},
  { id: 17, name: 'Sophia', link: 'https://mcstudentsschool-my.sharepoint.com/:v:/g/personal/k_paterson_maristcollege_school_nz/Ec9_c6Gtu9lClBzrL2HeUwQBSZLb0AJKWP64k8cWO1X2DQ?e=dH9D2X' },
  { id: 18, name: 'Zoe', link: 'https://clipchamp.com/watch/VMrCFULWt7z?utm_source=share&utm_medium=social&utm_campaign=watch' }
])
</script>

<template>
        <header class="headers">
            <h1>9M Games 2023</h1>
        </header>
   
        <div class="studentCard">
            <Card   	v-for="student in students"
	                    :key="student.id"
  	                    :name="student.name"
                        :link="student.link"/> 
        </div>
  
</template>