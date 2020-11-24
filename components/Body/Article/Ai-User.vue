<template>
  <div class="ai-container">
    <div class="ai-User">
      <img src="@/assets/img/cat.jpg" alt="ka-matsumoto" />
      <div class="ai-User--body">
        <div class="ai-User--body--header">
          <div class="ai-User--body--header--name">K Matsumoto</div>
          <div class="ai-User--body--header--urlname">@ka-matsumoto</div>
        </div>
        <div class="ai-User--body--description">
          品川で働いています。web系2年目の松本と申します。
          最近技術力が身についていないと思い焦っています。
        </div>
        <div class="ai-User--body--footer"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ai-User {
  display: flex;
  width: 100%;
  margin-right: 16px;
  img {
    display: flex;
    overflow: hidden;
    border-radius: 0.2em;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 16px;
  }
}
.ai-User--body {
  flex-grow: 1;
  width: 0;
  min-width: 0;
  &--header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 8px;
    &--name {
      color: inherit;
      font-size: 1.6rem;
      font-weight: bold;
      margin-right: 8px;
    }
    &--urlname {
      font-size: 1.4rem;
      color: #999;
      margin-right: 8px;
    }
  }
  &--description {
    font-size: 1.4rem;
    color: #777;
    margin-bottom: 4px;
  }
  &--footer {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }
}
</style>
