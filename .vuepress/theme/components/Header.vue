<template>

  <div :style="'background-image: url('+$withBase('/bg.jpg')+');'" class="border-b bg-cover bg-center">
    <div class="container mx-auto flex justify-between items-center py-4">
      <div class="flex items-center">
        <router-link class="flex items-center" to="/">
          <img :src="$withBase('/logo.png')" class="he-logo"/>
          <div class="nav-p text-white">{{ $site.title }}</div>
        </router-link>
        <div v-if="$page.frontmatter.layout !== 'Home'" class="pl-4">
          <span class="text-white">|</span>
          <SearchBox class="pl-4"/>
        </div>
      </div>
      <div class="flex items-center">
        <router-link class="" to="/post" class="flex items-center nav-link">
          <img :src="$withBase('/post.png')" class="he-icon"/>
          <p class="nav-p">博客文章</p>
        </router-link>
        <a href="https://github.com/lufuhu" target="_blank" class="flex items-center nav-link">
          <img :src="$withBase('/github.png')" class="he-icon"/>
          <p class="nav-p">GitHub</p>
        </a>
      </div>
    </div>
    <div v-if="$page.frontmatter.layout === 'Home'" class="home-search flex justify-center">
      <SearchBox/>
    </div>
  </div>
</template>
<script>
import SearchBox from '@SearchBox'

export default {
  name: "Header",
  components: {SearchBox},
  mounted() {
    console.log(this)
  }
}
</script>
<style scoped>
.he-logo {
  width: 2.5rem;
  height: 2.5rem;
}

.he-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.nav-link {
  margin-left: 1rem;
  background-color: rgba(10, 10, 1, 0.2);
  border-radius: 1rem;
  padding: 0.3rem 0.9rem;
  font-size: 12px;
  color: #ffffff;
  height: 1.5rem;
}
</style>