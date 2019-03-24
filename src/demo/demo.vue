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
                                <iv-slider v-model="value4" showDots :step="10"></iv-slider>
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
                                            <iv-slider v-model="value4" showDots :step="10"></iv-slider>
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