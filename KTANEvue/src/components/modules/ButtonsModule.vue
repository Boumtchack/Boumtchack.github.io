<script setup>
import { ref } from 'vue'

const mentions = ['abort', 'explode', 'hold', 'push']
const colors = ['red', 'blue', 'white', 'yellow', 'black']

defineProps({
  batteriesAmount: Number,
  CAR: Boolean,
  FRK: Boolean
})

let myButton = {
  mention: ref('abort'),
  color: ref('red')
}



function changeMention(newMention) {
  myButton.mention.value = newMention
}

function changeColor(newColor) {
  myButton.color.value = newColor
}
</script>

<template>
  <div>
    <ul>
      <li v-for="mention in mentions" :key="mention.id">
        <button @click="changeMention(mention)" >{{ mention }}</button>
      </li>
    </ul>
    <ul>
      <li v-for="color in colors" :key="color.id">
        <button @click="changeColor(color)">{{ color }}</button>
      </li>
    </ul>
  </div>
  <p>button mention = {{ myButton.mention.value }}</p>
  <p>button color = {{ myButton.color.value }}</p>

  <div v-if="myButton.color.value == 'blue' && myButton.mention.value == 'abort'">
    <p>Hold: blue = 4  yellow = 5 else = 1</p>
  </div>
  <div v-else-if="batteriesAmount > 1 && myButton.mention.value == 'explode'">
    <p>push and release</p>
  </div>
  <div v-else-if="myButton.color.value == 'white' && CAR == true">
    <p>Hold: blue = 4  yellow = 5 else = 1</p>
  </div>
  <div v-else-if="batteriesAmount > 2 && FRK == true">
    <p>push and release</p>
  </div>
  <div v-else-if="myButton.color.value == 'yellow'">
    <p>Hold: blue = 4  yellow = 5 else = 1</p>
  </div>
  <div v-else-if="myButton.color.value == 'red' && myButton.mention.value == 'hold'">
    <p>push and release</p>
  </div>
  <div v-else>
    <p>Hold: blue = 4  yellow = 5 else = 1</p>
  </div>
</template>

<style scoped>
li{
  list-style: none;
}
</style>
