# vue-slider
### 一款基于Vue的滑块插件。

English | 简体中文

## Docs & Demo
[demo](https://nightcatsama.github.io/vue-slider-component)

## 如何使用

```
npm i iv-slider -S
```
在 webpack 中使用，部分代码省略：
``` js
import Vue from 'vue';
import IVslider from 'iv-slider';

Vue.use(IVslider);
```

在 vue 中使用：
``` html
<template>
    <i-editor v-model="content"></i-editor>
</template>
<script>
    export default {
        data () {
            return {
                content: ''
            }
        }
    }
</script>
```