<template>
  <svg class="svg-icon" aria-hidden="true" :class="size">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
	size:{
    	type: String,
		default(){
    		return "medium";
		}
	}
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 12px;
  height: 12px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
	&.medium{
		@apply w-4 h-4;
	}
	&.large{
		@apply w-6 h-6;
	}
	&.xl{
		@apply w-8 h-8;
	}
}
</style>
