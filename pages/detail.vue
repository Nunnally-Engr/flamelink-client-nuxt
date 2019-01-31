<template>
  <v-layout>
    <div class="single-header-content-inner">
      <h1 class="single-header-title single-header-title-margin">{{ detail.title }}</h1>

      <div class="single-header-content-date">{{ detail.dataFormat }}</div>

      <div class="single-header-content-labels">
        <a 
          href 
          class="categorylabel">Firebase</a>
        <a 
          href 
          class="categorylabel">Flamelink</a>
      </div>
      <div class="single-header-media">
        <img 
          :src="featuredImageUrl" 
          class="single-header-media-img is-loaded" 
          alt>
      </div>
      <div 
        class="single-body single-body-margin" 
        v-html="detail.content" />
    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      detail: '',
      isDisplayFlg: false,
      featuredImageUrl: ''
    }
  },
  computed: {},
  async created() {
    this.detail = await this.$route.query
    this.featuredImageUrl = await this.detail.featuredImage[0].url
    this.isDisplayFlg = true
  },
  methods: {}
}
</script>
<style scoped>
.single-header-content-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding: 35px 30px 24px 34px;
}
.single-header-series {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: -19px 0 13px;
  color: inherit;
}
a {
  text-decoration: none;
}
.single-header-title-margin {
  margin-bottom: 26px;
}
.single-header-title {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.05rem;
}
.single-header-content-date {
  display: block;
  margin: 0 auto 0 0;
  font-size: 16px;
  color: #666;
  line-height: 1;
  letter-spacing: 0.14rem;
}
.single-header-content-labels {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 7px 0 0;
}
.single-header-content .categorylabel {
  margin-top: 7px;
  margin-right: 10px;
}
.categorylabel {
  display: inline-block;
  padding: 4px 12px 3px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  color: #666;
  border-radius: 20px;
  border: 1px solid #666;
  -webkit-transition: color 0.25s ease, background 0.25s ease;
  transition: color 0.25s ease, background 0.25s ease;
  overflow: hidden;
}
.categorylabel {
  opacity: 1;
}
.single-header-media {
  display: block;
  margin: 20px 0 0;
  text-align: center;
  width: 100%;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}
.single-header-media-img.is-loaded {
  height: 250px;
  object-fit: cover;
  opacity: 1;
}
.single-header-media-img {
  max-width: 100%;
  width: 100%;
  height: auto;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}
.single-body {
  width: 100%;
}
.single-body,
.single-body blockquote {
  font-size: 16px;
  line-height: 2.3;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .single-body {
    padding: 0 10px;
    font-size: 15px;
    line-height: 1.8;
  }
}

.single-body:after {
  content: '';
  display: block;
  clear: both;
}

.single-body h2 {
  margin: 73px 0 15px;
  padding: 5px 0;
  font-size: 28px;
  font-weight: 700;
  border-bottom: 2px solid #181818;
}

@media screen and (max-width: 768px) {
  .single-body h2 {
    margin: 41px 0 22px;
    padding: 8px 0;
    font-size: 22px;
    line-height: 1.5;
  }
}

.single-body h3 {
  margin: 56px 0 20px;
  padding: 13px 28px 12px;
  font-size: 21px;
  font-weight: 700;
  background: #f3f3f3;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .single-body h3 {
    margin: 25px 0 18px;
    padding: 16px 10px 15px;
    font-size: 20px;
    border-radius: 4px;
  }
}

.single-body h4 {
  margin: 34px 0 11px;
  padding: 0 0 0 16px;
  position: relative;
  font-size: 20px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .single-body h4 {
    margin: 32px 0 11px;
    padding: 0 0 0 16px;
    font-size: 18px;
  }
}

.single-body h4:before {
  position: absolute;
  top: 11px;
  left: 0;
  display: block;
  content: '';
  width: 4px;
  height: calc(100% - 22px);
  background: #181818;
  border-radius: 3px;
}

@media screen and (max-width: 768px) {
  .single-body h4:before {
    top: 5px;
    height: calc(100% - 10px);
  }
}

.single-body p {
  margin: 0 0 20px;
}

@media screen and (max-width: 768px) {
  .single-body p {
    margin: 0 0 10px;
  }
}

.single-body li,
.single-body p > img {
  margin: 20px 0 0;
}

@media screen and (max-width: 768px) {
  .single-body p > img {
    margin: 10px 0 0;
  }
}

.single-body a {
  text-decoration: underline;
  color: #33bad2;
}

.single-body a:hover {
  color: #6bddf2;
  text-decoration: none;
}

.recruit-single-body strong,
.single-body strong {
  font-weight: 700;
}

.recruit-single-body em,
.single-body em {
  font-style: italic;
}

.single-body img {
  max-width: 100%;
  height: auto;
}

.single-body pre,
.single-body > img {
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .single-body > img {
    margin: 10px 0;
  }
}

.single-body blockquote {
  position: relative;
  margin: 33px 0;
  padding: 22px 20px 20px 57px;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .single-body blockquote {
    margin: 10px 0;
    padding: 17px 27px 16px 32px;
    font-size: 15px;
    line-height: 1.8;
  }
}

.single-body blockquote:before {
  display: block;
  content: '\e90e';
  position: absolute;
  top: 22px;
  left: 28px;
  font-size: 15px;
  font-family: 'lig-icon';
  color: #181818;
}

@media screen and (max-width: 768px) {
  .single-body blockquote:before {
    top: 17px;
    left: 11px;
    font-size: 14px;
  }
}

