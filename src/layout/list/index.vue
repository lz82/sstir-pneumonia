<template>
  <div class="layout-main-wrapper">
    <page-header />
    <div class="main-content-wrapper">
      <page-title />
      <breadcrumb />
      <div class="router-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/page-header";
import PageTitle from "@/components/page-title";
import Breadcrumb from "@/components/breadcrumb";

export default {
  name: "LayoutList",

  components: {
    PageHeader,
    PageTitle,
    Breadcrumb
  },

  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.layout-main-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  box-sizing: border-box;

  .main-content-wrapper {
    width: 1200px;
    padding: 15px 0 15px 25px;
    box-sizing: border-box;

    .router-container {
      padding-top: 15px;
    }
  }
}
</style>
