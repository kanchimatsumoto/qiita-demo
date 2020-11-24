<template>
  <div class="r-footer">
    <div class="r-footer-qiita">
      <div class="r-footer-qiita--label">Qiita</div>
      <div class="r-footer-qiita--list">
        <div class="r-footer-qiita--list__left">
          <ul>About</ul>
          <ul>利用規約</ul>
          <ul>プライバシー</ul>
          <ul>ガイドライン</ul>
          <ul>リリース</ul>
        </div>
        <div class="r-footer-qiita--list__right">
          <ul>API</ul>
          <ul>ご意見</ul>
          <ul>ヘルプ</ul>
          <ul>広告掲載</ul>
        </div>
      </div>
    </div>

    <div class="r-footer-increments">
      <div class="r-footer-increments--label">Increments</div>
      <div class="r-footer-increments--list">
        <div class="r-footer-increments--list__left">
          <ul>About</ul>
          <ul>採用情報</ul>
          <ul>ブログ</ul>
        </div>
        <div class="r-footer-increments--list__right">
          <ul>Qiita Team</ul>
          <ul>Qiita Jobs</ul>
          <ul>Qiita Zine</ul>
        </div>
      </div>
    </div>
   <div class="r-footer-increments"></div>
  </div>
</template>

<style lang="scss" scoped>
.r-footer {
  display: flex;
}

.r-footer-qiita {
  display: block;
  &--label {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1.5em;
  }
  &--list {
    display: flex;
    font-size: 14px;
    margin-top: -1.5em;
    &__left {
      display: flex;
      flex-direction: column;
      ul {
        color: #b3b3b3;
        margin-top: 1em;
      }
    }
    &__right {
      display: block;
      margin-left: 24px;
      ul {
        color: #b3b3b3;
        margin-top: 1em;
      }
    }
  }
}

.r-footer-increments {
  margin-left: 48px;
  display: block;
  &--label {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 1.5em;
  }
  &--list {
    display: flex;
    font-size: 14px;
    margin-top: -1.5em;
    &__left {
      display: flex;
      flex-direction: column;
      ul {
        color: #b3b3b3;
        margin-top: 1em;
      }
    }
    &__right {
      display: block;
      margin-left: 24px;
      ul {
        color: #b3b3b3;
        margin-top: 1em;
      }
    }
  }
}
</style>
