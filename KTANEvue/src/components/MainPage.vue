<script setup>
import { ref } from 'vue'
import ComponentItem from './ComponentItem.vue'
import TitleItems from './TitleItems.vue'
const titles = [
  'Wires',
  'Buttons',
  'Simon says',
  'Keypads',
  "Who's First",
  'Memory',
  'Morse Code',
  'Maze',
  'Password',
  'Needy'
]

let newnumber = ref(0)
function updateNumber(value) {
  newnumber.value = value
}
</script>
<template>
  <p>parents {{ newnumber * 2 }}</p>
  <ComponentItem @number-updated="updateNumber" />
  <div v-for="title in titles" :key="title">
    <TitleItems :title="title" />
  </div>
</template>
