<script setup>
import { ref } from 'vue'
import TitleItems from './TitleItems.vue'
import BatteriesSetup from './setup/BatteriesSetup.vue'
import ErrorsNumber from './setup/ErrorsNumber.vue'
import MentionsAndSerial from './setup/MentionsAndSerial.vue'
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

const batteriesAmount = ref(0)
function updateBatteriesAmount(value) {
  batteriesAmount.value = value
}
const errorAmount = ref(0)
function updateErrorAmount(value) {
  errorAmount.value = value
}

const CAR = ref(false)
const FRK = ref(false)
const vowel = ref(false)
const even = ref(false)
const port = ref (false)

function updateOthers(array) {
  CAR.value = array[0].value
  FRK.value = array[1].value
  vowel.value = array[2].value
  even.value = array[3].value
 port.value = array[4].value
}

</script>
<template>
  <BatteriesSetup @amount-of-batteries="updateBatteriesAmount" />
  <ErrorsNumber @amount-of-error="updateErrorAmount" />
  <MentionsAndSerial @others-status="updateOthers" />
  <div>
    <br />
    <p>batteries number: {{ batteriesAmount }}</p>
    <p>nombre d'erreur: {{ errorAmount }}</p>
    <span>CAR alumé: </span><span v-if="CAR">oui</span><span v-else>non</span>
    <br>
    <span>frk alumé: </span><span v-if="FRK">oui</span><span v-else>non</span>
    <br>
    <span>vowel: </span><span v-if="vowel">oui</span><span v-else>non</span>
    <br>
    <span>even: </span><span v-if="even">oui</span><span v-else>non</span>
    <br>
    <span>port: </span><span v-if="port">oui</span><span v-else>non</span>
  </div>
  <div v-for="title in titles" :key="title">
    <TitleItems :title="title" />
  </div>
</template>
