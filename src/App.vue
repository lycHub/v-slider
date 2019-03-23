<template>
    <div class="slider">
        {{message}}
        <input type="text" v-model="message">
        <br />

        <div style="width: 500px;margin: 100px auto;">
            <iv-slider :formatTip="formatTip" showTip="never" :customScales="customScales" disabled scalePoi="top" v-model="value" :min="0" :max="60" :step="10" range showScales showDots></iv-slider>
        </div>
        <div style="width: 500px;margin: 100px auto;">
            <iv-slider :formatScales="formatScales" toolTipPoi="bottom" scalePoi="top" v-model="value" :min="0" :max="60" :step="10" range showScales showDots></iv-slider>
        </div>

        <div style="width: 500px;margin: 100px auto;">
            <iv-slider :formatScales="formatScales" toolTipPoi="bottom" v-model="value4" :min="0" :max="1" :step="0.2" range showScales showDots></iv-slider>
        </div>

        <div style="width: 5px;height:500px;margin: 100px auto;">
            <iv-slider :formatTip="formatTip" :customScales="customScales" toolTipPoi="left" v-model="value" :min="0" :max="60" :step="10" range showScales showDots vertical></iv-slider>
        </div>
        <div style="width: 5px;height:500px;margin: 100px auto;">
            <iv-slider :formatScales="formatScales" toolTipPoi="left" v-model="value" :min="0" :max="60" :step="10" range showScales showDots vertical></iv-slider>
        </div>
        <div style="width: 5px;height:500px;margin: 100px auto;">
            <iv-slider :formatScales="formatScales" v-model="value4" :min="0" :max="1" :step="0.2" range showScales showDots vertical></iv-slider>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        message: 'App Slider',
        value: [8, 30],
        value4: [0.4, 0.8],
        customScales: {
          0: '0°C',
          10: '10°C',
          26: '26°C',
          37: '37°C',
          41: '41°C'
        }
      }
    },
    methods: {
      formatScales(val) {
        return '$' + val + '$';
      },
      formatTip(val) {
        return '$' + val + '$';
      }
    }
  }
</script>