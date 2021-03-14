<template>
  <div>
    <div>
      <img
        :src="
          'https://images.weserv.nl/?url=' + tvContent.cover.image.small.url
        "
        alt=""
      />
    </div>
    <p>{{ tvContent.intro }}</p>
    <p>{{ tvContent.card_subtitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tvContent: {
        cover: {
          image: {
            small: {
              url: "",
            },
          },
        },
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let baseUrl = "https://bird.ioliu.cn/v2?url=";
      let tvUrl = `https://m.douban.com/rexxar/api/v2/tv/${this.$route.params.id}?ck=&for_mobile=1`;
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
          this.tvContent = res.data;
          console.log(this.tvContent);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 1rem;
}
</style>