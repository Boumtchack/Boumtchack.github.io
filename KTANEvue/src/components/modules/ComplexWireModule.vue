<script setup>
import { ref } from 'vue'
defineProps({
  serialEven: Boolean,
  port: Boolean,
  batteriesAmount: Number
})

let wireValues = ['red', 'blue', 'star', 'led']
let selctedWires = ref([])

function changeValues(wire, wireText) {
  if (wire.classList.contains('clicked')) {
    let i = selctedWires.value.indexOf(wireText)
    selctedWires.value.splice(i, 1)
  } else {
    selctedWires.value.push(wireText)
  }
  wire.classList.toggle('clicked')
  // console.log(selctedWires.value);
}
</script>

<template>
  <div class="wires">
    <span :class='wireText + " wire"' v-for="(wireText, index) in wireValues" :key="index" @click="changeValues($event.target, wireText)">
      {{ `-${wireText}-` }}
    </span>
  </div>
  <div>result:</div>
  <div
    v-if="
      (!selctedWires.includes('blue') && !selctedWires.includes('red') && !selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && !selctedWires.includes('red') && selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && selctedWires.includes('red') && selctedWires.includes('star') && !selctedWires.includes('led'))
    "
  >
    <p>cut</p>
  </div>
  <div
    v-else-if="
      (selctedWires.includes('blue') && !selctedWires.includes('red') && !selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && selctedWires.includes('red') && !selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (selctedWires.includes('blue') && selctedWires.includes('red') && !selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (selctedWires.includes('blue') && selctedWires.includes('red') && !selctedWires.includes('star') && selctedWires.includes('led'))
    "
  >
    <div v-if="serialEven == true">
      <p>cut</p>
    </div>
    <div v-else>
      <p>don't cut</p>
    </div>
  </div>
  <div
    v-else-if="
      (selctedWires.includes('blue') && !selctedWires.includes('red') && selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && !selctedWires.includes('red') && !selctedWires.includes('star') && selctedWires.includes('led')) ||
      (selctedWires.includes('blue') && selctedWires.includes('red') && selctedWires.includes('star') && selctedWires.includes('led'))
    "
  >
    <p>don't cut</p>
  </div>
  <div
    v-else-if="
      (selctedWires.includes('blue') && !selctedWires.includes('red') && !selctedWires.includes('star') && selctedWires.includes('led')) ||
      (selctedWires.includes('blue') && selctedWires.includes('red') && selctedWires.includes('star') && !selctedWires.includes('led')) ||
      (selctedWires.includes('blue') && !selctedWires.includes('red') && selctedWires.includes('star') && selctedWires.includes('led'))
    "
  >
    <div v-if="port == true">
      <p>cut</p>
    </div>
    <div v-else>
      <p>don't cut</p>
    </div>
  </div>
  <div
    v-else-if="
      (!selctedWires.includes('blue') && !selctedWires.includes('red') && selctedWires.includes('star') && selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && selctedWires.includes('red') && selctedWires.includes('star') && selctedWires.includes('led')) ||
      (!selctedWires.includes('blue') && selctedWires.includes('red') && !selctedWires.includes('star') && selctedWires.includes('led'))
    "
  >
    <div v-if="batteriesAmount > 1">
      <p>cut</p>
    </div>
    <div v-else>
      <p>don't cut</p>
    </div>
  </div>
</template>

<style scoped>
.wires {
  text-align: center;
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  .wire {
    display: block;
    height: 100%;
    flex-grow: 1;
    background-color: grey;
  }
  .clicked {
    background-color: red;
  }
}
</style>
