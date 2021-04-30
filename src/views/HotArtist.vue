<template>
	<div class="hot-artists">
		<div class="hot-artists-area">
			语种：
			<span v-for="(item, key) in area" :key="key" :class="{active:params.area===item.value}" @click="_setParams({type:'area',value:item.value})">{{item.label}}</span>
		</div>
		<div class="hot-artists-type">
			分类：
			<span v-for="(item, key) in type" :key="key" :class="{active:params.type===item.value}" @click="_setParams({type:'type',value:item.value})">{{item.label}}</span>
		</div>
		<div class="hot-artists-initial">
			筛选：
			<span :class="{active:params.initial==='-1'}" @click="_setParams({type:'initial',value:'-1'})">热门</span>
			<span v-for="(item, key) in initial" :key="key" :class="{active:params.initial===item}" @click="_setParams({type:'initial',value:item})">{{item}}</span>
		</div>

		<div class="artist">
			<div class="artist-item" v-for="(item, key) in artists" :key="key"  v-lazy-container="{ selector: 'img' }">
				<img :data-src="item.picUrl" :alt="item.name"/>
				<p>{{item.name}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HotArtist",
	data() {
		return {
			area:[
				{label: "全部",value:'-1'},
				{label: "华语",value:'7'},
				{label: "欧美",value:'96'},
				{label: "日本",value:'8'},
				{label: "韩国",value:'16'},
				{label: "其他",value:'0'},
			],
			type:[
				{label: "全部",value:'-1'},
				{label: "男歌手",value:'1'},
				{label: "女歌手",value:'2'},
				{label: "乐队",value:'3'}
			],
			initial:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
			artists: [],
			params:{
				type:'-1',
				area:'-1',
				initial:'-1',
				limit:30,
				offset:0
			},
			more:false
		};
	},
	created() {
		this.init();
	},
	methods: {
		init() {
			this.$axios({
				methods: "POST",
				url: "/artist/list",
				params:this.params
			}).then(res => {
				const { artists,more } = res;
				this.artists = Object.freeze(artists || []);
				this.more=more;
			});
		},
		_setParams({type,value}){
			this.params[type]=value;
			this.init();
		}
	},
};
</script>

<style scoped lang="scss">
.hot-artists{
  &-area,&-type,&-initial{
	@apply flex flex-wrap leading-8;
  }
  span{
	@apply block w-12 text-center text-subText transition duration-500 ease-in-out cursor-pointer;
	&.active{
	  @apply text-red-500 transition-all duration-500 ease-in-out;
	}
  }
  .artist{
	@apply flex flex-wrap justify-between;
	&-item{
	  @apply w-1/5 p-4 text-center leading-6;
	  img{
		@apply block w-full h-full object-cover rounded shadow-2xl;
	  }
	}
  }
}

.fade {
  animation-name: fade;
  animation-duration: 2s;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
