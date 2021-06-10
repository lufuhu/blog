<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header/>
    <div class="container mx-auto py-4 mt-5">
      <DefaultGlobalLayout/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
  },
  data() {
    return {}
  },
  mounted() {
  },
}
</script>

<style lang="stylus">
</style>