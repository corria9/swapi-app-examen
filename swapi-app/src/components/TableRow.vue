<template>
	<tr>
		<td @click="show = !show">
			<div class="nameContainer">
				{{ character.name }}
			</div>
			<transition name="fade">
				<div class="moreInfo" v-if="show">
					<strong>Año Nacimiento: </strong> {{ character.birth_year }}
					<br />
					<strong>Genero: </strong> {{ character.gender }}
					<br />
					<strong>Altura: </strong> {{ character.height }}
					<br />
					<strong> Peso: </strong> {{ character.mass }}
				</div>
			</transition>
		</td>
	</tr>
</template>

<script>
export default {
	name: 'TableRow',
	props: {
		character: Object,
	},
	data() {
		return {
			show: false,
		}
	},
	methods: {
		closeInfo() {
			this.show = false
		},
	},
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.moreInfo {
	padding: 10px;
}

td {
	border: 2px solid #ffff66;
	text-align: left;
	padding: 15px;
}

.nameContainer {
	font-weight: bold;
}
</style>
