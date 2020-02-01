<template>
  <div class="paper-item-wrapper" @click="onPaperItemClick">
    <h3>
      {{ title }}
    </h3>
    <div class="info">
      <span>{{ author }}</span>
      <span>{{ year }}</span>
      <span>{{ book }}</span>
      <span>被引数：{{ cnt ? cnt : 0 }}</span>
    </div>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaperItem",

  props: {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String
    },
    year: {
      type: [String, Number]
    },
    book: {
      type: String
    },
    cnt: {
      type: Number
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
    onPaperItemClick() {
      window.open(
        `http://new.sstir.cn/#/search/detail?type=%E8%AE%BA%E6%96%87&id=${this.id}`,
        "_blank"
      );
    }
  }
};
</script>

<style lang="less" scoped>
.paper-item-wrapper {
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

  .info {
    padding-top: 15px;
    font-size: 14px;
    display: flex;
    flex-flow: row nowra;
    align-items: center;
    justify-content: flex-start;

    span {
      padding-right: 20px;
    }
  }

  .desc {
    padding-top: 15px;
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
