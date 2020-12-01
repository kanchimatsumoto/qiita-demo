<template>
  <div class="table-of-contents">
      <img
        src="https://tpc.googlesyndication.com/simgad/10418088791348985237?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qnuXzhbRclFKgA7fXSMY8FkB9qHWA"
      />
    <div class="table-of-contents__topic">
      <div class="table-of-contens__topic--nav">
        <ul>
          <li 
            v-for="(navItem, index) in navItems"
            :key="index"
            :id="`spy-${navItem.name}`"
            >
            <nuxt-link v-scroll-to="`#${navItem.id}`" to>
              {{ navItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      navItems: [
        { id: "css-architect", name: 'CSS設計' },
        { id: "multi-single", name: 'CSS設計とは' },
        { id: "multi-single", name: 'マルチシングルクラス' },
        { id: "basic-css", name: '基本のCSS設計手法' },
        { id: "oocss", name: 'OOCSS' },
        { id: "bem", name: 'BEM' }
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
.table-of-contents {
  margin-top: 16px;
  &img {
    width: 300px;
    height: 250px;
    border: 0pt none;
  }
  &__topic {
    margin-top: 16px;
    &--nav {
      overflow-y: auto;
      max-height: 70vh;
      & ul {
        list-style: none;
        & li {
          list-style-type: none;
          margin: 16px 0;
        }
      }
    }
  }
}

.customActive {
  background-color: red;
  color: #333;
}

@include pc {
  .table-of-contents {
    grid-column: 3 / 4;
    grid-row: 2/ 3;
  }
}
</style>
