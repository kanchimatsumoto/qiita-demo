<template>
  <header class="header">
    <div class="header-container">
      <LeftHeader />
      <mq-layout mq="pc">
        <RightHeader />
      </mq-layout>
    </div>
  </header>
</template>

<script>
import LeftHeader from "./L-Header";
import RightHeader from "./R-Header";
export default {
  components: {
    LeftHeader,
    RightHeader,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  padding-right: 16px;
  padding-left: 16px;
  background-color: #55c500;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}
</style>
