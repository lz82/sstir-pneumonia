<template>
  <div class="panel-wrapper">
    <div class="title-wrapper">
      <h3>
        {{ title }}
      </h3>
      <div class="tips" v-if="tips">数据更新至 {{ tips }}</div>
      <div v-if="showMore" class="more" @click="onMoreClick">
        更多 >
      </div>
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",

  props: {
    title: {
      type: String,
      required: true
    },
    showMore: {
      type: Boolean,
      default: true
    },
    tips: {
      type: String
    }
  },

  data() {
    return {};
  },

  methods: {
    onMoreClick() {
      this.$emit("onMoreClick");
    }
  }
};
</script>

<style lang="less" scoped>
.panel-wrapper {
  width: 1200px;
  .title-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 45px;
    padding-left: 13px;
    box-sizing: border-box;
    width: 100%;

    h3 {
      font-size: 18px;
      font-weight: 700;
      color: #000;
    }

    .more {
      cursor: pointer;
      font-size: 14px;
      color: #000;
    }

    .tips {
      font-size: 14px;
      color: #000;
    }

    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 17px;
      top: 14px;
      left: 3px;
      background: #7592ad;
    }
  }
}
</style>
