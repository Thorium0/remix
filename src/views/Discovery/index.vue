<template>
	<div class="discovery">
		<List :list="list"/>
	</div>
</template>

<script>
import List from "@/components/List/index.vue"
export default {
	name: "Discovery",
	components: {
		List
	},
	data:()=>({
		list: [],
	}),
	created() {
		this.init();
	},
	mounted() {},
	methods: {
		init() {
			// this.$axios({
			//   methods: "POST",
			//   url: "/discoverypage/dragon/ball",
			// }).then((res) => {
			//   const { data } = res;
			//   this.ball = Object.freeze(data || []);
			// });
			this.$axios({
				methods:"POST",
				url:"/personalized"
			}).then(res=>{
				console.log(res)
				const {result}=res;
				this.list=Object.freeze(result);
			})
		},
	},
};
</script>
