<template>
  <div id="app">
    <h1 class="title">Star Wars App</h1>
    <CharacterTable />
  </div>
</template>

<script>
import CharacterTable from './components/CharacterTable.vue'

export default {
  name: 'App',
  components: {
    CharacterTable,
  },
}
</script>
