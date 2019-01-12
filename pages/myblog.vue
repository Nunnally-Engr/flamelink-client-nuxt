<template>
  <v-layout>
    <v-flex 
      xs12
      sm8 
      offset-sm3>
      <v-card
        v-for="mypost in myblog" 
        :key="mypost.id">
        <!-- <v-img 
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" 
          aspect-ratio="2.75"/> -->
        <v-card-title primary-title>
          <div class="blog-box">
            <h3 class="headline mb-0">{{ mypost.title }}</h3>
            <div class="blog-date">投稿日：{{ mypost.date.substr(0, 10) }}</div>
            <div>{{ mypost.summary }}</div>
            <!-- HTMLタグをそのまま表示させたい場合 -->
            <div 
              class="blog-content" 
              v-html="mypost.content"/>
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn 
            flat 
            color="orange">Share</v-btn>
          <v-btn 
            flat 
            color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
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
  }
}
</script>
<style scoped>
.blog-box {
  width: 100%;
  background-color: #585858;
  padding: 15px 15px 0;
}
.blog-box h3 {
  border-bottom: 2px solid #848484;
}
.blog-box .blog-date {
  margin: 10px 0;
  text-align: right;
}
.blog-box .blog-content {
  background-color: #bdbdbd;
  color: #424242;
  font-weight: bold;
  padding: 5px 5px 0;
}
</style>
