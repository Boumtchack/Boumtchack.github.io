<script setup>
import { ref } from 'vue'

const emit = defineEmits(['number-updated'])

let number = ref(0)

function addOne() {
  number.value++
  emit('number-updated', number.value)
}
</script>

<template>
  <button @click="addOne">bouton</button>
  <p>child {{ number }}</p>
</template>
