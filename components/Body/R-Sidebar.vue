<template>
    <div class="r-sidebar">
      <aside>
        <mq-layout mq="md+">
          <TableOfContents />
        </mq-layout>
      </aside>
    </div>
</template>

<script>
import TableOfContents from "@/components/Body/TableOfContents/TableOfContents.vue";
export default {
  components: {
    TableOfContents,
  },
};
</script>

<style lang="scss" scoped>
.r-sidebar {
  position: sticky;
  top: 0;
  will-change: transform;
  grid-column: 3 / 4;
  width: 300px;
  max-height: 100vh;
}
</style>
