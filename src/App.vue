<template>
    <div class="slider">
        {{message}}
        <input type="text" v-model="message">
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

<style lang="less" scoped>

</style>