.single-body blockquote p {
  margin: 0;
}

.recruit-single-body hr,
.single-body hr {
  margin: 1em 0;
  height: 1px;
  border-top: 1px solid;
}

.single-body ol,
.single-body table,
.single-body ul {
  margin: 20px 0 36px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .single-body ol,
  .single-body ul {
    margin: 10px 0 28px;
  }

  .single-body li {
    margin: 10px 0 0;
  }
}

.single-body li ol,
.single-body li ul {
  margin-left: 10px;
}

@media screen and (max-width: 768px) {
  .single-body li ol,
  .single-body li ul {
    margin-left: 7px;
  }
}

.single-body li ol li,
.single-body li ul li {
  margin-top: 12px;
}

.single-body ul,
.single-body ul > li {
  list-style-type: none;
}

.single-body ul > li {
  position: relative;
  padding: 0 0 0 25px;
}

@media screen and (max-width: 768px) {
  .single-body ul > li {
    padding: 0 0 0 20px;
  }
}

.single-body ul > li:before {
  display: block;
  content: '';
  position: absolute;
  top: 9px;
  left: 1px;
  width: 6px;
  height: 6px;
  background: #181818;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .single-body ul > li:before {
    top: 7px;
    left: 0;
    width: 9px;
    height: 9px;
  }
}

.single-body ol {
  list-style-type: decimal;
  padding: 0 0 0 23px;
}

.single-body ol > li {
  padding: 0 0 0 4px;
}

.single-body iframe {
  max-width: 100% !important;
  margin: 0 auto;
  display: block;
}

.single-body .wp-caption {
  width: 100% !important;
  margin-bottom: 10px;
}

.single-body .wp-caption img,
.single-footer-share-item-feedly img,
.single-footer-share-item-line img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .single-body .wp-caption {
    margin-bottom: 5px;
  }
}

.single-body .wp-caption .wp-caption-text {
  margin: 10px 0 20px;
  font-size: 0.8rem;
}

@media screen and (max-width: 768px) {
  .single-body .wp-caption .wp-caption-text {
    margin: 5px 0 10px;
  }
}

.single-body .wp-caption-text {
  text-align: center;
}

.single-body .aligncenter {
  clear: both;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.single-body .alignright {
  display: inline;
  /* float: right; */
  margin-left: 20px;
  /* margin-bottom: 20px; */
}

@media screen and (max-width: 768px) {
  .single-body .alignright {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.single-body .alignleft {
  display: inline;
  /* float: left; */
  margin-right: 20px;
  /* margin-bottom: 20px; */
}

@media screen and (max-width: 768px) {
  .single-body .alignleft {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}

.single-body .pre {
  margin: 30px 0;
}

.single-body table {
  width: 100%;
  margin: 30px 0;
  font-size: 15px;
  line-height: 1.7;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  table-layout: fixed;
  word-break: break-all;
  word-wrap: break-word;
}

@media screen and (max-width: 768px) {
  .single-body table {
    width: 100% !important;
  }
}

.single-body tr {
  border-top: 1px solid #e1e1e1;
  min-height: 1px;
}

.single-body td,
.single-body th {
  padding: 26px 24px;
  border-left: 1px solid #e1e1e1;
}

@media screen and (max-width: 768px) {
  .single-body td,
  .single-body th {
    padding: 16px 10px;
    line-height: 1.5;
    font-size: 14px;
  }
}

.single-body td:first-child,
.single-body th:first-child {
  border-left-width: 0;
}

.single-body th {
  font-weight: 700;
  background-color: #f3f3f3;
}

.single-body th:first-of-type {
  width: 199px;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .single-body th:first-of-type {
    width: 117px;
  }
}

.single-body .iframe-wrapper {
  position: relative;
  width: 100%;
  margin: 20px 0;
  padding-top: 56.25%;
}

@media screen and (max-width: 768px) {
  .single-body .iframe-wrapper {
    min-height: 305px;
  }
}

.single-body .iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.single-body .button {
  min-width: 30%;
  line-height: 1.5;
  color: #181818;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .single-body .button {
    min-width: 30%;
    color: #fff;
  }
}

.single-body .button:hover {
  color: #fff;
}

.single-body dl {
  border: 1px solid #ddd;
  margin: 33px 0;
  padding: 28px 33px;
}

@media screen and (max-width: 768px) {
  .single-body dl {
    margin: 20px 0;
    padding: 15px 15px 20px;
  }
}

.single-body dt {
  display: inline-block;
  background: #fff;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.055em;
  position: relative;
  top: -44px;
  left: -12px;
}

@media screen and (max-width: 768px) {
  .single-body dt {
    font-size: 15px;
    top: -28px;
    left: 0;
  }
}

.single-body dd {
  position: relative;
  margin-top: -36px;
}

@media screen and (max-width: 768px) {
  .single-body dd {
    margin-top: -22px;
  }
}

.single-body dd + dd {
  margin-top: 0;
}

.single-body pre dl,
.single-body pre h2,
.single-body pre h3,
.single-body pre li,
.single-body pre p {
  white-space: pre-wrap;
  font-family: 'Montserrat', '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
}

.single-body .cp_embed_wrapper {
  margin: 20px 0;
}

.single-body-margin {
  margin-top: 60px;
}

@media screen and (max-width: 768px) {
  .single-body-margin {
    margin-top: 9px;
  }
}
</style>
