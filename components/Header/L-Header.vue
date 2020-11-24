<template>
  <div class="l-header">
    <div class="l-header--logo">Qiita</div>
    <div class="l-header--community">コミュニティ</div>
    <form type="text" class="l-header--search">
      <input type="text" class="l-header--search--input" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.l-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  &--logo {
    margin-right: 8px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    width: 74px;
    height: 22.5px;
  }
  &--community {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: color 0.08s ease-in-out;
    user-select: none;
    line-height: 1;
    margin-top: 4px;
    margin-right: 24px;
    margin-left: 15px;
    padding: 16px 0;
    outline: none;
    font-size: 15px;
    color: #fff;
  }
  &--search {
    position: relative;
    width: 200px;
    &--input {
      width: 100%;
      height: 32px;
      border: none;
      border-radius: 4px;
      background-color: #fff;
      font-size: 1.2rem;
      box-shadow: inset 0 1px 2px #ccc;
    }
  }
}
</style>
