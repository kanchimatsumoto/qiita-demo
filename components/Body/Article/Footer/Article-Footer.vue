<template>
  <div class="body-footer">
    <div class="body-footer-actions">
      <div class="body-footer-actions--stock">ストック</div>
      <div class="body-footer-actions--like">
        <span class="body-footer-actions--like--logo">LGTM</span>
        <span class="body-footer-actions--like--count">3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.body-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 64px;
  margin-bottom: 24px;
}

.body-footer-actions {
  display: flex;
  flex-wrap: wrap;
  &--stock {
    height: 32px;
    width: 108px;
    margin-right: 8px;
    margin-bottom: 16px;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
    color: #5d707c;
    border: 2px solid #5d707c;
    background-color: #fff;
    outline: none;
    cursor: pointer;
  }
  &--like {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 32px;
    width: 108px;
    margin-right: 8px;
    margin-bottom: 16px;
    &--logo {
      display: inline-block;
      width: 56px;
      font-weight: bold;
      font-size: 20px;
      color: #55c500;
    }
    &--count {
      font-weight: bold;
      margin-left: 8px;
      color: gray;
    }
  }
}

.body-footer-social {
  display: flex;
  flex-wrap: wrap;
  &--twitter {
    margin-left: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #aaa;
    font-size: 18px;
    cursor: pointer;
  }
  &--facebook {
    margin-left: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #aaa;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
