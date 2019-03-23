<template>
    <div :class="[prefixCls + '-wrap', { disabled }]" ref="slider" :style="wrapStyle" @click.self="sliderClick">
        <!-- 色条 -->
        <div :class="[prefixCls + '-bar']" :style="barStyle" @click.self="sclick"></div>

        <!-- 断点 -->
        <template v-if="showDots">
            <template v-if="!vertical">
                <div
                        :class="[{active: item.active}, prefixCls + '-dot']"
                        v-for="(item, index) in dots"
                        :key="index"
                        :style="{ 'left': item.val + '%' }"
                        @click.self="sliderClick"
                ></div>
            </template>

            <template v-else>
                <div
                        :class="[{active: item.active}, prefixCls + '-dot-vertical']"
                        v-for="(item, index) in dots"
                        :key="index"
                        :style="{ 'bottom': item.val + '%' }"
                        @click.self="sliderClick"
                ></div>
            </template>
        </template>

        <!-- 刻度 -->
        <div :class="[prefixCls + '-scales']" v-show="showScales" :style="scaleWrapStyle">
      <span
              v-for="(item, index) in scales"
              :key="index"
              :style="item"
      >{{item.val}}</span>
        </div>

        <!-- 色块 -->
        <div
                :class="[prefixCls + '-button-wrap']"
                :style="minbtnStyle"
                @touchstart="onHandStart($event, 'min')"
                @mousedown="onHandStart($event, 'min')"
        >
            <VTooltip
                    :controlled="pointerDown === 'min'"
                    :content="formatTip(exportValue[0])"
                    :disabled="tipDisabled"
                    :always="showTip === 'always'"
                    :placement="tooltipPlace"
                    ref="minTooltip"
            >
                <div :class="minButtonClasses"></div>
            </VTooltip>
        </div>

        <div
                :class="[prefixCls + '-button-wrap']"
                :style="maxbtnStyle"
                v-show="range"
                @touchstart="onHandStart($event, 'max')"
                @mousedown="onHandStart($event, 'max')"
        >
            <VTooltip
                    :controlled="pointerDown === 'max'"
                    :content="formatTip(exportValue[1])"
                    :disabled="tipDisabled"
                    :always="showTip === 'always'"
                    :placement="tooltipPlace"
                    ref="maxTooltip"
            >
                <div :class="maxButtonClasses"></div>
            </VTooltip>
        </div>
    </div>
</template>

