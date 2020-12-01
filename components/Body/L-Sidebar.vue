<template>
  <div class="l-sidebar">
    <aside>
      <mq-layout mq="pc">
          <Like />
          <Item />
          <Comment />
          <Twitter />
          <Facebook />
      </mq-layout>
    </aside>
  </div>
</template>

<script>
import Like from "@/components/Body/Buttons/Like.vue";
import Item from "@/components/Body/Buttons/Item.vue"
import Comment from "@/components/Body/Buttons/Comment.vue";
import Twitter from "@/components/Body/Buttons/Twitter.vue";
import Facebook from "@/components/Body/Buttons/Facebook.vue";

export default {
  components: {
    Like,
    Item,
    Comment,
    Twitter,
    Facebook
  },
};
</script>

<style lang="scss" scoped>
.l-sidebar {
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: sticky;
  top: 10vh;
  margin-top: -20px;
  width: 80px;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
</style>

