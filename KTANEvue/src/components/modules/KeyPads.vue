<script setup>
import { ref } from 'vue'
const key1 = ref(null)
const key2 = ref(null)
const key3 = ref(null)
const key4 = ref(null)

let myKeys = []

const keypads = {
  list1: [28, 13, 30, 12, 7, 9, 23],
  list2: [16, 28, 23, 26, 3, 9, 20],
  list3: [1, 8, 26, 5, 15, 30, 3],
  list4: [11, 21, 31, 7, 5, 20, 4],
  list5: [24, 4, 31, 22, 21, 19, 2],
  list6: [11, 16, 27, 14, 24, 18, 6]
}

function addKey(keyElement) {
  console.log(keyElement);
  if (myKeys.length < 3) {
    myKeys << keyElement
    console.log(myKeys);
  } else {
    myKeys << keyElement.value
    console.log(myKeys);
    findResult()
  }
}

function findResult() {}

function resetKeypad() {}
</script>

<template>
  <div>
    <div class="keypadicon">
      <img src="https://www.bombmanual.com/web/img/modules/keypad/1-copyright.png" alt="1"  :value="1" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/2-filledstar.png" alt="2"  :value="2" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/3-hollowstar.png" alt="3"  :value="3" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/4-smileyface.png" alt="4"  :value="4" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/5-doublek.png" alt="5"  :value="5" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/6-omega.png" alt="6"  :value="6" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/7-squidknife.png" alt="7"  :value="7" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/8-pumpkin.png" alt="8"  :value="8" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/9-hookn.png" alt="9"  :value="9" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/11-six.png" alt="11" :value="11" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/12-squigglyn.png" alt="12" :value="12" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/13-at.png" alt="13" :value="13" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/14-ae.png" alt="14" :value="14" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/15-meltedthree.png" alt="15" :value="15" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/16-euro.png" alt="16" :value="16" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/18-nwithhat.png" alt="18" :value="18" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/19-dragon.png" alt="19" :value="19" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/20-questionmark.png" alt="20" :value="20" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/21-paragraph.png" alt="21" :value="21" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/22-rightc.png" alt="22" :value="22" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/23-leftc.png" alt="23" :value="23" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/24-pitchfork.png" alt="24" :value="24" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/26-cursive.png" alt="26" :value="26" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/27-tracks.png" alt="27" :value="27" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/28-balloon.png" alt="28" :value="28" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/30-upsidedowny.png" alt="30" :value="30" @click="addKey(value)" />
      <img src="https://www.bombmanual.com/web/img/modules/keypad/31-bt.png" alt="31" :value="31" @click="addKey(value)" />
      <button class="button-reset" onclick="resetKeypad()">reset</button>
    </div>
  </div>
  <div class="keyResult">
    <div class="photo-div">
      <img src="../../../public/questionmark.png" :ref="key1" class="keyResult1" />
    </div>
    <div class="photo-div">
      <img src="../../../public/questionmark.png" :ref="key2" class="keyResult2" />
    </div>
    <div class="photo-div">
      <img src="../../../public/questionmark.png" :ref="key3" class="keyResult3" />
    </div>
    <div class="photo-div">
      <img src="../../../public/questionmark.png" :ref="key4" class="keyResult4" />
    </div>
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
</style>