<script>
  import { getStyle, oneOf, on, off } from "./util";
  import VTooltip from "./v-tooltip.vue";
  export default {
    name: "VSlider",
    components: { VTooltip },
    props: {
      vertical: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showDots: {
        type: Boolean,
        default: false
      },

      showScales: {
        type: Boolean,
        default: false
      },

      // 格式化scale
      formatScales: {
        type: Function,
        default(val) {
          return val;
        }
      },

      // 自定义scale
      customScales: Object,

      // scale位置
      scalePoi: {
        type: String,
        validator(value) {
          return oneOf(value, ["top", "bottom", "left", "right"]);
        }
      },

      showTip: {
        type: String,
        default: "hover",
        validator(value) {
          return oneOf(value, ["hover", "always", "never"]);
        }
      },

      // 格式化tip
      formatTip: {
        type: Function,
        default(val) {
          return val;
        }
      },

      // scale位置
      toolTipPoi: {
        type: String,
        default: "top",
        validator(value) {
          return oneOf(value, ["top", "bottom", "left", "right"]);
        }
      },

      value: {
        type: [Number, Array],
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      }
    },
    data() {
      const val = this.checkLimits(
        Array.isArray(this.value) ? this.value : [this.value]
      );
      return {
        prefixCls: "v-slider",
        currentValue: val,
        oldValue: [...val],
        pointerDown: ""
      };
    },
    computed: {
      exportValue(values) {
        // step是小数就等于1，否则等于0
        const decimalCases = (String(this.step).split(".")[1] || "").length;
        return this.currentValue.map(nr => Number(nr.toFixed(decimalCases)));
      },
      // 左滑块位置
      minPosition() {
        const val = this.currentValue;
        // (当前数值 - 最小数值) / 数值范围 * 100 = 当前位置 <=> (当前位置 / 100) = (当前数值 - 最小数值) / 数值范围
        return ((val[0] - this.min) / this.valueRange) * 100;
      },

      // 右滑块位置
      maxPosition: function() {
        const val = this.currentValue;
        return ((val[1] - this.min) / this.valueRange) * 100;
      },

      wrapStyle() {
        const style = {};
        if (!this.vertical) {
          style.width = "100%";
          style.height = "4px";
          style.margin = "16px 0";
        } else {
          style.width = "4px";
          style.height = "100%";
          style.margin = "0 16px";
        }
        return style;
      },

      barStyle() {
        const style = {};
        if (this.vertical) {
          style.width = "4px";
          if (this.range) {
            style.bottom =
              ((this.currentValue[0] - this.min) / this.valueRange) * 100 + "%";
            style.height =
              ((this.currentValue[1] - this.currentValue[0]) / this.valueRange) *
              100 +
              "%";
          } else {
            style.height =
              ((this.currentValue[0] - this.min) / this.valueRange) * 100 + "%";
            style.bottom = 0;
          }
        } else {
          style.height = "4px";
          if (this.range) {
            style.left =
              ((this.currentValue[0] - this.min) / this.valueRange) * 100 + "%";
            style.width =
              ((this.currentValue[1] - this.currentValue[0]) / this.valueRange) *
              100 +
              "%";
          } else {
            style.width =
              ((this.currentValue[0] - this.min) / this.valueRange) * 100 + "%";
          }
        }

        return style;
      },

      // 刻度容器样式
      scaleWrapStyle() {
        const style = {};
        if (this.vertical) {
          style.bottom = 0;
          style.left = this.scalePlace + 'px';
          style.height = '100%';
        }else {
          style.left = 0;
          style.top = this.scalePlace + 'px';
          style.width = '100%';
        }
        return style;
      },

      minbtnStyle() {
        const style = {};
        if (this.vertical) {
          style.left = "-7px";
          style.bottom = this.minPosition + "%";
          style.transform = "translateY(50%)";
        } else {
          style.top = "-7px";
          style.left = this.minPosition + "%";
          style.transform = "translateX(-50%)";
        }
        return style;
      },

      maxbtnStyle() {
        const style = {};
        if (this.vertical) {
          style.left = "-7px";
          style.bottom = this.maxPosition + "%";
          style.transform = "translateY(50%)";
        } else {
          style.top = "-7px";
          style.left = this.maxPosition + "%";
          style.transform = "translateX(-50%)";
        }
        return style;
      },

      minButtonClasses() {
        return [
          `${this.prefixCls}-button`,
          {
            [`${this.prefixCls}-button-active`]: this.pointerDown === "min"
          }
        ];
      },
      maxButtonClasses() {
        return [
          `${this.prefixCls}-button`,
          {
            [`${this.prefixCls}-button-active`]: this.pointerDown === "max"
          }
        ];
      },
      sliderWidth() {
        return this.vertical ? parseInt(getStyle(this.$refs.slider, "height"), 10) : parseInt(getStyle(this.$refs.slider, "width"), 10);
      },
      valueRange() {
        return this.max - this.min;
      },
      dots() {
        // console.log('dots :', dots);
        return this.vertical ? this.getYDots() : this.getXDots();
      },
      scales() {
        return this.vertical ? this.getYScales() : this.getXScales();
      },

      scalePlace() {
        let val = null;
        if (this.vertical) {
          if (oneOf(this.scalePoi, ['left', 'right'])) {
            val = this.scalePoi === "right" ? 16 : -32;
          }else {
            val = 16;
          }
        }else {
          if (oneOf(this.scalePoi, ['top', 'bottom'])) {
            val = this.scalePoi === "top" ? -30 : 16;
          }else {
            val = 16;
          }
        }
        return val;
      },
      tooltipPlace() {
        let val = null;
        if (this.vertical) {
          val = oneOf(this.toolTipPoi, ['left', 'right']) ? this.toolTipPoi : 'right';
        }else {
          val = oneOf(this.toolTipPoi, ['top', 'bottom']) ? this.toolTipPoi : 'bottom';
        }
        return val;
      },
      tipDisabled() {
        return (this.formatTip(this.currentValue[0]) === null || this.showTip === "never");
      }
    },
    watch: {
      value(val) {
        val = this.checkLimits(Array.isArray(val) ? val : [val]);
        if (val[0] !== this.currentValue[0] || val[1] !== this.currentValue[1]) {
          this.currentValue = val;
        }
      },
      exportValue(values) {
        this.$nextTick(() => {
          this.$refs.minTooltip.updatePopper();
          if (this.range) {
            this.$refs.maxTooltip.updatePopper();
          }
        });
        const value = this.range ? values : values[0];
        this.$emit("input", value);
        this.$emit("on-input", value);
      }
    },
    methods: {
      // 获取横向dots
      getXDots() {
        const dotCount = this.valueRange / this.step;
        const dots = [];

        // (刻度间隔 / 100) = (this.step / this.valueRange)
        const stepWidth = (100 * this.step) / this.valueRange;

        for (let i = 1; i < dotCount; i++) {
          const barStyle = {
            width:
            this.barStyle.width && Number(this.barStyle.width.slice(0, -1)),
            left:
            (this.barStyle.left && Number(this.barStyle.left.slice(0, -1))) || 0
          };
          const val = i * stepWidth;
          const active = this.range
            ? val > barStyle.left && val < barStyle.left + barStyle.width
            : val < barStyle.width;
          dots.push({ val, active });
        }
//        console.log('xdots :', dots);
        return dots;
      },


      // 获取纵向dots
      getYDots() {
        const dotCount = this.valueRange / this.step;
        const dots = [];

        // (刻度间隔 / 100) = (this.step / this.valueRange)
        const stepWidth = (100 * this.step) / this.valueRange;

        for (let i = 1; i < dotCount; i++) {
          const barStyle = {
            height:
            this.barStyle.height && Number(this.barStyle.height.slice(0, -1)),
            bottom:
            (this.barStyle.bottom && Number(this.barStyle.bottom.slice(0, -1))) || 0
          };
          const val = i * stepWidth;
          const active = this.range
            ? val > barStyle.bottom && val < barStyle.bottom + barStyle.height
            : val < barStyle.height;
          dots.push({ val, active });
        }
//        console.log('Ydots :', dots);
        return dots;
      },

      // 获取横向scales
      getXScales() {
        const scales = [];
        if (this.customScales) {
          const scaleCount = Object.keys(this.customScales).length;
          const width = 100 / scaleCount;
          const marginLeft = -(width / 2);
          for (const key in this.customScales) {
            const attr = typeof key === "number" ? key : parseFloat(key);
            if (attr >= this.min && attr <= this.max) {
              scales.push({
                val: this.customScales[key],
                width: width + '%',
                marginLeft: marginLeft + '%',
                left: (((key - this.min) / this.valueRange) * 100) + '%'
              });
            }
          }
        } else {
          const scaleCount = this.valueRange / this.step;

          const width = 100 / scaleCount;
          const marginLeft = -(width / 2);

          for (let i = 0; i <= scaleCount; i++) {
            const left = i * ((100 * this.step) / this.valueRange);

            // (当前位置 / 100) = (当前数值 - 最小数值) / 数值范围
            const val = this.step < 1 ? this.formatScales((left / 100) * this.valueRange + this.min) : this.formatScales(Math.floor((left / 100) * this.valueRange + this.min))
            scales.push({
              val,
              width: width + '%',
              marginLeft: marginLeft + '%',
              left: left + '%'
            });
          }
        }
        return scales;
      },

      getYScales() {
        const scales = [];
        if (this.customScales) {
          const scaleCount = Object.keys(this.customScales).length;
          const height = 100 / scaleCount;
          const marginBottom = -(height / 2);

          for (const key in this.customScales) {
            const attr = typeof key === "number" ? key : parseFloat(key);
            if (attr >= this.min && attr <= this.max) {
              scales.push({
                val: this.customScales[key],
                // height: height + '%',
                // marginBottom: '-50%',
                transform: 'translateY(50%)',
                bottom: (((key - this.min) / this.valueRange) * 100) + '%'
              });
            }
          }
        } else {
          const scaleCount = this.valueRange / this.step;

          const height = 100 / scaleCount;
          const marginBottom = -(height / 2);

          for (let i = 0; i <= scaleCount; i++) {
            const bottom = i * ((100 * this.step) / this.valueRange);

            // (当前位置 / 100) = (当前数值 - 最小数值) / 数值范围
            const val = this.step < 1 ? this.formatScales((bottom / 100) * this.valueRange + this.min) : this.formatScales(Math.floor((bottom / 100) * this.valueRange + this.min))
            scales.push({
              val,
              // height: height + '%',
              transform: 'translateY(50%)',
              bottom: bottom + '%'
            });
          }
        }
        return scales;
      },


      onHandStart(event, target) {
        if (this.disabled) return;
        event.preventDefault();
        this.pointerDown = target; // 当前操作的滑块 min(左) max(右)

        this.onDragStart(event);
        on(window, "mousemove", this.onDragMove);
        on(window, "touchmove", this.onDragMove);
        on(window, "mouseup", this.onDragEnd);
        on(window, "touchend", this.onDragEnd);
      },

      onDragStart(event) {
        this.dragging = false;
        this.start = this.getPointer(event);
        this.startVal = this.currentValue[this.pointerDown === "min" ? 0 : 1];
//        console.log("startVal :", this.startVal);
      },

      onDragMove(event) {
        this.dragging = true;
        this.current = this.getPointer(event);

        // (鼠标当前位置 - 鼠标起始位置) / 总长 * 数值范围 = 变化的值 <=> (变化的值 / 数值范围) = (鼠标当前位置 - 鼠标起始位置) / 总长
        const diff = ((this.current - this.start) / this.sliderWidth) * this.valueRange;
        const newVal = this.vertical ? this.startVal - diff : this.startVal + diff;
        this.changeButtonPosition(newVal);
      },

      onDragEnd() {
        if (this.dragging) {
          this.dragging = false;
          this.$refs[`${this.pointerDown}Tooltip`].visible = false;
          this.emitChange();
        }

        this.pointerDown = "";
        off(window, "mousemove", this.onDragMove);
        off(window, "touchmove", this.onDragMove);
        off(window, "mouseup", this.onDragEnd);
        off(window, "touchend", this.onDragEnd);
      },

      sliderClick(event) {
        if (this.disabled) return;
        const current = this.getPointer(event);
        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;

        // 新值
        let newVal = ((current - sliderOffsetLeft) / this.sliderWidth) * this.valueRange + this.min;
        // console.log('newPos :', newPos);
        if (!this.range || newVal <= this.minPosition) {
          this.changeButtonPosition(newVal, "min");
        } else if (newVal >= this.maxPosition) {
          this.changeButtonPosition(newVal, "max");
        } else {
          this.changeButtonPosition(newVal, newVal - this.currentValue[0] <= this.currentValue[1] - newVal ? "min" : "max");
        }
      },

      changeButtonPosition(newVal, forceType) {
        const type = forceType || this.pointerDown;
        const index = type === "min" ? 0 : 1;
        if (type === "min") {
          newVal = this.checkLimits([newVal, this.max])[0];
        } else {
          newVal = this.checkLimits([this.min, newVal])[1];
        }

//      console.log('newVal :', newVal);

        const modulus = this.handleDecimal(newVal, this.step);
        // console.log('modulus :', modulus); newPos % this.step
        const value = this.currentValue;
        value[index] = newVal - modulus;
//        console.log("value :", value);
        this.currentValue = value.slice();

        if (!this.dragging) {
          if (this.currentValue[index] !== this.oldValue[index]) {
            this.emitChange();
            this.oldValue[index] = this.currentValue[index];
          }
        }
      },

      getPointer(event) {
        return this.vertical
          ? event.type.indexOf("touch") !== -1
            ? event.touches[0].clientY
            : event.clientY
          : event.type.indexOf("touch") !== -1
            ? event.touches[0].clientX
            : event.clientX;
      },

      checkLimits([min, max]) {
        min = Math.max(this.min, min);
        min = Math.min(this.max, min);
        max = Math.max(this.min, min, max);
        max = Math.min(this.max, max);
        return [min, max];
      },

      handleDecimal(pos, step) {
        if (step < 1) {
          let sl = step.toString(),
            multiple = 1,
            m;
          try {
            m = sl.split(".")[1].length;
          } catch (e) {
            m = 0;
          }
          multiple = Math.pow(10, m);
          return ((pos * multiple) % (step * multiple)) / multiple;
        } else {
          return pos % step;
        }
      },
      emitChange() {
        const value = this.range ? this.exportValue : this.exportValue[0];

        // 松开时触发
        this.$emit("on-change", value);
      }
    },
    created() {
      this.dragging = false;
      this.start = 0;
      this.current = 0;
      this.startVal = 0;

      setTimeout(() => {
        // console.log('dots :', this.dots);
//      console.log("scales :", this.scales);
      }, 2000);
    }
  };
