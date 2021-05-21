<template>
<div class="loading">
	<div class="lds-ripple"><div></div><div></div></div>
</div>
</template>

<script>

export default {
	name: "Loading"
};

</script>

<style scoped lang="scss">
.loading{
	@apply flex items-center justify-center w-full h-full absolute top-0 left-0 z-50 bg-opacity-0;
	.lds-ripple {
		@apply inline-block relative w-20 h-20;
	}
	.lds-ripple div {
		@apply absolute border-4 border-primary border-solid rounded-full opacity-100;
		animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
	}
	.lds-ripple div:nth-child(2) {
		animation-delay: -0.5s;
	}
}
@keyframes lds-ripple {
	0% {
		@apply top-9 left-9 w-0 h-0 opacity-100;
	}
	100% {
		width: 4.5rem;
		height: 4.5rem;
		@apply top-0 left-0 opacity-0;
	}
}
</style>