<script setup>
import { ref } from 'vue'
const firstWordsListFR = [
  ['...', 5],
  ['attends', 6],
  ['au', 5],
  ['bouge', 4],
  ['c', 2],
  ["c'est", 6],
  ['eau', 5],
  ['haut', 5],
  ['maux', 6],
  ['mot', 3],
  ['mots', 6],
  ['non', 6],
  ['ok', 2],
  ['oui', 3],
  ['premier', 2],
  ['rien', 3],
  ['rouge', 4],
  ["t'es", 6],
  ['tes', 4],
  ['thon', 1],
  ['ton', 4],
  ['tons', 4],
  ['tu es', 6],
  ['ver', 6],
  ['vers', 4],
  ['vert', 3],
  ['verre', 6],
  ['vide', 4]
]

const secondWordsListFR = {
  1: ['APPUIE', 'DROITE', 'MILIEU', 'OUI', 'PRÊT', 'APPUIE'],
  2: ['ATTENDS', 'EUHHH', 'NON', 'VIDE', 'E', 'OUI', 'GAUCHE', 'PREMIER', 'APPUIE', 'EUX', 'ATTENDS'],
  3: ['AVANT', 'AVANT'],
  4: ['COMME', 'TONS', 'SUIVANT', 'TES', "T'ES", 'MAINTIENS', 'FAIT', 'QUOI', 'QUOI ?', 'AVANT', 'TOI', 'COMME'],
  5: ['DROITE', 'OUI', 'RIEN', 'PRÊT', 'APPUIE', 'NON', 'ATTENDS', 'EUX', 'DROITE'],
  6: ['E', 'MILIEU', 'NON', 'PREMIER', 'OUI', 'EUHHH', 'RIEN', 'ATTENDS', 'E'],
  7: ['EUHHH', 'PRÊT', 'RIEN', 'GAUCHE', 'EUX', 'E', 'OUI', 'DROITE', 'NON', 'APPUIE', 'VIDE', 'EUHHH'],
  8: ['EUX', 'EUHHH', 'EUX'],
  9: ['FAIT', 'OK', 'AVANT', 'SUIVANT', 'QUOI ?', 'TON', "T'ES", 'TONS', 'MAINTIENS', 'COMME', 'TOI', 'TES', 'THON', 'QUOI', 'FAIT'],
  10: ['GAUCHE', 'DROITE', 'GAUCHE'],
  11: ['MAINTIENS', 'THON', 'TES', 'FAIT', 'QUOI', 'TOI', "T'ES", 'OK', 'QUOI ?', 'TONS', 'SUIVANT', 'MAINTIENS'],
  12: ['MILIEU', 'VIDE', 'PRÊT', 'E', 'EUX', 'RIEN', 'APPUIE', 'NON', 'ATTENDS', 'GAUCHE', 'MILIEU'],
  13: ['NON', 'VIDE', 'EUHHH', 'ATTENDS', 'PREMIER', 'EUX', 'PRÊT', 'DROITE', 'OUI', 'RIEN', 'GAUCHE', 'APPUIE', 'E', 'NON'],
  14: ['OK', 'THON', 'FAIT', 'COMME', 'TONS', 'TOI', 'MAINTIENS', 'AVANT', "T'ES", 'OK'],
  15: ['OUI', 'E', 'DROITE', 'EUHHH', 'MILIEU', 'PREMIER', 'EUX', 'APPUIE', 'PRÊT', 'RIEN', 'OUI', 'GAUCHE', 'VIDE', 'NON', 'ATTENDS'],
  16: ['PREMIER', 'GAUCHE', 'E', 'OUI', 'MILIEU', 'NON', 'DROITE', 'RIEN', 'EUHHH', 'ATTENDS', 'PRÊT', 'VIDE', 'EUX', 'APPUIE', 'PREMIER'],
  17: ['PRÊT', 'OUI', 'E', 'EUX', 'MILIEU', 'GAUCHE', 'APPUIE', 'DROITE', 'VIDE', 'PRÊT'],
  18: ['QUOI ?', 'TOI', 'MAINTIENS', 'TONS', 'TON', 'TES', 'FAIT', 'QUOI', 'COMME', 'THON', 'AVANT', "T'ES", 'SUIVANT', 'QUOI ?'],
  19: ['QUOI', "T'ES", 'TES', 'THON', 'TONS', 'SUIVANT', 'QUOI'],
  20: ['RIEN', 'EUHHH', 'DROITE', 'E', 'MILIEU', 'OUI', 'VIDE', 'NON', 'APPUIE', 'GAUCHE', 'EUX', 'ATTENDS', 'PREMIER', 'RIEN'],
  21: ['SUIVANT', 'QUOI ?', 'AVANT', 'QUOI', 'TON', 'MAINTIENS', 'OK', 'SUIVANT'],
  22: ["T'ES", 'FAIT', 'TES', "T'ES"],
  23: ['TES', 'AVANT', 'OK', 'SUIVANT', 'QUOI ?', 'TONS', "T'ES", 'QUOI', 'FAIT', 'TES'],
  24: ['THON', 'TON', 'SUIVANT', 'COMME', 'AVANT', 'QUOI ?', 'FAIT', 'QUOI', 'MAINTIENS', 'TOI', 'TES', 'TONS', 'OK', "T'ES", 'THON'],
  25: ['TOI', 'OK', 'THON', 'TON', 'TONS', 'SUIVANT', 'AVANT', "T'ES", 'MAINTIENS', 'QUOI ?', 'TOI'],
  26: ['TON', 'QUOI', 'THON', 'AVANT', 'TON'],
  27: ['TONS', 'TOI', 'TONS'],
  28: ['VIDE', 'ATTENDS', 'DROITE', 'E', 'MILIEU', 'VIDE']
}

let firstWordSolution = ref('0')

function changeFirstSolution(word) {
  firstWordSolution.value = word.getAttribute('value')
}

function click(word) {
  console.log(word);
  toggle(word)
  changeFirstSolution(word)
}

function toggle(word) {
  word.classList.toggle('clicked')
}
</script>
<template>
  <div class="words">
    <div v-for="(word, index) in firstWordsListFR" :key="index" @click="click($event.target)">
      <div :value="word[1]">{{ word[0] }}</div>
    </div>
  </div>
  <div v-if="(firstWordSolution='0')">look:</div>
  <div v-else-if="(firstWordSolution='1')">look: top left</div>
  <div v-else-if="(firstWordSolution='2')">look: top right</div>
  <div v-else-if="(firstWordSolution='3')">look: middle left</div>
  <div v-else-if="(firstWordSolution='4')">look: middle right</div>
  <div v-else-if="(firstWordSolution='5')">look: bottom left</div>
  <div v-else-if="(firstWordSolution='6')">look: bottom right</div>
  <div class="words">
    <div v-for="(word, index) in secondWordsListFR" :key="index">
      <div :value="word[1]">{{ word[0] }}</div>
    </div>
  </div>
  <p>press: {{ secondAnswer }}</p>
</template>
<style scope>
.words {
  height: 200px;
  user-select: none;
  display: grid;
  border-collapse: collapse;
  grid-template-columns: repeat(7, 1fr);
  border: 1px white solid;
  div {
    text-align: center;
    color: black;
    background-color: grey;
    border: 2px solid grey;
    width: 100%;
    height: 100%;
    &:hover {
      background-color: rgb(163, 163, 163);
    }
  }
}
.clicked {
  border: 2px solid red !important;
}
</style>
