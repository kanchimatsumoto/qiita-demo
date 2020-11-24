<template>
  <div class="article-header">
    <div class="article-header-container">
      <div class="article-header-container__info">
        <div class="article-header-container__info--author">
          <img src="@/assets/img/cat.jpg" alt="cat" />
          <span class="article-header-container__info--author--name"
            >@ka-matsumoto</span
          >
        </div>
        <div class="article-header-container__info--info">
          <span>2020年11月03日に更新</span>
        </div>
        <div class="article-header-container__info--other">
          <span class="article-header-container__info--other--pv">154view</span>
          <div class="article-header-container__info--other--manipulate">
            <div
              class="article-header-container__info--other--manipulate--edit"
            >
              編集する
            </div>
            <div
              class="article-header-container__info--other--manipulate--settings"
            >
              <span
                class="article-header-container__info--other--manipulate--settings--icon"
              >
                <span class="fa fa-cog fa-lg"></span>
                <span class="fa fa-caret-down"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.article-header {
  color: #333;
  margin-bottom: 40px;
}

.article-header-container__info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  &--author {
    display: flex;
    align-items: center;
    margin-right: 16px;
    img {
      display: flex;
      overflow: hidden;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }
    &--name {
      font-size: 1.8rem;
      color: inherit;
    }
  }
  &--info {
    color: #999;
    font-size: 1.4rem;
    margin-right: 16px;
  }
  &--other {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    &--pv {
      color: #999;
      font-size: 1.4rem;
    }
    &--manipulate {
      display: flex;
      align-items: center;
      margin-left: auto;
      &--edit {
        color: #999;
        font-size: 1.2rem;
        margin-right: 16px;
        margin-left: 16px;
      }
      &--settings {
        position: relative;
        cursor: pointer;
        &--icon {
          color: #999;
        }
      }
    }
  }
}

.fa.fa-cog.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -15%;
}

.fa.fa-caret-down {
  margin-left: 4px;
}
</style>
