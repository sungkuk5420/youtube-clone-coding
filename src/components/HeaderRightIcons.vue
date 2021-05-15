<template>
  <div class="header-right-icons">
    <q-btn
      class="text-primary menu-icon"
      dense
      flat
      round
      icon="video_call"
      @click="$emit('click-drawer-icon')"
    />
    <q-btn
      class="text-primary menu-icon"
      dense
      flat
      round
      icon="apps"
      @click="$emit('click-drawer-icon')"
    />
    <q-btn
      class="text-primary menu-icon"
      dense
      flat
      round
      icon="notifications"
      @click="$emit('click-drawer-icon')"
    />
    <img
      class="avatar-icon style-scope yt-img-shadow"
      alt="아바타 이미지"
      height="32"
      width="32"
      src="https://yt3.ggpht.com/yti/ANoDKi75HxBX0fIQ41Pta2EWNko_da7OeJ9EBb8NPE72Mg=s88-c-k-c0x00ffffff-no-rj-mo"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-right-icons {
  display: flex;
  align-items: center;
  padding-right: 20px;
  & > * {
    width: 50px;
  }
}
.avatar-icon {
  margin-left: 18px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
}
</style>