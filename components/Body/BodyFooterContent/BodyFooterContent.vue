<template>
  <div class="body-footer-article">
    <div class="qa-article">
      <div class="qa-article--title">記事を読んでも解決しない...そんな疑問も</div>
      <div class="qa-article--header">質問でスッキリ解決するかもしれません！</div>
      <div class="qa-article--content">Q&A 難しい実装や解消できないバグでも、誰かが答えを持っていれば解決できます</div>
      <div class="qa-article--content">意見交換 むずかしい実装や解消できないバグでも、誰かが答えを持っていれば解決できます。</div>
      <div class="qa-article--submit">質問してみる</div>
    </div>
    <br />
    <div class="body-footer-article">
      <img src="@/assets/img/footer-article.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-footer-article {
  padding-right: 40px;
  padding-left: 40px;
  box-sizing: inherit;
}

.qa-article {
  flex-direction: row;
  border: 3px solid rgb(85, 197, 0);
  padding: 24px;
  display: block;
}

.qa-article--title {
  @extend .qa-title;
}

.qa-article--header {
  @extend .qa-header;
}

.qa-article--content {
  @extend .qa-content;
}

.qa-article--submit {
  @extend .qa-submit;
}

.qa-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 8px; 
}

.qa-header {
  color: rgba(0, 0, 0, 0.87);
  font-size: 36px;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 16px;
}

.qa-content {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.87);
}

.qa-submit {
  display: inline-flex;
  align-items: center;
  background-color: rgb(85, 197, 0);
  font-size: 14px;
  line-height: 1.8;
  font-weight: bold;
  color: rgb(255, 255, 255);
  padding: 8px 12px;
}
</style>
