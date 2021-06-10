<template>
  <div>
    <div class="grid gap-4 post-item-grid">
      <div class="bg-white p-4 flex flex-col" v-for="(item,index) in $pagination.pages" :key="index">
        <router-link class="post-title flex-none hover-a" :to="item.path">
          {{ item.title }}
        </router-link>
        <div class="post-desc py-2 flex-1">{{ item.frontmatter.description }}</div>
        <div class="flex items-center justify-between post-desc mt-2 flex-none">
          <div class="flex items-center">
            <div class="flex items-center">
              <img class="mr-1" :src="$withBase('/date.png')"/>
              <div>{{ parseDate(item.frontmatter.date) }}</div>
            </div>
            <div class="flex items-center ml-3" v-if="item.frontmatter.topic">
              <img class="mr-1" :src="$withBase('/topic.png')"/>
              <router-link class="hover-a" :to="'/topic/'+item.frontmatter.topic">
                {{ item.frontmatter.topic }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center" v-if="item.frontmatter.tags">
            <router-link class="post-tag"
                         :to="'/tag/'+item1"
                         v-for="(item1, index1) in item.frontmatter.tags"
                         :key="index1">
              {{ item1 }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <Pagination/>
    </div>
  </div>
</template>

<script>
import {Pagination} from "@vuepress/plugin-blog/lib/client/components";
import dayjs from 'dayjs';

export default {
  name: "PostList",
  components: {Pagination},
  methods: {
    parseDate(date) {
      return dayjs(date).format("YYYY-MM-DD");
    }
  }
}
</script>

<style scoped>

</style>