<template>
  <q-header class="bg-white text-white flex">
    <q-toolbar class="no-padding no-margin">
      <div class="flex align-center">
        <q-btn class="text-primary menu-icon" dense flat round icon="menu" @click="$emit('click-drawer-icon')" />
        <YoutubeIcon></YoutubeIcon>
      </div>
      <SearchForm></SearchForm>
      <HeaderRightIcons></HeaderRightIcons>
    </q-toolbar>
  </q-header>
</template>

<script>
import YoutubeIcon from "../components/YoutubeIcon";
import SearchForm from "../components/SearchForm";
import HeaderRightIcons from "../components/HeaderRightIcons";
export default {
  components: { YoutubeIcon, SearchForm, HeaderRightIcons },
  props: ["left"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.q-header {
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  height: 56px;
  padding: 0 16px;
}

.q-toolbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  flex: none;
}

.menu-icon {
  width: 40px;
  height: 40px;
  margin: 0 16px 0 0;
}
</style>
