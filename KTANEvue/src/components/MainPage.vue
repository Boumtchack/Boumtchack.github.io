<script setup>
import { ref } from 'vue'
import ComponentItem from './ComponentItem.vue'
import TitleItems from './TitleItems.vue'
const titles = ['bonjour', 'coucou', 'oui']

let newnumber = ref(0)
function updateNumber(value) {
  newnumber.value = value
}
</script>
<template>
  <ComponentItem @number-updated="updateNumber" />
  <p>parents {{ newnumber * 2 }}</p>
  <div v-for="title in titles" :key="title">
    <TitleItems :title="title"/>
  </div>
</template>
