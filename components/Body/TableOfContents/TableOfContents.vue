<template>
  <div class="table-of-contents">
    <div class="table-of-contents__advertisement">
      <img
        src="https://tpc.googlesyndication.com/simgad/10418088791348985237?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qnuXzhbRclFKgA7fXSMY8FkB9qHWA"
      />
    </div>
    <div class="table-of-contents__topic">
      <div class="table-of-contens__topic__nav">
        <ul>
          <li>この記事について</li>
          <li>はじめに</li>
          <li>ここまでのまとめ</li>
          <li>終わりに</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.table-of-contents {
  grid-column: 3 / 4;
  top: 0;
  width: 300px;
  max-height: 100vh;
  box-sizing: inherit;
  display: block;
  will-change: transform;
  &__advertisement {
    margin-top: 16px;
    box-sizing: inherit;
    &img {
      width: 300px;
      height: 250px;
      border: 0pt none;
    }
  }
  &__topic {
    margin-top: 8px;
    &__nav {
      overflow-y: auto;
      max-height: 70vh;
      &ul {
        list-style: none;
        &li {
          list-style-type: none;
          margin: 4px 0;
        }
      }
    }
  }
}

@include tablet {
  .table-of-contents {
  }
}

@include pc {
  .table-of-contents {
    grid-column: 3 / 4;
    grid-row: 2/ 3;
  }
}
</style>
