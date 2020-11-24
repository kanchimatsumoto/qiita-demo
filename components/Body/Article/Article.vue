<template>
  <div class="article-container">
    <section>
      <ArticleHeader />
    </section>
    <article>
      <ArticleBody />
    </article>
    <section>
      <ArticleFooter />
    </section>
    <aside>
      <AiUser />
    </aside>
  </div>
</template>

<script>
import ArticleHeader from "./Header/Article-Header";
import ArticleBody from "./Body/Article-Body";
import ArticleFooter from "./Footer/Article-Footer";
import AiUser from "./Ai-User";

export default {
  components: {
    ArticleHeader,
    ArticleBody,
    ArticleFooter,
    AiUser,
  },
};
</script>

<style lang="scss" scoped>
.article-container {
  background-color: #fff;
  padding: 32px;
}
.ai-container {
  display: flex;
  width: 100%;
  padding-top: 40px;
  border-top: 1px solid #ddd;
}
</style>
