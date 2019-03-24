<template>
    <el-container class="container">
        <el-header class="header">
            <h2>Slider 滑块</h2>
            <span>通过拖动滑块在一个固定区间内进行选择</span>
        </el-header>
        <el-main class="main" style="margin:40px 0;">
            <el-row>
                <el-col :span="24" class="section">
                    <h3>基础用法</h3>
                    <el-card shadow="hover" class="card">
                        <el-row class="item-row">
                            <el-col :span="6">
                                普通
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value"></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                设置初始值
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value"></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                隐藏 Tooltip
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value" showTip="never"></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                设置Tooltip位置
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value" toolTipPoi="bottom"></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                格式化 Tooltip
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value" :formatTip="formatTip"></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                双滑块
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value3" range></iv-slider>
                            </el-col>
                        </el-row>
                        <el-row class="item-row">
                            <el-col :span="6">
                                禁用
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value" disabled></iv-slider>
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-col :span="24">
                        <ShowCode>
                            <textarea readonly>
                                <el-card shadow="hover" class="card">
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            普通
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value"></iv-slider>
                                        </el-col>
                                    </el-row>
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            设置初始值
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value"></iv-slider>
                                        </el-col>
                                    </el-row>
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            隐藏 Tooltip
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value" showTip="never"></iv-slider>
                                        </el-col>
                                    </el-row>
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            设置Tooltip位置
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value" toolTipPoi="bottom"></iv-slider>
                                        </el-col>
                                    </el-row>
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            格式化 Tooltip
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value" :formatTip="formatTip"></iv-slider>
                                        </el-col>
                                    </el-row>
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            禁用
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value" disabled></iv-slider>
                                        </el-col>
                                    </el-row>
                                </el-card>



                                <script>
                                    export default {
                                      name: 'demo',
                                      data() {
                                        return {
                                          value: 0,
                                          value2: 0.2
                                        }
                                      },
                                      methods: {
                                        formatTip(val) {
                                          return '$' + val + '$';
                                        }
                                      }
                                    }
                                </script>
                            </textarea>
                        </ShowCode>
                    </el-col>
                </el-col>

                <!-- 断点刻度 -->
                <el-col :span="24" class="section">
                    <h3>断点刻度</h3>
                    <el-card shadow="hover" class="card">
                        <el-row class="item-row">
                            <el-col :span="6">
                                显示断点
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value4" :accordingToStep="false" showDots :step="10"></iv-slider>
                            </el-col>
                        </el-row>

                        <el-row class="item-row">
                            <el-col :span="6">
                                显示刻度
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value4" showScales :step="10"></iv-slider>
                            </el-col>
                        </el-row>

                        <el-row class="item-row">
                            <el-col :span="6">
                                刻度位置
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value4" showScales scalePoi="top" :step="10"></iv-slider>
                            </el-col>
                        </el-row>

                        <el-row class="item-row">
                            <el-col :span="6">
                                格式化刻度
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value4" showScales :formatScales="formatScales" :step="10"></iv-slider>
                            </el-col>
                        </el-row>

                        <el-row class="item-row">
                            <el-col :span="6">
                                自定义刻度
                            </el-col>
                            <el-col :span="18">
                                <iv-slider v-model="value4" showScales showDots :customScales="customScales" :step="10"></iv-slider>
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-col :span="24">
                        <ShowCode>
                            <textarea readonly>
                                <el-card shadow="hover" class="card">
                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            显示断点
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value4" :accordingToStep="false" showDots :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>

                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            显示刻度
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value4" showScales :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>

                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            刻度位置
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value4" showScales scalePoi="top" :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>

                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            格式化刻度
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value4" showScales :formatScales="formatScales" :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>

                                    <el-row class="item-row">
                                        <el-col :span="6">
                                            自定义刻度
                                        </el-col>
                                        <el-col :span="18">
                                            <iv-slider v-model="value4" showScales showDots :customScales="customScales" :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>
                                </el-card>



                                <script>
                                    export default {
                                      name: 'demo',
                                      data() {
                                        return {
                                          value: 0,
                                          value2: 0.2,
                                          value3: [10, 42],
                                          value4: 0,
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
                                        formatTip(val) {
                                          return '$' + val + '$';
                                        },
                                        formatScales(val) {
                                          return '$' + val + '$';
                                        }
                                      }
                                    }
                                </script>
                            </textarea>
                        </ShowCode>
                    </el-col>
                </el-col>

                <!--垂直-->
                <el-col :span="24" class="section">
                    <h3>垂直</h3>
                    <el-card shadow="hover" class="card">
                        <el-row class="item-row">
                            <el-col :span="6" style="height: 300px;">
                                <iv-slider v-model="value5" vertical></iv-slider>
                            </el-col>
                            <el-col :span="6" style="height: 300px;">
                                <iv-slider v-model="value6" vertical range></iv-slider>
                            </el-col>
                            <el-col :span="6" style="height: 300px;">
                                <iv-slider v-model="value6" vertical range showScales :step="10"></iv-slider>
                            </el-col>
                            <el-col :span="6" style="height: 300px;">
                                <iv-slider v-model="value6" vertical range showScales showDots toolTipPoi="left" :step="10"></iv-slider>
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-col :span="24">
                        <ShowCode>
                            <textarea readonly>
                                <el-card shadow="hover" class="card">
                                    <el-row class="item-row">
                                        <el-col :span="6" style="height: 300px;">
                                            <iv-slider v-model="value5" vertical></iv-slider>
                                        </el-col>
                                        <el-col :span="6" style="height: 300px;">
                                            <iv-slider v-model="value6" vertical range></iv-slider>
                                        </el-col>
                                        <el-col :span="6" style="height: 300px;">
                                            <iv-slider v-model="value6" vertical range showScales :step="10"></iv-slider>
                                        </el-col>
                                        <el-col :span="6" style="height: 300px;">
                                            <iv-slider v-model="value6" vertical range showScales showDots toolTipPoi="left" :step="10"></iv-slider>
                                        </el-col>
                                    </el-row>
                                </el-card>


                                <script>
                                    export default {
                                      name: 'demo',
                                      data() {
                                        return {
                                          value: 0,
                                          value2: 0.2,
                                          value3: [10, 42],
                                          value4: 0,
                                          value5: 0,
                                          value6: [10, 42],
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
                                        formatTip(val) {
                                          return '$' + val + '$';
                                        },
                                        formatScales(val) {
                                          return '$' + val + '$';
                                        }
                                      }
                                    }
                                </script>
                            </textarea>
                        </ShowCode>
                    </el-col>
                </el-col>

                <el-col :span="24" class="section">
                    <h3>Props</h3>
                    <el-table :data="propsData" style="width: 100%">
                        <el-table-column
                                v-for="item in propsColumn"
                                :key="item.key"
                                :prop="item.prop"
                                :label="item.label"
                                :align="item.align"
                                :width="item.width">
                        </el-table-column>
                    </el-table>
                </el-col>

                <el-col :span="24" class="section">
                    <h3>Events</h3>
                    <el-table :data="eventsData" style="width: 100%">
                        <el-table-column
                                v-for="item in eventsColumn"
                                :key="item.key"
                                :prop="item.prop"
                                :label="item.label"
                                :align="item.align"
                                :width="item.width">
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import ShowCode from './show-code.vue'
    export default {
      name: 'demo',
      components: { ShowCode },
      data() {
        return {
          value: 0,
          value2: 0.2,
          value3: [10, 42],
          value4: 0,
          value5: 0,
          value6: [10, 42],
          customScales: {
            0: '0°C',
            10: '10°C',
            26: '26°C',
            37: '37°C',
            41: '41°C'
          },
          propsColumn: [{
            prop: 'key',
            label: '参数',
            align: 'center',
            width: 180
          }, {
            prop: 'desc',
            label: '说明',
            align: 'center',
            width: 330
          }, {
            prop: 'type',
            label: '类型',
            align: 'center',
            width: 100
          }, {
            prop: 'value',
            label: '可选值',
            align: 'center',
            width: 450
          }, {
            prop: 'default',
            label: '默认值',
            align: 'center',
            width: 100
          }],

          propsData: [{
            key: 'value / v-model',
            desc: '绑定值',
            type: 'number',
            value: '-',
            default: 0
          }, {
            key: 'vertical',
            desc: '是否垂直模式, 默认高度100%，最小高度300px',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'min',
            desc: '最小值',
            type: 'number',
            value: '-',
            default: 0
          }, {
            key: 'max',
            desc: '最大值',
            type: 'number',
            value: '-',
            default: 100
          }, {
            key: 'disabled',
            desc: '是否禁用',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'step',
            desc: '步长',
            type: 'number',
            value: '-',
            default: 1
          }, {
            key: 'accordingToStep',
            desc: '是否按照步长滑动',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'showDots',
            desc: '是否显示断点',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'showTip',
            desc: '是否显示tooltip',
            type: 'string',
            value: 'always（一直显示）/never（不显示）/hover（鼠标经过显示）',
            default: 'hover'
          }, {
            key: 'formatTip',
            desc: '格式化tooltip',
            type: 'function(value)',
            value: '-',
            default: '-'
          }, {
            key: 'toolTipPoi',
            desc: 'tooltip位置',
            type: 'string',
            value: 'top/bottom(水平有效) | left/right(垂直有效)',
            default: 'bottom(水平) | right(垂直)'
          }, {
            key: 'range',
            desc: '是否为范围选择',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'showScales',
            desc: '是否显示刻度',
            type: 'boolean',
            value: 'true/false',
            default: 'false'
          }, {
            key: 'scalePoi',
            desc: '刻度位置',
            type: 'string',
            value: 'top/bottom(水平有效) | left/right(垂直有效)',
            default: 'bottom(水平) | right(垂直)'
          }, {
            key: 'formatScales',
            desc: '格式化刻度',
            type: 'function(value)',
            value: '-',
            default: '-'
          }, {
            key: 'customScales',
            desc: '自定义刻度, 值为一个对象，对象的key必须为数字且不能超出min和max',
            type: 'object',
            value: '-',
            default: '-'
          }],

          eventsColumn: [{
            prop: 'evtName',
            label: '事件名',
            align: 'center',
            width: 100
          }, {
            prop: 'desc',
            label: '说明',
            align: 'center',
            width: 960
          }, {
            prop: 'callbackArg',
            label: '回调参数',
            align: 'center',
            width: 100
          }],

          eventsData: [{
            evtName: 'on-change',
            desc: '在松开滑动时触发，返回当前的选值，在滑动过程中不会触发',
            callbackArg: 'value'
          }, {
            evtName: 'on-input',
            desc: '滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发',
            callbackArg: 'value'
          }]

        }
      },
      methods: {
        formatTip(val) {
          return '$' + val + '$';
        },
        formatScales(val) {
          return '$' + val + '$';
        }
      }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 1200px;
        margin: 0 auto;
        .section{
            margin: 15px 0;
            .card{
                padding: 0 10px;
                .item-row{
                    padding: 30px 0;
                    border-bottom: 1px solid #eff2f6;
                    &:last-child{
                        border-bottom: none;
                        padding-bottom: 0;
                    }
                }
            }
        }
    }
</style>