<template>
    <div class="slider">
        {{message}}
        <input type="text" v-model="message">
        <br />

        <div style="width: 500px;margin: 100px auto;">
            <iv-slider  v-model="value" :min="0" :max="8" :step="0.5" showDots :accordingToStep="false"></iv-slider>
            <iv-slider  v-model="value2" :min="0" :max="40" :step="5" showDots></iv-slider>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        message: 'App Slider',
        value: 7,
        value2: 7
      }
    }
  }
</script>