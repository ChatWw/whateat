<template>
  <div class="tooltip">
    <div class="content">
      <span class="animate__animated animate__rubberBand"
        >点这里切换一日三餐</span
      >
      <div class="icon el-icon-caret-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tooltip",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.tooltip {
  position: absolute;
  top: -70%;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.content {
  position: relative;
  text-align: center;
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  span {
    display: inline-block;
  }
}
.icon {
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  bottom: -20%;
  left: 28%;
}
</style>
