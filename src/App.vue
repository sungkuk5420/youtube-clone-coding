<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html,
body {
  overflow: hidden;
}

html,
body,
#q-app,
.q-layout,
.q-page-container,
.q-page {
  height: 100%;
}

.q-item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  text-align: left;
  padding: 8px 16px;
  min-height: 40px;
}

.q-item-main {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 0;
}
</style>



<style lang="scss">
@media screen and (max-width: 991px) {

  .q-drawer-container,
  .q-drawer,
  .menu-icon,
  .record-icon,
  .header-right-icons {
    display: none !important;
  }

  .search-bar-wrapper {
    margin-left: 10px !important;
  }

  .q-page-container {
    padding-left: 0 !important;
  }

  .col-7 {
    padding-left: 10px;
  }
}

@media screen and (min-width: 992px) {


  .q-item {
    display: inline-flex;
    width: 33.3333%;
  }

  .item-card-custom {
    width: auto;
    flex-direction: column;
  }

  .col-5 {
    display: block;
    width: 100% !important;
    flex: inherit;
    max-width: inherit !important;
    cursor: pointer;
  }

  .col-7 {
    width: 100% !important;
    max-width: inherit;
    display: block;
    max-width: inherit !important;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.item-card-custom {
  /* height: 100px; */
  width: 100%;

  .col-7 {
    div {
      margin: 0;

      p {
        margin: 0;
        // font-size: 3vw !important;
        // height: 10vw;
        // max-height: 24px;
      }
    }
  }

  .col-5 {}

  .q-icon.material-icons {
    margin: 0;
  }
}
</style>
