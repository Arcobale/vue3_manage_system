<template>
  <div class="map-view">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from '@/assets/data.json';
import option from '@/utils/map.js';
import echarts from 'echarts';
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById('main'));
      echarts.registerMap('china', geoJson); //注册可用的地图
      myChart.setOption(option);
    });
  }
}

</script>

<style lang="less">
.map-view {
  width: 100%;

  #main {
    width: 100%;
    height: 600px;
  }
}
</style>