<template>
	<table class="characterList">
		<TableHeader @search="search" />

		<tbody>
			<template v-for="(character, index) in characters" :key="index">
				<TableRow ref="rows" :character="character" />
			</template>
		</tbody>

		<tfoot>
			<Pagination @back="previousPage" @next="nextPage" />
		</tfoot>
	</table>
</template>

<script>
import Requests from '../Requests.js'
import TableHeader from '../components/TableHeader.vue'
import TableRow from '../components/TableRow.vue'
import Pagination from '../components/Pagination.vue'

export default {
	name: 'CharacterTable',
	data() {
		return {
			characters: [],
			page: 1,
			count: 0,
			searchString: '',
		}
	},
	components: {
		TableHeader,
		TableRow,
		Pagination,
	},
	created() {
		this.updateTable(this.page, this.searchString)
	},
	methods: {
		nextPage() {
			if (this.page < Math.ceil(this.count / 10)) {
				this.updateTable(++this.page, this.searchString)
				this.closeRows()
			}
		},
		previousPage() {
			if (this.page > 1) {
				this.updateTable(--this.page, this.searchString)
				this.closeRows()
			}
		},
		async updateTable(page = 1, search = '') {
			const data = await Requests.getCharacters(page, search)
			this.characters = data.results
			this.count = data.count
		},
		search(value = '') {
			this.searchString = value
			this.page = 1
			this.updateTable(this.page, this.searchString)
			this.closeRows()
		},
		closeRows() {
			for (const row of this.$refs.rows) {
				row.closeInfo()
			}
		},
	},
}
</script>

<style scoped>
table {
	border-collapse: collapse;
	width: 350px;
}
</style>
