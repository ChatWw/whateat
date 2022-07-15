<template>
  <div class="keywords">
    <span class="animate__animated">{{ quotes }}</span>
  </div>
</template>

<script>
import { quotesList } from "@/assets/js/food.js";
export default {
  name: "keywords",
  components: {},
  data() {
    return {
      quotes: "",
    };
  },
  created() {
    this.setQuotes();
  },
  mounted() {},
  methods: {
    rand(m, n) {
      let num = Math.floor(Math.random() * (n - m) + m);
      return num;
    },
    setQuotes() {
      let index = this.rand(0, quotesList.length - 1);
      this.quotes = quotesList[index];
    },
  },
};
</script>

<style scoped lang="scss">
.keywords {
  padding: 5px 15px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 12px;
}
</style>
