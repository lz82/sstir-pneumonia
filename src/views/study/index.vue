<template>
  <div class="study-wrapper">
    <panel title="热点追踪" :show-more="true" @onMoreClick="onNewsMoreClick">
      <div class="list-wrapper">
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
    <panel title="领域专家" :show-more="true" @onMoreClick="onExpertMoreClick">
      <div class="list-wrapper">
        <expert-item
          v-for="(item, index) in experts"
          :key="index"
          :name="item.name"
          :desc="item.desc"
          :id="item.id"
        />
      </div>
    </panel>
    <div class="space-30"></div>
    <panel title="科研机构" :show-more="true" @onMoreClick="onOrgMoreClick">
      <div class="list-wrapper">
        <org-item
          v-for="(item, index) in orgs"
          :key="index"
          :name="item.name"
          :desc="item.desc"
          :id="item.id"
        />
      </div>
    </panel>
    <div class="space-30"></div>
    <panel title="科研论文" :show-more="true" @onMoreClick="onPaperMoreClick">
      <div class="list-wrapper">
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
import ExpertItem from "@/components/expert-item";
import OrgItem from "@/components/org-item";
import mixin from "@/mixin";

export default {
  name: "StudyPage",

  mixins: [mixin],

  components: {
    Panel,
    NewsItem,
    PaperItem,
    ExpertItem,
    OrgItem
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
      ],
      experts: [
        {
          id: 5527,
          name: "钟南山",
          desc:
            "钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院原始，著名呼吸病学专家"
        },
        {
          id: 5527,
          name: "钟南山",
          desc:
            "钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院原始，著名呼吸病学专家"
        },
        {
          id: 5527,
          name: "钟南山",
          desc:
            "钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院原始，著名呼吸病学专家"
        },
        {
          id: 5527,
          name: "钟南山",
          desc:
            "钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院原始，著名呼吸病学专家"
        },
        {
          id: 5527,
          name: "钟南山",
          desc:
            "钟南山，男，汉族，福建厦门人，1936年10月出生于南京，中共党员，中国工程院原始，著名呼吸病学专家"
        }
      ],
      orgs: [
        {
          id: "4028db141e6ccc92011e6cd157eb0001",
          name: "上海大数据与互联网受众工程技术研究中心",
          desc:
            "受众大数据融合互联网大数据来源丰富，如媒体信息、设备信息、浏览信息、购物信息，形式多样，采集到数据维度和定义也不尽相同，大部分的数据以日志的形式呈现出来，无法用于数据数据挖掘和机器学习，为了让数据更有效的组织起来，将各种数据清洗、融合起来，我们研究按受众ID重新将数据聚合起来，统一和规范维度定义，形成userprofile，此过程覆盖数据接入、清洗、聚合各个环节。"
        },
        {
          id: "4028db141e6ccc92011e6cd157eb0001",
          name: "上海大数据与互联网受众工程技术研究中心",
          desc:
            "受众大数据融合互联网大数据来源丰富，如媒体信息、设备信息、浏览信息、购物信息，形式多样，采集到数据维度和定义也不尽相同，大部分的数据以日志的形式呈现出来，无法用于数据数据挖掘和机器学习，为了让数据更有效的组织起来，将各种数据清洗、融合起来，我们研究按受众ID重新将数据聚合起来，统一和规范维度定义，形成userprofile，此过程覆盖数据接入、清洗、聚合各个环节。"
        },
        {
          id: "4028db141e6ccc92011e6cd157eb0001",
          name: "上海大数据与互联网受众工程技术研究中心",
          desc:
            "受众大数据融合互联网大数据来源丰富，如媒体信息、设备信息、浏览信息、购物信息，形式多样，采集到数据维度和定义也不尽相同，大部分的数据以日志的形式呈现出来，无法用于数据数据挖掘和机器学习，为了让数据更有效的组织起来，将各种数据清洗、融合起来，我们研究按受众ID重新将数据聚合起来，统一和规范维度定义，形成userprofile，此过程覆盖数据接入、清洗、聚合各个环节。"
        },
        {
          id: "4028db141e6ccc92011e6cd157eb0001",
          name: "上海大数据与互联网受众工程技术研究中心",
          desc:
            "受众大数据融合互联网大数据来源丰富，如媒体信息、设备信息、浏览信息、购物信息，形式多样，采集到数据维度和定义也不尽相同，大部分的数据以日志的形式呈现出来，无法用于数据数据挖掘和机器学习，为了让数据更有效的组织起来，将各种数据清洗、融合起来，我们研究按受众ID重新将数据聚合起来，统一和规范维度定义，形成userprofile，此过程覆盖数据接入、清洗、聚合各个环节。"
        },
        {
          id: "4028db141e6ccc92011e6cd157eb0001",
          name: "上海大数据与互联网受众工程技术研究中心",
          desc:
            "受众大数据融合互联网大数据来源丰富，如媒体信息、设备信息、浏览信息、购物信息，形式多样，采集到数据维度和定义也不尽相同，大部分的数据以日志的形式呈现出来，无法用于数据数据挖掘和机器学习，为了让数据更有效的组织起来，将各种数据清洗、融合起来，我们研究按受众ID重新将数据聚合起来，统一和规范维度定义，形成userprofile，此过程覆盖数据接入、清洗、聚合各个环节。"
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.study-wrapper {
  display: flex;
  flex-flow: column nowrap;

  .list-wrapper {
    width: 1200px;
    box-sizing: border-box;
    padding: 0 15px;
    background: #fff;
  }
}
</style>
