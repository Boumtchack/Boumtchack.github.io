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

const secondWordsListFR = [
  ['APPUIE', 'DROITE', 'MILIEU', 'OUI', 'PRÊT', 'APPUIE'],
  ['ATTENDS', 'EUHHH', 'NON', 'VIDE', 'E', 'OUI', 'GAUCHE', 'PREMIER', 'APPUIE', 'EUX', 'ATTENDS'],
  ['AVANT', 'AVANT'],
  ['COMME', 'TONS', 'SUIVANT', 'TES', "T'ES", 'MAINTIENS', 'FAIT', 'QUOI', 'QUOI ?', 'AVANT', 'TOI', 'COMME'],
  ['DROITE', 'OUI', 'RIEN', 'PRÊT', 'APPUIE', 'NON', 'ATTENDS', 'EUX', 'DROITE'],
  ['E', 'MILIEU', 'NON', 'PREMIER', 'OUI', 'EUHHH', 'RIEN', 'ATTENDS', 'E'],
  ['EUHHH', 'PRÊT', 'RIEN', 'GAUCHE', 'EUX', 'E', 'OUI', 'DROITE', 'NON', 'APPUIE', 'VIDE', 'EUHHH'],
  ['EUX', 'EUHHH', 'EUX'],
  ['FAIT', 'OK', 'AVANT', 'SUIVANT', 'QUOI ?', 'TON', "T'ES", 'TONS', 'MAINTIENS', 'COMME', 'TOI', 'TES', 'THON', 'QUOI', 'FAIT'],
  ['GAUCHE', 'DROITE', 'GAUCHE'],
  ['MAINTIENS', 'THON', 'TES', 'FAIT', 'QUOI', 'TOI', "T'ES", 'OK', 'QUOI ?', 'TONS', 'SUIVANT', 'MAINTIENS'],
  ['MILIEU', 'VIDE', 'PRÊT', 'E', 'EUX', 'RIEN', 'APPUIE', 'NON', 'ATTENDS', 'GAUCHE', 'MILIEU'],
  ['NON', 'VIDE', 'EUHHH', 'ATTENDS', 'PREMIER', 'EUX', 'PRÊT', 'DROITE', 'OUI', 'RIEN', 'GAUCHE', 'APPUIE', 'E', 'NON'],
  ['OK', 'THON', 'FAIT', 'COMME', 'TONS', 'TOI', 'MAINTIENS', 'AVANT', "T'ES", 'OK'],
  ['OUI', 'E', 'DROITE', 'EUHHH', 'MILIEU', 'PREMIER', 'EUX', 'APPUIE', 'PRÊT', 'RIEN', 'OUI', 'GAUCHE', 'VIDE', 'NON', 'ATTENDS'],
  ['PREMIER', 'GAUCHE', 'E', 'OUI', 'MILIEU', 'NON', 'DROITE', 'RIEN', 'EUHHH', 'ATTENDS', 'PRÊT', 'VIDE', 'EUX', 'APPUIE', 'PREMIER'],
  ['PRÊT', 'OUI', 'E', 'EUX', 'MILIEU', 'GAUCHE', 'APPUIE', 'DROITE', 'VIDE', 'PRÊT'],
  ['QUOI ?', 'TOI', 'MAINTIENS', 'TONS', 'TON', 'TES', 'FAIT', 'QUOI', 'COMME', 'THON', 'AVANT', "T'ES", 'SUIVANT', 'QUOI ?'],
  ['QUOI', "T'ES", 'TES', 'THON', 'TONS', 'SUIVANT', 'QUOI'],
  ['RIEN', 'EUHHH', 'DROITE', 'E', 'MILIEU', 'OUI', 'VIDE', 'NON', 'APPUIE', 'GAUCHE', 'EUX', 'ATTENDS', 'PREMIER', 'RIEN'],
  ['SUIVANT', 'QUOI ?', 'AVANT', 'QUOI', 'TON', 'MAINTIENS', 'OK', 'SUIVANT'],
  ["T'ES", 'FAIT', 'TES', "T'ES"],
  ['TES', 'AVANT', 'OK', 'SUIVANT', 'QUOI ?', 'TONS', "T'ES", 'QUOI', 'FAIT', 'TES'],
  ['THON', 'TON', 'SUIVANT', 'COMME', 'AVANT', 'QUOI ?', 'FAIT', 'QUOI', 'MAINTIENS', 'TOI', 'TES', 'TONS', 'OK', "T'ES", 'THON'],
  ['TOI', 'OK', 'THON', 'TON', 'TONS', 'SUIVANT', 'AVANT', "T'ES", 'MAINTIENS', 'QUOI ?', 'TOI'],
  ['TON', 'QUOI', 'THON', 'AVANT', 'TON'],
  ['TONS', 'TOI', 'TONS'],
  ['VIDE', 'ATTENDS', 'DROITE', 'E', 'MILIEU', 'VIDE']
]

let firstWordSolution = ref(0)
let secondWordSolution = ref(0)

function clickFirst(word) {
  firstWordSolution.value = word.value
}

function clickSecond(word) {
  secondWordSolution.value = word.value.split(',').splice(1)
}
</script>
<template>
  <div class="words">
    <div class="word" v-for="(word, index) in firstWordsListFR" :key="index">
      <input type="radio" :id="word[0]" name="firstWord" :value="word[1]" @click="clickFirst($event.target)" />
      <label :for="word[0]">{{ word[0] }}</label>
    </div>
  </div>
  <div v-if="firstWordSolution == 0">look:</div>
  <div v-else-if="firstWordSolution == 1">look: top left</div>
  <div v-else-if="firstWordSolution == 2">look: top right</div>
  <div v-else-if="firstWordSolution == 3">look: middle left</div>
  <div v-else-if="firstWordSolution == 4">look: middle right</div>
  <div v-else-if="firstWordSolution == 5">look: bottom left</div>
  <div v-else-if="firstWordSolution == 6">look: bottom right</div>
  <div class="words">
    <div class="word" v-for="(word, index) in secondWordsListFR" :key="index">
      <input type="radio" :id="word[0]" name="secondWord" :value="word" @click="clickSecond($event.target)" />
      <label :for="word[0]">{{ word[0] }}</label>
    </div>
  </div>
  <span v-for="(word, index) in secondWordSolution" :key="index">
    {{ `- ${word} - ` }}
  </span>
</template>

<style scope>
.words {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 200px;
  user-select: none;
  border: 1px white solid;
  .word {
    width: 100%;
  }
  input {
    display: none;
    &:checked + label {
      background-color: red;
    }
  }
  label {
    display: block;
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
</style>
