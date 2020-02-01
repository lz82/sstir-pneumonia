<template>
  <ul class="page-tab-wrapper">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      :class="{ active: currentName === tab.id }"
      @click="onTabClick(tab.id)"
    >
      {{ tab.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "PageTab",

  data() {
    return {
      tabs: [
        {
          id: "home",
          name: "疫情动态"
        },
        {
          id: "protect",
          name: "病毒防护"
        },
        {
          id: "analysis",
          name: "病毒分析"
        },
        {
          id: "study",
          name: "疫苗研发"
        }
      ]
    };
  },

  methods: {
    onTabClick(id) {
      this.$router.push(`/${id}`);
    }
  },

  computed: {
    currentName() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="less" scoped>
.page-tab-wrapper {
  display: flex;
  flex-flow: row nowrap;
  width: 1200px;
  // margin-left: 25px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: solid 1px #dedede;

  li {
    cursor: pointer;
    font-size: 16px;
    color: #000;
    margin-right: 60px;
    height: 46px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &.active {
      font-weight: 700;
      border-bottom: solid 3px #7592ad;
    }
  }
}
</style>
