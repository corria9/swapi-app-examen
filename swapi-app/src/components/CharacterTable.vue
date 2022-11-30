<template>
    <table>
        <tbody>
            CharacterTable
        </tbody>
    </table>
</template>

<script>
import TableHeader from '../components/TableHeader.vue'
import TableRow from '../components/TableRow.vue'

export default {
    name: 'CharacterTable',
    components: {
        TableHeader,
        TableRow,
    }
}
</script>


<style scoped>
table {
	border-collapse: collapse;
	width: 350px;
}
</style>
