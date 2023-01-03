<template>
  <q-drawer width="240" show-if-above :breakpoint="700" elevated v-model="localLeft" side="left" behavior="desktop"
    bordered>
    <ul>
      <li>
        <q-icon name="home"></q-icon>
        <div class="icon-label">Home</div>
      </li>
      <li>
        <q-icon name="explore"></q-icon>
        <div class="icon-label">Explore</div>
      </li>
      <li>
        <SubscriptionIcon />
        <div class="icon-label">Subscription</div>
      </li>
      <li>
        <q-icon name="fab fa-youtube"></q-icon>
        <div class="icon-label">Original</div>
      </li>
      <li>
        <YoutubeMusicIcon />
        <div class="icon-label">Youtube Music</div>
      </li>
    </ul>
    <div class="border-line"></div>
    <ul>
      <li>
        <LockerIcon />
        <div class="icon-label">보관함</div>
      </li>
      <li>
        <ViewingRecordIcon />
        <div class="icon-label">시청기록</div>
      </li>
      <li>
        <MyVideoIcon />
        <div class="icon-label">내 동영상</div>
      </li>
      <li>
        <VideoToWatchLaterIcon />
        <div class="icon-label">나중에 볼 동영상</div>
      </li>
      <li>
        <LikedVideosIcon />
        <div class="icon-label">좋아요 표시한 동영상</div>
      </li>
      <li>
        <YoutubeMusicIcon />
        <div class="icon-label">더보기</div>
      </li>
    </ul>
  </q-drawer>
</template>

<script>
import YoutubeMusicIcon from "../components/YoutubeMusicIcon"
import SubscriptionIcon from "../components/SubscriptionIcon"
import LockerIcon from "../components/LockerIcon"
import ViewingRecordIcon from "../components/ViewingRecordIcon"
import MyVideoIcon from "../components/MyVideoIcon"
import VideoToWatchLaterIcon from "../components/VideoToWatchLaterIcon"
import LikedVideosIcon from "../components/LikedVideosIcon"
export default {
  components: {
    YoutubeMusicIcon, SubscriptionIcon, LockerIcon,
    ViewingRecordIcon,
    MyVideoIcon,
    VideoToWatchLaterIcon,
    LikedVideosIcon
  },
  props: ["left"],
  watch: {
    left() {
      this.localLeft = this.$props.left
    }
  },
  data() {
    return {
      localLeft: true
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 12px 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 24px;

    &:hover {
      cursor: pointer;
      background: rgb(0 0 0 / 5%);
    }

    svg,
    .q-icon {
      fill: #606060;
      color: #606060;
      font-size: 24px;
      flex: none;
      width: 24px;
      height: 24px;
      margin-right: 24px;
    }

    .icon-label {}
  }
}

.border-line {
  height: 1px;
  background: rgb(0 0 0 / 10%);
}
</style>
