<template>
	<div class ="actions l-sidebar__item">
    <button class="item--stock">
      <span class ="item--stock__button">STOCK</span>
    </button>
	</div>
</template>

<style lang="scss" scoped>
.l-sidebar__item {
	@extend .item-box;
  @extend .margin;
}

.item--stock {
  color: rgb(93, 112, 124);
  background-color: #fff;
  border: 2px solid rgb(93, 112, 124);
  box-shadow: 0 3px 6px rgba(0,0,0,0.2);
  @extend .side-icon;
}
</style>
