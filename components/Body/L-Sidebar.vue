<template>
  <div class="l-sidebar">
    <aside>
      <mq-layout mq="pc">
        <div class="l-sidebar--menu">
          <Like />
        </div>
      </mq-layout>
    </aside>
  </div>
</template>

<script>
import Like from "./Buttons/Like.vue";

export default {
  components: {
    Like,
  },
};
</script>

<style lang="scss" scoped>
.l-sidebar {
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: sticky;
  top: 20vh;
  margin-top: -20px;
  width: 80px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  &--menu {
    position: sticky;
    top: 20vh;
    margin-top: -20px;
    width: 80px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
}
</style>

