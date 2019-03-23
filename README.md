# vue-slider
### A powerful slider plug-in based on Vue.

English & [简体中文](中文)

## Docs & Demo
[demo](https://nightcatsama.github.io/vue-slider-component)


## How to use

```
npm i iv-slider -S
```
Using in webpack, part of the code is omitted:
``` js
import Vue from 'vue';
import IVslider from 'iv-slider';

Vue.use(IVslider);
```

Using in .vue file：
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