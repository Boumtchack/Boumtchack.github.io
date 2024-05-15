<script setup>
import { ref } from 'vue'

const emit = defineEmits(['others-status'])
const CAR = ref(false)
const FRK = ref(false)
const vowel = ref(false)
const even = ref(false)
const port = ref (false)

function sendinfo(){
  emit('others-status', [CAR, FRK, vowel, even, port] )
}

</script>

<template>
  <section id="mentionsAndSerial">
    <input type="checkbox" name="car" id="car" v-model="CAR" @change="sendinfo"><label for="car">CAR</label>
    <input type="checkbox" name="frk" id="frk" v-model="FRK" @change="sendinfo"><label for="frk">FRK</label>
    <input type="checkbox" name="vowel" id="vowel" v-model="vowel" @change="sendinfo"><label for="vowel">vowel</label>
    <input type="checkbox" name="even" id="even" v-model="even" @change="sendinfo"><label for="even">even</label>
    <input type="checkbox" name="port" id="port" v-model="port" @change="sendinfo"><label for="port">port</label>
  </section>
</template>

<style scoped>
#mentionsAndSerial {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
input[type="checkbox"] {
  display: none;
}
label {
  display: block;
  height: 100px;
  width: 100px;
  color: black;
  background-color: white;
}
input[type="checkbox"]:checked + label {
  background-color: green;
}
</style>
