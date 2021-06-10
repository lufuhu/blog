<template>
  <div>
    <div>
      <div class="border-b text-center text-xl mt-3 mb-8 pb-5">话题</div>
      <div class="grid gap-4 topic-grid">
        <div v-for="(item, index) in $topic.list" :key="index" class="bg-white">
          <div class="flex items-center justify-between border-b px-4 py-3 text-sm text-gray-600">
            <div>{{ item.name }}({{ item.pages.length }})</div>
            <router-link class="hover-a" :to="item.path">更多</router-link>
          </div>
          <div class="px-4 py-3">
            <div
                class="truncate mb-3 hover-a"
                v-for="(item1, index1) in item.pages"
                :key="index1"
                v-if="index1 < 5"
            >
              <router-link :to="item1.path">{{ item1.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="border-b text-center text-xl mt-10 mb-8 pb-5">标签</div>
      <div class="flex flex-wrap">
        <router-link
            v-for="(item, index) in $tag.list"
            :key="index"
            :to="item.path"
            class="text-white bg-gray-600 rounded-full text-xs px-5 py-2 m-2 hover-a">
          {{ item.name }}({{ item.pages.length }})
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  mounted() {
  }
}
</script>

<style scoped>

</style>