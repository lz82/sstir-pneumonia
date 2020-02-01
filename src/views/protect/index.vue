<template>
  <div class="protect-wrapper">
    <panel title="热点追踪" :show-more="true" @onMoreClick="onNewsMoreClick">
      <div class="news-list-wrapper">
        <news-item
          v-for="(item, index) in news"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :id="item.id"
        />
      </div>
    </panel>
    <div class="space-30"></div>
    <panel title="科研论文" :show-more="true" @onMoreClick="onPaperMoreClick">
      <div class="paper-list-wrapper">
        <paper-item
          v-for="(item, index) in papers"
          :key="index"
          :title="item.title"
          :desc="item.desc"
          :id="item.id"
          :author="item.author"
          :year="item.year"
          :book="item.book"
          :cnt="item.cnt"
        />
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/panel";
import NewsItem from "@/components/news-item";
import PaperItem from "@/components/paper-item";
import mixin from "@/mixin";

export default {
  name: "ProtectPage",

  mixins: [mixin],

  components: {
    Panel,
    NewsItem,
    PaperItem
  },

  data() {
    return {
      news: [
        {
          id: 43701,
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”的同时，还在反复强调一件事，即世界卫生组织做出这一
决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        },
        {
          id: 43701,
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”的同时，还在反复强调一件事，即世界卫生组织做出这一
决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        },
        {
          id: 43701,
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”的同时，还在反复强调一件事，即世界卫生组织做出这一
决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        },
        {
          id: 43701,
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”的同时，还在反复强调一件事，即世界卫生组织做出这一
决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        },
        {
          id: 43701,
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”的同时，还在反复强调一件事，即世界卫生组织做出这一
决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        }
      ],
      papers: [
        {
          id: "dd6637e4393cdacdc965e1d1c2999c7c",
          title: "新型生物防护服对病毒防护效果的研究",
          author: "张文福,蒋莉【等】",
          year: 2004,
          book: "《中国消毒学杂志》",
          cnt: 13,
          desc:
            "摘　要： 为了观察新型生物防护服对病毒性传染病的防护效果及其性能,在实验室内进行了脊髓灰质炎(下称polio)病毒与SARS病毒挑战性测试.结果,在自然压力下,该生物防护服可以100%阻止10"
        },
        {
          id: "dd6637e4393cdacdc965e1d1c2999c7c",
          title: "新型生物防护服对病毒防护效果的研究",
          author: "张文福,蒋莉【等】",
          year: 2004,
          book: "《中国消毒学杂志》",
          cnt: 13,
          desc:
            "摘　要： 为了观察新型生物防护服对病毒性传染病的防护效果及其性能,在实验室内进行了脊髓灰质炎(下称polio)病毒与SARS病毒挑战性测试.结果,在自然压力下,该生物防护服可以100%阻止10"
        },
        {
          id: "dd6637e4393cdacdc965e1d1c2999c7c",
          title: "新型生物防护服对病毒防护效果的研究",
          author: "张文福,蒋莉【等】",
          year: 2004,
          book: "《中国消毒学杂志》",
          cnt: 13,
          desc:
            "摘　要： 为了观察新型生物防护服对病毒性传染病的防护效果及其性能,在实验室内进行了脊髓灰质炎(下称polio)病毒与SARS病毒挑战性测试.结果,在自然压力下,该生物防护服可以100%阻止10"
        },
        {
          id: "dd6637e4393cdacdc965e1d1c2999c7c",
          title: "新型生物防护服对病毒防护效果的研究",
          author: "张文福,蒋莉【等】",
          year: 2004,
          book: "《中国消毒学杂志》",
          cnt: 13,
          desc:
            "摘　要： 为了观察新型生物防护服对病毒性传染病的防护效果及其性能,在实验室内进行了脊髓灰质炎(下称polio)病毒与SARS病毒挑战性测试.结果,在自然压力下,该生物防护服可以100%阻止10"
        },
        {
          id: "dd6637e4393cdacdc965e1d1c2999c7c",
          title: "新型生物防护服对病毒防护效果的研究",
          author: "张文福,蒋莉【等】",
          year: 2004,
          book: "《中国消毒学杂志》",
          cnt: 13,
          desc:
            "摘　要： 为了观察新型生物防护服对病毒性传染病的防护效果及其性能,在实验室内进行了脊髓灰质炎(下称polio)病毒与SARS病毒挑战性测试.结果,在自然压力下,该生物防护服可以100%阻止10"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.protect-wrapper {
  display: flex;
  flex-flow: column nowrap;

  .news-list-wrapper {
    width: 1200px;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;
  }

  .paper-list-wrapper {
    width: 1200px;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;
  }
}
</style>
