<template>
	<thead>
		<tr>
			<th>
				<div class="tableTitle">
					Characters
				</div>
				<input
					@input="search"
					placeholder="Search"
					type="text"
					v-model="searchString"
				/>
			</th>
		</tr>
	</thead>
</template>

<script>
export default {
	name: 'TableHeader',
	data() {
		return {
			searchString: '',
		}
	},
	methods: {
		search() {
			this.$emit('search', this.searchString)
		},
	},
}
</script>

<style scoped>
input {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid rgb(29, 29, 29);
	color: rgb(230, 230, 230);
	background-color: rgb(68, 68, 68);
	border-radius: 4px;
	box-sizing: border-box;
}

input::placeholder {
	color: rgb(230, 230, 230);
}

input:focus {
	outline: none;
}

.tableTitle {
	font-size: x-large;
	margin-bottom: 10px;
}

th {
	border: 2px solid #ffff66;
	text-align: left;
	padding: 15px;
}
</style>
