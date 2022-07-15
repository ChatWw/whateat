<template>
  <div class="home">
    <div class="word-content">
      <transition name="el-fade-in-linear">
        <tooltip v-if="flag" />
      </transition>
      <div class="title" @click="handleClick">
        <span
          >今天{{ nowDate }}吃<span class="blod">{{ food }}</span></span
        >
      </div>
      <div class="btn-content">
        <button class="btn" @click="toggleSelect">{{ status }}</button>
      </div>
    </div>
    <transition name="el-fade-in">
      <keywords class="keywords" v-if="isShow" />
    </transition>
    <!-- 动态词云 -->
    <div id="cloudword" ref="cloudword"></div>
  </div>
</template>

<script>
import "animate.css";
import tooltip from "@/components/tooltip";
import keywords from "@/components/keyWords";
import { breaker, lunch } from "@/assets/js/food.js";
export default {
  name: "HomeView",
  components: {
    tooltip,
    keywords,
  },
  data() {
    return {
      flag: true,
      nowDate: "早上",
      num: 1,
      day: [
        {
          key: 1,
          value: "早上",
        },
        {
          key: 2,
          value: "中午",
        },
        {
          key: 3,
          value: "晚上",
        },
      ],
      food: "神马？",
      status: "点我",
      timer: null,
      foodList: [],
      keywords: "",
      isShow: false,
    };
  },
  created() {
    this["foodList"] = breaker;
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this["flag"] = false;
      }, 4000);
    });
  },
  methods: {
    // 选择早中晚饭
    handleClick() {
      if (this.timer) {
        return;
      }
      [this["status"], this["food"], this["flag"]] = ["点我", "神马？", false];
      this["num"]++;
      if (this.num > 3) this["num"] = 1;
      this["day"].forEach((item) => {
        if (item.key == this.num) {
          this["nowDate"] = item.value;
        }
      });
      this["nowDate"] == "早上"
        ? (this["foodList"] = breaker)
        : (this["foodList"] = lunch);
      document.title = `今天${this.nowDate}吃神马？`;
    },
    // 开始选择
    toggleSelect() {
      if (this.status == "点我" || this.status == "再来一次") {
        if (this.timer) {
          return;
        }
        this["timer"] = setInterval(() => {
          this.setText();
          let index = this.rand(0, this.foodList.length - 1);
          this["food"] = `${this["foodList"][index]}!`;
        }, 50);
        this["status"] = "选一个";
        this.isShow = false;
      } else {
        let freeNum = this.rand(0, 2);
        if (freeNum / 2 == 0) {
          this.isShow = true;
        }
        clearInterval(this.timer);
        [this["timer"], this["status"]] = [null, "再来一次"];
        document.title = `今天${this.nowDate}吃${this.food}`;
      }
    },
    // 生成随机数
    rand(m, n) {
      let num = Math.floor(Math.random() * (n - m) + m);
      return num;
    },
    // 页面随机位置生成菜系
    setText() {
      let t = this.rand(0, 100);
      let l = this.rand(0, 100);
      let index = this.rand(0, this.foodList.length - 1);
      let eleText = document.createElement("span");
      eleText.className = "text-popup";
      this.$refs.cloudword.appendChild(eleText);
      eleText.innerHTML = this.foodList[index];
      eleText.addEventListener("animationend", function () {
        eleText.parentNode.removeChild(eleText);
      });
      eleText.style.left = l + "%";
      eleText.style.top = t + "%";
    },
    // 建议词
    setKeywords() {
      this.isShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
#cloudword {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.word-content {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100px;
  z-index: 2;
  transform: translate(-50%, -50%);
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  letter-spacing: 5px;
  user-select: none;
  span {
    cursor: pointer;
  }
}
.btn-content {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep.btn {
  position: relative;
  cursor: pointer;
  z-index: 0;
  padding: 0;
  width: 140px;
  height: 50px;
  border-radius: 25px;
  font-size: 16px;
  border: 2px solid #eee;
  background-color: #a9c9ff;
  background-image: linear-gradient(90deg, #a9c9ff 0%, #ffbbec 100%);
  color: #fff;
  transition: all 1s;
  // linear-gradient不支持动画，用伪元素实现
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 25px;
    background-color: #a9c9ff;
    background-image: linear-gradient(270deg, #a9c9ff 0%, #ffbbec 100%);
    opacity: 0;
    transition: opacity 1s;
    z-index: -1;
  }
  &:hover::before {
    opacity: 1;
  }
}
.blod {
  font-weight: bold;
}
.keywords {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8%;
}
</style>
