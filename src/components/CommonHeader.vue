<template>
  <header :style="{ backgroundColor: curMenu.bgColor }">
    <span @click="goBack">首页</span>
    {{ curMenu.name }}
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "CommonHeader",
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setcurMenu"]),
    goBack() {
      this.$router.push("/");
      this.setcurMenu({
        name: "影视",
        bgColor: "skyblue",
      });
    },
  },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: red;
  color: white;
  span {
    position: absolute;
    left: 0;
  }
}
</style>