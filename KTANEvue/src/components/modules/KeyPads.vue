<script setup>
import { ref } from 'vue'

const keyResult1 = ref()
const keyResult2 = ref()
const keyResult3 = ref()
const keyResult4 = ref()

let myKeys = []

const questionMark = '../../../public/questionmark.png'
const blackCross = '../../../public/cross.svg.png'

const keypads = {
  0: [28, 13, 30, 12, 7, 9, 23],
  1: [16, 28, 23, 26, 3, 9, 20],
  2: [1, 8, 26, 5, 15, 30, 3],
  3: [11, 21, 31, 7, 5, 20, 4],
  4: [24, 4, 31, 22, 21, 19, 2],
  5: [11, 16, 27, 14, 24, 18, 6]
}

const images = {
  1: ['https://www.bombmanual.com/web/img/modules/keypad/1-copyright.png', 1],
  2: ['https://www.bombmanual.com/web/img/modules/keypad/2-filledstar.png', 2],
  3: ['https://www.bombmanual.com/web/img/modules/keypad/3-hollowstar.png', 3],
  4: ['https://www.bombmanual.com/web/img/modules/keypad/4-smileyface.png', 4],
  5: ['https://www.bombmanual.com/web/img/modules/keypad/5-doublek.png', 5],
  6: ['https://www.bombmanual.com/web/img/modules/keypad/6-omega.png', 6],
  7: ['https://www.bombmanual.com/web/img/modules/keypad/7-squidknife.png', 7],
  8: ['https://www.bombmanual.com/web/img/modules/keypad/8-pumpkin.png', 8],
  9: ['https://www.bombmanual.com/web/img/modules/keypad/9-hookn.png', 9],
  11: ['https://www.bombmanual.com/web/img/modules/keypad/11-six.png', 11],
  12: ['https://www.bombmanual.com/web/img/modules/keypad/12-squigglyn.png', 12],
  13: ['https://www.bombmanual.com/web/img/modules/keypad/13-at.png', 13],
  14: ['https://www.bombmanual.com/web/img/modules/keypad/14-ae.png', 14],
  15: ['https://www.bombmanual.com/web/img/modules/keypad/15-meltedthree.png', 15],
  16: ['https://www.bombmanual.com/web/img/modules/keypad/16-euro.png', 16],
  18: ['https://www.bombmanual.com/web/img/modules/keypad/18-nwithhat.png', 18],
  19: ['https://www.bombmanual.com/web/img/modules/keypad/19-dragon.png', 19],
  20: ['https://www.bombmanual.com/web/img/modules/keypad/20-questionmark.png', 20],
  21: ['https://www.bombmanual.com/web/img/modules/keypad/21-paragraph.png', 21],
  22: ['https://www.bombmanual.com/web/img/modules/keypad/22-rightc.png', 22],
  23: ['https://www.bombmanual.com/web/img/modules/keypad/23-leftc.png', 23],
  24: ['https://www.bombmanual.com/web/img/modules/keypad/24-pitchfork.png', 24],
  26: ['https://www.bombmanual.com/web/img/modules/keypad/26-cursive.png', 26],
  27: ['https://www.bombmanual.com/web/img/modules/keypad/27-tracks.png', 27],
  28: ['https://www.bombmanual.com/web/img/modules/keypad/28-balloon.png', 28],
  30: ['https://www.bombmanual.com/web/img/modules/keypad/30-upsidedowny.png', 30],
  31: ['https://www.bombmanual.com/web/img/modules/keypad/31-bt.png', 31]
}

function toggle(key) {
  if (key.classList.value == 'clicked') {
    let i = myKeys.indexOf(key)
    myKeys.splice(i, 1)
  } else {
    myKeys.push(key)
  }
  key.classList.toggle('clicked')
}

function addKey(key) {
  toggle(key)
  if (myKeys.length < 4) {
    resetResultKeys()
  } else if (myKeys.length == 4) {
    findResult()
  }
}

function resetResultKeys() {
  keyResult1.value.src = questionMark
  keyResult2.value.src = questionMark
  keyResult3.value.src = questionMark
  keyResult4.value.src = questionMark
}

function findResult() {
  for (let i = 0; i < 6; i++) {
    let listResult = []
    let testingList = keypads[i]
    console.log()
    for (let y = 0; y < testingList.length; y++) {
      for (let z = 0; z < myKeys.length; z++) {
        if (myKeys[z].getAttribute('value') == testingList[y]) {
          listResult.push(myKeys[z])
        }
      }
    }
    if (listResult.length == 4) {
      keyResult1.value.src = listResult[0].src
      keyResult2.value.src = listResult[1].src
      keyResult3.value.src = listResult[2].src
      keyResult4.value.src = listResult[3].src
      return
    } else {
      keyResult1.value.src = blackCross
      keyResult2.value.src = blackCross
      keyResult3.value.src = blackCross
      keyResult4.value.src = blackCross
      listResult = []
    }
  }
}
</script>

<template>
  <div class="keypadicon">
    <img v-for="image in images" :key="image[1]" :src="image[0]" :alt="'image' + image[1]" :value="image[1]" @click="addKey($event.target)" />
  </div>
  <div class="keyResult">
    <img ref="keyResult1" :src="questionMark" alt="result1" />
    <img ref="keyResult2" :src="questionMark" alt="result2" />
    <img ref="keyResult3" :src="questionMark" alt="result3" />
    <img ref="keyResult4" :src="questionMark" alt="result4" />
  </div>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 10px;
}
/* .keypadicon {
} */
.keyResult {
  display: flex;
  flex-direction: row;
}
.clicked {
  border: 2px solid red;
}
</style>
