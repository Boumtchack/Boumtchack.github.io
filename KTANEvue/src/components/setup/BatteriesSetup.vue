<script setup>
import { ref } from 'vue'

const emit = defineEmits(['amount-of-batteries'])
const batteriesAmount = ref(0)

function sendBatteries(){
  emit('amount-of-batteries', batteriesAmount.value)
}

</script>

<template>
  <section id="batteries">
    <input type="radio" id="zeroBatteries" :value="0" v-model="batteriesAmount" @change="sendBatteries" checked />
    <label for="zeroBatteries"> 0</label>
    <input type="radio" id="oneBatterie" :value="1" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="oneBatterie"> 1</label>
    <input type="radio" id="twoBatteries" :value="2" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="twoBatteries"> 2</label>
    <input type="radio" id="threeBatteries" :value="3" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="threeBatteries"> 3</label>
    <input type="radio" id="fourBatteries" :value="4" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="fourBatteries"> 4</label>
    <input type="radio" id="fiveBatteries" :value="5" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="fiveBatteries"> 5</label>
    <input type="radio" id="sixBatteries" :value="6" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="sixBatteries"> 6</label>
    <input type="radio" id="sevenBatteries" :value="7" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="sevenBatteries"> 7</label>
    <input type="radio" id="eightBatteries" :value="8" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="eightBatteries"> 8</label>
    <input type="radio" id="nineBatteries" :value="9" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="nineBatteries"> 9</label>
    <input type="radio" id="tenBatteries" :value="10" v-model="batteriesAmount" @change="sendBatteries" />
    <label for="tenBatteries"> 10</label>
  </section>
</template>

<style scoped>
#batteries {
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
  background-color: yellow;
}
</style>
