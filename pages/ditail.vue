<template>
  <v-layout>
    <v-flex 
      xs12
      sm8 
      offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div class="blog-box">
            <div class="blog-date">投稿日：{{ ditail.dataFormat }}</div>
            <h3 
              class="headline mb-0">{{ ditail.title }}</h3>
            <div 
              class="blog-content" 
              v-html="ditail.content"/>
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
      ditail: ''
    }
  },
  async created() {
    this.ditail = await this.$route.query
  }
}
</script>
<style scoped>
</style>
