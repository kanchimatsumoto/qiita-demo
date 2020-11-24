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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 24px;
  position: relative;
  margin-right: 24px;
  margin-bottom: 16px;
}

.like-count {
  position: absolute;
  top: -30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #55c500;
}

.item-lgtm {
  height: 100%;
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  color: #55c500;
  background-color: #fff;
  border: 2px solid #55c500;
  border-radius: 100%;
  outline: none;
}
</style>
