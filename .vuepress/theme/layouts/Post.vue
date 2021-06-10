<template>
  <div>
    <div class="grid grid-cols-11 gap-4">
      <div class="post-content-grid bg-white">
        <div class="border-b p-4">
          <div class="post-title">
            {{ $page.title }}
          </div>
          <div class="flex items-center justify-between post-desc mt-1 flex-none">
            <div class="flex items-center">
              <div class="flex items-center">
                <img class="mr-1" :src="$withBase('/date.png')"/>
                <div>{{ parseDate($page.frontmatter.date) }}</div>
              </div>
              <div class="flex items-center ml-3" v-if="$page.frontmatter.topic">
                <img class="mr-1" :src="$withBase('/topic.png')"/>
                <router-link class="hover-a" :to="'/topic/'+$page.frontmatter.topic">
                  {{ $page.frontmatter.topic }}
                </router-link>
              </div>
            </div>
            <div class="flex items-center" v-if="$page.frontmatter.tags">
              <router-link class="post-tag"
                           :to="'/tag/'+item"
                           v-for="(item, index) in $page.frontmatter.tags"
                           :key="index">
                {{ item }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="px-4 markdown-body">
          <Content/>
        </div>
      </div>
      <div class="col-span-2 bg-white p-4">
        <div style="height: 100vh; position: sticky; top: 0">
          <div
              class="truncate"
              v-for="(item, index) in $page.headers"
              :key="index"
              :class="'level-' + item.level">
            <a class="sidebar-link" :href="'#' + item.slug">
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: "Post",
  mounted() {
    console.log(this)
  },
  methods: {
    parseDate(date) {
      return dayjs(date).format("YYYY-MM-DD");
    }
  }
}
</script>

<style lang="stylus">

</style>