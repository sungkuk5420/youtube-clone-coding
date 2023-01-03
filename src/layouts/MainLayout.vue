<template>
  <q-layout view="hHh lpR fFf">
    <Header :left="left" @click-drawer-icon="changeToShowLeftDrawer"></Header>
    <Drawer :left="left"></Drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "src/projects/Header.vue";
import Drawer from "src/projects/Drawer.vue";
export default {
  components: { Header, Drawer },
  data() {
    return {
      left: true,
    };
  },
  methods: {
    changeToShowLeftDrawer() {
      this.left = !this.left;
    },
  },
};
</script>