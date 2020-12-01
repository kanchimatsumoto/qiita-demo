<template>
  <div class="item--like">
    <span class="like-count">66</span>
    <button class="item-lgtm">
      <span class="item-lgtm__image">LGTM</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.item--like {
  @extend .item-box;
  @extend .margin;
}

.like-count {
  position: absolute;
  top: -30px;
  font-size: 20px;
  font-weight: bold;
  color: #55c500;
}

.item-lgtm {
  color: #55c500;
  background-color: #fff;
  border: 2px solid #55c500;
  @extend .side-icon;
}

</style>
