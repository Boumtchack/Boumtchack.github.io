<script setup>
import { ref } from 'vue'
import BatteriesSetup from './setup/BatteriesSetup.vue'
import ErrorsNumber from './setup/ErrorsNumber.vue'
import MentionsAndSerial from './setup/MentionsAndSerial.vue'
import ButtonsModule from './modules/ButtonsModule.vue'
import SimpleWireModule from './modules/SimpleWireModule.vue'
import ComplexWireModule from './modules/ComplexWireModule.vue'
import SimonSays from './modules/SimonSays.vue'
import KeyPads from './modules/KeyPads.vue'
import WhosFirst from './modules/WhosFirst.vue'
import MemoryModule from './modules/MemoryModule.vue'

const titles = ['Buttons', 'Wires', 'Simon says', 'Keypads', "Who's First", 'Memory', 'Morse Code', 'Maze', 'Password', 'Needy']

let batteriesAmount = ref(0)
function updateBatteriesAmount(value) {
  batteriesAmount.value = value
}
let errorAmount = ref(0)
function updateErrorAmount(value) {
  errorAmount.value = value
}

let CAR = ref(false)
let FRK = ref(false)
let vowel = ref(false)
let serialEven = ref(false)
let port = ref(false)

function updateOthers(array) {
  CAR.value = array[0].value
  FRK.value = array[1].value
  vowel.value = array[2].value
  serialEven.value = array[3].value
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
    <br />
    <span>frk alumé: </span><span v-if="FRK">oui</span><span v-else>non</span>
    <br />
    <span>vowel: </span><span v-if="vowel">oui</span><span v-else>non</span>
    <br />
    <span>serial even: </span><span v-if="serialEven">oui</span><span v-else>non</span>
    <br />
    <span>port: </span><span v-if="port">oui</span><span v-else>non</span>
  </div>
  <div>{{ titles[0] }}</div>
  <ButtonsModule :batteriesAmount="batteriesAmount" :CAR="CAR" :FRK="FRK" />
  <div>{{ titles[1] }}</div>
  <p>simple wire</p>
  <SimpleWireModule :serialEven="serialEven" />
  <p>complex wire</p>
  <ComplexWireModule :port="port" :serialEven="serialEven" :batteriesAmount="batteriesAmount" />
  <div>{{ titles[2] }}</div>
  <SimonSays :vowel="vowel" :errorAmount="errorAmount" />
  <div>{{ titles[3] }}</div>
  <KeyPads />
  <div>{{ titles[4] }}</div>
  <WhosFirst />
  <div>{{ titles[5] }}</div>
  <MemoryModule />
</template>
