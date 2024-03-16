<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { PropType } from 'vue'
import type { Animal } from '../types'
import { calculateAgeInYears, calculateFoodForNextMonth } from '../composables/helpers'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})

const selectedAnimal = ref<Animal | null>(null)
const currentDate = ref<Date>(new Date())

const animalsSortedByName = computed(() => props.animals.slice().sort((animalA, animalB) => (animalA.name > animalB.name) ? 1 : -1))
</script>

<template>
  <table>
    <thead>
      <tr class="bg-gray-200 border-b-2 border-t-2 border-gray-500">
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Favorite Fruit</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Food Required For Next Month(kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ id, species, gender, birthdate, weight, name, favouriteFruit, height }, animalIndex) in animalsSortedByName"
        :key="id" class="hover:bg-amber-200 border-b-2 border-amber-900"
        @click="selectedAnimal = animals[animalIndex]"
      >
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ calculateAgeInYears(new Date(birthdate)) }}</td>
        <td>{{ favouriteFruit }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ calculateFoodForNextMonth(weight, height, favouriteFruit, gender, new Date(birthdate), species, currentDate) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply text-left
}

td {
  @apply w-40
}

tr {
  @apply border-b-2
}
</style>
