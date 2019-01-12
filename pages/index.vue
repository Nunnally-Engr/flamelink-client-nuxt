<template>
  <v-layout>
    <v-flex 
      xs12
      sm8 
      offset-sm3>
      <v-card
        v-for="mypost in myblog" 
        :key="mypost.id"
        class="v-card">
        <!-- <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" 
          aspect-ratio="2.75"/> -->
        <v-card-title primary-title>
          <div class="blog-box">
            <div class="blog-date">投稿日：{{ mypost.date.substr(0, 10) }}</div>
            <h3 
              class="headline mb-0" 
              @click="detail(mypost)">{{ mypost.title }}</h3>
            <div class="blog-summary">{{ mypost.summary }}</div>
            <!-- HTMLタグをそのまま表示させたい場合 -->
            <!-- <div 
              class="blog-content" 
              v-html="mypost.content"/> -->
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  async asyncData({ app }) {
    try {
      const myblog = await app.flamelink.content.get('myblog', {
        populate: ['image']
      })
      return { myblog }
    } catch (err) {
      console.log(err)
      return { myblog: [] }
    }
  },
  methods: {
    detail: function(item) {
      // TODO: 日付フォーマット
      item.dataFormat = item.date.substr(0, 10)
      this.$router.push({ path: '/ditail', query: item })
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
