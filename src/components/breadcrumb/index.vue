<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: `/${$route.params.type}` }"
        >专栏首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ currentName }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",

  props: {},

  data() {
    return {};
  },

  methods: {
    getListName(name) {
      switch (name) {
        case "listNews":
          return "热点追踪";
        case "listExpert":
          return "专家";
        case "listOrg":
          return "研究机构";
        case "listPaper":
          return "论文";
      }
    },

    getTabType(type) {
      switch (type) {
        case "protect":
          return "病毒防护";
        case "analysis":
          return "病毒分析";
        case "study":
          return "疫苗研发";
      }
    }
  },

  computed: {
    currentName() {
      const routerName = this.$route.name;
      const tabType = this.$route.params.type;
      return `${this.getTabType(tabType)}${this.getListName(routerName)}列表`;
    }
  }
};
</script>

<style lang="less" scoped>
.breadcrumb-wrapper {
}
</style>
