<template>
  <a class="jump-to-comment">
    <div class="comment-count">1</div>
    <img class="comment-icon" src="@/assets/img/comments.png" />
  </a>
</template>

<style lang="scss" scoped>
.jump-to-comment {
  @extend .sub-icon-wrapper;
  background-color: #fff;
  margin-top: 50px;
}

.comment-count {
  position: absolute;
  top: -26px;
  font-size: 18px;
  font-weight: bold;
  color: #aaa;
}

.comment-icon {
  @extend .sub-icon;
  color: #fff;
}
</style>
