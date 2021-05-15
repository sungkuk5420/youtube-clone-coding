<template>
  <q-layout view="hHh lpR fFf">
    <Header :left="left" @click-drawer-icon="changeToShowLeftDrawer"></Header>
    <q-drawer v-model="left" side="left" behavior="mobile" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "src/projects/header.vue";
export default {
  components: { Header },
  data() {
    return {
      left: false,
    };
  },
  methods: {
    changeToShowLeftDrawer() {
      this.left = !this.left;
    },
  },
};
</script>