<template>
  <v-card
    class="v-card">
    <v-card-title primary-title>
      <div class="blog-box">
        <div class="blog-date">投稿日：{{ myblog.date.substr(0, 10) }}</div>
        <h3 
          class="headline mb-0" 
          @click="detail(myblog)">{{ myblog.title }}</h3>
        <div class="blog-summary">{{ myblog.summary }}</div>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: {
    myblog: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {
    console.log('=== MyBlog ===')
    console.log(this.myblog)
  },
  methods: {
    detail: function(item) {
      // TODO: 日付フォーマット
      item.dataFormat = item.date.substr(0, 10)
      this.$router.push({ path: '/inspire', query: item })
    }
  }
}
</script>
<style scoped>
.v-card {
  margin-bottom: 5px;
}
.blog-box {
  width: 100%;
  background-color: #585858;
  padding: 15px 15px 0;
  color: #303030;
}
.blog-box h3 {
  color: #fff;
}
.blog-box h3:hover {
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.7;
  text-decoration: underline;
}
.blog-box .blog-date {
  margin: 10px 0;
}
.blog-box .blog-summary {
  margin: 10px 0;
}
.blog-box .blog-content {
  background-color: #bdbdbd;
  color: #424242;
  font-weight: bold;
  padding: 5px 5px 0;
}
</style>
