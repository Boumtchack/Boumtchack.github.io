<script setup>
import { ref } from 'vue'

defineProps({
  serialEven: Boolean
})

const colors = ['red', 'blue', 'white', 'yellow', 'black']

const numberOfWires = ref('3')

const wire1 = ref('red')
const wire2 = ref('red')
const wire3 = ref('red')
const wire4 = ref('red')
const wire5 = ref('red')
const wire6 = ref('red')

let wires = ref([wire1.value, wire2.value, wire3.value])

function changeWiresNumber(num) {
  if (num == 3) {
    wires.value = [wire1.value, wire2.value, wire3.value]
  } else if (num == 4) {
    wires.value = [wire1.value, wire2.value, wire3.value, wire4.value]
  } else if (num == 5) {
    wires.value = [wire1.value, wire2.value, wire3.value, wire4.value, wire5.value]
  } else if (num == 6) {
    wires.value = [wire1.value, wire2.value, wire3.value, wire4.value, wire5.value, wire6.value]
  }
  console.log(wires.value)
}
function changeWiresColor(num, color) {
  wires.value[num - 1] = color
  console.log(wires.value)
}

function countColors(color) {
  let count = 0
  for (let i = 0; i < wires.value.length; i++) {
    if (wires.value[i] == color) {
      count++
    }
  }
  return count
}
</script>

<template>
  <input
    type="radio"
    id="three"
    :value="3"
    v-model="numberOfWires"
    @change="changeWiresNumber(3)"
  />
  <label for="three">three</label>
  <br />
  <input type="radio" id="four" :value="4" v-model="numberOfWires" @change="changeWiresNumber(4)" />
  <label for="four">four</label>
  <br />
  <input type="radio" id="five" :value="5" v-model="numberOfWires" @change="changeWiresNumber(5)" />
  <label for="five">five</label>
  <br />
  <input type="radio" id="six" :value="6" v-model="numberOfWires" @change="changeWiresNumber(6)" />
  <label for="six">six</label>
  <br />
  <label v-for="(color, index) in colors" :class="color + ' wire'" :key="index">
    <input type="radio" :value="color" v-model="wire1" @change="changeWiresColor(1, color)" />
    {{ color }}
  </label>
  <br />
  <label v-for="(color, index) in colors" :class="color" :key="index">
    <input type="radio" :value="color" v-model="wire2" @change="changeWiresColor(2, color)" />
    {{ color }}
  </label>
  <br />
  <label v-for="(color, index) in colors" :class="color" :key="index">
    <input type="radio" :value="color" v-model="wire3" @change="changeWiresColor(3, color)" />
    {{ color }}
  </label>
  <br />
  <div v-if="numberOfWires > 3">
    <label v-for="(color, index) in colors" :class="color" :key="index">
      <input type="radio" :value="color" v-model="wire4" @change="changeWiresColor(4, color)" />
      {{ color }}
    </label>
  </div>
  <div v-if="numberOfWires > 4">
    <label v-for="(color, index) in colors" :class="color" :key="index">
      <input type="radio" :value="color" v-model="wire5" @change="changeWiresColor(5, color)" />
      {{ color }}
    </label>
  </div>
  <div v-if="numberOfWires > 5">
    <label v-for="(color, index) in colors" :class="color" :key="index">
      <input type="radio" :value="color" v-model="wire6" @change="changeWiresColor(6, color)" />
      {{ color }}
    </label>
  </div>
  <p v-for="(wire, index) in wires" :class="wire" :key="index">
    {{ wire }}
  </p>
  <p>result:</p>
  <div v-if="numberOfWires == 3">
    <div v-if="countColors('red') == 0">
      <p>cut the second wire</p>
    </div>
    <div v-else-if="wires[2] == 'white'">
      <p>cut the last wire</p>
    </div>
    <div v-else-if="countColors('blue') > 1">
      <p>cut the last blue wire</p>
    </div>
    <div v-else>
      <p>cut the last wire</p>
    </div>
  </div>
  <div v-else-if="numberOfWires == 4">
    <div v-if="countColors('red') > 1 && !serialEven">
      <p>cut the last red wire</p>
    </div>
    <div v-else-if="wires[3] == 'yellow' && countColors('red') == 0">
      <p>cut the first wire</p>
    </div>
    <div v-else-if="countColors('blue') == 1">
      <p>cut the first wire</p>
    </div>
    <div v-else-if="countColors('yellow') > 1">
      <p>cut the last wire</p>
    </div>
    <div v-else>
      <p>cut the second wire</p>
    </div>
  </div>
  <div v-else-if="numberOfWires == 5">
    <div v-if="wires[4] == 'black' && !serialEven">
      <p>cut the fourth wire</p>
    </div>
    <div v-else-if="countColors('red') == 1 && countColors('yellow') > 1">
      <p>cut the first wire</p>
    </div>
    <div v-else-if="countColors('black') == 0">
      <p>cut the second wire</p>
    </div>
    <div v-else>
      <p>cut the first wire</p>
    </div>
  </div>
  <div v-else-if="numberOfWires == 6">
    <div v-if="countColors('yellow') == 0 && !serialEven">
      <p>cut the third wire</p>
    </div>
    <div v-else-if="countColors('yellow') == 1 && countColors('white') > 1">
      <p>cut the fourth wire</p>
    </div>
    <div v-else-if="countColors('red') == 0">
      <p>cut the last wire</p>
    </div>
    <div v-else>
      <p>cut the fourth wire</p>
    </div>
  </div>
</template>

<style scoped>
input[type='radio'] {
  display: none;
}
label{
  display: inline-block;
  height: 50px;
  width: 50px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.white {
  background-color: white;
}
.yellow {
  background-color: yellow;
}
.black {
  background-color: black;
}
</style>
