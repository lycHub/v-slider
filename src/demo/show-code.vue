<template>
    <div :class="['show-code', { show }]">
        <div class="handle show" v-if="!show" @click="show=true">
            <span href="javascript:;">展示代码</span>
        </div>
        <div class="codes">
            <slot></slot>
        </div>
        <div class="handle hide" v-if="show" @click="show=false">
            <span href="javascript:;">隐藏代码</span>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'ShowCode',
      data() {
        return {
          show: false
        }
      }
    }
</script>

<style lang="less" scoped>
    .show-code{
        height:52px;
        overflow: hidden;
        .handle{
            background-color: #fff;
            text-align: center;
            color: #409eff;
            cursor: pointer;
            position: relative;
            padding: 15px 0;
            border: 1px solid #eff2f6;
            border-top:none;
        }
        .codes{
            padding: 18px 24px;
            background-color: #fafafa;
            textarea{
                background-color: #fafafa;
                border:none;
                width: 1100px;
                height:600px;
                font-size: 14px;
            }
        }

        &.show{
            height: auto;
        }
    }
</style>