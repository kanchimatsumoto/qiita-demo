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
import TableOfContents from "@/components/body/TableOfContents/TableOfContents.vue";
export default {
  components: {
    TableOfContents,
  },
};
</script>
