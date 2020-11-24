<template>
  <aside>
    <div class="r-sidebar">
      <mq-layout mq="md+">
        <TableOfContents />
      </mq-layout>
    </div>
  </aside>
</template>

<script>
import TableOfContents from "@/components/Body/TableOfContents/TableOfContents.vue";
export default {
  components: {
    TableOfContents,
  },
};
</script>
