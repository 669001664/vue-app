<template>
  <div>
    <aplayer :audio="audio" :lrcType="3" />
    <ul>
      <li class="music-item">
        <span class="order">编号</span>
        <span class="song">歌曲名</span>
        <span class="songer">歌手</span>
      </li>
      <li
        class="music-item"
        v-for="(item, index) in musicList"
        :key="item.id"
        @click="getMusic(item.id)"
      >
        <span class="order">{{ index + 1 }}</span>
        <span class="song">{{ item.name }}</span>
        <span class="songer">{{ item.artist }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png",
  productionTip: true,
});
export default {
  data() {
    return {
      musicList: [],
      audio: {
        name: "东西（Cover：林俊呈）",
        artist: "纳豆",
        url: "https://cdn.moefe.org/music/mp3/thing.mp3",
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: "https://cdn.moefe.org/music/lrc/thing.lrc",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let musicUrl = "https://bird.ioliu.cn/netease/playlist?id=4868959465";
      this.axios
        .get(musicUrl)
        .then((res) => {
          this.musicList = res.data.playlist.tracks.map((item) => {
            return {
              id: item.id,
              name: item.name,
              artist: item.ar[0].name,
            };
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMusic(id) {
      let musciObj = {};
      let musicUrl = "https://bird.ioliu.cn/netease/song?id=" + id;
      this.axios
        .get(musicUrl)
        .then((res) => {
          musciObj = {
            name: res.data.data.name,
            artist: res.data.data.ar[0].name,
            url: res.data.data.mp3.url,
            cover: res.data.data.al.picUrl,
          };
          this.audio = musciObj;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.music-item {
  display: flex;
  padding: 10px;
  .order {
    flex: 1;
  }
  .song {
    flex: 4;
  }
  .songer {
    flex: 2;
  }
}
</style>