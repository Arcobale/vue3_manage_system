<template>
  <div class="travel-map">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json';
import { getTravelMap } from '@/api/api';
import echarts from 'echarts';
import { onMounted } from 'vue';
import option from '@/utils/map.js';
export default {
  setup() {
    let draw = function (points, linesData) {
      let myChart = echarts.init(document.getElementById('main'));
      echarts.registerMap('china', geoJson); //注册可用的地图
      //关于地图中散点图的配置
      let optionPoints = {
        type: 'effectScatter', //带有涟漪特效动画的散点（气泡）图
        coordinateSystem: 'geo', //坐标系
        showEffectOn: 'render', //绘制完成显示特效
        zlevel: 1,
        symbolSize: 10, //散点大小
        data: points,
        //涟漪特效相关配置
        rippleEffect: {
          period: 15, //动画周期
          scale: 4, //波纹的最大缩放比例
          brushType: 'fill', //波纹的绘制方式
        }
      };
      //关于地图中线路动画效果设置
      let optionLines = {
        type: 'lines',
        zlevel: 2, //层级
        effect: {
          show: true,
          period: 4,
          symbol: 'arrow',
          symbolSize: 7,
          trailLength: 0.4,
        },
        lineStyle: {
          normal: {
            color: '#1DE9B6',
            width: 1,
            opacity: 0.1,
            curveness: 0.3,
          }
        },
        data: linesData,
      }
      option.series[1] = optionPoints;
      option.series[2] = optionLines;
      myChart.setOption(option);
    };
    onMounted(() => {
      getTravelMap().then(res => {
        if (res.data.status == 200) {
          let { points, linesData } = res.data.data;
          draw(points, linesData);
        }
      }).catch(error => {
        throw error;
      });
    });
  }
}
</script>

<style lang="less">
.travel-map {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>