<template>
  <q-header class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('click-drawer-icon')" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  props: ["left"],
  data() {
    return {};
  },
};
</script>
