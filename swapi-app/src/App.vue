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


<style>
body {
	background-color: rgb(17, 16, 16);
}
#app {
	padding: 0;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #ffff66;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title {
	font-size: 100px;
}
</style>