</script>

<style lang="less" scoped>
    .v-slider-wrap {
        // width: 100%;
        // height: 4px;
        // margin: 16px 0;
        background-color: #e8eaec;
        border-radius: 3px;
        vertical-align: middle;
        position: relative;
        cursor: pointer;
        user-select: none;

        .v-slider-bar {
            // height: 4px;
            background-color: #57a3f3;
            border-radius: 3px;
            position: absolute;
        }

        .v-slider-dot {
            position: absolute;
            top: -4px;
            width: 8px;
            height: 8px;
            margin-left: -4px;
            background-color: #fff;
            border: 2px solid #e8e8e8;
            border-radius: 50%;
            cursor: pointer;
            &.active {
                border-color: #57a3f3;
            }
        }

        .v-slider-dot-vertical {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #fff;
            border: 2px solid #e8e8e8;
            border-radius: 50%;
            cursor: pointer;
            left: -4px;
            margin-top: -4px;
            &.active {
                border-color: #57a3f3;
            }
        }

        .v-slider-scales {
            position: absolute;
            // top: 14px;
            // left: 0;
            // width: 100%;
            font-size: 14px;
            span {
                position: absolute;
                color: rgba(0, 0, 0, 0.45);
                text-align: center;
                cursor: pointer;
            }
        }

        .v-slider-button-wrap {
            width: 18px;
            height: 18px;
            text-align: center;
            background-color: transparent;
            position: absolute;
            // top: -7px;
            // transform: translateX(-50%);

            .v-slider-button {
                width: 14px;
                height: 14px;
                border: 2px solid #57a3f3;
                border-radius: 50%;
                background-color: #fff;
                transition: transform 0.2s linear;
                &:hover {
                    transform: scale(1.3);
                }
            }
            .v-slider-button-active {
                transform: scale(1.3);
            }
        }


        &.disabled{
            cursor: not-allowed;
            .v-slider-bar{
                background-color: #e8e8e8;
            }
            .v-slider-dot, .v-slider-dot-vertical{
                &.active{
                    border-color: #e8e8e8;
                }
            }
            .v-slider-button-wrap{
                .v-slider-button{
                    border-color: #e8e8e8;
                }
            }
        }
    }
</style>