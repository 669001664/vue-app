<template>
  <div>
    <ul class="news-list">
      <li
        class="news-item"
        v-for="(item, index) in this.newList"
        :key="index"
        @click="getDetail(item.id)"
      >
        <div class="img">
          <img :src="item.cover" alt="" />
        </div>
        <div class="content">
          <h3>{{ item.title }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("https://unidemo.dcloud.net.cn/api/news")
        .then((res) => {
          this.newList = res.data;
          console.log(this.newList);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.news-list {
  .news-item {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #cccccc;
    .img {
      flex: 3;
      img {
        width: 100%;
      }
    }
    .content {
      flex: 5;
      padding: 10px;
      h3 {
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
  }
}
</style>