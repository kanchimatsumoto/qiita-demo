<template>
  <div class="l-footer">
   <span class="l-footer__logo">Qiita</span>
   <span class="l-footer__cathcopy">How developers code is here.</span>
  </div>
</template>

<style lang="scss" scoped>
.l-footer {
  display:flex;
  flex-flow: column;
  background-color: #3e3e3e;
  &__logo {
    fill: #fff;
    font-size: 50px;
  }
  &__cathcopy {
    font-size: 14px;
    margin: 10px 0px 16px 0;
  }
}
</style>
