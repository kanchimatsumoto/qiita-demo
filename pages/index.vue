<template>
  <div class="body-wrapper">
    <div class="body-container">
      <LSidebar />
      <CBody />
      <RSidebar />
    </div>
  </div>
</template>

<script>
import LSidebar from "../components/Body/L-Sidebar.vue";
import CBody from "../components/Body/C-Body.vue";
import RSidebar from "../components/Body/R-Sidebar.vue";
export default {
  components: {
    LSidebar,
    CBody,
    RSidebar,
  },
};
</script>

<style lang="scss" scoped>
.body-wrapper {
  display: block;
}
.body-container {
  background-color: #f6f6f4;
  padding-top: 24px;
  padding-bottom: 40px;
  display: grid;
  grid-template-rows: minmax(270px, auto) 1fr;
  margin-right: auto;
  margin-left: auto;
  box-sizing: inherit;
}

@include tablet {
  .body-container {
    max-width: 1200px;
    grid-template-columns: 80px calc(100% - 80px - 200px) 200px;
    grid-template-rows: minmax(270px, auto) 1fr;
  }
}
@include pc {
  .body-container {
    max-width: 1280px;
    width: calc(100% - 50px);
    grid-template-columns: 80px calc(100% - 300px - 80px) 300px;
    grid-template-rows: minmax(270px, auto) 1fr;
  }
}
</style>
