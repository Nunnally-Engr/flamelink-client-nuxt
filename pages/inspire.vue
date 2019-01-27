<template>
  <v-layout>
    <v-flex 
      xs12
      sm8 
      offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div class="blog-box">
            <div class="blog-date">投稿日：{{ detail.dataFormat }}</div>
            <h3 
              class="headline mb-0">{{ detail.title }}</h3>
            <div 
              class="blog-content" 
              v-html="detail.content"/>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      detail: ''
    }
  },
  async created() {
    this.detail = await this.$route.query
  }
}
</script>
