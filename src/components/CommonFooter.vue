<template>
  <footer :style="{ backgroundColor: curMenu.bgColor }">
    <div v-for="menu in menuList" :key="menu.path" @click="change(menu)">
      <router-link :to="menu.path">{{ menu.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      menuList: [
        {
          path: "/",
          name: "影视",
          bgColor: "skyblue",
        },
        {
          path: "/music",
          name: "音乐",
          bgColor: "#ff00ff",
        },
        {
          path: "/book",
          name: "书籍",
          bgColor: "#cc0bd0",
        },
        {
          path: "/news",
          name: "新闻",
          bgColor: "#eeb090",
        },
      ],
    };
  },
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setcurMenu"]),
    change(obj) {
      this.setcurMenu(obj);
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background-color: red;
  color: white;
  a {
    color: white;
  }
  router-link-exact-active {
    color: #494949;
  }
}
</style>