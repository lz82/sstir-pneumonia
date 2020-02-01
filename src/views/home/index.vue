<template>
  <div class="home-wrapper">
    <panel title="疫情地图" :show-more="false" :tips="mapData.updateTime">
      <div class="map-wrapper">
        <div class="num-wrapper">
          <div class="num-container">
            <div class="num-item">
              <div class="num">{{ mapData.confirmCnt }}</div>
              <div class="txt">确诊病例</div>
            </div>

            <div class="num-item">
              <div class="num">{{ mapData.doubtCnt }}</div>
              <div class="txt">疑似病例</div>
            </div>

            <div class="num-item">
              <div class="num">{{ mapData.cureCnt }}</div>
              <div class="txt">治愈病例</div>
            </div>

            <div class="num-item">
              <div class="num">{{ mapData.deadCnt }}</div>
              <div class="txt">死亡病例</div>
            </div>
          </div>
        </div>
        <div class="space-4"></div>
        <div class="map">
          <img :src="mapData.mapUrl" alt="" />
        </div>
      </div>
    </panel>
    <div class="space-30"></div>
    <panel title="权威发布" :show-more="false">
      <div class="news-wrapper">
        <el-timeline>
          <el-timeline-item
            v-for="item in news"
            :key="item.title"
            :timestamp="item.time"
            placement="top"
          >
            <img
              :src="Circle"
              style="width:20px; height: 20px;"
              slot="dot"
              alt=""
            />
            <el-card>
              <h4 class="new-title">{{ item.title }}</h4>
              <p class="new-desc">{{ item.desc }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/panel";
import Circle from "./img/circle.png";
import { getEpidemicInfo } from "@/service";

export default {
  name: "HomePage",

  components: {
    Panel
  },

  data() {
    return {
      Circle,
      mapData: {
        updateTime: "2010.1.31  10：20",
        confirmCnt: 5997,
        doubtCnt: 9239,
        cureCnt: 108,
        deadCnt: 132,
        mapUrl:
          "https://mms-res.cdn.bcebos.com/mms-res/voicefe/captain/images/2f52e889c513dd37efb96ea6d11e3345.png?size=1050*803"
      },
      news: [
        {
          time: "2020-01-29 20：55",
          title: "浙江新增冠状病毒肺炎确诊病例123例 累计296例",
          desc: `不过，从世界卫生组织官方网站和社交账号上发布的内容来看，总干事谭德赛在宣布疫情构成“国际公共卫生紧急事件”
的同时，还在反复强调一件事，即世界卫生组织做出这一决定，绝不是对中国没有信心，而且恰恰相反，谭德赛认为中国
为疫情防控做出的努力，尤其是中国的防控措施是前所未有的。`
        }
      ]
    };
  },

  mounted() {},

  methods: {
    async initData() {
      const { diagnosisNum } = await getEpidemicInfo();
      console.log(diagnosisNum);
    }
  }
};
</script>

<style lang="less" scoped>
.home-wrapper {
  display: flex;
  flex-flow: column nowrap;

  .map-wrapper {
    .num-wrapper {
      width: 100%;
      height: 106px;
      background: #fff;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      .num-container {
        width: 710px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        .num-item {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;

          .num {
            font-size: 20px;
            font-weight: 700;
            color: #7692ad;
            padding-bottom: 10px;
          }

          .txt {
            font-size: 16px;
            color: #000;
          }
        }
      }
    }
    .space-4 {
      height: 4px;
      width: 100%;
    }

    .map {
      width: 100%;
      height: 630px;
      background: #fff;
      text-align: center;
      padding: 10px 0;
      box-sizing: border-box;
      img {
        height: 600px;
        object-fit: cover;
      }
    }
  }

  .space-30 {
    height: 30px;
  }

  .news-wrapper {
    padding: 45px 45px 45px 30px;
    box-sizing: border-box;
    background: #fff;
    // overflow-y: auto;

    .new-title {
      font-size: 18px;
      font-weight: 700;
    }

    .new-desc {
      font-size: 14px;
      padding-top: 25px;
      line-height: 20px;
    }

    /deep/ .el-timeline-item__tail {
      border-left: 1px dashed #7592ad;
    }

    /deep/ .el-timeline-item__dot {
      left: -5px;
    }
  }
}
</style>
