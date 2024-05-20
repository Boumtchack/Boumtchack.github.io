<script setup>
import { ref } from 'vue'
const props = defineProps({
  vowel: Boolean,
  errorAmount: Number
})

const colors = ['red', 'blue', 'green', 'yellow']

const soluce = ref(null)

function addKey(color) {
  let vowel = props.vowel
  let errors = props.errorAmount
  let newColor = ''
  if (vowel) {
    if (errors == 0) {
      if (color == 'red') {
        newColor = 'blue'
      } else if (color == 'blue') {
        newColor = 'red'
      } else if (color == 'green') {
        newColor = 'yellow'
      } else if (color == 'yellow') {
        newColor = 'green'
      }
    } else if (errors == 1) {
      if (color == 'red') {
        newColor = 'green'
      } else if (color == 'blue') {
        newColor = 'red'
      } else if (color == 'green') {
        newColor = 'yellow'
      } else if (color == 'yellow') {
        newColor = 'blue'
      }
    } else if (errors == 2) {
      if (color == 'red') {
        newColor = 'green'
      } else if (color == 'blue') {
        newColor = 'red'
      } else if (color == 'green') {
        newColor = 'yellow'
      } else if (color == 'yellow') {
        newColor = 'blue'
      }
    }
  } else {
    if (errors == 0) {
      if (color == 'red') {
        newColor = 'blue'
      } else if (color == 'blue') {
        newColor = 'yellow'
      } else if (color == 'green') {
        newColor = 'green'
      } else if (color == 'yellow') {
        newColor = 'red'
      }
    } else if (errors == 1) {
      if (color == 'red') {
        newColor = 'red'
      } else if (color == 'blue') {
        newColor = 'blue'
      } else if (color == 'green') {
        newColor = 'yellow'
      } else if (color == 'yellow') {
        newColor = 'green'
      }
    } else if (errors == 2) {
      if (color == 'red') {
        newColor = 'yellow'
      } else if (color == 'blue') {
        newColor = 'green'
      } else if (color == 'green') {
        newColor = 'blue'
      } else if (color == 'yellow') {
        newColor = 'red'
      }
    }
  }
  soluce.value.innerHTML += `<div class="${newColor}">test</div>`
}
function resetKey() {
  soluce.value.innerHTML = ''
}
</script>

<template>
  <div v-for="(color, index) in colors" :class="color + ' key'" :key="index" @click="addKey(color)">
    {{ color }}
  </div>
  <div ref="soluce"></div>
  <button @click="resetKey()">reset</button>
</template>

<style scope>
.key {
  height: 50px;
  width: 50px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}
</style>
