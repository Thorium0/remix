<template>
	<div class="detail-view">
		<div class="detail-view-content">

		</div>
	</div>
</template>

<script>
import anime from "animejs"
export default {
	name: "DetailView",
	created() {

	}
};

</script>

<style scoped lang="scss">
.detail-view{
	height: calc(100vh - 4rem);
	@apply absolute w-screen bg-white bg-opacity-0 z-50;
}
</style>