<template>
  <header class="header">
    <div class="header-container">
			<LeftHeader />
			<RightHeader />
    </div>
  </header>
</template>

<script>
import LeftHeader from './l-header';
import RightHeader from './r-header';
export default {
	components: {
		LeftHeader,
		RightHeader
	}
}
</script>

<style lang="scss" scoped>
	.header {
		height: 56px;
		background-color: #55c500;
	}
</style>
