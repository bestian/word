<template>
  <div id="app" :class="appClass">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    appClass () {
      // 只有 /A4 不要 margin-top，其它路由維持預設
      return this.$route.path === '/A4' ? 'no-margin' : 'default-layout'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,
               'Microsoft JhengHei',
                'Microsoft YaHei',
                'STHeiti',
                'Apple LiGothic Medium';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* A4 頁面：貼齊頂端 */
#app.no-margin {
  margin-top: 0 !important;
}

img {
  filter: invert(100%) grayscale(100%);
  opacity: .32;
}
</style>
