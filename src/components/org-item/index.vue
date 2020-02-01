<template>
  <div class="org-item-wrapper" @click="onItemClick">
    <h3>
      {{ name }}
    </h3>
    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: "OrgItem",

  props: {
    name: {
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
    onItemClick() {
      window.open(
        `http://new.sstir.cn/#/organ/bases/detail4?title=%E9%87%8D%E7%82%B9%E5%AE%9E%E9%AA%8C%E5%AE%A4&id=${this.id}`,
        "_blank"
      );
    }
  }
};
</script>

<style lang="less" scoped>
.org-item-wrapper {
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
