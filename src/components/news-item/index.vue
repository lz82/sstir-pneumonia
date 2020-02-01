<template>
  <div class="news-item-wrapper" @click="onNewsItemClick">
    <h3>
      {{ title }}
    </h3>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",

  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    }
  },

  methods: {
    onNewsItemClick() {
      window.open(`http://new.sstir.cn/#/infoDetail?id=${this.id}`, "_blank");
    }
  }
};
</script>

<style lang="less" scoped>
.news-item-wrapper {
  cursor: pointer;
  padding: 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  border-bottom: solid 1px #e8e8e8;

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  .desc {
    padding-top: 15px;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
