<template>
  <div class="r-header">
    <div class="r-header--stock">ストック一覧</div>
    <div class="r-header--post">投稿する</div>
  </div>
</template>

<style lang="scss" scoped>
.r-header {
  display: flex;
  align-items: center;
  justify-content: center;
  &--stock {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 15px;
    cursor: pointer;
    color: #fff;
    user-select: none;
    font-size: 15px;
    line-height: 1;
  }
  &--post {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    background-color: #3f9200;
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
    user-select: none;
    padding: 0 16px 0 16px;
  }
}
</style>
