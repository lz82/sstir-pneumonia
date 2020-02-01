<template>
  <div class="list-expert-wrapper">
    this is expert list
  </div>
</template>

<script>
export default {
  name: "ListExpert",

  props: {
    type: {
      type: String,
      required: true
    }
  },

  mounted() {
    console.log(this.type);
  }
};
</script>

<style lang="less" scoped>
.list-expert-wrapper {
}
</style>
