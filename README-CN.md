# vue-slider
### 一款基于Vue的滑块插件。

[English](README.md) & 中文

## Docs & Demo
[demo](https://nightcatsama.github.io/vue-slider-component)

## 如何使用

```
npm i iv-slider -S
```
在 webpack 中使用，部分代码省略：
``` js
import Vue from 'vue';
import ivSlider from 'iv-slider';
Vue.use(ivSlider);
```

在 vue 中使用：
``` html
<template>
    <iv-slider v-model="value"></iv-slider>
</template>
<script>
    export default {
        data () {
            return {
                value: 10
            }
        }
    }
</script>
```