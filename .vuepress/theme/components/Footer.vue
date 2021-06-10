<template>
  <div class="flex flex-col items-center justify-center py-4 border-t footer">
    <div class="flex">
      <div class="fc-item flex items-center justify-center flex-col">
        <div class="fc-item-title">博文</div>
        <div>{{ $site.pages.length }}</div>
      </div>
      <div class="fc-item flex items-center justify-center flex-col">
        <div class="fc-item-title">话题</div>
        <div>{{ $topic.pages.length }}</div>
      </div>
      <div class="fc-item flex items-center justify-center flex-col">
        <div class="fc-item-title">标签</div>
        <div>{{ $tag.list.length }}</div>
      </div>
    </div>
    <div class="py-4 mb-4">
      由 <a href="https://www.lufuhu.com/" target="_blank" class="text-white hover-a">Lufuhu</a> 设计和编码 ❤
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer {
  background: #1b1c1d;
  color: rgb(137, 137, 140);
  font-size: 0.9em;
}

.fc-item {
  background-color: rgb(137, 137, 140);
  border-radius: 50%;
  font-size: 12px;
  color: #ffffff;
  width: 5rem;
  height: 5rem;
  margin: 2rem 3rem;
}
.fc-item-title{
  font-size: 18px;
  margin-bottom: 0.25rem;
}
</style>