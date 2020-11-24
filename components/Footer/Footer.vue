<template>
  <footer>
    <div class="footer">
      <div class="footer-container">
        <LFooter />
        <mq-layout mq="pc">
          <RFooter />
        </mq-layout>
      </div>
      <div class="footer-footer">© 2011-2020 Increments Inc.</div>
    </div>
  </footer>
</template>

<script>
import LFooter from "./L-Footer";
import RFooter from "./R-Footer";

export default {
  components: {
    LFooter,
    RFooter,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding-right: 16px;
  padding-left: 16px;
  background-color: #3e3e3e;
  margin-top: 64px;
  padding: 32px 16px;
  color: #fff;
}

.footer-container {
  max-width: 980px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer-footer {
  max-width: 980px;
  margin: 0 auto;
  color: #b3b3b3;
  font-size: 12px;
}
</style>
