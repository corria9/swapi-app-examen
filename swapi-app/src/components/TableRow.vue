<template>
	<tr>
		<td>
			<div class="nameContainer">
				{{ character.name }}
			</div>
			<transition name="fade">
				<div>
					<strong>Birth Year: </strong> {{ character.birth_year }}
					<br />
					<strong>Gender: </strong> {{ character.gender }}
					<br />
					<strong>Height: </strong> {{ character.height }}
					<br />
					<strong> Mass: </strong> {{ character.mass }}
				</div>
			</transition>
		</td>
	</tr>
</template>

<script>

export default {
    name: 'TableRow',
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
