<template>
	<div class="cd">
		<List :list="list"/>
	</div>
</template>

<script>
import List from "@/components/List/index.vue"
import {mapState} from "vuex"
export default {
	name: "CD",
	components:{
		List
	},
	computed:mapState('cd',['list']),
	created() {
		this.$store.dispatch("cd/GetList")
	}
};

</script>

<style scoped lang="scss"></style>