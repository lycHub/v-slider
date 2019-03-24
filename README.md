# iv-slider
### A powerful slider plug-in based on Vue，Expansion of [iview slider](https://www.iviewui.com/components/slider).

English & [简体中文](README-CN.md)

## [Docs & Demo](https://lychub.github.io/v-slider/dist/)


## How to use

```
npm i iv-slider -S
```
Using in webpack, part of the code is omitted:
``` js
import Vue from 'vue';
import ivSlider from 'iv-slider';
Vue.use(ivSlider);
```

Using in .vue file：
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