<template>
  <div
    id="book"
    v-loading.fullscreen="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div class="carusel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in caruselList" :key="item">
          <img :src="'https://images.weserv.nl/?url=' + item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tab">
      <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="虚构类" name="fiction"> </el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction"> </el-tab-pane>
      </el-tabs>
    </div>
    <div class="book-list">
      <el-row v-for="item in booklist" :key="item.id">
        <el-col :span="8">
          <div class="img">
            <img
              :src="'https://images.weserv.nl/?url=' + item.cover.url"
              alt=""
            />
          </div>
        </el-col>
        <el-col :span="16"
          ><div class="content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.info }}</p>
            <el-rate
              :value="getRat(item)"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            >
            </el-rate>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caruselList: [],
      activeName: "fiction",
      booklist: [],
      loading: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let bookUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_${this.activeName}/items?os=ios&start=0&count=8`;
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          console.log(typeof res.data.subject_collection_items);
          this.caruselList = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.booklist = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRat(item) {
      let num = 0;
      let obj = item.rating;
      if (obj) {
        num = obj.value;
      } else num = 9;
      let val = num / 2;
      val = val * 10;
      val = Math.trunc(val);
      val = val / 10;
      return val;
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.getData();
    },
  },
};
</script>

<style lang="scss" scoped>
.carusel {
  img {
    width: 100%;
  }
}
.tab {
  padding: 0.2rem;
}
.book-list {
  .img {
    img {
      width: 100%;
    }
  }
  .content {
    padding: 0.2rem;
    h3 {
      font-weight: bolder;
      margin-bottom: 0.4rem;
    }
  }
}
</style>