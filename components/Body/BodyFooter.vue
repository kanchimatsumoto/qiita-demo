<template>
  <div class="footer-contaier">
    <div class="dummy-left"></div>
    <div class="body-footer-main">
      <BodyFooterContent />
    </div>
    <div class="dummy-right"></div>
  </div>
</template>

<script>
import BodyFooterContent from './BodyFooterContent/BodyFooterContent.vue'
export default {
  BodyFooterContent 
}
</script>

<style lang="scss" scoped>
.footer-contaier {
  padding-top: 24px;
  padding-bottom: 40px;
  display: grid;
}

.dummy-left{
  width: 80px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.body-footer-main {
  grid-column: 2 / 3;

  grid-row: 1 / 3;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 16px;
}

.dummy-right {
  width: 300px;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  max-height: 100vh;
}
</style>
