<template>
	<div class="songs">
		<div class="list">
			<ul class="list-head flex p-1">
				<li class="flex flex-none w-12 mr-4 items-center"></li>
				<li class="flex flex-1 items-center">Track</li>
				<li class="flex flex-1 items-center">Artists</li>
				<li class="flex flex-1 justify-end items-center">Duration</li>
			</ul>
			<ul class="list-data flex p-1" v-for="item in songs" :key="item.id">
				<li class="flex items-center flex-none w-12 mr-4 img"><img class="block w-full h-full object-cover rounded" :src="item?.album?.picUrl" :alt="item.name"></li>
				<li class="flex items-center flex-1 name text-base">{{ item.name }}</li>
				<li class="flex items-center flex-1 artist_name text-xs text-black opacity-30">
					{{ item?.artists[0]?.name }}
					<div class="like">

					</div>
				</li>
				<li class="flex items-center flex-1 duration justify-end text-sm text-black opacity-70">{{ item.duration }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapState} from "vuex";

export default {
	name: "Songs",
	computed: mapState("home", ["songs"])
};
</script>

<style lang="scss" scoped>
.list {
	&-data {
		&:not(:last-child){
			@apply border-b;
		}
	}
}
</style>
