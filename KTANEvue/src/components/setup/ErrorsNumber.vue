<script setup>
import { ref } from 'vue'

const emit = defineEmits(['amount-of-error'])
const errorAmount = ref(0)

function sendError(){
  emit('amount-of-error', errorAmount.value)
}

</script>

<template>
  <section id="error">
    <input type="radio" id="zero" :value="0" v-model="errorAmount" @change="sendError" checked />
    <label for="zero"> 0</label>
    <input type="radio" id="one" :value="1" v-model="errorAmount" @change="sendError" />
    <label for="one"> 1</label>
    <input type="radio" id="two" :value="2" v-model="errorAmount" @change="sendError" />
    <label for="two"> 2</label>
  </section>
</template>

<style scoped>
#error {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
input[type="radio"] {
  display: none;
}
label {
  display: block;
  height: 100px;
  width: 100px;
  color: black;
  background-color: white;
}
input[type="radio"]:checked + label {
  background-color: red;
}
</style>
