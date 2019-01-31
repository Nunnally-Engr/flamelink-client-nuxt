<template>
  <div class="articlelist">
    <article class="articlelist-item">
      <a 
        class="articlelist-item-inner" 
        @click="detail(myblog)">
        <div class="articlelist-media">
          <div class="media">
            <div class="media-inner">
              <div
                :style="{ backgroundImage: `url(${myblog.featuredImage[0].url})` }"
                class="media-image media-list is-loaded"
              />
            </div>
          </div>
        </div>
        <div class="articlelist-content">
          <time 
            class="articlelist-date" 
            datetime="2019-01-29">{{ myblog.date.substr(0, 10) }}</time>
          <h2 class="articlelist-title">{{ myblog.title }}</h2>
          <div class="articlelist-footer">
            <div class="prlabel">{{ tag(myblog.tag) }}</div>
            <div class="like">
              <font-awesome-icon icon="heart"/>
              <span class="like-counter">999</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  </div>
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
      this.$router.push({ path: '/detail', query: item })
    },
    tag: function(tag) {
      let unionTag = ''
      for (let i = 0; i < tag.length; i++) {
        // 繰り返し処理
        unionTag += ' ' + tag[i]
      }
      return unionTag
    }
  }
}
</script>
<style scoped>
.articlelist-title {
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1.6;
}

.single-related-articlelist-link:hover .single-related-articlelist-media:after,
a:hover .media-inner:after {
  opacity: 0.25;
}

.single-related-articlelist-media:after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.single-related-articlelist-prlabel,
.single-related-prlabel {
  display: inline-block;
  padding: 1px 14px 1px 16px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  border-radius: 12px;
  background-color: #eaeaea;
}

@media screen and (max-width: 768px) {
  .single-related-articlelist-prlabel,
  .single-related-prlabel {
    padding: 0 7px;
    font-size: 10px;
    font-weight: 400;
  }
}

.single-related-articlelist {
  position: relative;
}

.single-related-articlelist-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.single-related-articlelist-media {
  position: relative;
  width: 18.5%;
}

@media screen and (max-width: 768px) {
  .single-related-articlelist-media {
    width: 105px;
    max-width: 105px;
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
  }
}

.single-related-articlelist-media-img {
  width: 100%;
  height: auto;
  padding-top: 66%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.single-related-articlelist-content {
  width: 81.5%;
  padding: 0 0 0 23px;
}

@media screen and (max-width: 768px) {
  .single-related-articlelist-content {
    width: 100%;
    max-width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 0 0 13px;
    margin-top: -5px;
  }
}

.single-related-articlelist-time {
  margin: 0 10px 0 6px;
  font-size: 12px;
  color: #666;
  letter-spacing: 0.15em;
}

@media screen and (max-width: 768px) {
  .single-related-articlelist-time {
    margin: 0 7px 0 0;
    font-size: 10px;
  }
}

.single-related-articlelist-title {
  margin: 8px 0 0;
  font-size: 16px;
  color: #181818;
  letter-spacing: 0.07em;
  line-height: 1.65;
}

@media screen and (max-width: 768px) {
  .single-related-articlelist-title {
    margin: 5px 0 0;
    font-size: 12px;
  }
}

.media,
.media-inner {
  position: relative;
  display: block;
}

.media-inner {
  overflow: hidden;
}

.media-inner:after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.media-image {
  width: 100%;
  height: auto;
  padding-top: 66.67%;
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  opacity: 1;
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
}

@media screen and (max-width: 768px) {
  .media-image {
    height: auto;
    padding-top: 67%;
  }
}

a:hover .media-image {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.media-list {
  width: 100%;
  height: auto;
  padding-top: 66.67%;
}

@media screen and (max-width: 768px) {
  .media-list {
    width: 100%;
    height: auto;
    padding-top: 66.7%;
  }
}

.media-movie {
  position: relative;
  background-size: 120% auto;
}

.media-movie-horizontal {
  width: 100%;
  height: auto;
  padding-top: 56.3%;
}

@media screen and (max-width: 768px) {
  .media-movie-horizontal {
    width: 100%;
    height: auto;
    padding-top: 56%;
  }
}

.media-sub {
  width: 100%;
  height: auto;
  padding-top: 40%;
}

@media screen and (max-width: 768px) {
  .media-sub {
    height: auto;
    padding-top: 41%;
  }
}

.media-introduction {
  width: 100%;
  height: auto;
  padding-top: 139.3%;
  -webkit-transition: padding 0.25s ease, -webkit-transform 0.5s ease;
  transition: padding 0.25s ease, transform 0.5s ease;
  transition: padding 0.25s ease, transform 0.5s ease,
    -webkit-transform 0.5s ease;
}

@media screen and (max-width: 768px) {
  .media-introduction {
    width: 100%;
    height: auto;
    padding-top: 171px;
  }
}

.media-library {
  width: 100%;
  padding-top: 67%;
}

.media-movie-icon {
  box-sizing: border-box;
  display: block;
  position: absolute;
  bottom: 7px;
  right: 6px;
  color: #fff;
  width: 32px;
  height: 32px;
  padding: 10px 0 0 4px;
  font-size: 13px;
  text-align: center;
  border-radius: 50%;
  background-color: #181818;
}

@media screen and (max-width: 768px) {
  .media-movie-icon {
    color: #fff;
    border: 2px solid #000;
    padding-top: 8px;
    top: 50%;
    bottom: auto;
    left: 50%;
    width: 36px;
    height: 36px;
    font-size: 15px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.media-tag {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
}

.media-tag.media-tag-best {
  top: -3px;
  left: -3px;
  width: 80px;
  height: 80px;
  /* background-image: url(../images/label-best-top.png); */
  background-size: 80px 80px;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 0;
}

@media screen and (max-width: 768px) {
  .media-tag.media-tag-best {
    top: -1px;
    left: -1px;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }
}

.media-tag.media-tag-new {
  top: -8px;
  right: -8px;
  width: 60px;
  height: 42px;
  margin: 0;
  padding: 8px 0 8px 3px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background: #181818;
  border: 2px solid #fff;
}

@media screen and (max-width: 768px) {
  .media-tag.media-tag-new {
    top: -3px;
    right: -3px;
    -webkit-transform: scale(0.45);
    transform: scale(0.45);
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }
}

.media-tag.media-tag-pr {
  top: -8px;
  right: -8px;
  height: 42px;
  margin: 0;
  padding: 9px 10px 9px 12px;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background-color: rgba(102, 102, 102, 0.86);
  border: 2px solid #fff;
}

@media screen and (max-width: 768px) {
  .media-tag.media-tag-pr {
    top: -3px;
    right: -3px;
    -webkit-transform: scale(0.45);
    transform: scale(0.45);
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }
}

.author {
  display: inline-block;
}

.author,
.author a {
  color: inherit;
}

.author-line {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.author-line .author-image {
  margin: 0;
  -webkit-flex-basis: 46px;
  -ms-flex-preferred-size: 46px;
  flex-basis: 46px;
  max-width: 46px;
}

@media screen and (max-width: 768px) {
  .author-line .author-image {
    -webkit-flex-basis: 22.5px;
    -ms-flex-preferred-size: 22.5px;
    flex-basis: 22.5px;
    max-width: 22.5px;
    width: 22.5px;
    height: 22.5px;
    border-width: 1px;
  }
}

.author-line .author-name {
  margin: 0 0 0 10px;
}

@media screen and (max-width: 768px) {
  .author-line-mobile {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .author-line-mobile .author-image {
    margin: 0;
    -webkit-flex-basis: 22.5px;
    -ms-flex-preferred-size: 22.5px;
    flex-basis: 22.5px;
    max-width: 22.5px;
    width: 22.5px;
    height: 22.5px;
    border-width: 1px;
  }

  .author-line-mobile .author-name {
    margin: 0 0 0 10px;
  }
}

.author-single {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .author-single {
    margin-left: 0;
  }
}

.author-single .author-image {
  margin: 0;
  -webkit-flex-basis: 62px;
  -ms-flex-preferred-size: 62px;
  flex-basis: 62px;
  max-width: 62px;
  width: 62px;
  height: 62px;
}

@media screen and (max-width: 768px) {
  .author-single .author-image {
    -webkit-flex-basis: 39px;
    -ms-flex-preferred-size: 39px;
    flex-basis: 39px;
    max-width: 39px;
    width: 39px;
    height: 39px;
    border-width: 1px;
  }
}

.author-single .author-name {
  margin: 0 0 0 10px;
}

.author-single:hover .author-image {
  opacity: 0.42;
}

.author-single:hover .author-name {
  color: #33bad2;
}

.author-best {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.author-best .author-image {
  margin: 0;
  -webkit-flex-basis: 46px;
  -ms-flex-preferred-size: 46px;
  flex-basis: 46px;
  max-width: 46px;
}

@media screen and (max-width: 768px) {
  .author-best .author-image {
    -webkit-flex-basis: 22.5px;
    -ms-flex-preferred-size: 22.5px;
    flex-basis: 22.5px;
    max-width: 22.5px;
    width: 22.5px;
    height: 22.5px;
    border-width: 1px;
  }
}

.author-best .author-name {
  margin: 3px 0 0 8px;
  letter-spacing: 0.03em;
}

@media screen and (max-width: 768px) {
  .author-best .author-name {
    margin: 3px 0 0 11px;
  }
}

.author-image {
  display: block;
  margin: -25px 0 5px;
  width: 46px;
  height: 46px;
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.24);
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

@media screen and (max-width: 768px) {
  .author-image {
    width: 42px;
    height: 42px;
    margin: -24px 0 0;
  }
}

.author-name {
  display: inline-block;
  margin: 0 0 0 4px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  color: #181818;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .author-name {
    margin: 0 0 0 7px;
    font-size: 10px;
    font-weight: 400;
  }
}

.author-list {
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  padding-bottom: 20px;
}

.author-list-container {
  position: relative;
  padding: 54px 71px 0;
}

@media screen and (max-width: 768px) {
  .author-list-container {
    padding: 32px 32px 0;
  }
}

@media screen and (max-width: 320px) {
  .author-list-container {
    padding: 20px 20px 0;
  }
}

.author-list-slide {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.author-list-item {
  display: block;
  max-width: 33.33%;
  -webkit-flex-basis: 33.33%;
  -ms-flex-preferred-size: 33.33%;
  flex-basis: 33.33%;
  color: inherit;
  text-align: center;
  padding: 0 0 33px;
}

@media screen and (max-width: 768px) {
  .author-list-item {
    padding: 0 0 20px;
  }
}

.author-list-item-inner,
.author-list-next i,
.author-list-prev i {
  display: inline-block;
}

.author-list-image {
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 13px;
}

@media screen and (max-width: 768px) {
  .author-list-image {
    width: 85px;
    height: 85px;
    margin-bottom: 6px;
  }
}

@media screen and (max-width: 320px) {
  .author-list-image {
    width: 75px;
    height: 75px;
  }
}

.author-list-image img,
.authorlay-item img {
  width: 100%;
  height: auto;
}

.author-list-position {
  display: block;
  margin-bottom: 1px;
  font-size: 11px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .author-list-position {
    font-size: 10px;
  }
}

.author-list-name {
  display: block;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .author-list-name {
    font-size: 10px;
  }
}

.author-list-next,
.author-list-prev {
  position: absolute;
  top: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  z-index: 1;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .author-list-next,
  .author-list-prev {
    font-size: 16px;
  }
}

.author-coin-item.is-hide,
.author-list-navigation.is-hide,
.author-list-next.is-hide,
.author-list-prev.is-hide {
  display: none;
}

.author-list-prev {
  left: 30px;
}

@media screen and (max-width: 768px) {
  .author-list-prev {
    left: -3px;
  }
}

.author-list-next {
  right: 30px;
}

@media screen and (max-width: 768px) {
  .author-list-next {
    right: -3px;
  }
}

.author-list-next i {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.author-list-navigation {
  position: relative;
  margin: 16px 30px 0 68px;
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .author-list-navigation {
    margin: 16px 30px 0 32px;
    font-size: 11px;
  }
}

.author-list-navigation:after {
  position: absolute;
  top: 50%;
  right: 0;
  display: block;
  content: '';
  width: calc(100% - 64px);
  height: 1px;
  background-color: #c5c5c5;
}

@media screen and (max-width: 768px) {
  .author-list-navigation:after {
    width: calc(100% - 34px);
  }
}

.author-list-more {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  height: 20px;
  margin: 7px 27px 0 0;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .author-list-more {
    font-size: 12px;
  }
}

.author-list-more-icon {
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .author-list-more-icon {
    font-size: 16px;
  }
}

.authorlay {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -12px;
}

@media screen and (max-width: 768px) {
  .authorlay {
    margin: 0 -8px;
  }
}

.authorlay-margin {
  margin-bottom: 29px;
}

@media screen and (max-width: 768px) {
  .authorlay-margin {
    margin-bottom: 32px;
  }
}

.authorlay-item {
  max-width: 33.3333%;
  -webkit-flex-basis: 33.3333%;
  -ms-flex-preferred-size: 33.3333%;
  flex-basis: 33.3333%;
  padding: 12px;
}

@media screen and (max-width: 768px) {
  .authorlay-item {
    padding: 8px;
  }
}

.author a,
.authorlay-item a {
  display: block;
}

.authorlay-item img {
  border-radius: 50%;
  overflow: hidden;
}

.author-coin {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
}

.author-coin-item {
  display: block;
  max-width: 20%;
  -webkit-flex-basis: 20%;
  -ms-flex-preferred-size: 20%;
  flex-basis: 20%;
  padding: 0 0 45px;
}

@media screen and (max-width: 768px) {
  .author-coin-item {
    max-width: 50%;
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    padding: 0 0 16px;
  }
}

.author-coin-item.is-active .author-coin-item-inner {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.author-coin-item.is-active .author-coin-thumbnail-hover {
  box-shadow: 0 3px 7px 0 rgba(24, 24, 24, 0.54);
}

.author-coin-item.is-active .author-coin-item-hover {
  opacity: 1;
}

.author-coin-item a {
  display: block;
  color: inherit;
}

.author-coin-item-inner {
  position: relative;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

@media screen and (max-width: 768px) {
  .author-coin-item-inner {
    -webkit-transition: none;
    transition: none;
  }
}

.author-coin-item-default,
.author-coin-item-hover {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.author-coin-item-default {
  -webkit-transform: translate3d(0, 0, 2px);
  transform: translate3d(0, 0, 2px);
}

.author-coin-item-hover {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  -webkit-transform: translate3d(0, 0, 1px) rotateY(180deg);
  transform: translate3d(0, 0, 1px) rotateY(180deg);
  opacity: 0;
  -webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transition: transform 0.25s ease, opacity 0.25s ease,
    -webkit-transform 0.25s ease;
}

@media screen and (max-width: 768px) {
  .author-coin-item-hover {
    opacity: 1;
  }
}

.browser-ie11 .author-coin-item-hover {
  -webkit-transform: none;
  transform: none;
}

.browser-ie11 .author-coin-item-hover .author-coin-nickname,
.browser-ie11 .author-coin-item-hover .author-coin-thumbnail-wrap {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.author-coin-thumbnail {
  display: block;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease, box-shadow 0.25s ease;
  transition: opacity 0.25s ease, box-shadow 0.25s ease;
}

@media screen and (max-width: 768px) {
  .author-coin-thumbnail {
    width: 100%;
    height: auto;
    min-height: 90px;
  }
}

.author-coin-thumbnail.is-loaded {
  opacity: 1;
}

.author-coin-thumbnail-wrap {
  padding: 10px 20px 0;
}

@media screen and (max-width: 768px) {
  .author-coin-thumbnail-wrap {
    padding: 10px 20px 0;
  }
}

.author-coin-thumbnail-hover {
  border: 4px solid #fff;
  box-shadow: 0 0 0 0 rgba(24, 24, 24, 0.54);
}

.author-coin-title {
  display: block;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .author-coin-title {
    padding: 0 10px;
  }
}

.author-coin-title-position {
  display: block;
  margin: 15px 0 0;
  font-size: 14px;
  line-height: 1;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .author-coin-title-position {
    margin: 12px 0 0;
    font-size: 10px;
  }
}

.author-coin-title-name {
  display: block;
  margin: 13px 0 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .author-coin-title-name {
    margin: 6px 0 0;
    font-size: 12px;
  }
}

.author-coin-nickname {
  margin: 17px 0 0;
  width: 100%;
  height: 37px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .author-coin-nickname {
    margin: 9px 0 0;
    height: 20px;
  }
}

.author-coin-nickname img {
  display: inline-block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 37px;
}

@media screen and (max-width: 768px) {
  .author-coin-nickname img {
    max-height: 20px;
  }
}

.author-detail {
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
}

.author-detail-margin {
  margin: 81px 0 14px;
}

@media screen and (max-width: 768px) {
  .author-detail-margin {
    margin: 0;
  }
}

.author-detail-coin .author-detail-visual {
  max-width: 260px;
  -webkit-flex-basis: 260px;
  -ms-flex-preferred-size: 260px;
  flex-basis: 260px;
  padding-bottom: 68px;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-visual {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding-top: 25px;
    padding-bottom: 0;
    text-align: center;
  }
}

.author-detail-coin .author-detail-visual img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-visual img {
    display: inline-block;
    width: 120px;
    height: 120px;
  }
}

.author-detail-coin .author-detail-content-top {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-content-top {
    max-width: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }

  .author-detail-coin .author-detail-content {
    padding-top: 21px;
  }

  .author-detail-coin .author-detail-name:before {
    top: -40px;
  }
}

.author-detail-coin .author-detail-position {
  margin-top: 4px;
}

.author-detail-coin .author-detail-service {
  max-width: 328px;
  -webkit-flex-basis: 328px;
  -ms-flex-preferred-size: 328px;
  flex-basis: 328px;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-service {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.author-detail-coin .author-detail-info {
  width: 328px;
  left: auto;
  right: 0;
}

.author-detail-coin .author-detail-bottom {
  margin-top: -117px;
  padding-top: 80px;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-bottom {
    margin-top: 0;
    padding-top: 0;
  }
}

.author-detail-coin .author-detail-link {
  padding-top: 70px;
}

@media screen and (max-width: 768px) {
  .author-detail-coin .author-detail-link {
    padding-top: 0;
  }
}

.author-detail-header {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 1200px;
  -webkit-box-flex: 100%;
  -webkit-flex: 100%;
  -ms-flex: 100%;
  flex: 100%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .author-detail-header {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 100%;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
}

.author-detail-visual {
  max-width: 820px;
  -webkit-flex-basis: 820px;
  -ms-flex-preferred-size: 820px;
  flex-basis: 820px;
  padding: 0 0 20px;
}

@media screen and (max-width: 768px) {
  .author-detail-visual {
    padding: 0;
  }
}

.author-detail-visual img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .author-detail-visual {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.author-detail-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  position: relative;
  max-width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 0 0 64px;
  padding: 38px 0 40px;
}

@media screen and (max-width: 768px) {
  .author-detail-content {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin: 0;
    padding: 29px 0 0;
  }
}

.author-detail-content-top {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

.author-detail-name {
  position: relative;
  font-size: 34px;
}

@media screen and (max-width: 768px) {
  .author-detail-name {
    font-size: 24px;
    text-align: center;
  }
}

.author-detail-name:before {
  position: absolute;
  top: 50%;
  left: -112px;
  content: '';
  display: block;
  width: 83px;
  height: 1px;
  background-color: #181818;
}

@media screen and (max-width: 768px) {
  .author-detail-name:before {
    width: 1px;
    height: 36px;
    top: -49px;
    left: 50%;
  }
}

.author-detail-position {
  margin: 26px 0 0;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .author-detail-position {
    margin: 1px 0 0;
    font-size: 12px;
    text-align: center;
  }
}

.author-detail-service {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 28px -4px 0;
  list-style: none;
  font-size: 0;
  letter-spacing: 0;
}

@media screen and (max-width: 768px) {
  .author-detail-service {
    margin: 19px 0 0;
    padding: 0 24px;
  }
}

.author-detail-service-item {
  display: inline-block;
  opacity: 0.6;
}

.author-detail-service-item.is-active {
  opacity: 1;
}

.author-detail-service-title {
  display: block;
  margin: 3px 2px;
  padding: 2px 13px;
  border: 1px solid #181818;
  border-radius: 20px;
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .author-detail-service-title {
    margin: 3px 2px;
    padding: 3px 9px;
    font-size: 10px;
    line-height: 1;
  }
}

.browser-ie11 .author-detail-service-title {
  padding: 4px 13px 0;
}

@media screen and (max-width: 768px) {
  .browser-ie11 .author-detail-service-title {
    padding: 5px 9px 1px;
  }
}

.author-detail-info {
  position: absolute;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .author-detail-info {
    position: relative;
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 24px 0 0;
    padding: 19px 20px;
    background-color: #f3f3f3;
  }
}

.author-detail-sns {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 22px 0 0;
  list-style: none;
  font-size: 0;
  letter-spacing: 0;
}

@media screen and (max-width: 768px) {
  .author-detail-sns {
    margin: 0 19px 0 0;
  }
}

.author-detail-sns:before {
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -10px;
  content: '';
  display: block;
  width: 1px;
  height: 20px;
  background-color: #ccd4d6;
}

@media screen and (max-width: 768px) {
  .author-detail-sns:before {
    background-color: #ccd4d6;
  }
}

.author-detail-sns-item {
  display: inline-block;
  margin: 0 17px;
  color: #181818;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .author-detail-sns-item {
    margin: 0 22px;
  }
}

@media screen and (max-width: 320px) {
  .author-detail-sns-item {
    margin: 0 13px;
  }
}

.author-detail-sns-item:first-of-type {
  margin-left: 0;
}

.author-detail-sns-item a {
  display: inline-block;
  color: inherit;
}

.author-detail-sns-item .icon-facebook {
  font-size: 19px;
}

@media screen and (max-width: 768px) {
  .author-detail-sns-item .icon-facebook {
    font-size: 17px;
  }
}

.author-detail-sns-item .icon-twitter {
  font-size: 17px;
}

@media screen and (max-width: 768px) {
  .author-detail-sns-item .icon-twitter {
    font-size: 15px;
  }
}

.author-detail-sns-item .icon-instagram {
  display: block;
  font-size: 23px;
  -webkit-transform: translate(0, 3px);
  transform: translate(0, 3px);
}

@media screen and (max-width: 768px) {
  .author-detail-sns-item .icon-instagram {
    font-size: 19px;
    -webkit-transform: translate(0, 1px);
    transform: translate(0, 1px);
  }
}

.author-detail-count {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  max-width: 150px;
  -webkit-flex-basis: 150px;
  -ms-flex-preferred-size: 150px;
  flex-basis: 150px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .author-detail-count {
    max-width: 145px;
    -webkit-flex-basis: 145px;
    -ms-flex-preferred-size: 145px;
    flex-basis: 145px;
    font-size: 10px;
  }
}

.author-detail-count-title {
  margin-right: auto;
}

.author-detail-count-num {
  margin: 0 3px 0 0;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .author-detail-count-num {
    font-size: 18px;
  }
}

.author-detail-bottom {
  position: relative;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: -74px 0 0;
  padding: 105px 0 88px;
}

@media screen and (max-width: 768px) {
  .author-detail-bottom {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0;
    padding: 0 0 43px;
  }
}

.author-detail-bottom:before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
}

.author-detail-message {
  position: relative;
  max-width: 820px;
  -webkit-flex-basis: 820px;
  -ms-flex-preferred-size: 820px;
  flex-basis: 820px;
  margin: 0 0 0 auto;
}

@media screen and (max-width: 768px) {
  .author-detail-message {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    margin: 37px 0 0;
    padding: 0 10px;
  }
}

.author-detail-icon {
  width: 100%;
  height: auto;
  margin: 10px 0 0;
}

.author-detail-icon img,
.author-relatedness-section img {
  max-width: 100%;
  height: auto;
}

.author-detail-description {
  margin-top: 39px;
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .author-detail-description {
    margin: 22px 0 0;
    font-size: 14px;
  }
}

.author-detail-description a {
  color: #33bad2;
}

.author-detail-link {
  position: relative;
  max-width: 380px;
  -webkit-flex-basis: 380px;
  -ms-flex-preferred-size: 380px;
  flex-basis: 380px;
  margin: 0 auto 0 0;
  padding: 0 0 0 64px;
}

@media screen and (max-width: 768px) {
  .author-detail-link {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 9px 0 0;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    padding: 0 10px;
  }
}

.author-detail-link-title {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .author-detail-link-title {
    font-size: 12px;
  }
}

.author-detail-link-list {
  list-style: none;
}

.author-detail-link-item {
  margin: 20px 0 0;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .author-detail-link-item {
    margin: 15px 0 0;
    font-size: 12px;
  }
}

.author-detail-link-item-inner {
  position: relative;
  display: block;
  color: #37bbd3;
  padding-left: 30px;
}

.author-detail-link-item-inner:before {
  position: absolute;
  top: -2px;
  left: 0;
  display: block;
  content: '\e91a';
  font-family: 'lig-icon';
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .author-detail-link-item-inner:before {
    top: -3px;
    font-size: 15px;
  }
}

.author-detail-link-item-inner[target='_blank']:before {
  content: '\e90d';
}

.author-detail-name-en {
  position: absolute;
  bottom: -38px;
  right: 30px;
  font-size: 54px;
  font-weight: 700;
  letter-spacing: 0.13rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
  .author-detail-name-en {
    bottom: -18px;
    right: 5px;
    font-size: 28px;
  }
}

.author-relatedness {
  display: block;
  width: 1260px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .author-relatedness {
    width: 100%;
  }
}

.author-relatedness-margin {
  margin-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-margin {
    margin-top: -4px;
    margin-bottom: 0;
  }
}

.author-relatedness-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-section {
    padding: 0;
  }
}

.author-relatedness-section-margin {
  margin-top: 83px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-section-margin {
    margin-top: 40px;
  }
}

.author-relatedness-title {
  position: relative;
  max-width: 70%;
  -webkit-flex-basis: 70%;
  -ms-flex-preferred-size: 70%;
  flex-basis: 70%;
  padding: 0 0 0 26px;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-title {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0 0 0 10px;
    font-size: 18px;
  }
}

.author-relatedness-title:before {
  position: absolute;
  top: 4px;
  left: 0;
  content: '';
  display: block;
  width: 4px;
  height: calc(100% - 8px);
  background-color: #181818;
  border-radius: 10px;
}

.author-relatedness-more {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  max-width: 30%;
  -webkit-flex-basis: 30%;
  -ms-flex-preferred-size: 30%;
  flex-basis: 30%;
  font-size: 14px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .author-relatedness-more {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 9px 10px 0 0;
    font-size: 12px;
  }
}

.author-relatedness-more i {
  margin-left: 11px;
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .author-relatedness-more i {
    font-size: 19px;
  }
}

.author-relatedness-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .author-relatedness-list {
    margin: 0;
    border-top: 1px solid #ddd;
  }
}

.author-relatedness-list-margin {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-list-margin {
    margin-top: 13px;
  }
}

.author-relatedness-item {
  max-width: 208px;
  -webkit-flex-basis: 208px;
  -ms-flex-preferred-size: 208px;
  flex-basis: 208px;
  margin: 0 20px;
}

@media screen and (max-width: 768px) {
  .author-relatedness-item {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0;
    padding: 13px 10px;
    border-bottom: 1px solid #ddd;
  }
}

.author-relatedness-item:first-child {
  margin-left: 0;
}

.author-relatedness-item:last-child {
  margin-right: 0;
}

.author-relatedness-item-inner {
  display: block;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .author-relatedness-item-inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.author-relatedness-media {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .author-relatedness-media {
    max-width: 105px;
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
  }
}

.author-relatedness-content {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .author-relatedness-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 0 0 15px;
  }
}

.author-relatedness-article-date {
  display: block;
  margin: 8px 0 0;
  font-size: 12px;
  color: #666;
}

@media screen and (max-width: 768px) {
  .author-relatedness-article-date {
    margin: -4px 0 0;
    font-size: 10px;
  }
}

.author-relatedness-article-title {
  margin: 4px 0 0;
  max-height: 3.5rem;
  font-size: 14px;
  line-height: 2;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .author-relatedness-article-title {
    margin: 1px 0 0;
    max-height: 3.5rem;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.6;
  }
}

.author-relatedness-work-title {
  margin: 2px 0 0;
  max-height: 3.5rem;
  font-size: 14px;
  line-height: 2;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .author-relatedness-work-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    max-height: 100%;
    height: 100%;
    margin: 0;
    font-size: 12px;
  }
}

.like {
  display: inline-block;
  color: #e85762;
  line-height: 1;
}

.like-small .like-mark {
  font-size: 16px;
}

.like-best .like-mark {
  display: inline-block;
  font-size: 16px;
  -webkit-transform: translate(0, -3px);
  transform: translate(0, -3px);
}

@media screen and (max-width: 768px) {
  .like-best .like-mark {
    font-size: 14px;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.like-best .like-counter {
  font-size: 18px;
  font-weight: 400;
}

@media screen and (max-width: 768px) {
  .like-best .like-counter {
    font-size: 12px;
  }
}

.like-mark {
  margin: 0 5px 0 0;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .like-mark {
    font-size: 14px;
    margin: 0 3px 0 0;
  }
}

.like-counter {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.01em;
  -webkit-transform: translate(0, -3px);
  transform: translate(0, -3px);
}

@media screen and (max-width: 768px) {
  .like-counter {
    font-size: 12px;
    -webkit-transform: translate(0, -2px);
    transform: translate(0, -2px);
  }
}

.prlabel {
  display: inline-block;
  padding: 5px 14px 4px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  color: #666;
  background-color: #eaeaea;
  border-radius: 20px;
}

@media screen and (max-width: 768px) {
  .prlabel {
    font-size: 10px;
    font-weight: 400;
  }
}

.prlabel-dark {
  color: #fff;
  background-color: #666;
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

@media screen and (max-width: 768px) {
  .categorylabel {
    padding: 4px 12px 2px;
    font-size: 8px;
    font-weight: 400;
  }
}

.categorylabel:hover {
  color: #fff;
  background: #666;
}

.movieslider {
  display: block;
  width: 100%;
  background: #f3f3f3;
  margin: 65px 0 5px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .movieslider {
    margin: 20px 0 0;
  }
}

.movieslider .swiper-container {
  width: 100%;
}

.movieslider .swiper-slide {
  width: 400px;
}

@media screen and (max-width: 768px) {
  .movieslider .swiper-slide {
    width: 226px;
  }
}

.movieslider .swiper-slide:last-child {
  margin-right: 40px !important;
}

.movieslider-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: calc(100% - ((100% - 1260px) / 2));
  width: 100%;
  margin: 0;
  margin-left: calc((100vw - 1260px) / 2);
  position: relative;
  padding: 42px 0 68px;
}

@media screen and (max-width: 768px) {
  .movieslider-inner {
    margin: 0 0 0 20px;
    padding: 24px 0 82px;
  }
}

.movieslider-header {
  width: 285px;
  min-width: 285px;
  -webkit-flex-basis: 285px;
  -ms-flex-preferred-size: 285px;
  flex-basis: 285px;
  padding: 0 13px 0 0;
}

@media screen and (max-width: 768px) {
  .movieslider-header {
    position: absolute;
    left: -11px;
    bottom: 15px;
    z-index: 2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
}

.movieslider-logo {
  margin: 54px 0 0 30px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .movieslider-logo {
    margin: 0;
  }
}

.movieslider-logo-pc {
  display: block;
}

@media screen and (max-width: 768px) {
  .movieslider-logo-pc {
    display: none;
  }
}

.movieslider-logo-mobile {
  display: none;
  width: 77.5px;
  height: 77.5px;
}

@media screen and (max-width: 768px) {
  .movieslider-logo-mobile {
    display: block;
  }
}

.movieslider-more {
  display: block;
  margin: 15px 0 0;
  text-align: center;
  font-size: 14px;
  color: #181818;
  font-weight: 700;
  letter-spacing: 0.04em;
}

@media screen and (max-width: 768px) {
  .movieslider-more {
    margin: 0 0 11px 42px;
    font-size: 12px;
  }
}

.movieslider-more-icon {
  display: inline-block;
  margin: 0 9px 0 0;
  font-size: 17px;
  font-weight: 400;
  -webkit-transform: translate(8px, 4px);
  transform: translate(8px, 4px);
}

.movieslider-list {
  display: block;
  max-width: calc(100% - 285px);
  -webkit-flex-basis: calc(100% - 285px);
  -ms-flex-preferred-size: calc(100% - 285px);
  flex-basis: calc(100% - 285px);
}

@media screen and (max-width: 768px) {
  .movieslider-list {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.articlelist,
.movieslider-item {
  display: block;
}

.articlelist-item {
  border-bottom: 1px solid #ddd;
}

.articlelist-item-inner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 0;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .articlelist-item-inner {
    padding: 12px 10px 0;
  }
}

.articlelist-media {
  -webkit-flex-basis: 240px;
  -ms-flex-preferred-size: 240px;
  flex-basis: 240px;
}

@media screen and (max-width: 768px) {
  .articlelist-media {
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
    padding-bottom: 45px;
  }
}

.articlelist-content {
  -webkit-flex-basis: 591px;
  -ms-flex-preferred-size: 591px;
  flex-basis: 591px;
  position: relative;
  margin: 0 0 0 30px;
  padding: 0 0 56px;
}

@media screen and (max-width: 768px) {
  .articlelist-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: initial;
    margin-left: 14px;
    padding: 0 0 33px;
  }
}

.articlelist-date {
  display: block;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.17em;
  color: #666;
}

@media screen and (max-width: 768px) {
  .articlelist-date {
    font-size: 10px;
  }
}

.articlelist-title {
  margin-top: 7px;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .articlelist-title {
    margin-top: 3px;
    font-size: 12px;
  }
}

.articlelist-group a,
.articlelist-title a {
  color: inherit;
}

.articlelist-group {
  margin: 10px 0 0;
  font-size: 13px;
  letter-spacing: 0.07em;
  color: #33bad2;
}

@media screen and (max-width: 768px) {
  .articlelist-group {
    display: none;
  }
}

.articlelist-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 100%;
  max-width: 100%;
}

@media screen and (max-width: 768px) {
  .articlelist-footer {
    bottom: 10px;
    padding: 0 10px;
  }
}

.articlelist-footer .author {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.articlelist-footer .like {
  margin: 0 0 0 18px;
}

.articlelist-button {
  margin-top: 42px;
}

@media screen and (max-width: 768px) {
  .articlelist-button {
    margin-top: 20px;
    padding: 0 20px;
  }
}

.articlecard {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.articlecard-border .articlecard-item {
  position: relative;
  max-width: 50%;
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  padding: 24px 0 49px 20px;
  border-top: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .articlecard-border .articlecard-item {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    padding: 16px 20px 48px;
  }
}

.articlecard-border .articlecard-item:nth-of-type(1),
.articlecard-border .articlecard-item:nth-of-type(2) {
  padding-top: 0;
  border-top-width: 0;
}

@media screen and (max-width: 768px) {
  .articlecard-border .articlecard-item:nth-of-type(2) {
    padding-top: 16px;
    border-top-width: 1px;
  }
}

.articlecard-border .articlecard-item:nth-of-type(2n + 1) {
  padding-right: 20px;
  padding-left: 0;
  border-right: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .articlecard-border .articlecard-item:nth-of-type(2n + 1) {
    padding-right: 20px;
    padding-left: 20px;
    border-right-width: 0;
  }
}

.articlecard-border .articlecard-item:nth-of-type(2n + 1) .articlecard-footer {
  right: 32px;
}

@media screen and (max-width: 768px) {
  .articlecard-border
    .articlecard-item:nth-of-type(2n + 1)
    .articlecard-footer {
    right: 20px;
  }
}

.articlecard-border .articlecard-item:last-of-type,
.articlecard-border .articlecard-item:nth-last-of-type(2) {
  padding-bottom: 29px;
}

@media screen and (max-width: 768px) {
  .articlecard-border .articlecard-item:last-of-type,
  .articlecard-border .articlecard-item:nth-last-of-type(2) {
    padding-bottom: 48px;
  }
}

.articlecard-border .articlecard-item:last-of-type .articlecard-footer,
.articlecard-border .articlecard-item:nth-last-of-type(2) .articlecard-footer {
  bottom: 0;
}

@media screen and (max-width: 768px) {
  .articlecard-border .articlecard-item:last-of-type .articlecard-footer,
  .articlecard-border
    .articlecard-item:nth-last-of-type(2)
    .articlecard-footer {
    bottom: 19px;
  }
}

.articlecard-service-detail {
  text-align: left;
  margin: 19px -22px 0;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail {
    margin: 20px -10px 0 0;
  }
}

.articlecard-service-detail .swiper-container {
  width: 100%;
}

.articlecard-service-detail .swiper-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.articlecard-service-detail .swiper-slide {
  max-width: 33.3333%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 22px;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail .swiper-slide {
    max-width: 100%;
    margin: 0;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 285px;
    -ms-flex: 0 0 285px;
    flex: 0 0 285px;
  }

  .articlecard-service-detail .swiper-slide:last-child {
    margin-right: 40px !important;
  }
}

.articlecard-service-detail .articlecard-item {
  height: 100%;
}

.articlecard-service-detail .slidernavi {
  display: none;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail .slidernavi {
    display: block;
  }
}

.articlecard-service-detail .articlecard-title {
  padding-bottom: 45px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail .articlecard-title {
    padding-bottom: 20px;
    font-size: 14px;
  }
}

.articlecard-service-detail .articlecard-footer {
  bottom: 47px;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail .articlecard-footer {
    bottom: 15px;
  }
}

.articlecard-service-detail .articlecard-footer + .articlecard-title {
  padding-bottom: 82px;
}

@media screen and (max-width: 768px) {
  .articlecard-service-detail .articlecard-footer + .articlecard-title {
    padding-bottom: 48px;
  }
}

.articlecard-item {
  position: relative;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

@media screen and (max-width: 768px) {
  .articlecard-item {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.articlecard-item-inner,
.articlecard-title a {
  display: block;
  color: inherit;
}

.articlecard-date {
  display: block;
  margin: 4px 0 8px;
  font-size: 13px;
  color: #666;
  line-height: 1;
  letter-spacing: 0.17em;
}

@media screen and (max-width: 768px) {
  .articlecard-date {
    margin: 4px 0 10px;
    font-size: 10px;
  }
}

.articlecard-status {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0 0 14px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .articlecard-status {
    padding: 0 0 0 8px;
  }
}

.articlecard-status .like {
  margin: 10px 6px 0 auto;
}

@media screen and (max-width: 768px) {
  .articlecard-status .like {
    margin: 10px 14px 0 auto;
  }
}

.articlecard-title {
  margin: 8px 0 0;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .articlecard-title {
    margin: 4px 0 0;
    font-size: 16px;
    line-height: 1.7;
  }
}

.articlecard-footer {
  position: absolute;
  right: 0;
  bottom: 25px;
}

@media screen and (max-width: 768px) {
  .articlecard-footer {
    right: 20px;
    bottom: 19px;
  }
}

.articlecard-footer .prlabel {
  margin: 0 0 0 10px;
}

.articlecard-group {
  display: inline-block;
  font-size: 13px;
  letter-spacing: 0.07em;
  color: #33bad2;
}

@media screen and (max-width: 768px) {
  .articlecard-group {
    padding-left: 20px;
    font-size: 10px;
  }
}

.articlecard-group a,
.articlecombined-group a,
.articlecombined-title a {
  color: inherit;
}

.articlecombined {
  display: block;
}

@media screen and (min-width: 769px) {
  .articlecombined {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}

.articlecombined-item {
  border-bottom: 1px solid #ddd;
}

@media screen and (min-width: 769px) {
  .articlecombined-item {
    max-width: 50%;
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    border-top: 1px solid #ddd;
    border-bottom-width: 0;
    padding: 24px 0 49px 20px;
  }

  .articlecombined-item:nth-of-type(1),
  .articlecombined-item:nth-of-type(2) {
    padding-top: 0;
    border-top-width: 0;
  }

  .articlecombined-item:nth-of-type(2n + 1) {
    padding-right: 20px;
    padding-left: 0;
  }

  .articlecombined-item:last-of-type,
  .articlecombined-item:nth-last-of-type(2) {
    padding-bottom: 0;
  }
}

.articlecombined-item-inner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 0;
  color: inherit;
}

@media screen and (min-width: 769px) {
  .articlecombined-item-inner {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%;
    padding: 17px 0 21px;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-item-inner {
    padding: 12px 10px 0;
  }
}

.articlecombined-media {
  -webkit-flex-basis: 240px;
  -ms-flex-preferred-size: 240px;
  flex-basis: 240px;
}

@media screen and (min-width: 769px) {
  .articlecombined-media {
    position: absolute;
    top: 21px;
    left: 0;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-media {
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
    padding-bottom: 45px;
  }
}

.articlecombined-content {
  -webkit-flex-basis: 591px;
  -ms-flex-preferred-size: 591px;
  flex-basis: 591px;
  position: relative;
  margin: 0 0 0 30px;
}

@media screen and (min-width: 769px) {
  .articlecombined-content {
    position: static;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0;
    padding-bottom: 2px;
    padding-top: 273px;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-content {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: initial;
    margin-left: 14px;
    padding: 0 0 24px;
  }
}

.articlecombined-date {
  display: block;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.17em;
  color: #666;
}

@media screen and (min-width: 769px) {
  .articlecombined-date {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-date {
    font-size: 10px;
    color: #666;
  }
}

.articlecombined-title {
  margin-top: 7px;
  font-size: 18px;
}

@media screen and (min-width: 769px) {
  .articlecombined-title {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
    margin: 14px 0 0;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-title {
    margin-top: 3px;
    font-size: 12px;
  }
}

.articlecombined-group {
  margin: 10px 0 0;
  font-size: 13px;
  letter-spacing: 0.07em;
  color: #33bad2;
}

@media screen and (min-width: 769px) {
  .articlecombined-group {
    position: absolute;
    bottom: 0;
    right: 91px;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-group {
    display: none;
  }
}

.articlecombined-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 100%;
  max-width: 100%;
}

@media screen and (min-width: 769px) {
  .articlecombined-footer {
    position: static;
    z-index: 1;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    margin: -20px 0 0;
    padding: 0 0 0 13px;
  }
}

@media screen and (max-width: 768px) {
  .articlecombined-footer {
    bottom: 10px;
    padding: 0 10px;
  }
}

.articlecombined-footer .author {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (min-width: 769px) {
  .articlecombined-footer .author-image {
    margin: 0;
  }

  .articlecombined-footer .author-name {
    display: block;
    margin: 8px 0 0 4px;
  }

  .articlecombined-footer .prlabel {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.articlecombined-footer .like {
  margin: 0 0 0 18px;
}

@media screen and (min-width: 769px) {
  .articlecombined-footer .like {
    margin: 39px 6px 0 18px;
  }
}

.articlecombined-button {
  margin-top: 42px;
}

@media screen and (max-width: 768px) {
  .articlecombined-button {
    margin-top: 20px;
    padding: 0 20px;
  }
}

.articlebest {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
}

@media screen and (max-width: 768px) {
  .articlebest {
    margin: 0;
  }
}

.articlebest-margin {
  margin-top: 9px;
}

@media screen and (max-width: 768px) {
  .articlebest-margin {
    margin-top: 0;
  }
}

.articlebest-item {
  display: block;
  margin: 15px;
  max-width: 267px;
  -webkit-flex-basis: 267px;
  -ms-flex-preferred-size: 267px;
  flex-basis: 267px;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .articlebest-item {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0;
    border-width: 0 0 1px;
  }
}

.articlebest-item-inner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  height: 100%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 16px 16px 107px;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .articlebest-item-inner {
    padding: 12px 10px 9px;
  }
}

.articlebest-media {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

@media screen and (max-width: 768px) {
  .articlebest-media {
    max-width: 105px;
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
  }
}

.articlebest-content {
  position: initial;
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
}

@media screen and (max-width: 768px) {
  .articlebest-content {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 0 0 14px;
    padding: 0 0 33px;
  }
}

.articlebest-date {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 5px 0 0;
  font-size: 12px;
  color: #666;
  letter-spacing: 0.08em;
}

@media screen and (max-width: 768px) {
  .articlebest-date {
    margin: 0;
    font-size: 10px;
    letter-spacing: 0.15em;
  }
}

.articlebest-title {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 4px 0 1px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: 0.07em;
}

@media screen and (max-width: 768px) {
  .articlebest-title {
    margin: 1px 0 0;
    font-size: 12px;
    line-height: 1.7;
  }
}

.articlebest-status {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0 16px 9px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .articlebest-status {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
  }

  .articlebest-status .like {
    margin: 3px 0 0 auto;
  }
}

.articlebest-status-border {
  display: block;
  width: 100%;
  height: 1px;
  margin: 12px 0 19px;
  background-color: #ddd;
}

@media screen and (max-width: 768px) {
  .articlebest-status-border {
    display: none;
  }
}

.button {
  position: relative;
  display: inline-block;
  padding: 15px 15px 11px;
  color: inherit;
  border: 1px solid #181818;
  border-radius: 4px;
  box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.11);
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition: background-color 0.25s ease, color 0.25s ease;
  transition: background-color 0.25s ease, color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .button {
    border-width: 0;
    border-radius: 2px;
    box-shadow: none;
    color: #fff;
    background-color: #181818;
  }
}

.button:hover {
  color: #fff;
  background-color: #181818;
}

.button:hover .button-icon-arrow {
  border-top-color: #fff;
  border-right-color: #fff;
}

.browser-ie11 .button {
  padding-top: 17px;
  padding-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .button-pagenation {
    color: #181818;
    background: #fff;
  }

  .button-pagenation .button-text {
    padding-left: 0;
    padding-right: 0;
  }

  .button-pagenation .button-icon {
    right: 35px;
  }
}

.button-fit {
  display: block;
  width: 100%;
}

.button-outline {
  border-color: #fff;
  background-color: transparent;
  color: #fff;
}

.button-medium {
  padding: 22px 56px 26px;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .button-medium {
    padding: 13px 32px 15px;
  }
}

.browser-ie11 .button-medium {
  padding-top: 24px;
  padding-bottom: 24px;
}

.button-small {
  padding: 10px 24px;
}

@media screen and (max-width: 768px) {
  .button-small {
    padding: 15px 24px;
  }
}

.button-small .button-text {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .button-small .button-text {
    font-size: 12px;
  }
}

.browser-ie11 .button-small {
  padding-top: 12px;
  padding-bottom: 8px;
}

.button-small-pc {
  padding: 10px 24px;
}

@media screen and (max-width: 768px) {
  .button-small-pc {
    padding: 15px;
  }
}

.button-small-pc .button-text {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .button-small-pc .button-text {
    font-size: 14px;
  }
}

.browser-ie11 .button-small-pc {
  padding-top: 12px;
  padding-bottom: 8px;
}

.button-little {
  padding: 6px 21px;
}

.button-little .button-text {
  font-size: 14px;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .button-little .button-text {
    font-size: 12px;
  }
}

.browser-ie11 .button-little {
  padding-top: 8px;
  padding-bottom: 4px;
}

.button-green {
  background: #25c04a;
  border: 1px solid #35b16f;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .button-green {
    border: 1px solid #35b16f;
    border-radius: 4px;
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.11);
  }
}

.button-green:hover {
  color: #25c04a;
  background-color: #fff;
}

.button-green:hover .button-icon-arrow {
  border-top-color: #25c04a;
  border-right-color: #25c04a;
}

@media screen and (max-width: 768px) {
  .button-white {
    background-color: #fff;
    color: #181818;
    border: 1px solid #181818;
    border-radius: 4px;
    box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.11);
  }

  .button-black {
    background-color: #181818;
    color: #fff;
    border-radius: 5px;
  }
}

.button-text {
  padding: 0 40px;
  font-size: 16px;
  letter-spacing: 0.14em;
  line-height: 1.75;
}

@media screen and (max-width: 768px) {
  .button-text {
    padding-right: 30px;
    padding-left: 10px;
    font-size: 14px;
    letter-spacing: 0.01em;
  }
}

.button-text-left {
  padding: 0;
}

.button-subtext {
  display: block;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .button-subtext {
    font-size: 10px;
  }
}

.button-text-en {
  font-weight: 700;
}

.button-icon {
  position: absolute;
  top: 50%;
  right: 30px;
  font-size: 12px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

@media screen and (max-width: 768px) {
  .button-icon {
    right: 17px;
  }
}

.button-icon:before {
  display: inline-block;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.button-icon-arrow {
  width: 12px;
  height: 12px;
  border-top: 2px solid #181818;
  border-right: 2px solid #181818;
  border-bottom: 0 solid transparent;
  border-left: 0 solid transparent;
  position: absolute;
  top: 50%;
  left: 20px;
  -webkit-transform: translate(0, -50%) rotate(45deg);
  transform: translate(0, -50%) rotate(45deg);
}

@media screen and (max-width: 768px) {
  .button-icon-arrow {
    width: 8px;
    height: 8px;
    border-top: 1px solid #181818;
    border-right: 1px solid #181818;
    left: 7px;
  }
}

.button-icon-arrow-white {
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}

.footerbanner {
  display: block;
  background: #333;
}

.footerbanner .swiper-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .footerbanner .swiper-wrapper {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-transform: none;
    transform: none;
  }

  .footerbanner .swiper-slide-duplicate {
    display: none;
  }
}

.footerbanner-swiper-slide {
  width: 172px;
}

@media screen and (max-width: 768px) {
  .footerbanner-swiper-slide {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }

  .footerbanner-swiper-slide:nth-of-type(2n + 1) {
    -webkit-flex-basis: calc(50% - 1px);
    -ms-flex-preferred-size: calc(50% - 1px);
    flex-basis: calc(50% - 1px);
    border-right: 1px solid #474747;
  }

  .footerbanner-swiper-slide:nth-of-type(2n + 1):nth-last-of-type(2) {
    border-bottom-width: 0;
  }

  .footerbanner-swiper-slide:nth-last-of-type(1) {
    border-bottom-width: 0;
  }
}

.footerbanner-inner {
  position: relative;
  max-width: 1260px;
  margin: 0 auto;
  padding: 36px 30px 33px;
}

@media screen and (max-width: 768px) {
  .footerbanner-inner {
    padding: 0;
  }

  .footerbanner-swiper-slide {
    border-bottom: 1px solid #474747;
  }
}

.footerbanner-item {
  display: block;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .footerbanner-item {
    height: 44px;
    line-height: 44px;
  }
}

.footerbanner-item-inner {
  display: inline-block;
  color: inherit;
}

.footerbanner-image {
  display: inline-block;
  max-width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .footerbanner-image {
    width: auto;
    height: auto;
    max-width: 92px;
  }
}

.footerbanner-image-iiofice,
.footerbanner-image-iiofice-hiroshima {
  width: 35px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-iiofice,
  .footerbanner-image-iiofice-hiroshima {
    width: 26px;
  }
}

.footerbanner-image-lamp {
  width: 73px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-lamp {
    width: 60px;
  }
}

.footerbanner-image-startupenglish-ueno {
  width: 107px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-startupenglish-ueno {
    width: 76px;
  }
}

.footerbanner-image-digitalhollywood-lig {
  width: 127px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-digitalhollywood-lig {
    width: 91px;
    margin-top: -2px;
  }
}

.footerbanner-image-taicha {
  width: 101px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-taicha {
    width: 71px;
  }
}

.footerbanner-image-tabitoongaku {
  width: 69px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-tabitoongaku {
    width: 48px;
  }
}

.footerbanner-image-omoshirojapan {
  width: 84px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-omoshirojapan {
    width: 65px;
  }
}

.footerbanner-image-sundayplanning {
  width: 110px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-sundayplanning {
    width: 74px;
  }
}

.footerbanner-image-local {
  width: 45px;
}

@media screen and (max-width: 768px) {
  .footerbanner-image-local {
    width: 36px;
  }
}

.footerbanner-button-next,
.footerbanner-button-prev {
  position: absolute;
  top: 50%;
  font-size: 22px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .footerbanner-button-next,
  .footerbanner-button-prev {
    display: none;
  }
}

.footerbanner-button-prev {
  left: 0;
}

.footerbanner-button-next {
  right: 0;
}

.footerbanner-button-next .footerbanner-icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.footerbanner-icon {
  display: block;
  color: #5c5c5c;
}

.ourservice {
  display: block;
}

.ourservice-heading {
  font-size: 18px;
  color: #cecece;
}

@media screen and (max-width: 768px) {
  .ourservice-heading {
    line-height: 1;
  }
}

.ourservice-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 7px 0 27px;
}

@media screen and (max-width: 768px) {
  .ourservice-list {
    padding: 4px 0 23px;
  }
}

.ourservice-item {
  display: block;
  -webkit-flex-basis: 25%;
  -ms-flex-preferred-size: 25%;
  flex-basis: 25%;
  padding: 9px 0;
}

@media screen and (max-width: 768px) {
  .ourservice-item {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    padding: 8px 0;
  }
}

.ourservice-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
}

.ourservice-inner:hover .ourservice-media:after {
  opacity: 0.25;
}

.ourservice-inner:hover .ourservice-image {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.ourservice-media {
  position: relative;
  width: 72px;
  height: auto;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .ourservice-media {
    width: 50px;
  }
}

.ourservice-media:after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.ourservice-image {
  width: 100%;
  height: auto;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

.ourservice-title {
  margin: 0 0 0 8px;
  font-size: 13px;
}

@media screen and (max-width: 768px) {
  .ourservice-title {
    font-size: 10px;
  }

  .ourservice-title br {
    display: none;
  }
}

.messageform {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.messageform .button {
  margin: 11px 0 0 auto;
}

.messageform-heading {
  display: inline-block;
  font-size: 20px;
}

.messageform-comment {
  display: inline-block;
  margin: 0 0 0 auto;
  font-size: 12px;
}

.browser-ie11 .messageform-comment {
  padding-top: 5px;
}

.messageform-area {
  width: 100%;
  margin: 10px 0 0;
}

.messageform-area textarea {
  width: 100%;
  padding: 10px 26px;
  border-width: 1px;
  border-color: #ddd;
  border-style: solid;
  border-radius: 3px;
  background-color: #fff;
  height: 137px;
}

.messageform-text {
  display: inline-block;
  width: 260px;
  margin: 2px 0 0;
  font-size: 12px;
}

.messageform-text a {
  color: inherit;
  font-weight: 700;
}

.browser-ie11 .messageform-text {
  margin-top: 5px;
}

.messageform-success {
  display: none;
  margin: 10px 0;
}

.messageform-success img {
  width: 100%;
  height: auto;
}

.is-simple-form-success .messageform-area,
.is-simple-form-success .messageform-text {
  display: none;
}

.is-simple-form-success .messageform-success {
  display: block;
}

.is-simple-form-success .messageform-submit {
  display: none;
}

.simple-form.is-simple-form-loading button {
  opacity: 0.5;
  pointer-events: none;
}

.simple-form.is-simple-form-error textarea {
  border: 2px solid #e85762;
}

.footersitemap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.footersitemap-block {
  display: block;
}

.footersitemap-block-blog {
  -webkit-flex-basis: 379px;
  -ms-flex-preferred-size: 379px;
  flex-basis: 379px;
}

.footersitemap-block-company,
.footersitemap-block-recruit {
  -webkit-flex-basis: 190px;
  -ms-flex-preferred-size: 190px;
  flex-basis: 190px;
}

.footersitemap-heading {
  margin: 0 0 7px;
  font-size: 18px;
  color: #464646;
}

.footersitemap-list {
  display: block;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 12px;
  color: #fff;
  list-style: none;
}

.footersitemap-list a {
  display: block;
  color: inherit;
}

.footersitemap-list-children {
  border-left: 1px solid #303030;
  padding: 0 0 0 18px;
}

.footersitemap-list-company {
  height: calc(100% - 27px);
}

.footersitemap-list-col2 {
  display: inline-block;
  width: 49%;
  font-size: 0;
  letter-spacing: 0;
  vertical-align: top;
}

.footersitemap-list-col2 .footersitemap-item {
  font-size: 12px;
  line-height: 2.2em;
  letter-spacing: 0.07rem;
}

.footersitemap-list-other {
  margin-top: 25px;
}

.footersitemap-item {
  width: 100%;
  line-height: 2.2;
}

.footercontact {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.footercontact-logo {
  -webkit-flex-basis: 146px;
  -ms-flex-preferred-size: 146px;
  flex-basis: 146px;
  margin: 9px 0 0;
}

@media screen and (max-width: 768px) {
  .footercontact-logo {
    margin: 26px 0 0;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.footercontact-text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 3px 0 0;
  font-size: 12px;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .footercontact-text {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 13px 0 0;
    line-height: 1.8;
    font-size: 10px;
  }
}

.footercontact-text a {
  color: inherit;
  text-decoration: none;
}

.footercontact-button {
  width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 35px 0 0;
}

@media screen and (max-width: 768px) {
  .footercontact-button {
    display: none;
  }
}

.footercontact-social {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 31px 0 0;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .footercontact-social {
    margin: 23px 0 0;
  }
}

.footercontact-social-item {
  position: relative;
  display: block;
  color: #fff;
  text-align: center;
}

.footercontact-social-item:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  width: 1px;
  height: 18px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  background: #303030;
}

.footercontact-social-item:first-of-type {
  text-align: left;
}

.blogcategory-list-item:first-of-type .blogcategory-list-item-inner:before,
.footercontact-social-item:first-of-type:before {
  display: none;
}

.footercontact-social-item:last-of-type {
  text-align: right;
}

.footercontact-social-item a {
  display: block;
  color: inherit;
}

.footercontact-social-item-line {
  -webkit-flex-basis: 84px;
  -ms-flex-preferred-size: 84px;
  flex-basis: 84px;
  font-size: 0;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-line {
    -webkit-flex-basis: 21%;
    -ms-flex-preferred-size: 21%;
    flex-basis: 21%;
  }
}

.footercontact-social-item-line svg {
  width: 63px;
  height: 17px;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-line svg {
    width: 46.5px;
    height: 19px;
  }
}

.footercontact-social-item-twitter {
  -webkit-flex-basis: 67px;
  -ms-flex-preferred-size: 67px;
  flex-basis: 67px;
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-twitter {
    -webkit-flex-basis: 18%;
    -ms-flex-preferred-size: 18%;
    flex-basis: 18%;
    font-size: 15px;
  }
}

.footercontact-social-item-facebook {
  -webkit-flex-basis: 51px;
  -ms-flex-preferred-size: 51px;
  flex-basis: 51px;
  font-size: 22px;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-facebook {
    -webkit-flex-basis: 16%;
    -ms-flex-preferred-size: 16%;
    flex-basis: 16%;
    font-size: 17px;
  }
}

.footercontact-social-item-youtube {
  -webkit-flex-basis: 137px;
  -ms-flex-preferred-size: 137px;
  flex-basis: 137px;
  font-size: 0;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-youtube {
    -webkit-flex-basis: 33%;
    -ms-flex-preferred-size: 33%;
    flex-basis: 33%;
  }
}

.footercontact-social-item-youtube svg {
  width: 86px;
  height: 20px;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-youtube svg {
    width: 63.5px;
    height: 14.5px;
  }
}

.footercontact-social-item-instagram {
  -webkit-flex-basis: 41px;
  -ms-flex-preferred-size: 41px;
  flex-basis: 41px;
  font-size: 26px;
}

@media screen and (max-width: 768px) {
  .footercontact-social-item-instagram {
    -webkit-flex-basis: 12%;
    -ms-flex-preferred-size: 12%;
    flex-basis: 12%;
    font-size: 21px;
  }
}

.footercopy {
  width: 100%;
  padding: 15px 0 13px;
  background: #fff;
}

@media screen and (max-width: 768px) {
  .footercopy {
    padding: 12px 0;
  }
}

.footercopy-text {
  color: #333;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  .footercopy-text,
  .footercopy-text small {
    font-size: 10px;
  }
}

.footercopy-text a {
  color: inherit;
}

.subblog {
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .subblog {
    margin: 0 auto;
    width: 300px;
  }
}

.subblog-article {
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.subblog-article-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 270px;
  color: inherit;
}

.subblog-article-inner {
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.subblog-title {
  font-size: 21px;
  font-weight: 400;
  color: #33bad2;
  letter-spacing: 0.08em;
  line-height: 1.4;
  padding: 10px 15px;
}

@media screen and (max-width: 768px) {
  .subblog-title {
    font-size: 20px;
    line-height: 1.3;
    padding: 12px 15px 5px;
  }
}

.subblog-title-inner {
  display: block;
  max-height: 88.2px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .subblog-title-inner {
    max-height: 78px;
  }
}

.subblog-content {
  background: #f3f3f3;
  padding: 13px 17px 35px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .subblog-content {
    padding: 12px 17px 33px;
  }
}

.subblog-desc {
  letter-spacing: 0.07em;
  line-height: 1.7;
  height: 66.3px;
  overflow: hidden;
  position: relative;
  word-break: break-all;
  text-align: justify;
}

.subblog-desc:after,
.subblog-desc:before {
  position: absolute;
}

.subblog-desc:before {
  content: '...';
  background: #f3f3f3;
  right: 0;
  text-align: center;
  width: 1.1em;
  top: 44.2px;
}

.subblog-desc:after {
  content: '';
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #f3f3f3;
}

@media screen and (max-width: 768px) {
  .subblog-desc {
    font-size: 12px;
    line-height: 1.7;
    height: 61.2px;
    overflow: hidden;
    position: relative;
    word-break: break-all;
    text-align: justify;
  }

  .subblog-desc:after,
  .subblog-desc:before {
    position: absolute;
  }

  .subblog-desc:before {
    content: '...';
    background: #f3f3f3;
    right: 0;
    text-align: center;
    width: 1.1em;
    top: 40.8px;
  }

  .subblog-desc:after {
    content: '';
    height: 100%;
    width: 100%;
    z-index: 2;
    background: #f3f3f3;
  }
}

.subblog-text {
  display: block;
  font-size: 14px;
  color: #181818;
  padding: 22px 10px 5px 20px;
  word-wrap: break-word;
}

@media screen and (max-width: 768px) {
  .subblog-text {
    padding: 22px 10px 5px;
  }
}

.subblog-icon-notification {
  background: #f3f3f3;
  font-size: 14px;
  color: #33bad2;
  padding: 3px;
  position: absolute;
  top: 5px;
  right: 0;
  z-index: 3;
}

.subblog-circle {
  display: block;
  position: absolute;
  left: 50%;
  bottom: -22px;
  margin-left: -24px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #0076ff;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
  padding: 18px 0;
}

@media screen and (max-width: 768px) {
  .heading {
    margin: 0 20px 6px;
    padding: 9px 0;
  }
}

.heading-office {
  padding: 15px 0;
}

@media screen and (max-width: 768px) {
  .heading-office {
    padding: 6px 0;
  }
}

.heading-office .heading-title {
  line-height: 1.5;
}

.heading-office .heading-title:before {
  top: 3px;
  height: calc(100% - 6px);
}

.heading-outline {
  padding: 18px 15px;
  background-color: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .heading-outline {
    margin: 0 10px 13px;
    padding: 15px 8px 14px;
    border-radius: 3px;
  }
}

.heading-outline .heading-title {
  line-height: 1.6;
}

@media screen and (max-width: 768px) {
  .heading-outline .heading-title {
    font-size: 12px;
  }
}

.heading-align-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .heading-align-top {
    display: block;
    margin: 0;
  }
}

.heading-block {
  display: block;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .heading-block {
    margin: 0;
    padding: 0;
  }
}

.heading-page-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 2px;
}

@media screen and (max-width: 768px) {
  .heading-page-title {
    margin-left: 8px;
  }
}

.heading-page-title-main {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0 20px 0 -5px;
}

@media screen and (max-width: 768px) {
  .heading-page-title-main {
    font-size: 28px;
    line-height: 1;
    margin: 0 13px 0 0;
  }
}

.heading-page-title-sub {
  font-size: 13px;
  letter-spacing: 0.03em;
}

@media screen and (max-width: 768px) {
  .heading-page-title-sub {
    font-size: 10px;
  }
}

.heading-page-title-subheading {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 7px;
}

@media screen and (max-width: 768px) {
  .heading-page-title-subheading {
    font-size: 14px;
    margin: 12px 0 0 10px;
  }
}

.heading-section {
  display: block;
  text-align: center;
}

.heading-section-left {
  text-align: left;
}

@media screen and (max-width: 768px) {
  .heading-section-left {
    text-align: center;
    margin: 0 auto;
  }
}

.heading-section-right {
  text-align: right;
}

.heading-member {
  display: block;
  text-align: center;
}

.heading-member .heading-title {
  padding-left: 0;
  font-size: 48px;
}

@media screen and (max-width: 768px) {
  .heading-member .heading-title {
    font-size: 28px;
  }
}

.heading-member .heading-title:before {
  display: none;
}

.heading-member .heading-subtext {
  display: inline-block;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .heading-member .heading-subtext {
    margin-top: 8px;
    font-size: 10px;
  }
}

.heading-title {
  position: relative;
  display: block;
  padding: 0 0 0 20px;
  font-size: 16px;
  -webkit-flex-basis: 600px;
  -ms-flex-preferred-size: 600px;
  flex-basis: 600px;
  line-height: 1.1;
}

@media screen and (max-width: 768px) {
  .heading-title {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    font-size: 14px;
    padding: 1px 0 1px 17px;
  }
}

.heading-title:before {
  content: '';
  display: block;
  width: 4px;
  height: 100%;
  font-size: 0;
  letter-spacing: 0;
  background: #181818;
  border-radius: 20px;
}

@media screen and (max-width: 768px) {
  .heading-title:before {
    width: 4px;
  }
}

.heading-section-title-text {
  position: relative;
}

.heading-section-title-icon,
.heading-title:before {
  position: absolute;
  top: 0;
  left: 0;
}

.heading-section-title-icon-tokyo {
  top: 3px;
  left: -77px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-tokyo {
    top: -18px;
    left: -57px;
    -webkit-transform: scale(0.763);
    transform: scale(0.763);
  }
}

.heading-section-title-icon-nagano {
  top: -18px;
  left: -48px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-nagano {
    top: -36px;
    left: -29px;
    -webkit-transform: scale(0.715);
    transform: scale(0.715);
  }
}

.heading-section-title-icon-kyoto {
  top: -16px;
  left: -61px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-kyoto {
    top: -29px;
    left: -49px;
    -webkit-transform: scale(0.72);
    transform: scale(0.72);
  }
}

.heading-section-title-icon-hiroshima {
  top: -20px;
  left: -30px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-hiroshima {
    top: -29px;
    left: -30px;
    -webkit-transform: scale(0.715);
    transform: scale(0.715);
  }
}

.heading-section-title-icon-nagasaki {
  top: -24px;
  left: -28px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-nagasaki {
    top: -36px;
    left: -21px;
    -webkit-transform: scale(0.725);
    transform: scale(0.725);
  }
}

.heading-section-title-icon-oita {
  top: -12px;
  left: -85px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-oita {
    top: -23px;
    left: -59px;
    -webkit-transform: scale(0.723);
    transform: scale(0.723);
  }
}

.heading-section-title-icon-philippines {
  top: -29px;
  left: -5px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-icon-philippines {
    top: -41px;
    left: -6px;
    -webkit-transform: scale(0.717);
    transform: scale(0.717);
  }
}

.heading-title-sm {
  font-size: 18px;
  padding: 0 0 0 15px;
}

@media screen and (max-width: 768px) {
  .heading-title-sm {
    font-size: 14px;
  }
}

.heading-title-md {
  font-size: 20px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .heading-title-md {
    font-size: 18px;
    margin-bottom: 27px;
  }
}

.heading-subtext {
  font-size: 14px;
}

.heading-sidebar {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  display: block;
}

@media screen and (max-width: 768px) {
  .heading-sidebar {
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
  }
}

.heading-title-subtext {
  font-size: 14px;
  font-weight: 400;
  padding-left: 15px;
}

@media screen and (max-width: 768px) {
  .heading-title-subtext {
    padding-left: 0;
  }
}

.heading-section-title {
  font-size: 36px;
  letter-spacing: 0.03em;
  line-height: 1.4;
}

@media screen and (max-width: 768px) {
  .heading-section-title {
    font-size: 24px;
  }
}

.heading-section-title-lg {
  font-size: 48px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-lg {
    font-size: 28px;
  }
}

.heading-section-title-md {
  font-size: 28px;
}

@media screen and (max-width: 768px) {
  .heading-section-title-md {
    font-size: 18px;
  }
}

.heading-section-subtext {
  display: block;
  font-size: 13px;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .heading-section-subtext {
    font-size: 10px;
  }
}

.heading-section-subtext-md {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .heading-section-subtext-md {
    font-size: 10px;
  }
}

.heading-page {
  position: relative;
  display: block;
  margin: 0 2px 0 auto;
  font-size: 14px;
  color: #666;
  text-align: right;
}

@media screen and (max-width: 768px) {
  .heading-page {
    -webkit-flex-basis: 100px;
    -ms-flex-preferred-size: 100px;
    flex-basis: 100px;
    font-size: 10px;
  }
}

.heading-page:before {
  content: '';
  position: absolute;
  top: 50%;
  left: -39px;
  display: block;
  width: 24px;
  height: 1px;
  margin: -1px 0 0;
  background: #666;
}

@media screen and (max-width: 768px) {
  .heading-page:before {
    display: none;
  }
}

.heading-page-num {
  font-weight: 700;
}

.heading-page-text {
  font-weight: 400;
}

.contact-description strong,
.heading-page-pager {
  font-weight: 700;
}

.headingsub {
  display: block;
  padding: 9px 17px;
  font-size: 14px;
  color: #fff;
  border-radius: 3px;
  background: #181818;
}

@media screen and (max-width: 768px) {
  .headingsub {
    padding: 9px 20px;
    border-radius: 0;
    font-size: 12px;
  }
}

.headingsub-margin {
  margin: 39px 0 16px;
}

@media screen and (max-width: 768px) {
  .headingsub-margin {
    margin: 25px 0 19px;
  }
}

.articlesub {
  display: block;
}

.articlesub-button {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .articlesub-button {
    max-width: 100%;
    padding: 0 20px;
  }
}

.articlesub-button-recruit {
  margin-top: 26px;
}

@media screen and (max-width: 768px) {
  .articlesub-button-recruit {
    margin-top: 32px;
  }
}

.articlesub-list {
  display: block;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .articlesub-list {
    padding: 0 20px;
  }
}

.articlesub-list-margin {
  margin-bottom: 22px;
}

@media screen and (max-width: 768px) {
  .articlesub-list-margin {
    margin-bottom: 32px;
  }
}

.articlesub-item {
  display: block;
  width: 100%;
  margin: 22px 0 0;
}

@media screen and (max-width: 768px) {
  .articlesub-item {
    margin: 18px 0 0;
  }
}

.articlesub-item:first-of-type {
  margin-top: 0;
}

@media screen and (max-width: 768px) {
  .articlesub-item:first-of-type {
    margin-top: 0;
  }
}

.articlesub-item a {
  display: block;
  color: inherit;
}

.articlesub-title {
  margin: 11px 0 0;
  font-size: 14px;
  color: #666;
}

@media screen and (max-width: 768px) {
  .articlesub-title {
    margin: 6px 0 0;
    font-size: 12px;
  }
}

.articlesub-base {
  padding: 1px 0 0 8px;
  font-size: 12px;
  color: #999;
}

@media screen and (max-width: 768px) {
  .articlesub-base {
    margin: 3px 0 0;
    padding: 0;
    font-size: 10px;
  }
}

.articlesub-base-icon {
  margin: 0 1px 0 0;
  font-size: 10px;
  color: #33bad2;
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}

.articlesub-more {
  padding: 0 25px;
}

@media screen and (max-width: 768px) {
  .articlesub-more {
    padding: 0 20px;
  }
}

.info,
.info-vertical {
  display: block;
}

@media screen and (max-width: 768px) {
  .info-vertical {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 20px;
  }
}

.info-horizontal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 40px 50px 41px;
  background: #f3f3f3;
  border-bottom: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .info-horizontal {
    padding: 25px 0;
  }
}

.info-horizontal .info-item {
  display: block;
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
}

@media screen and (max-width: 768px) {
  .info-horizontal .info-item {
    padding: 0 20px;
  }
}

.info-margin-side {
  margin-top: 16px;
}

.info-margin-side-bottom {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .info-margin-side-bottom {
    margin-top: 26px;
  }
}

.info-item {
  width: 100%;
  text-align: center;
}

.info-item img {
  display: inline-block;
  width: 100%;
  max-width: 300px;
}

@media screen and (max-width: 768px) {
  .info-item img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
}

.info-vertical-item {
  display: block;
  width: 100%;
  margin: 40px 0 0;
}

@media screen and (max-width: 768px) {
  .info-vertical-item {
    margin: 0;
    text-align: center;
  }
}

.contact-description p:first-of-type,
.info-vertical-item:first-of-type {
  margin-top: 0;
}

@media screen and (max-width: 768px) {
  .info-vertical-item:first-of-type {
    margin-right: 35px;
  }
}

.info-new {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px;
  height: auto !important;
}

.bestcover img,
.info-new > a {
  display: block;
  width: 100%;
  height: auto;
}

.infomovie {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 62px 38px 57px;
  background: #f3f3f3;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .infomovie {
    padding: 25px 20px 22px;
  }
}

.infomovie-margin {
  margin: 33px 0 0;
}

.infomovie-item {
  display: block;
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
}

.infomovie-item:first-of-type {
  margin-right: 20px;
}

@media screen and (max-width: 768px) {
  .infomovie-item:first-of-type {
    margin-right: 10px;
  }
}

.infomovie-item:last-of-type {
  margin-left: 20px;
}

@media screen and (max-width: 768px) {
  .infomovie-item:last-of-type {
    margin-left: 10px;
  }
}

.infomovie-item-inner,
.megamenu-item a {
  display: block;
  color: inherit;
}

.infomovie-title {
  margin: 20px 0 0;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .infomovie-title {
    margin: 7px 0 0;
    font-size: 12px;
  }
}

.snsbutton {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-left: 4px;
  min-width: 82px;
  height: 28px;
  float: left;
  border-radius: 4px;
  color: #fff;
}

.snsbutton-twitter {
  background: #6aaae8;
}

.snsbutton-hatena {
  background: #4ca1d6;
}

.snsbutton-pocket {
  background: #d24753;
}

.snsbutton-icon {
  color: #fff;
}

.bestlabel {
  display: block;
  width: 83px;
  height: 83px;
  position: absolute;
  top: -6px;
  right: -5px;
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  /* background-image: url(../images/label-best.png); */
}

.bestcover,
.introduction-card-logo img {
  width: 100%;
  height: auto;
}

.bestcover-margin {
  margin: 0 0 33px;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .bestcover-margin {
    margin: 0 0 15px;
    padding: 0 10px;
  }
}

.megamenu {
  position: absolute;
  top: 80px;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  max-height: 0;
  background: #f5f5f5;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .megamenu {
    position: relative;
    top: 0;
    left: 0;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-height: none;
    height: 0;
  }
}

.megamenu.is-megamenu-show {
  max-height: 433px;
}

@media screen and (max-width: 768px) {
  .megamenu.is-megamenu-show {
    max-height: 100%;
  }
}

.megamenu-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 1260px;
  margin: 0 auto;
  padding: 11px 18px 29px;
  -webkit-transform: translate(0, -10px);
  transform: translate(0, -10px);
  opacity: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

@media screen and (max-width: 768px) {
  .megamenu-list {
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    width: 100%;
    padding: 10px 0 10px 37px;
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.megamenu-list.is-megamenu-list-show {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
  -webkit-transition: all 0.25s ease 0.25s;
  transition: all 0.25s ease 0.25s;
}

.megamenu-list-blog {
  padding: 19px 18px 70px;
}

@media screen and (max-width: 768px) {
  .megamenu-list-blog {
    padding: 10px 0 10px 37px;
  }
}

.megamenu-item {
  margin: 11px 0;
  -webkit-flex-basis: 16.66%;
  -ms-flex-preferred-size: 16.66%;
  flex-basis: 16.66%;
}

@media screen and (max-width: 768px) {
  .megamenu-item {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0;
    border-top: 1px solid #eaeaea;
  }
}

.megamenu-item:first-of-type,
.submenu-item:first-of-type {
  border: none;
}

@media screen and (max-width: 768px) {
  .megamenu-item a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 13px 0;
  }
}

.megamenu-item-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .megamenu-item-mobile {
    display: block;
  }
}

.megamenu-media {
  display: block;
  width: 180px;
  height: 120px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .megamenu-media {
    width: 50px;
    height: 28px;
    margin: 0 17px 0 0;
  }
}

.megamenu-title {
  position: relative;
  display: block;
  margin: 10px 0 0;
  padding: 0 15px;
  font-size: 13px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .megamenu-title {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
}

.megamenu-title-icon {
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 18px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

@media screen and (max-width: 768px) {
  .megamenu-title-icon {
    display: none;
  }
}

.megamenu-mark {
  position: relative;
  display: none;
  width: 16px;
  height: 16px;
  margin: 0 18px 0 auto;
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
}

@media screen and (max-width: 768px) {
  .megamenu-mark {
    display: block;
  }
}

.megamenu-mark:after,
.megamenu-mark:before {
  content: '';
  position: absolute;
  left: 8px;
  display: block;
  width: 8px;
  height: 1px;
  background: #181818;
}

.megamenu-mark:before {
  top: 5px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.megamenu-mark:after {
  top: 10px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.submenu {
  position: relative;
  display: block;
  width: 100%;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease 0s;
  transition: opacity 0.25s ease 0s;
}

.submenu-item a,
.submenu-list,
.submenu-list-blog {
  -webkit-transition: padding 0s ease 0.5s;
  transition: padding 0s ease 0.5s;
}

.submenu-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  padding: 0;
}

.submenu-item a,
.submenu-list-blog {
  padding: 0 0 0 37px;
}

.submenu-item {
  margin: 0;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  border-top: 0 solid #eaeaea;
  -webkit-transition: border 0s ease 0.5s;
  transition: border 0s ease 0.5s;
}

.submenu-item a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: inherit;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 0 0 20px;
}

.submenu-item-mobile {
  display: block;
}

.submenu-media {
  display: block;
  width: 50px;
  height: 0;
  margin: 0;
  -webkit-transition: height 0s ease 0.5s, margin 0s ease 0.5s;
  transition: height 0s ease 0.5s, margin 0s ease 0.5s;
}

.submenu-title {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 0;
  letter-spacing: 0.025rem;
  font-weight: 400;
  text-align: left;
  -webkit-transition: font-size 0s ease 0.5s;
  transition: font-size 0s ease 0.5s;
}

.submenu-title-icon {
  display: none;
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 18px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
}

.submenu-mark {
  position: relative;
  display: block;
  width: 16px;
  height: 0;
  margin: 0 18px 0 auto;
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  -webkit-transition: height 0s ease 0.5s;
  transition: height 0s ease 0.5s;
}

.submenu-mark:after,
.submenu-mark:before {
  content: '';
  position: absolute;
  left: 8px;
  display: block;
  width: 8px;
  height: 1px;
  background: #181818;
}

.submenu-mark:before {
  top: 5px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.submenu-mark:after {
  top: 10px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.is-header-mobile-open .submenu {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease 0.35s;
  transition: opacity 0.25s ease 0.35s;
}

.is-header-mobile-open .submenu-list {
  padding: 10px 0 130px;
  -webkit-transition: padding 0s ease;
  transition: padding 0s ease;
}

.is-header-mobile-open .submenu-item a,
.is-header-mobile-open .submenu-list-blog {
  padding: 10px 0 10px 37px;
  -webkit-transition: padding 0s ease;
  transition: padding 0s ease;
}

.is-header-mobile-open .submenu-item {
  border-top-width: 1px;
  -webkit-transition: border 0s ease;
  transition: border 0s ease;
}

.is-header-mobile-open .submenu-item a {
  padding: 16px 0 16px 20px;
}

.is-header-mobile-open .submenu-media {
  height: 28px;
  margin: 0 17px 0 0;
  -webkit-transition: height 0s ease, margin 0s ease;
  transition: height 0s ease, margin 0s ease;
}

.is-header-mobile-open .submenu-title {
  font-size: 12px;
  -webkit-transition: font-size 0s ease;
  transition: font-size 0s ease;
}

.is-header-mobile-open .submenu-mark {
  height: 16px;
  -webkit-transition: height 0s ease;
  transition: height 0s ease;
}

.mutter {
  position: absolute;
  top: 20px;
  right: 50%;
  margin-right: -705px;
  display: block;
  height: 94px;
  z-index: 10;
}

@media screen and (max-width: 1421px) {
  .mutter {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .mutter {
    display: none;
  }
}

.is-mutter-close .mutter-text {
  -webkit-transform: translate(0, -25px);
  transform: translate(0, -25px);
  opacity: 0;
}

.is-mutter-fixed {
  right: 5px;
  top: 20px;
}

.is-mutter-fixed .mutter-media {
  cursor: pointer;
}

.is-mutter-fixed .mutter-text {
  -webkit-transform: translate(0, -25px);
  transform: translate(0, -25px);
  opacity: 0;
  pointer-events: none;
}

.is-mutter-open .mutter-text,
.mutter-text {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}

.is-mutter-open .mutter-text {
  pointer-events: auto;
}

.mutter-media {
  display: block;
  width: 94px;
  height: 94px;
  border-style: solid;
  border-width: 4px;
  border-color: #fff;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 3px 7px 0 rgba(24, 24, 24, 0.3);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mutter-text {
  position: absolute;
  left: 50%;
  margin-left: -18px;
  -webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease,
    -webkit-transform 0.5s ease;
}

.mutter-text-content {
  position: relative;
  display: block;
  width: 36px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px auto 0;
  color: #181818;
  background: #fff;
}

.mutter-text-content:after,
.mutter-text-content:before {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  top: -13px;
  border: 4px solid transparent;
  border-bottom: 8px solid #ddd;
}

.mutter-text-content:after {
  top: -11px;
  border-bottom: 8px solid #fff;
}

.mutter-text-content a {
  color: #33bad2;
}

.mutter-text-inner {
  display: inline-block;
  width: 14px;
  height: auto;
  margin: 0 8px;
  padding: 17px 0 14px;
  font-size: 11px;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  color: inherit;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-transform: translate(2px, 0);
  transform: translate(2px, 0);
}

.mutter-svg {
  position: absolute;
  top: 0;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.mutter-svg circle {
  fill: transparent;
  stroke: #ee1d24;
  stroke-width: 4;
  -webkit-transition: all 0s linear;
  transition: all 0s linear;
  stroke-dasharray: 0 296;
}

.mutter-svg.is-hover circle {
  -webkit-transition: all 5s linear;
  transition: all 5s linear;
  stroke-dasharray: 296 296;
}

.is-flash {
  -webkit-animation: flash 0.6s infinite;
  animation: flash 0.6s infinite;
}

.is-flash2 {
  -webkit-animation: flash 0.3s infinite;
  animation: flash 0.3s infinite;
}

@-webkit-keyframes flash {
  50% {
    opacity: 0;
  }
}

@keyframes flash {
  50% {
    opacity: 0;
  }
}

@-webkit-keyframes circle {
  0% {
    stroke-dasharray: 0 296;
  }

  99.9%,
  to {
    stroke-dasharray: 296 296;
  }
}

@keyframes circle {
  0% {
    stroke-dasharray: 0 296;
  }

  99.9%,
  to {
    stroke-dasharray: 296 296;
  }
}

.introduction {
  position: relative;
  display: block;
  width: 100%;
  min-width: 1260px;
  padding: 0 0 24px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .introduction {
    min-width: 0;
    padding: 0 0 8px;
  }
}

.introduction:before {
  content: '';
  position: absolute;
  top: 120px;
  left: 0;
  display: block;
  background: #f5f5f5;
  width: 100%;
  height: 400px;
}

.introduction.is-exclusion-fixed {
  position: fixed;
}

.is-introduction-show .introduction-pickup,
.is-introduction-show .introduction-slider {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease 0.5s;
  transition: opacity 0.25s ease 0.5s;
}

.is-introduction-show .introduction-pager {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease 0.5s, background 0.25s ease;
  transition: opacity 0.25s ease 0.5s, background 0.25s ease;
}

.introduction-slider {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  opacity: 0;
}

.introduction-slider .swiper-wrapper {
  margin-left: -20px;
}

@media screen and (max-width: 768px) {
  .introduction-slider .swiper-wrapper {
    margin-left: 0;
  }
}

.introduction-slider .swiper-container {
  width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  height: 641px;
  padding: 42px 0 24px 30px;
  margin-left: calc(((100% - 1260px) / 2) + 0px);
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .introduction-slider .swiper-container {
    padding-right: 60px;
  }
}

@media screen and (max-width: 768px) {
  .introduction-slider .swiper-container {
    padding: 18px 0 8px;
    height: 220px;
    margin-left: calc((100% - 323.5px) / 2);
    overflow: inherit;
  }
}

.introduction-slider .swiper-slide {
  width: 270px;
  height: 444px;
  -webkit-transition: width 0.5s ease, height 0.5s ease;
  transition: width 0.5s ease, height 0.5s ease;
}

@media screen and (max-width: 768px) {
  .introduction-slider .swiper-slide {
    width: 303.5px;
    height: 170.5px;
  }
}

.introduction-slider .swiper-slide-prev .introduction-card,
.introduction-slider .swiper-slide-prev-second .introduction-card {
  opacity: 0;
}

.introduction-slider .swiper-slide-active {
  width: 320px;
  height: 570px;
}

@media screen and (min-width: 769px) {
  .introduction-slider .swiper-slide-active {
    margin-right: 20px !important;
    margin-left: 20px !important;
  }
}

@media screen and (max-width: 768px) {
  .introduction-slider .swiper-slide-active {
    width: 303.5px;
    height: 170.5px;
  }
}

.introduction-slider .swiper-slide-active .media-introduction {
  width: 100%;
  height: auto;
  padding-top: 178.2%;
}

@media screen and (max-width: 768px) {
  .introduction-slider .swiper-slide-active .media-introduction {
    width: 100%;
    height: auto;
    padding-top: 171px;
  }
}

.introduction-card {
  display: block;
  height: 100%;
  box-shadow: 0 5px 30px -7px rgba(25, 25, 25, 0.7);
  overflow: hidden;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease 0.25s, box-shadow 0.25s ease;
  transition: opacity 0.25s ease 0.25s, box-shadow 0.25s ease;
}

@media screen and (max-width: 768px) {
  .introduction-card {
    box-shadow: 0 10px 30px -7px rgba(25, 25, 25, 0.3);
  }
}

.introduction-card:hover {
  box-shadow: 0 10px 30px -7px rgba(25, 25, 25, 0);
}

.introduction-card-inner {
  display: block;
  color: inherit;
}

.introduction-card-content {
  position: relative;
  display: block;
  height: 68px;
  padding: 0 16px;
  background: #fff;
  overflow: hidden;
  opacity: 1;
}

@media screen and (max-width: 768px) {
  .introduction-card-content {
    display: none;
  }
}

.introduction-card-title {
  margin: 18px 0 0;
  font-size: 11px;
  font-weight: 400;
  line-height: 1;
  color: #999;
}

.introduction-card-en {
  margin: 5px 0 17px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}

.introduction-card-logo {
  position: absolute;
  top: 50%;
  right: 16px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  width: 100px;
}

.introduction-card-logo-guest-house {
  width: 78px;
  height: 22px;
}

.introduction-card-logo-coworking {
  width: 35px;
  height: 37px;
}

.introduction-card-text {
  display: none;
}

.introduction-pager {
  position: absolute;
  top: 535px;
  left: 50%;
  z-index: 1;
  margin-left: -656px;
  width: 114px;
  height: 114px;
  padding: 7px;
  border-radius: 50%;
  opacity: 0;
  -webkit-transition: background 0.25s ease;
  transition: background 0.25s ease;
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .introduction-pager {
    margin-left: -626px;
  }
}

@media screen and (max-width: 768px) {
  .introduction-pager {
    top: 134px;
    margin-left: -182px;
    width: 63px;
    height: 63px;
    padding: 4px;
  }
}

@media screen and (max-width: 320px) {
  .introduction-pager {
    margin-left: -156px;
  }
}

.is-introduction-pager-show .introduction-pager-current,
.is-introduction-pager-show .introduction-pager-inner,
.is-introduction-pager-show .introduction-pager-max,
.is-introduction-pager-show .introduction-pager-sprit {
  opacity: 1;
}

.is-introduction-pager-show .introduction-pager-inner:after,
.is-introduction-pager-show .introduction-pager-inner:before {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.is-introduction-pager-web-production .introduction-pager-inner:before {
  background: rgba(0, 118, 255, 0.35);
}

.is-introduction-pager-web-production .introduction-pager-inner:after {
  background: #0076ff;
}

.is-introduction-pager-content-creation .introduction-pager-inner:before {
  background: rgba(2, 200, 201, 0.35);
}

.is-introduction-pager-content-creation .introduction-pager-inner:after {
  background: #02c8c9;
}

.is-introduction-pager-guest-house .introduction-pager-inner:before {
  background: rgba(1, 160, 39, 0.35);
}

.is-introduction-pager-guest-house .introduction-pager-inner:after {
  background: #01a027;
}

.is-introduction-pager-coworking .introduction-pager-inner:before {
  background: rgba(141, 177, 1, 0.35);
}

.is-introduction-pager-coworking .introduction-pager-inner:after {
  background: #8db101;
}

.is-introduction-pager-education .introduction-pager-inner:before {
  background: rgba(202, 194, 1, 0.35);
}

.is-introduction-pager-education .introduction-pager-inner:after {
  background: #cac201;
}

.is-introduction-pager-food-and-drink .introduction-pager-inner:before {
  background: rgba(233, 102, 6, 0.35);
}

.is-introduction-pager-food-and-drink .introduction-pager-inner:after {
  background: #e96606;
}

.is-introduction-pager-regionalactivation .introduction-pager-inner:before {
  background: rgba(225, 43, 142, 0.35);
}

.is-introduction-pager-regionalactivation .introduction-pager-inner:after {
  background: #e12b8e;
}

.is-introduction-pager-artbusiness .introduction-pager-inner:before {
  background: rgba(211, 14, 185, 0.35);
}

.is-introduction-pager-artbusiness .introduction-pager-inner:after {
  background: #d30eb9;
}

.introduction-pager-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: #fff;
}

.introduction-pager-inner:after,
.introduction-pager-inner:before {
  content: '';
  display: block;
  border-radius: 50%;
}

.introduction-pager-inner:before {
  width: 114px;
  height: 114px;
  position: absolute;
  top: -7px;
  left: -7px;
  -webkit-transform: scale(0);
  transform: scale(0);
  opacity: 0;
  -webkit-transition: background 0.25s ease 0.5s, opacity 0.5s ease,
    -webkit-transform 0.5s ease;
  transition: background 0.25s ease 0.5s, transform 0.5s ease, opacity 0.5s ease;
  transition: background 0.25s ease 0.5s, transform 0.5s ease, opacity 0.5s ease,
    -webkit-transform 0.5s ease;
}

@media screen and (max-width: 768px) {
  .introduction-pager-inner:before {
    width: 63px;
    height: 63px;
    top: -4px;
    left: -4px;
  }
}

.introduction-pager-inner:after {
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition: background 0.25s ease 0.75s, opacity 0.75s ease,
    -webkit-transform 0.75s ease;
  transition: background 0.25s ease 0.75s, transform 0.75s ease,
    opacity 0.75s ease;
  transition: background 0.25s ease 0.75s, transform 0.75s ease,
    opacity 0.75s ease, -webkit-transform 0.75s ease;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.introduction-pager-current {
  position: absolute;
  top: 9px;
  right: 50%;
  margin-right: 4px;
  display: block;
  font-size: 32px;
  font-weight: 700;
  z-index: 1;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

@media screen and (max-width: 768px) {
  .introduction-pager-current {
    top: 6px;
    margin-right: 1px;
    font-size: 18px;
  }
}

.introduction-pager-sprit {
  position: absolute;
  top: 50px;
  left: 50%;
  display: block;
  width: 25px;
  height: 1px;
  margin-left: -12px;
  background: #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  z-index: 1;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

@media screen and (max-width: 768px) {
  .introduction-pager-sprit {
    top: 27px;
    width: 16px;
    margin-left: -6px;
  }
}

.introduction-pager-max {
  display: block;
  font-size: 20px;
  position: absolute;
  top: 54px;
  left: 50%;
  margin-left: 4px;
  font-weight: 700;
  z-index: 1;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

@media screen and (max-width: 768px) {
  .introduction-pager-max {
    top: 27px;
    margin-left: 2px;
    font-size: 13px;
  }
}

.introduction-pickup {
  position: absolute;
  top: 546px;
  right: 50%;
  margin-right: -605px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 850px;
  z-index: 2;
  opacity: 0;
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .introduction-pickup {
    margin-right: -635px;
  }
}

@media screen and (max-width: 768px) {
  .introduction-pickup {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    margin: -17px auto 0;
    padding: 0 25px;
  }
}

.introduction-pickup-heading:before,
.is-introduction-pickup-animation-start .introduction-pickup-heading:before {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
  -webkit-transition: opacity 0.5s ease 0.5s, -webkit-transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s,
    -webkit-transform 0.5s ease 0.5s;
}

.is-introduction-pickup-animation-start .introduction-pickup-en,
.is-introduction-pickup-animation-start .introduction-pickup-title {
  opacity: 0;
  -webkit-transition: opacity 0.5s ease 0.25s, -webkit-transform 0.5s ease 0.25s;
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s,
    -webkit-transform 0.5s ease 0.25s;
}

.is-introduction-pickup-animation-end .introduction-pickup-heading:before,
.is-introduction-pickup-animation-start .introduction-pickup-text {
  opacity: 0;
  -webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease,
    -webkit-transform 0.5s ease;
}

.is-introduction-pickup-animation-end .introduction-pickup-heading:before {
  opacity: 1;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.is-introduction-pickup-animation-end .introduction-pickup-en,
.is-introduction-pickup-animation-end .introduction-pickup-text,
.is-introduction-pickup-animation-end .introduction-pickup-title {
  opacity: 1;
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-transition: opacity 0.5s ease 0.25s, -webkit-transform 0.5s ease 0.25s;
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s;
  transition: opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s,
    -webkit-transform 0.5s ease 0.25s;
}

.is-introduction-pickup-animation-end .introduction-pickup-text {
  -webkit-transition: opacity 0.5s ease 0.5s, -webkit-transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s,
    -webkit-transform 0.5s ease 0.5s;
}

.introduction-pickup-heading {
  position: relative;
  display: block;
}

@media screen and (max-width: 768px) {
  .introduction-pickup-heading {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
  }
}

.introduction-pickup-heading:before {
  content: '';
  position: absolute;
  top: 32px;
  left: -188px;
  display: block;
  width: 177px;
  height: 1px;
  background: #004098;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transition: opacity 0.85s ease 0.1s, -webkit-transform 0.85s ease 0.1s;
  transition: opacity 0.85s ease 0.1s, transform 0.85s ease 0.1s;
  transition: opacity 0.85s ease 0.1s, transform 0.85s ease 0.1s,
    -webkit-transform 0.85s ease 0.1s;
}

@media screen and (max-width: 768px) {
  .introduction-pickup-heading:before {
    top: 12px;
    left: -183px;
  }
}

.is-introduction-pickup-heading-web-production:before {
  background-color: #0076ff;
}

.is-introduction-pickup-heading-content-creation:before {
  background-color: #02c8c9;
}

.is-introduction-pickup-heading-guest-house:before {
  background: #01a027;
}

.is-introduction-pickup-heading-coworking:before {
  background: #8db101;
}

.is-introduction-pickup-heading-education:before {
  background: #cac201;
}

.is-introduction-pickup-heading-food-and-drink:before {
  background: #e96606;
}

.is-introduction-pickup-heading-regionalactivation:before {
  background: #e12b8e;
}

.is-introduction-pickup-heading-artbusiness:before {
  background: #e2408f;
}

.introduction-pickup-title {
  font-size: 12px;
  line-height: 1;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease 0.5s, -webkit-transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s,
    -webkit-transform 0.5s ease 0.5s;
}

@media screen and (max-width: 768px) {
  .introduction-pickup-title {
    margin: 2px 0 0;
    font-size: 10px;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
}

.introduction-pickup-en {
  margin: 5px 30px 0 0;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease 0.5s, -webkit-transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s;
  transition: opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s,
    -webkit-transform 0.5s ease 0.5s;
}

@media screen and (max-width: 768px) {
  .introduction-pickup-en {
    margin: 0;
    font-size: 20px;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
}

.introduction-pickup-text {
  padding: 7px 0 0;
  font-size: 12px;
  color: #666;
  max-height: 2.8rem;
  overflow: hidden;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease 0.75s, -webkit-transform 0.5s ease 0.75s;
  transition: opacity 0.5s ease 0.75s, transform 0.5s ease 0.75s;
  transition: opacity 0.5s ease 0.75s, transform 0.5s ease 0.75s,
    -webkit-transform 0.5s ease 0.75s;
}

@media screen and (max-width: 768px) {
  .introduction-pickup-text {
    display: none;
  }
}

.introduction-pickup-text-inner {
  display: block;
  line-height: 1.5;
  height: 36px;
  overflow: hidden;
  position: relative;
  word-break: break-all;
  text-align: justify;
}

.introduction-pickup-text-inner:after,
.introduction-pickup-text-inner:before {
  position: absolute;
}

.introduction-pickup-text-inner:before {
  content: '...';
  background: #fff;
  right: 0;
  text-align: center;
  width: 1.1em;
  top: 18px;
}

.introduction-pickup-text-inner:after {
  content: '';
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #fff;
}

.introduction-title {
  position: absolute;
  top: -20px;
  left: 50%;
  display: block;
  margin-left: -604px;
  font-size: 76px;
  font-weight: 700;
  color: #0076ff;
  letter-spacing: 0;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: 0% 0% 0;
  transform-origin: 0% 0% 0;
  opacity: 0.2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .introduction-title {
    left: 84px;
    margin-left: 0;
  }
}

@media screen and (max-width: 768px) {
  .introduction-title {
    top: -3px;
    left: 32px;
    display: block;
    margin-left: 0;
    font-size: 28px;
    letter-spacing: 3px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

.is-introduction-title-web-production {
  color: #0076ff;
}

.is-introduction-title-content-creation {
  color: #02c8c9;
}

.is-introduction-title-guest-house {
  color: #01a027;
}

.is-introduction-title-coworking {
  color: #8db101;
}

.is-introduction-title-education {
  color: #cac201;
}

.is-introduction-title-food-and-drink {
  color: #e96606;
}

.is-introduction-title-regionalactivation {
  color: #e12b8e;
}

.is-introduction-title-artbusiness {
  color: #e2408f;
}

.introduction-lig {
  position: absolute;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  bottom: -33px;
  opacity: 0.4;
}

.introduction-lig svg {
  width: 1440px;
  height: 117px;
}

.introduction-lig path {
  fill: #f6f6f6;
}

.slidernavi {
  display: block;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
}

.slidernavi.slidernavi-pickup {
  display: none;
}

@media screen and (max-width: 768px) {
  .slidernavi.slidernavi-pickup {
    display: block;
    padding-right: 16px;
    text-align: right;
  }
}

.slidernavi.slidernavi-sidepr {
  display: none;
}

@media screen and (max-width: 768px) {
  .slidernavi.slidernavi-sidepr {
    display: block;
    margin-top: 5px;
  }

  .slidernavi-service {
    padding-right: 30px;
  }
}

.slidernavi-movieslider {
  position: absolute;
  left: 0;
  bottom: 23px;
  width: 100%;
  max-width: 1260px;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .slidernavi-movieslider {
    bottom: 55px;
    margin-left: -20px;
    padding-right: 20px;
    text-align: right;
  }

  .slidernavi-movieslider .slidernavi-button-next,
  .slidernavi-movieslider .slidernavi-button-prev {
    display: none;
  }
}

.slidernavi-pagenation {
  display: inline-block;
  position: relative;
  text-align: center;
}

.slidernavi-pagenation-small .slidernavi-pagenation-item {
  margin: 0 4px;
  width: 6px;
  height: 6px;
}

.slidernavi-pagenation-item {
  display: inline-block;
  margin: 0 5px;
  width: 9px;
  height: 9px;
  background: #b9b9b9;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;
  -webkit-transition: background 0.25s ease;
  transition: background 0.25s ease;
}

@media screen and (max-width: 768px) {
  .slidernavi-pagenation-item {
    width: 5px;
    height: 5px;
    margin: 0 4px;
  }
}

.slidernavi-pagenation-item.is-slidernavi-item-active {
  background: #181818;
}

.slidernavi-button-next,
.slidernavi-button-prev {
  display: inline-block;
  width: 15px;
  height: 21px;
  -webkit-transform: translate(0, 3px);
  transform: translate(0, 3px);
  font-size: 14px;
  cursor: pointer;
}

.slidernavi-button-next.is-slidernavi-button-disabled,
.slidernavi-button-prev.is-slidernavi-button-disabled {
  opacity: 0.5;
  cursor: normal;
}

.slidernavi-button-prev {
  margin: 0 2px 0 0;
}

.slidernavi-button-next {
  margin: 0 0 0 2px;
}

.slidernavi-button-next .movieslider-button-icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.movieslider-button-icon {
  display: inline-block;
}

.sliderbutton-next,
.sliderbutton-prev {
  position: absolute;
  width: 48px;
  height: 48px;
  padding: 16px 0 0;
  font-size: 0;
  letter-spacing: 0;
  background: rgba(24, 24, 24, 0.5);
  border-radius: 50%;
  text-align: center;
  z-index: 8;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .sliderbutton-next,
  .sliderbutton-prev {
    width: 24px;
    height: 24px;
    padding: 6px 0 0;
  }
}

.sliderbutton-prev.sliderbutton-prev-introduction {
  top: 217px;
  left: 50%;
  margin-left: -713px;
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .sliderbutton-prev.sliderbutton-prev-introduction {
    left: 10px;
    margin-left: 0;
  }
}

@media screen and (max-width: 768px) {
  .sliderbutton-prev.sliderbutton-prev-introduction {
    display: none;
    top: 86px;
  }
}

.sliderbutton-prev.sliderbutton-prev-sidepr {
  display: none;
  left: 0;
}

@media screen and (max-width: 768px) {
  .sliderbutton-prev.sliderbutton-prev-sidepr {
    display: block;
    left: -10px;
    top: 50%;
    margin-top: -12px;
  }
}

.sliderbutton-next {
  display: none;
}

@media screen and (max-width: 768px) {
  .sliderbutton-next {
    display: block;
    right: 30px;
    margin: 0;
  }
}

.sliderbutton-next .sliderbutton-icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media screen and (max-width: 768px) {
  .sliderbutton-next .sliderbutton-icon {
    -webkit-transform: rotate(180deg) scale(0.6);
    transform: rotate(180deg) scale(0.6);
  }
}

.sliderbutton-next.sliderbutton-next-introduction {
  display: block;
  top: 217px;
  right: 50%;
  margin-right: -713px;
}

@media screen and (min-width: 769px) and (max-width: 1280px) {
  .sliderbutton-next.sliderbutton-next-introduction {
    right: 10px;
    margin-right: 0;
  }
}

@media screen and (max-width: 768px) {
  .sliderbutton-next.sliderbutton-next-introduction {
    top: 86px;
    margin-right: -163px;
  }

  .sliderbutton-next.sliderbutton-next-sidepr {
    right: -10px;
    top: 50%;
    margin-top: -12px;
  }
}

.sliderbutton-icon {
  display: inline-block;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .sliderbutton-icon {
    font-size: 10px;
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
}

.hide,
.hide-pc {
  display: none;
}

@media screen and (max-width: 768px) {
  .hide-pc {
    display: block;
  }
}

.hide-mobile {
  display: block;
}

@media screen and (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
}

.pagetop {
  position: relative;
  min-width: 1260px;
  margin: 0 auto;
  height: 0;
  text-align: right;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .pagetop {
    min-width: 0;
    margin-top: 77px;
  }
}

.is-pagetop-show .pagetop-button {
  -webkit-transform: translate3d(0, -82px, 3px);
  transform: translate3d(0, -82px, 3px);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

@media screen and (max-width: 768px) {
  .is-pagetop-show .pagetop-button {
    -webkit-transform: translate3d(0, -82px, 3px);
    transform: translate3d(0, -82px, 3px);
  }
}

.is-pagetop-keep .pagetop-button {
  position: absolute;
  -webkit-transform: translate3d(0, -28px, 3px);
  transform: translate3d(0, -28px, 3px);
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

@media screen and (max-width: 768px) {
  .is-pagetop-keep .pagetop-button {
    -webkit-transform: translate3d(0, 38px, 3px);
    transform: translate3d(0, 38px, 3px);
  }
}

.pagetop-button {
  display: block;
  position: fixed;
  right: 20px;
  bottom: -58px;
  width: 56px;
  height: 56px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 56px;
  border-radius: 50%;
  background: #181818;
  z-index: 11;
  -webkit-transform: translate3d(0, 120px, 3px);
  transform: translate3d(0, 120px, 3px);
  -webkit-transition: background 0.25s, color 0.25s,
    -webkit-transform 0.25s ease;
  transition: transform 0.25s ease, background 0.25s, color 0.25s;
  transition: transform 0.25s ease, background 0.25s, color 0.25s,
    -webkit-transform 0.25s ease;
}

@media screen and (max-width: 768px) {
  .pagetop-button {
    bottom: 10px;
    right: 10px;
  }
}

.pagetop-button:hover {
  background-color: #fff;
  color: #181818;
}

.pagetop-icon {
  display: inline-block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.pagenation {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  color: #fff;
  text-align: center;
  background: #181818;
  overflow: hidden;
  border-radius: 3px;
}

@media screen and (max-width: 768px) {
  .pagenation {
    border-radius: 0;
  }
}

.pagenation-next,
.pagenation-prev {
  display: block;
  min-height: 56px;
  -webkit-flex-basis: 112px;
  -ms-flex-preferred-size: 112px;
  flex-basis: 112px;
  font-size: 16px;
  font-weight: 700;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .pagenation-next,
  .pagenation-prev {
    -webkit-flex-basis: 106px;
    -ms-flex-preferred-size: 106px;
    flex-basis: 106px;
    min-height: 49px;
    font-size: 14px;
  }
}

.pagenation-next > a,
.pagenation-prev > a {
  display: block;
  color: inherit;
  padding: 16px 0;
}

@media screen and (max-width: 768px) {
  .pagenation-next > a,
  .pagenation-prev > a {
    padding: 14px 0;
  }
}

.pagenation-prev {
  border-right: 1px solid #fff;
}

.pagenation-next {
  border-left: 1px solid #fff;
}

.pagenation-select {
  position: relative;
  display: block;
  width: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  cursor: pointer;
}

.pagenation-select-label {
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  padding: 16px 0;
}

@media screen and (max-width: 768px) {
  .pagenation-select-label {
    font-size: 14px;
  }
}

.pagenation-select-label span {
  padding: 0 2px;
}

.pagenation-select-arrow {
  position: absolute;
  top: 50%;
  right: 19px;
  margin-top: -5px;
  font-size: 14px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.blogcategory,
.pagenation-select-list {
  position: relative;
  display: block;
  width: 100%;
}

.pagenation-select-list {
  -webkit-appearance: none;
  appearance: none;
  height: 100%;
  border: none;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
  color: #181818;
}

.blogcategory {
  min-width: 1260px;
  background: #3a3a3a;
}

@media screen and (max-width: 768px) {
  .blogcategory {
    min-width: 0;
    overflow-y: scroll;
  }
}

.blogcategory.is-single {
  margin-bottom: 70px;
}

@media screen and (max-width: 768px) {
  .blogcategory.is-single {
    margin-bottom: 35px;
  }

  .single .blogcategory {
    display: none;
  }
}

.blogcategory-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  width: 1260px;
  margin: 0 auto;
  padding: 0 33px;
}

@media screen and (max-width: 768px) {
  .blogcategory-list {
    display: block;
    width: 100%;
    padding: 0 10px;
    white-space: nowrap;
    text-align: center;
  }
}

.blogcategory-list-item {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .blogcategory-list-item {
    display: inline-block;
    font-size: 10px;
  }
}

.blogcategory-list-item.is-list:hover .blogcategory-list-item-inner:after {
  display: block;
  opacity: 1;
}

.blogcategory-list-item.is-list.is-subcategory
  .blogcategory-list-item-inner:after,
.blogcategory-list-item.is-list.is-subcategory:hover
  .blogcategory-list-item-inner:after {
  opacity: 1;
}

.blogcategory-list-item.is-list.is-subcategory:hover .subcategory {
  background-color: #f5f5f5;
}

.blogcategory-list-item.is-list.is-current .blogcategory-list-item-inner:after,
.blogcategory-list-item.is-subcategory .blogcategory-list-item-inner:after {
  display: block;
  opacity: 1;
}

.blogcategory-list-item.is-subcategory .subcategory {
  max-height: 52px;
}

@media screen and (max-width: 768px) {
  .blogcategory-list-item.is-subcategory .subcategory {
    max-height: 100%;
  }
}

.blogcategory-list-item.is-subcategory .subcategory-list {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}

.blogcategory-list-item-inner {
  position: relative;
  display: block;
  padding: 16px 32px 15px;
  color: #b2b2b2;
}

.blogcategory-list-item-inner:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 1px;
  height: 12px;
  margin: -6px 0 0;
  background: #616161;
}

.blogcategory-list-item-inner:after {
  position: absolute;
  content: '';
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  opacity: 0;
  border-style: solid;
  border-width: 0 6px 6px;
  border-color: transparent transparent #f5f5f5;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  -webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease,
    -webkit-transform 0.25s ease;
}

.blogcategory-list-item-inner.is-current,
.blogcategory-list-item-inner:hover,
.contact-description a {
  color: #33bad2;
}

@media screen and (max-width: 768px) {
  .blogcategory-list-item-inner {
    padding: 11px 12px;
  }
}

.breadcrumb {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}

.breadcrumb-item {
  font-size: 12px;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .breadcrumb-item {
    margin-top: 4px;
    font-size: 10px;
  }
}

.breadcrumb-item:before {
  content: '\e90c';
  display: inline-block;
  font-family: 'lig-icon';
  font-size: 10px;
  letter-spacing: 0;
  line-height: 12px;
  -webkit-transform: translate(0, -1px);
  transform: translate(0, -1px);
}

@media screen and (max-width: 768px) {
  .breadcrumb-item:before {
    line-height: 10px;
    -webkit-transform: translate(0, 0) scale(0.75);
    transform: translate(0, 0) scale(0.75);
  }

  .breadcrumb-item:first-of-type {
    margin-left: -4px;
    padding-right: 3px;
  }
}

.breadcrumb-item:first-of-type:before {
  display: none;
}

.breadcrumb-item-inner {
  display: inline-block;
  color: inherit;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .breadcrumb-item-inner {
    padding: 0 7px;
  }
}

.breadcrumb-item-inner .icon-home {
  display: inline-block;
  width: 19px;
  height: 18px;
}

@media screen and (max-width: 768px) {
  .breadcrumb-item-inner .icon-home {
    width: 12px;
    height: 11px;
  }
}

.search-box {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  border: 2px solid #181818;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .search-box {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-radius: 4px;
    margin: 0 20px;
  }

  .search-box-home .search-box-category {
    height: 0;
  }

  .search-box-home .search-box-category-label {
    border-bottom: 1px solid #181818;
  }
}

.search-box-member {
  max-width: 884px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .search-box-member {
    max-width: 100%;
    margin: 0 20px;
  }

  .search-box-open .search-box-category {
    height: 48px;
  }

  .search-box-open .search-box-text:before {
    opacity: 0;
  }

  .search-box-open .search-box-text-input {
    opacity: 1;
    pointer-events: auto;
  }

  .search-box-open .search-box-text-icon {
    right: 14px;
    left: auto;
  }
}

.search-box-category {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 68px;
}

@media screen and (max-width: 768px) {
  .search-box-category {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    height: 40px;
    overflow: hidden;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
}

.search-box-category-label {
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 25px 24px 22px;
  color: #888;
  background-color: #fff;
}

@media screen and (max-width: 768px) {
  .search-box-category-label {
    height: 100%;
    padding: 0 10px;
    line-height: 50px;
    font-size: 10px;
    font-weight: 400;
  }
}

.search-box-category-arrow {
  position: absolute;
  top: 50%;
  right: 31px;
  margin-top: -5px;
  font-size: 14px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

@media screen and (max-width: 768px) {
  .search-box-category-arrow {
    right: 20px;
    margin-top: -5px;
    font-size: 11px;
    font-weight: 700;
  }
}

.search-box-category-list {
  -webkit-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  position: relative;
  z-index: 2;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .search-box-category-list {
    height: 48px;
  }
}

.search-box-text {
  position: relative;
  -webkit-flex-basis: 632px;
  -ms-flex-preferred-size: 632px;
  flex-basis: 632px;
}

@media screen and (max-width: 768px) {
  .search-box-text {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.search-box-text:before {
  content: '記事を検索';
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px 28px;
  font-size: 10px;
}

@media screen and (max-width: 768px) {
  .search-box-text:before {
    display: block;
  }
}

.search-box-text:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 1px;
  height: 24px;
  margin: -11px 0 0;
  background: #181818;
}

@media screen and (max-width: 768px) {
  .search-box-text:after {
    display: none;
  }
}

.search-box-text-input {
  width: 100%;
  padding: 25px 27px 22px;
}

@media screen and (max-width: 768px) {
  .search-box-text-input {
    position: relative;
    padding: 15px 10px;
    font-size: 10px;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
    opacity: 0;
    pointer-events: none;
  }
}

.search-box-text-input:placeholder-shown {
  color: #888;
}

.search-box-text-input::-webkit-input-placeholder {
  color: #888;
}

.search-box-text-input:-moz-placeholder,
.search-box-text-input::-moz-placeholder {
  opacity: 1;
  color: #888;
}

.search-box-text-input:-ms-input-placeholder {
  color: #888;
}

.search-box-text-icon {
  position: absolute;
  top: 50%;
  right: 20px;
  margin: -15px 0 0;
  font-size: 20px;
  color: #888;
}

@media screen and (max-width: 768px) {
  .search-box-text-icon {
    left: 9px;
    right: auto;
    margin-top: -10px;
    font-size: 15px;
  }
}

.featuredtag {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .featuredtag {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0 0 0 20px;
    overflow-y: scroll;
    display: none;
  }
}

.featuredtag.featuredtag-margin {
  margin-top: 15px;
}

@media screen and (max-width: 768px) {
  .featuredtag.is-featuredtag-open {
    display: block;
  }
}

.featuredtag-title {
  display: block;
  -webkit-flex-basis: 157px;
  -ms-flex-preferred-size: 157px;
  flex-basis: 157px;
}

@media screen and (max-width: 768px) {
  .featuredtag-title {
    display: none;
  }
}

.featuredtag-label {
  display: inline-block;
  padding: 4px 18px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  background: #eaeaea;
  border-radius: 14px;
}

.browser-ie11 .featuredtag-label {
  padding: 6px 18px 2px;
}

.featuredtag-list {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 0 0 11px;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .featuredtag-list {
    margin-left: 0;
    white-space: nowrap;
  }
}

.featuredtag-list-item {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: #181818;
}

.featuredtag-list-item-inner {
  padding: 0 8px 0 0;
  color: #33bad2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.featuredtag-list-item-inner:hover {
  color: #6bddf2;
}

.pickup {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
}

.pickup-heading {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 0 0 -13px;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .pickup-heading {
    margin: 10px 0 0;
  }
}

.pickup-content {
  -webkit-flex-basis: 891px;
  -ms-flex-preferred-size: 891px;
  flex-basis: 891px;
  max-width: 891px;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .pickup-content {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
    padding-left: 20px;
  }
}

.pickup-content .swiper-container {
  width: 100%;
  padding-top: 20px;
  overflow: inherit;
}

@media screen and (max-width: 768px) {
  .pickup-content .swiper-container {
    padding-top: 5px;
    padding-bottom: 5px;
    overflow: hidden;
  }
}

.pickup-content .swiper-slide {
  width: 270px;
}

@media screen and (max-width: 768px) {
  .pickup-content .swiper-slide {
    width: 170px;
  }

  .pickup-content .swiper-slide:last-child {
    margin-right: 40px !important;
  }
}

.pickup-content-fill {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%;
}

.pickup-article {
  width: 100%;
  max-width: 270px;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .pickup-article {
    max-width: 170px;
  }
}

.pickup-article:nth-of-type(2) {
  margin: 0 40px;
}

.pickup-article-inner {
  display: block;
  color: inherit;
}

.pickup-article-date {
  margin: 7px 0 0;
  font-size: 12px;
  font-weight: 700;
  color: #666;
}

@media screen and (max-width: 768px) {
  .pickup-article-date {
    font-size: 10px;
    font-weight: 400;
  }
}

.pickup-article-title {
  margin: 8px 0 0;
  height: auto;
  max-height: 4.6rem;
  font-size: 16px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .pickup-article-title {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
    max-height: 2.3rem;
  }
}

.pickup-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 300px;
  padding: 91px 0 0;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .pickup-menu {
    margin: 11px 0 0;
    padding: 0 20px;
    min-height: 0;
  }
}

.pickup-menu:before {
  display: none;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  content: '';
  width: 100%;
  height: 1px;
  background-color: #ddd;
}

@media screen and (max-width: 768px) {
  .pickup-menu:before {
    display: block;
  }
}

.pickup-menu-item {
  position: relative;
  width: 40px;
  margin: 0 12px;
  font-size: 14px;
  font-weight: 700;
  color: #181818;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item {
    width: 100%;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 5px;
    font-size: 10px;
    -webkit-writing-mode: inherit;
    -ms-writing-mode: inherit;
    writing-mode: inherit;
  }

  .pickup-menu-item:before {
    position: absolute;
    top: 50%;
    left: 0;
    content: '';
    display: block;
    width: 1px;
    height: 18px;
    margin: -9px 0 0;
    background: #ddd;
  }
}

.pickup-menu-item:first-of-type:before {
  display: none;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item:first-of-type {
    margin-left: 0;
  }

  .pickup-menu-item:last-of-type {
    margin-right: 0;
  }
}

.pickup-menu-item-inner {
  display: block;
  height: 100%;
  padding: 1px;
  color: inherit;
  line-height: 40px;
  text-align: start;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-inner {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    max-height: 48px;
    padding: 15px 0;
    line-height: 15px;
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-inner-first {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
}

.pickup-menu-item-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 0 8px;
  color: #fff;
  background: #181818;
  border-radius: 50%;
  -webkit-writing-mode: horizontal-tb;
  -ms-writing-mode: lr-tb;
  writing-mode: horizontal-tb;
  text-align: center;
  border: 2px solid #181818;
  -webkit-transition: background 0.25s ease, color 0.25s ease;
  transition: background 0.25s ease, color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-icon {
    display: inline;
    /* width: 25px;
    height: 25px; */
    margin: 0 7px 0 0;
    font-size: 18px;
  }
}

.pickup-menu-item-icon i {
  display: inline-block;
  margin-top: 9px;
}

.pickup-menu-item-icon .icon-best {
  margin-top: 7px;
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-icon .icon-best {
    margin-top: 3px;
    font-size: 17px;
  }
}

.pickup-menu-item-icon .icon-library {
  margin-top: 10px;
  font-size: 17px;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-icon .icon-library {
    margin-top: 7px;
    font-size: 12px;
  }
}

.pickup-menu-item-icon .icon-series {
  margin-top: 10px;
  font-size: 18px;
}

@media screen and (max-width: 768px) {
  .pickup-menu-item-icon .icon-series {
    margin-top: 6px;
    font-size: 12px;
  }
}

@media screen and (max-width: 768px) {
  .largebanner {
    width: 100%;
    height: 83px;
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    background-size: 4px 4px;
  }
}

.largebanner-margin {
  margin: 20px 0 0;
}

@media screen and (max-width: 768px) {
  .largebanner-margin {
    margin: 0;
  }
}

.largebanner-inner {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: inherit;
}

.largebanner-person {
  position: absolute;
  left: 80px;
  bottom: 0;
}

@media screen and (max-width: 768px) {
  .largebanner-person {
    left: 13px;
  }
}

.largebanner-person img {
  width: 92px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .largebanner-person img {
    width: 72px;
  }
}

.largebanner-text {
  margin: 0 0 0 200px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .largebanner-text {
    margin: 0 40px 0 102px;
    font-size: 12px;
  }
}

.largebanner-mark {
  margin: 0 0 0 16px;
  font-size: 18px;
  -webkit-transform: translate(0, 1px);
  transform: translate(0, 1px);
}

@media screen and (max-width: 768px) {
  .largebanner-mark {
    position: absolute;
    top: 50%;
    right: 9px;
    margin: -11px 0 0;
    font-size: 16px;
  }
}

.listlink {
  list-style: none;
}

.listlink.listlink-sidearea {
  margin-top: 16px;
  padding-left: 13px;
}

@media screen and (max-width: 768px) {
  .listlink.listlink-sidearea {
    margin-top: 15px;
    padding-left: 23px;
  }
}

.listlink,
.listlink-item {
  display: block;
}

.listlink-item-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: inherit;
}

.listlink-item-inner:hover .listlink-item-icon,
.pickup-menu-item-inner:hover .pickup-menu-item-icon {
  background-color: #fff;
  color: #181818;
}

.listlink-item-icon {
  -webkit-flex-basis: 29px;
  -ms-flex-preferred-size: 29px;
  flex-basis: 29px;
  width: 29px;
  height: 29px;
  margin: 0 20px 0 0;
  background: #181818;
  border: 2px solid #181818;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  -webkit-transition: background 0.25s ease, color 0.25s ease;
  transition: background 0.25s ease, color 0.25s ease;
}

.listlink-item-icon,
.listlink-item-icon i,
.listlink-item-text {
  display: inline-block;
}

.listlink-item-icon .icon-best {
  margin-top: 1px;
  font-size: 21px;
}

.listlink-item-icon .icon-library {
  margin-top: 5px;
  font-size: 14px;
}

.listlink-item-icon .icon-series {
  margin-top: 4px;
  font-size: 15px;
}

.listlink-item-icon .icon-author {
  margin-top: 4px;
  margin-left: 1px;
  font-size: 17px;
}

.listlink-item-icon .icon-book {
  margin-top: 5px;
  margin-left: 1px;
  font-size: 15px;
}

.listlink-item-text {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 11px 0 13px;
  font-size: 13px;
  border-top: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .listlink-item-text {
    font-size: 12px;
    padding: 17px 0;
  }
}

.listlink-item-text-first {
  border-top-width: 0;
}

.listlink-item-arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-block;
  -webkit-transform: rotate(180deg) translate(0, 6px);
  transform: rotate(180deg) translate(0, 6px);
  font-size: 10px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .listlink-item-arrow {
    right: 24px;
  }
}

.sidepr {
  position: relative;
  display: block;
}

.sidepr.sidepr-margin {
  margin-top: 40px;
}

.sidepr-header,
.sidepr-list .swiper-container {
  width: 100%;
}

.sidepr-header-inner {
  display: block;
  color: inherit;
}

.sidepr-header-text {
  display: none;
  height: 36px;
  font-size: 12px;
  color: #fff;
  background: #181818;
}

@media screen and (max-width: 768px) {
  .sidepr-header-text {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.sidepr-header-text:after,
.sidepr-header-text:before {
  content: '';
  display: inline-block;
  width: 1px;
  height: 16px;
  background: #fff;
}

.sidepr-header-text:before {
  -webkit-transform: rotate(-30deg) translate(-11px, -6px);
  transform: rotate(-30deg) translate(-11px, -6px);
}

.sidepr-header-text:after {
  -webkit-transform: rotate(30deg) translate(11px, -6px);
  transform: rotate(30deg) translate(11px, -6px);
}

.sidepr-header-image {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .sidepr-header-image {
    display: none;
  }
}

.sidepr-list {
  display: block;
  width: 100%;
  margin: -29px 0 0;
  padding: 4px 0 0;
  list-style: none;
  border: 1px solid #e5e5e5;
  border-top-width: 0;
}

@media screen and (max-width: 768px) {
  .sidepr-list {
    max-width: 100vw;
    margin: 20px 0 0;
    padding: 0 20px;
    border-width: 0;
  }
}

.sidepr-list .swiper-wrapper {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .sidepr-list .swiper-wrapper {
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
}

.sidepr-list-container {
  position: relative;
}

.sidepr-list-item {
  display: block;
  width: 100%;
  border-top: 1px solid #e5e5e5;
}

@media screen and (max-width: 768px) {
  .sidepr-list-item {
    border-width: 0;
  }
}

.sidepr-list-item-first {
  border-top-width: 0;
}

.sidepr-list-item-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 0 15px 14px;
  color: inherit;
}

@media screen and (max-width: 768px) {
  .sidepr-list-item-inner {
    display: block;
    padding: 8px 8px 24px;
    border: 1px solid #e5e5e5;
  }
}

.sidepr-media {
  -webkit-flex-basis: 86px;
  -ms-flex-preferred-size: 86px;
  flex-basis: 86px;
}

.sidepr-list-item-detail {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 0 0 9px;
}

@media screen and (max-width: 768px) {
  .sidepr-list-item-detail {
    margin: 15px 0 0;
  }
}

.sidepr-list-item-detail .like {
  margin: -3px 14px 0 auto;
}

@media screen and (max-width: 768px) {
  .sidepr-list-item-detail .like {
    margin: -4px 12px 0 auto;
  }
}

.sidepr-date {
  display: block;
  font-size: 12px;
  line-height: 1;
  color: #666;
}

@media screen and (max-width: 768px) {
  .sidepr-date {
    font-size: 10px;
  }
}

.sidepr-title {
  display: block;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin-top: 3px;
  padding-right: 10px;
  font-size: 13px;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .sidepr-title {
    margin-top: 8px;
    padding-right: 0;
    font-size: 12px;
    max-height: 3.5rem;
    overflow: hidden;
  }
}

.grouparchive {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -5px;
}

@media screen and (max-width: 768px) {
  .grouparchive {
    padding: 0 10px 12px;
    border-bottom: 1px solid #ddd;
  }
}

.grouparchive-item {
  position: relative;
  max-width: 380px;
  -webkit-flex-basis: 380px;
  -ms-flex-preferred-size: 380px;
  flex-basis: 380px;
  margin: 29px 0 0;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .grouparchive-item {
    margin-top: 12px;
    max-width: calc(50% - 5px);
    -webkit-flex-basis: calc(50% - 5px);
    -ms-flex-preferred-size: calc(50% - 5px);
    flex-basis: calc(50% - 5px);
  }
}

.grouparchive-item:nth-of-type(3n-1) {
  margin-right: 26px;
  margin-left: 26px;
}

@media screen and (max-width: 768px) {
  .grouparchive-item:nth-of-type(3n-1) {
    margin-right: 0;
    margin-left: 0;
  }

  .grouparchive-item:nth-of-type(even) {
    margin-left: 4px;
  }

  .grouparchive-item:nth-of-type(odd) {
    margin-right: 4px;
  }
}

.grouparchive-item:after,
.grouparchive-item:before {
  position: absolute;
  content: '';
  display: block;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .grouparchive-item:after,
  .grouparchive-item:before {
    display: none;
  }
}

.grouparchive-item:before {
  right: -4px;
  bottom: -4px;
  width: calc(100% - 15px);
  height: calc(100% - 15px);
}

.grouparchive-item:after {
  right: -7px;
  bottom: -7px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
}

.grouparchive-item-inner {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 18px 18px 24px 20px;
  color: inherit;
  background: #fff;
}

@media screen and (max-width: 768px) {
  .grouparchive-item-inner {
    padding: 12px;
  }
}

.grouparchive-item-inner .prlabel {
  margin: 0 0 0 auto;
}

.grouparchive-item-inner .author {
  margin: 0 auto 0 0;
}

.grouparchive-item-inner .like {
  margin: 0 0 0 auto;
}

.grouparchive-media {
  position: relative;
  max-width: 340px;
  -webkit-flex-basis: 340px;
  -ms-flex-preferred-size: 340px;
  flex-basis: 340px;
}

.grouparchive-media-label {
  position: absolute;
  right: -7px;
  bottom: -12px;
  display: block;
  width: 57px;
  height: 57px;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  background: #181818;
}

@media screen and (max-width: 768px) {
  .grouparchive-media-label {
    right: -6px;
    bottom: -7px;
    width: 40px;
    height: 40px;
  }
}

.grouparchive-label-num {
  display: block;
  padding: 11px 0 3px;
  font-size: 15px;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  .grouparchive-label-num {
    padding: 9px 0 1px;
    font-size: 11px;
  }
}

.grouparchive-label-text {
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.08em;
}

@media screen and (max-width: 768px) {
  .grouparchive-label-text {
    font-size: 10px;
    letter-spacing: 0.02em;
  }
}

.grouparchive-heading {
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin-bottom: 9px;
}

@media screen and (max-width: 768px) {
  .grouparchive-heading {
    margin-top: 5px;
  }
}

.grouparchive-title {
  max-width: 100%;
  margin: 18px 0 0 -3px;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 1.7;
  padding: 0 10px 0 2px;
}

@media screen and (max-width: 768px) {
  .grouparchive-title {
    margin: 9px 0 0 -1px;
    font-size: 12px;
    letter-spacing: 0.07em;
    line-height: 1.6;
    padding: 0 0 0 2px;
  }
}

.grouparchive-subtitle {
  margin-top: 5px;
  font-size: 13px;
  font-weight: 700;
  color: #888;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .grouparchive-subtitle {
    margin-top: 6px;
    font-size: 10px;
    letter-spacing: 0.04em;
  }
}

.grouparchive-category {
  display: inline-block;
  max-width: 100%;
  margin: 18px 0 0;
  padding: 5px 14px;
  font-size: 11px;
  font-weight: 700;
  color: #666;
  line-height: 1;
  border: 1px solid #181818;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .grouparchive-category {
    -webkit-flex-basis: 1;
    -ms-flex-preferred-size: 1;
    flex-basis: 1;
    margin: 12px 0 0;
    padding: 3px 12px 1px;
    font-size: 10px;
  }
}

.grouparchive-date {
  display: inline-block;
  max-width: 100%;
  margin: 21px 0 0 auto;
  font-size: 12px;
  letter-spacing: 0.1em;
  color: #666;
}

@media screen and (max-width: 768px) {
  .grouparchive-date {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 5px 0 0;
    font-size: 10px;
    letter-spacing: 0.07em;
  }
}

.grouplist {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -7px;
}

.grouplist-item {
  max-width: 380px;
  -webkit-flex-basis: 380px;
  -ms-flex-preferred-size: 380px;
  flex-basis: 380px;
  margin: 31px 0 0;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .grouplist-item {
    margin-top: 0;
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    border-width: 0;
    border-bottom: 1px solid #ddd;
  }
}

.grouplist-item:nth-of-type(3n-1) {
  margin-right: 30px;
  margin-left: 30px;
}

@media screen and (max-width: 768px) {
  .grouplist-item:nth-of-type(3n-1) {
    margin-right: 0;
    margin-left: 0;
  }
}

.grouplist-item:after,
.grouplist-item:before {
  position: absolute;
  content: '';
  display: block;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .grouplist-item:after,
  .grouplist-item:before {
    display: none;
  }
}

.grouplist-item-inner {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 20px 80px;
  color: inherit;
  background: #fff;
}

@media screen and (max-width: 768px) {
  .grouplist-item-inner {
    min-height: 125px;
    padding: 11px 20px 16px 130px;
  }
}

.grouplist-item-inner .prlabel {
  margin: 8px 0 0 auto;
}

@media screen and (max-width: 768px) {
  .grouplist-item-inner .prlabel {
    margin: 24px 0 0;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
}

.grouplist-item-inner .author {
  position: absolute;
  left: 20px;
  bottom: 23px;
  margin: 12px auto 0 4px;
}

@media screen and (max-width: 768px) {
  .grouplist-item-inner .author {
    margin: 0;
    bottom: 8px;
    left: 13px;
  }
}

.grouplist-item-inner .like {
  position: absolute;
  right: 20px;
  bottom: 37px;
  margin: 6px 0 0 auto;
}

@media screen and (max-width: 768px) {
  .grouplist-item-inner .like {
    right: 10px;
    bottom: 13px;
    margin: 22px 0 0 auto;
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
  }
}

.grouplist-media {
  position: relative;
  max-width: 340px;
  -webkit-flex-basis: 340px;
  -ms-flex-preferred-size: 340px;
  flex-basis: 340px;
}

@media screen and (max-width: 768px) {
  .grouplist-media {
    position: absolute;
    top: 12px;
    left: 10px;
    width: 100%;
    max-width: 105px;
    -webkit-flex-basis: 105px;
    -ms-flex-preferred-size: 105px;
    flex-basis: 105px;
  }
}

.grouplist-label-text {
  display: block;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  .grouplist-label-text {
    font-size: 10px;
  }
}

.grouplist-title {
  -webkit-flex-wrap: 100%;
  -ms-flex-wrap: 100%;
  flex-wrap: 100%;
  max-width: 100%;
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  margin: 8px 0 0;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 1.7;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
}

@media screen and (max-width: 768px) {
  .grouplist-title {
    margin: 5px 0 15px;
    font-size: 12px;
    letter-spacing: 0.055em;
    line-height: 1.6;
  }
}

.grouplist-category {
  display: inline-block;
  max-width: 100%;
  margin: 18px 0 0;
  padding: 5px 16px;
  font-size: 11px;
  font-weight: 700;
  color: #666;
  line-height: 1;
  border: 1px solid #181818;
}

@media screen and (max-width: 768px) {
  .grouplist-category {
    -webkit-flex-basis: 1;
    -ms-flex-preferred-size: 1;
    flex-basis: 1;
    margin: 13px 0 0;
    padding: 2px 13px;
    font-size: 10px;
  }
}

.grouplist-count {
  display: inline-block;
  margin: 15px 17px 0 0;
  padding: 3px 13px;
  font-size: 11px;
  font-weight: 700;
  color: #666;
  line-height: 1;
  border: 1px solid #333;
}

@media screen and (max-width: 768px) {
  .grouplist-count {
    margin: 0 13px 0 0;
    padding: 1px 14px;
    font-size: 10px;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
}

.grouplist-count-num {
  font-size: 12px;
}

@media screen and (max-width: 768px) {
  .grouplist-count-num {
    display: inline-block;
    padding: 0 1px;
    -webkit-transform: scale(0.92);
    transform: scale(0.92);
  }
}

.grouplist-date {
  display: inline-block;
  max-width: 100%;
  font-size: 12px;
  height: 20px;
  margin: 19px 0 0;
  letter-spacing: 0.14em;
  color: #666;
}

@media screen and (max-width: 768px) {
  .grouplist-date {
    margin: 2px 0 0;
    height: auto;
    font-size: 10px;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }
}

.contact-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .contact-title {
    font-size: 28px;
  }
}

.contact-title-small {
  display: inline-block;
  margin: 0 0 0 17px;
  font-size: 13px;
}

@media screen and (max-width: 768px) {
  .contact-title-small {
    font-size: 10px;
  }
}

.contact-content-list-separator-icon i,
.contact-heading {
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .contact-heading {
    font-size: 14px;
  }
}

.contact-heading-margin {
  margin-top: 6px;
}

@media screen and (max-width: 768px) {
  .contact-heading-margin {
    margin-top: 3px;
  }
}

.contact-description {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.01rem;
}

@media screen and (max-width: 768px) {
  .contact-description {
    font-size: 14px;
  }
}

.contact-description p {
  margin-top: 32px;
}

@media screen and (max-width: 768px) {
  .contact-description p {
    margin-top: 27px;
  }
}

.contact-description-margin {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .contact-description-margin {
    margin-top: 12px;
  }
}

.contact-step,
.contact-step-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.contact-step {
  list-style: none;
}

.contact-step-item {
  max-width: 290px;
  -webkit-flex-basis: 290px;
  -ms-flex-preferred-size: 290px;
  flex-basis: 290px;
  margin: 0 24px;
  padding: 15px 30px;
  text-align: center;
  border: 1px solid #ddd;
  background-color: #fff;
}

@media screen and (max-width: 768px) {
  .contact-step-item {
    max-width: 90px;
    -webkit-flex-basis: 90px;
    -ms-flex-preferred-size: 90px;
    flex-basis: 90px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 7px;
    padding: 9px 5px;
  }
}

.contact-step-item.is-current {
  border: 2px solid #181818;
}

.contact-step-heading {
  display: inline-block;
  margin: 0 22px 0 4px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06rem;
}

@media screen and (max-width: 768px) {
  .contact-step-heading {
    margin: 0;
    font-size: 10px;
  }
}

.contact-step-text {
  display: inline-block;
  font-size: 14px;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .contact-step-text {
    font-size: 10px;
  }
}

.contact-step-arrow {
  display: inline-block;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.contact-content {
  display: block;
  padding: 68px 0 0;
}

@media screen and (max-width: 768px) {
  .contact-content {
    padding: 31px 0 0;
  }
}

.contact-content-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

@media screen and (max-width: 768px) {
  .contact-content-item {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 0 24px;
    border-bottom: 1px solid #ddd;
  }

  .contact-content-item:last-of-type {
    border-bottom-width: 0;
  }
}

.is-contact-item-error .contact-content-error {
  display: block;
}

.contact-content-item-header .contact-content-detail {
  padding: 0 0 48px;
}

@media screen and (max-width: 768px) {
  .contact-content-item-header .contact-content-detail {
    padding-bottom: 24px;
  }
}

.contact-content-item-conf .contact-content-heading {
  max-width: 181px;
  -webkit-flex-basis: 181px;
  -ms-flex-preferred-size: 181px;
  flex-basis: 181px;
  padding-right: 40px;
}

@media screen and (max-width: 768px) {
  .contact-content-item-conf .contact-content-heading {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

.contact-content-item-conf.contact-content-item-header .contact-content-detail {
  padding: 0 0 38px;
}

@media screen and (max-width: 768px) {
  .contact-content-item-conf.contact-content-item-header
    .contact-content-detail {
    padding-bottom: 24px;
  }
}

.contact-content-item-conf .contact-content-detail {
  padding: 0 140px 40px 0;
  word-break: break-all;
}

@media screen and (max-width: 768px) {
  .contact-content-item-conf .contact-content-detail {
    margin-top: 10px;
    padding-right: 0;
    padding-bottom: 15px;
  }
}

.contact-content-item-conf .contact-content-detail-text {
  font-size: 16px;
  margin: 5px 0;
}

@media screen and (max-width: 768px) {
  .contact-content-item-conf .contact-content-detail-text {
    font-size: 18px;
  }
}

.contact-content-item-conf .contact-content-list-item {
  margin: 0 0 10px;
}

.contact-content-item-conf .contact-content-list-item-heading {
  font-weight: 700;
}

.contact-content-item-conf .contact-content-list-separator-icon {
  margin: 0 9px 0 12px;
}

.contact-content-heading {
  display: block;
  max-width: 241px;
  -webkit-flex-basis: 241px;
  -ms-flex-preferred-size: 241px;
  flex-basis: 241px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  padding-right: 50px;
}

.contact-content-heading-plan {
  padding-right: 30px;
}

@media screen and (max-width: 768px) {
  .contact-content-heading {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    font-size: 14px;
    padding-right: 0;
  }
}

.contact-content-detail {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 0 51px;
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .contact-content-detail {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 14px 0 0;
    padding: 0 0 24px;
    font-size: 14px;
  }
}

.contact-content-detail-title {
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .contact-content-detail-title {
    font-size: 16px;
  }
}

.contact-content-detail-text {
  display: block;
  margin: 10px 0 5px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .contact-content-detail-text {
    display: block;
    font-size: 10px;
  }
}

.contact-content-detail-text:first-child {
  margin-top: 0;
}

.contact-content-detail-text a {
  color: #31b2c9;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.contact-content-detail-text a:hover {
  opacity: 0.7;
}

.contact-content-heading-text {
  position: relative;
  font-weight: 700;
  margin: 8px 0 0;
  padding: 0 0 0 72px;
}

@media screen and (max-width: 768px) {
  .contact-content-heading-text {
    padding-left: 52px;
    font-weight: 400;
  }
}

.contact-content-heading-text:first-of-type {
  margin-top: 0;
}

.contact-content-heading-text a {
  display: inline;
  color: #33bad2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.contact-content-heading-text a:before {
  content: '\e90d';
  display: inline-block;
  margin-right: 11px;
  font-family: 'lig-icon';
  font-size: 16px;
  font-weight: 400;
}

.contact-content-heading-text a:hover,
.contact-submit-text a:hover {
  color: #6bddf2;
}

.contact-content-heading-text .contact-content-label {
  position: absolute;
  top: 4px;
  left: 0;
}

.contact-content-label {
  display: inline-block;
  margin: 0 12px 0 0;
  padding: 3px 14px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  line-height: 1;
  background-color: #eaeaea;
  border-radius: 3px;
}

@media screen and (max-width: 768px) {
  .contact-content-label {
    padding: 4px 10px 2px;
    font-size: 10px;
    border-radius: 2px;
  }
}

.browser-ie11 .contact-content-label {
  padding: 5px 14px 1px;
}

@media screen and (max-width: 768px) {
  .browser-ie11 .contact-content-label {
    padding: 6px 10px 0;
  }
}

.contact-content-label-required {
  color: #fff;
  background-color: #d40000;
}

.contact-content-message {
  margin: 6px 0 0;
  font-size: 13px;
  color: #999;
}

@media screen and (max-width: 768px) {
  .contact-content-message {
    margin: 13px 0 0;
    font-size: 10px;
  }
}

.contact-content-error {
  display: none;
  margin: 6px 0 0;
  font-size: 13px;
  color: #d40000;
}

.contact-content-list {
  list-style: none;
}

.contact-content-list .contact-content-list {
  margin-top: 10px;
  margin-left: 40px;
}

@media screen and (max-width: 768px) {
  .contact-content-list .contact-content-list {
    margin-top: 5px;
    margin-left: 35px;
  }
}

.contact-content-list-disc {
  list-style-type: disc;
  margin-left: 17px;
}

.contact-content-list-item {
  margin: 0 0 24px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-item {
    margin: 0 0 21px;
  }
}

.contact-content-list-item .contact-content-list-item {
  margin: 0 0 37px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-item .contact-content-list-item {
    margin: 0 0 21px;
    font-size: 10px;
  }
}

.contact-content-list-item-heading {
  display: block;
  margin: 0 0 5px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-item-heading {
    display: block;
  }

  .contact-content-item-heading-small {
    font-size: 10px;
  }
}

.contact-content-list-item-text {
  display: inline-block;
  font-size: 14px;
  margin: 0 14px 0 0;
}

@media screen and (max-width: 768px) {
  .contact-content-list-item-text {
    font-size: 10px;
    margin: 0 0 10px;
  }

  .contact-content-list-item-text:last-child {
    margin: 0;
  }
}

.contact-content-list-separator {
  display: inline-block;
  margin: 0 26px 0 12px;
  font-size: 14px;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator {
    margin: 0 15px 0 2px;
  }
}

.contact-content-list-separator:last-child {
  margin-right: 0;
}

.contact-content-list-separator-center {
  display: inline-block;
  margin: 0 5px 0 12px;
  font-size: 14px;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-center {
    margin: 0 4px 0 2px;
  }
}

.contact-content-list-separator-icon {
  display: inline-block;
  width: 25px;
  margin: 0 20px 0 12px;
  font-size: 0;
  line-height: 1;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-icon {
    width: 20px;
    margin: 0;
  }
}

.contact-content-list-separator-icon .icon-facebook {
  font-size: 20px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-icon .icon-facebook {
    font-size: 15px;
  }
}

.contact-content-list-separator-icon .icon-twitter {
  font-size: 17px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-icon .icon-twitter {
    font-size: 11px;
  }
}

.contact-content-list-separator-icon .icon-instagram {
  font-size: 22px;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-icon .icon-instagram {
    font-size: 14px;
  }
}

.contact-content-list-separator-url {
  display: inline-block;
  width: 160px;
  margin: 0 12px;
  font-size: 14px;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .contact-content-list-separator-url {
    margin: 0;
    width: auto;
    font-size: 10px;
  }
}

.contact-content-detail-button {
  display: inline-block;
  height: 38px;
  padding: 8px 10px;
  font-size: 13px;
  border: 1px solid #181818;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .contact-content-detail-button {
    height: 40px;
    padding: 13px 10px;
    font-size: 10px;
    color: #fff;
    box-shadow: none;
    background-color: #181818;
    border-width: 0;
    border-radius: 2px;
  }
}

.contact-content-horizontal {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .contact-content-horizontal {
    display: block;
  }
}

.contact-content-horizontal-item {
  display: inline-block;
  margin: 0 0 0 14px;
}

@media screen and (max-width: 768px) {
  .contact-content-horizontal-item {
    display: block;
    margin: 12px 0 0;
  }
}

.contact-content-horizontal-item:first-of-type,
.contact-content-sns-item:first-of-type {
  margin-top: 0;
  margin-left: 0;
}

.contact-content-sns {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .contact-content-sns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
}

.contact-content-sns-item {
  display: inline-block;
  margin: 0 0 0 14px;
}

@media screen and (max-width: 768px) {
  .contact-content-sns-item {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .contact-content-sns-item-heading {
    max-width: 157px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 157px;
    -ms-flex: 0 0 157px;
    flex: 0 0 157px;
  }
}

.contact-content-profile-url {
  display: block;
}

@media screen and (max-width: 768px) {
  .contact-content-profile-url {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .contact-content-profile-url-text {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
}

.contact-content-profile-url-content {
  margin: 13px 0 0;
}

@media screen and (max-width: 768px) {
  .contact-content-profile-url-content {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    margin: 0;
  }

  .contact-content-profile-url-content .contact-content-detail-text {
    font-size: 12px;
  }
}

.contact-input {
  width: 420px;
  padding: 15px 24px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .contact-input {
    width: 100%;
    max-width: 100%;
  }
}

.browser-firefox .contact-input:focus,
.browser-firefox .contact-textarea:focus {
  box-shadow: 0 0 3px 0 #0076ff;
}

.contact-input-large {
  width: 641px;
}

@media screen and (max-width: 768px) {
  .contact-input-large {
    width: 100%;
    max-width: 100%;
  }
}

.contact-input-small {
  width: 341px;
}

@media screen and (max-width: 768px) {
  .contact-input-small {
    width: 100%;
    max-width: 100%;
  }
}

.is-contact-item-error .contact-calendar-input,
.is-contact-item-error .contact-input {
  border: 1px solid #d40000;
  background-color: #fdf2f2;
}

.contact-calendar {
  display: inline-block;
  position: relative;
  width: 321px;
}

@media screen and (max-width: 768px) {
  .contact-calendar {
    width: 100%;
  }
}

.contact-calendar:before {
  position: absolute;
  top: 50%;
  left: 23px;
  content: '\e91c';
  display: block;
  margin-top: -18px;
  font-size: 21px;
  font-weight: 400;
  font-family: 'lig-icon';
}

.contact-calendar-block {
  display: block;
  width: 420px;
}

@media screen and (max-width: 768px) {
  .contact-calendar-block {
    width: 100%;
  }
}

.contact-calendar-input {
  width: 100%;
  padding: 15px 24px 15px 54px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.contact-radio {
  position: relative;
  display: inline-block;
  min-height: 30px;
}

.contact-radio-block {
  display: block;
}

.contact-radio-input {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.contact-checkbox-input:focus,
.contact-radio-input:focus {
  outline: 0;
  border-color: orange;
}

.contact-checkbox-input:checked + .contact-checkbox-label:after,
.contact-radio-input:checked + .contact-radio-label:after {
  opacity: 1;
}

.contact-radio-label {
  position: relative;
  display: block;
  padding: 0 0 0 50px;
  line-height: 30px;
}

@media screen and (max-width: 768px) {
  .contact-radio-label {
    padding: 0 0 0 36px;
  }
}

.contact-radio-label:after,
.contact-radio-label:before {
  display: block;
  content: '';
  position: absolute;
  top: 50%;
  border-radius: 50%;
}

.contact-radio-label:before {
  margin-top: -15px;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .contact-radio-label:before {
    width: 24px;
    height: 24px;
    margin-top: -12px;
  }
}

.contact-radio-label:after {
  margin-top: -6px;
  left: 9px;
  width: 12px;
  height: 12px;
  background-color: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

@media screen and (max-width: 768px) {
  .contact-radio-label:after {
    width: 12px;
    height: 12px;
    margin-top: -6px;
    left: 6px;
  }
}

.contact-checkbox {
  position: relative;
  display: inline-block;
  min-height: 30px;
}

.contact-checkbox-block {
  display: block;
}

.contact-checkbox-input {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.contact-checkbox-label {
  position: relative;
  display: block;
  padding: 0 0 0 50px;
  line-height: 30px;
}

@media screen and (max-width: 768px) {
  .contact-checkbox-label {
    padding: 0 0 0 34px;
  }
}

.contact-checkbox-label:before {
  content: '';
}

.contact-checkbox-label:after,
.contact-checkbox-label:before {
  display: block;
  position: absolute;
  top: 50%;
}

.contact-checkbox-label:before {
  margin-top: -15px;
  left: 0;
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border-radius: 2px;
}

@media screen and (max-width: 768px) {
  .contact-checkbox-label:before {
    width: 24px;
    height: 24px;
    margin-top: -12px;
  }
}

.contact-checkbox-label:after {
  content: '\e91d';
  margin-top: -9px;
  left: 7px;
  font-size: 18px;
  font-family: 'lig-icon';
  color: #181818;
  line-height: 18px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

@media screen and (max-width: 768px) {
  .contact-checkbox-label:after {
    margin-top: -7px;
    left: 5px;
    font-size: 13px;
  }
}

.contact-select {
  position: relative;
  display: inline-block;
  width: 320px;
}

@media screen and (max-width: 768px) {
  .contact-select {
    width: 100%;
  }
}

.contact-select-block {
  display: block;
}

@media screen and (max-width: 768px) {
  .contact-select-block {
    width: 100%;
  }
}

.contact-select-large {
  width: 420px;
}

@media screen and (max-width: 768px) {
  .contact-select-large {
    width: 100%;
  }
}

.contact-select-medium {
  width: 148px;
}

@media screen and (max-width: 768px) {
  .contact-select-medium {
    width: 115px;
  }
}

.contact-select-small {
  width: 108px;
}

@media screen and (max-width: 768px) {
  .contact-select-small {
    width: 104px;
  }
}

.contact-select-label {
  width: 100%;
  position: relative;
  display: inline-block;
  padding: 16px 24px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.contact-select-label:after {
  position: absolute;
  top: 50%;
  right: 24px;
  content: '\e905';
  display: block;
  margin-top: -10px;
  font-family: 'lig-icon';
  font-size: 13px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

.contact-select-list {
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.is-contact-item-error .contact-select-label,
.is-contact-item-error .contact-textarea {
  border: 1px solid #d40000;
  background-color: #fdf2f2;
}

.contact-textarea {
  display: block;
  width: 100%;
  padding: 15px 24px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.contact-submit {
  display: block;
}

.contact-submit-text {
  margin: 0 0 20px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  text-align: center;
}

.contact-submit-text a {
  color: #33bad2;
  opacity: 1;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.contact-submit-button {
  position: relative;
  display: block;
  height: 57px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
  background-color: #25c04a;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .contact-submit-button {
    width: 100%;
    height: 50px;
    font-size: 14px;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.06);
  }
}

.contact-back-button:before,
.contact-submit-button:after {
  content: '\e906';
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -11px;
  font-size: 12px;
  font-family: 'lig-icon';
}

.contact-submit-button:after {
  right: 31px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.contact-submit-button-center {
  width: 480px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .contact-submit-button-center {
    width: 100%;
  }
}

.contact-submit-button-right {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (max-width: 768px) {
  .contact-submit-button-right {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}

.contact-submit-conf {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 741px;
  margin: 0 auto;
  padding: 17px 0 0;
}

@media screen and (max-width: 768px) {
  .contact-submit-conf {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    padding: 6px 0 0;
  }
}

.contact-back-button {
  position: relative;
  display: block;
  max-width: 240px;
  -webkit-flex-basis: 240px;
  -ms-flex-preferred-size: 240px;
  flex-basis: 240px;
  height: 57px;
  margin: 0 20px 0 0;
  font-size: 16px;
  color: #181818;
  border: 1px solid #181818;
  border-radius: 4px;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
  background-color: #fff;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .contact-back-button {
    width: 100%;
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    height: 50px;
    margin: 16px 0 0;
    font-size: 14px;
    color: #fff;
    background-color: #181818;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.06);
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
}

.contact-back-button:before {
  left: 31px;
}

.entry-example-button {
  color: #33bad2;
  cursor: pointer;
}

.librarycover {
  padding: 0;
}

@media screen and (max-width: 768px) {
  .librarycover {
    padding: 0 10px;
  }
}

.librarycover img {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.librarycover-margin {
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .librarycover-margin {
    margin-bottom: 20px;
  }
}

.catch {
  padding: 0 40px;
}

@media screen and (max-width: 768px) {
  .catch {
    padding: 0;
  }
}

.catch-full {
  padding: 0;
}

@media screen and (max-width: 768px) {
  .catch-full {
    padding: 0 10px;
  }
}

.catch-center {
  text-align: center;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .catch-center {
    text-align: left;
    padding: 0 10px;
  }
}

.catch-main {
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: -17px;
}

@media screen and (max-width: 768px) {
  .catch-main {
    font-size: 14px;
    text-align: left;
    margin-bottom: -10px;
  }
}

.catch-text {
  font-size: 16px;
  color: #666;
  padding: 0 140px;
  letter-spacing: 0.05em;
  line-height: 2;
  margin: 33px 0;
}

@media screen and (max-width: 768px) {
  .catch-text {
    font-size: 14px;
    padding: 0;
    line-height: 1.75;
    margin: 25px 0;
  }
}

.catch-text-full {
  padding: 0;
}

@media screen and (max-width: 768px) {
  .catch-text-full {
    line-height: 2;
  }
}

.catch-button {
  margin-top: 50px;
  padding: 0 20px;
}

@media screen and (max-width: 768px) {
  .catch-button {
    margin-top: 15px;
    padding: 0;
  }
}

.catch-button-full {
  padding: 0;
}

.catch-button-list {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -20px;
}

@media screen and (max-width: 768px) {
  .catch-button-list {
    display: block;
    margin: 0 auto 25px;
  }
}

.catch-button-item {
  width: 50%;
  padding: 0 20px;
  margin-bottom: 24px;
}

@media screen and (max-width: 768px) {
  .catch-button-item {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
}

.catch-button-item .button {
  height: 100%;
}

.catch-button-item .button-medium {
  padding-right: 20px;
}

@media screen and (max-width: 768px) {
  .catch-button-item .button-medium {
    padding-right: 10px;
  }
}

.member {
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  height: 100px;
}

.recruit {
  position: relative;
}

.recruit-inner {
  margin-top: 10px;
}

.recruit-item {
  background: #fff;
  display: block;
  padding: 30px 30px 13px;
  margin: 20px 0;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .recruit-item {
    padding: 20px 20px 11px;
    margin: 15px auto;
  }
}

.recruit-item:first-child {
  margin-top: 0;
}

.officelist-item:last-child,
.recruit-item:last-child {
  margin-bottom: 0;
}

.faq-answer a:hover,
.recruit-item:hover .recruit-title {
  color: #6bddf2;
}

.recruit-message {
  margin: 33px 0 36px;
  font-size: 13px;
  text-align: center;
}

.recruit-title {
  font-size: 16px;
  color: #33bad2;
  font-weight: 700;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .recruit-title {
    font-size: 14px;
  }
}

.recruit-desc {
  display: block;
  font-size: 13px;
  color: #181818;
  margin-top: 10px;
  line-height: 2;
  height: 78px;
  overflow: hidden;
  position: relative;
  word-break: break-all;
  text-align: justify;
}

.recruit-desc:after,
.recruit-desc:before {
  position: absolute;
}

.recruit-desc:before {
  content: '...';
  background: #fff;
  right: 0;
  text-align: center;
  width: 1.1em;
  top: 52px;
}

.recruit-desc:after {
  content: '';
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #fff;
}

@media screen and (max-width: 768px) {
  .recruit-desc {
    margin-top: 6px;
    font-size: 12px;
    line-height: 1.8;
    height: 64.8px;
    overflow: hidden;
    position: relative;
    word-break: break-all;
    text-align: justify;
  }

  .recruit-desc:after,
  .recruit-desc:before {
    position: absolute;
  }

  .recruit-desc:before {
    content: '...';
    background: #fff;
    right: 0;
    text-align: center;
    width: 1.1em;
    top: 43.2px;
  }

  .recruit-desc:after {
    content: '';
    height: 100%;
    width: 100%;
    z-index: 2;
    background: #fff;
  }
}

.recruit-place {
  display: block;
  font-family: 'Montserrat', '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
  font-size: 12px;
  color: #888;
  text-align: right;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .recruit-place {
    font-size: 10px;
  }
}

.recruit-place-icon {
  color: #33bad2;
}

.office {
  background: #fff;
  padding: 60px 23px 50px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .office {
    padding: 60px 5px 22px;
  }
}

.office-top {
  min-height: 145px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  position: relative;
}

@media screen and (max-width: 768px) {
  .office-top {
    display: block;
  }
}

.office-media {
  position: relative;
  padding-left: 17px;
  width: 41%;
}

@media screen and (max-width: 768px) {
  .office-media {
    width: 100%;
    padding: 0 15px;
  }
}

.office-media-link:hover .office-media-inner:before {
  opacity: 0.5;
}

.office-media-inner {
  width: 360px;
  height: 244px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 50px -7px rgba(25, 25, 25, 0.7);
  position: absolute;
  top: -103px;
}

@media screen and (max-width: 768px) {
  .office-media-inner {
    width: 100%;
    height: auto;
    padding-top: 67%;
    position: relative;
    top: 0;
    margin: -125px auto 25px;
  }
}

.office-media-inner:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: '';
  background-color: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
  z-index: 1;
}

.office-media-inner:after {
  content: '';
  display: block;
  width: 80px;
  height: 1px;
  border-top: 1px solid #181818;
  position: absolute;
  top: 48%;
  -webkit-transform: translateY(-48%);
  transform: translateY(-48%);
  right: -40px;
}

@media screen and (max-width: 768px) {
  .office-media-inner:after {
    width: 33px;
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg);
    top: 98%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.office-content {
  width: 59%;
}

@media screen and (max-width: 768px) {
  .office-content {
    width: 100%;
    padding: 0 15px;
  }
}

.office-location {
  font-size: 22px;
  font-weight: 700;
  color: #ddd;
  line-height: 1;
  min-width: 225px;
  text-align: right;
  position: absolute;
  top: 75px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  right: -115px;
}

@media screen and (max-width: 768px) {
  .office-location {
    display: none;
  }
}

.office-sns,
.office-title {
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .office-sns,
  .office-title {
    display: block;
    text-align: center;
  }
}

.office-title {
  font-family: 'Montserrat', '游ゴシック', YuGothic, 'ヒラギノ角ゴ ProN W3',
    'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
  font-size: 21px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.09em;
  margin-right: 33px;
}

@media screen and (max-width: 768px) {
  .office-title {
    font-size: 18px;
    letter-spacing: 0.06em;
    margin-right: 0;
  }
}

.office-title a {
  color: inherit;
}

.office-desc {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.05em;
  line-height: 1.75;
  margin-top: 18px;
  padding-right: 45px;
}

@media screen and (max-width: 768px) {
  .office-desc {
    letter-spacing: 0.05em;
    line-height: 2;
    margin-top: 10px;
    padding-right: 0;
  }
}

.office-sns {
  list-style: none;
  margin: 2px -7px 0;
}

@media screen and (max-width: 768px) {
  .office-sns {
    margin: 18px -10px 0;
  }
}

.office-sns-list {
  vertical-align: middle;
  padding: 0 7px;
}

@media screen and (max-width: 768px) {
  .office-sns-list {
    padding: 0 10px;
  }
}

.office-sns-list,
.office-sns-list a {
  display: inline-block;
}

.office-sns-icon {
  color: #181818;
  font-size: 19px;
}

.office-bottom {
  margin: 45px auto 0;
  padding: 0 17px;
}

@media screen and (max-width: 768px) {
  .office-bottom {
    margin: 11px auto 0;
    padding: 0 15px;
  }
}

.office-gallery {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -5px;
}

.office-gallery-list {
  -webkit-box-flex: 25%;
  -webkit-flex: 25%;
  -ms-flex: 25%;
  flex: 25%;
  min-width: 25%;
  padding: 0 5px;
}

@media screen and (max-width: 768px) {
  .office-gallery-list {
    margin: 5px 0;
    -webkit-box-flex: 50%;
    -webkit-flex: 50%;
    -ms-flex: 50%;
    flex: 50%;
    min-width: 50%;
  }
}

.office-gallery-image {
  width: 100%;
  height: 252px;
  margin: 0 auto;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .office-gallery-image {
    width: 100%;
    height: auto;
    padding-top: 101%;
  }
}

.officelist {
  list-style: none;
}

.officelist-item {
  margin-bottom: 85px;
}

@media screen and (max-width: 768px) {
  .officelist-item {
    margin-bottom: 100px;
  }
}

.hero {
  width: 100%;
  height: 315px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
  margin: 0 auto;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .hero {
    height: auto;
    padding-top: 42%;
  }
}

.hero:after,
.hero:before {
  content: '';
  width: 1px;
  height: 35px;
  display: block;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  .hero:after,
  .hero:before {
    height: 17px;
  }
}

.hero:before {
  border-right: 1px solid #fff;
  bottom: 0;
}

.hero:after {
  border-right: 1px solid #181818;
  bottom: -35px;
}

@media screen and (max-width: 768px) {
  .hero:after {
    bottom: -17px;
  }
}

.hero-md {
  height: 367px;
}

@media screen and (max-width: 768px) {
  .hero-md {
    height: auto;
    padding-top: 52%;
  }
}

.hero-md .hero-text {
  margin-top: -7px;
}

.hero-md .hero-desc {
  padding-left: 5px;
}

@media screen and (max-width: 768px) {
  .hero-md .hero-desc {
    padding-left: 0;
  }
}

.hero-text {
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-top: -10px;
}

@media screen and (max-width: 768px) {
  .hero-text {
    margin-top: -5px;
  }
}

.hero-text-black {
  color: #181818;
  margin-top: -5px;
}

.hero-title {
  font-size: 48px;
  letter-spacing: 0.045em;
  line-height: 1.55;
}

@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 28px;
    letter-spacing: 0.03em;
    line-height: 1.7;
  }
}

.hero-desc {
  font-size: 16px;
  letter-spacing: 0.01em;
}

@media screen and (max-width: 768px) {
  .hero-desc {
    font-size: 10px;
  }
}

.faq {
  position: relative;
}

.faq-item {
  background: #fff;
  border-radius: 5px;
  padding: 44px 60px 15px 103px;
  margin-bottom: 15px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .faq-item {
    padding: 27px 15px 5px 55px;
    margin-bottom: 20px;
  }
}

.faq-answer:before,
.faq-question:before {
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .faq-answer:before,
  .faq-question:before {
    width: 25px;
    height: 25px;
    padding-top: 2px;
  }
}

.faq-question {
  font-size: 16px;
  font-weight: 700;
  position: relative;
}

@media screen and (max-width: 768px) {
  .faq-question {
    font-size: 14px;
    font-weight: 400;
  }
}

.faq-question:before {
  content: 'Q';
  background: #181818;
  color: #fff;
  padding-top: 4px;
  top: -4px;
  left: -43px;
}

@media screen and (max-width: 768px) {
  .faq-question:before {
    padding-top: 2px;
    top: -1px;
    left: -37px;
  }
}

.faq-answer {
  font-size: 14px;
  line-height: 1.8;
  margin: 33px 0 0 55px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .faq-answer {
    font-size: 12px;
    line-height: 2;
    margin: 30px 0 0 30px;
  }
}

.faq-answer p {
  margin: 30px 0;
}

@media screen and (max-width: 768px) {
  .faq-answer p {
    margin: 20px 0;
    word-wrap: break-word;
  }
}

.faq-answer a {
  color: #33bad2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.faq-answer:before {
  content: 'A';
  background: #fff;
  border: 1px solid #181818;
  color: #181818;
  padding-top: 3px;
  top: -6px;
  left: -50px;
}

@media screen and (max-width: 768px) {
  .faq-answer:before {
    padding-top: 1px;
    top: -1px;
    left: -37px;
  }
}

.section-faq {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 200px;
  background: #fff;
  border-radius: 5px;
  padding: 14px 0 10px 63px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .section-faq {
    display: block;
    min-height: 0;
    background: 0 0;
    padding: 0;
  }
}

.section-faq-heading {
  width: 13%;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .section-faq-heading {
    width: 100%;
    text-align: center;
    margin: 0 auto;
  }
}

.section-faq-inner {
  width: 87%;
  padding-top: 20px;
}

@media screen and (max-width: 768px) {
  .section-faq-inner {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    padding: 17px 10px 10px;
  }
}

.section-faq-inner .faq-item {
  background: 0 0;
  padding: 10px 60px 0 103px;
}

@media screen and (max-width: 768px) {
  .section-faq-inner .faq-item {
    padding: 10px 10px 5px 47px;
    margin-bottom: 0;
  }
}

.section-faq-btn {
  cursor: pointer;
  color: #181818;
  display: block;
  position: absolute;
  bottom: 38px;
  left: 59px;
}

@media screen and (max-width: 768px) {
  .section-faq-btn {
    position: relative;
    bottom: 12px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }
}

.section-faq-btn-text {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.section-faq-btn-icon {
  position: relative;
  top: 2px;
  right: -5px;
  font-size: 17px;
}

.section-faq-divider {
  display: block;
  background: #ddd;
  width: 100%;
  height: 1px;
  margin: -5px 0 30px;
}

.section-faq-col2 {
  display: block;
  background: 0 0;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 {
    padding: 0;
  }
}

.section-faq-col2 .section-faq-inner {
  width: 100%;
  padding-top: 24px;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 .section-faq-inner {
    background: 0 0;
    padding: 0;
  }
}

.section-faq-col2 .faq {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 .faq {
    display: block;
    margin-top: 10px;
  }
}

.section-faq-col2 .faq-item {
  background: #fff;
  width: 50%;
  padding: 45px 30px 20px 68px;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 .faq-item {
    width: 100%;
    padding: 23px 20px 23px 57px;
    margin-bottom: 20px;
  }
}

.section-faq-col2 .faq-item:first-child {
  margin-right: 40px;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 .faq-item:first-child {
    margin-right: 0;
  }
}

.section-faq-col2 .section-faq-btn {
  top: 68px;
  left: auto;
  right: 5px;
  bottom: auto;
}

@media screen and (max-width: 768px) {
  .section-faq-col2 .section-faq-btn {
    top: auto;
    bottom: -5px;
    left: 0;
    right: 0;
  }
}

.related {
  position: relative;
}

.related-inner {
  background: #f3f3f3;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -webkit-align-items: top;
  -ms-flex-align: top;
  align-items: top;
  padding: 42px 62px 42px 65px;
  margin: 20px 0 25px;
}

@media screen and (max-width: 768px) {
  .related-inner {
    display: block;
    padding: 30px 10px 18px;
    margin: 10px 0 20px;
  }
}

.related-media {
  width: 30%;
}

@media screen and (max-width: 768px) {
  .related-media {
    width: 100%;
    padding: 0 33px;
  }
}

.related-media-inner {
  width: 260px;
  height: 172px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .related-media-inner {
    width: 100%;
    height: auto;
    padding-top: 67%;
  }
}

.related-content {
  width: 70%;
  padding: 12px 10px 0 2px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .related-content {
    width: 100%;
    padding: 0;
    margin-top: 20px;
  }
}

.related-title {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .related-title {
    font-size: 16px;
    text-align: center;
  }
}

.related-desc {
  font-size: 14px;
  letter-spacing: 0.05em;
  line-height: 1.75;
  margin: 13px 0 18px;
}

@media screen and (max-width: 768px) {
  .related-desc {
    font-size: 12px;
    line-height: 2;
    margin: 7px 0 13px;
    padding: 0 10px;
  }
}

.related-tag {
  display: inline-block;
  color: #33bad2;
  margin-bottom: 3px;
  position: relative;
  padding: 0 0 0 22px;
}

@media screen and (max-width: 768px) {
  .related-tag {
    padding: 0 10px 0 22px;
  }
}

.related-tag-text {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

@media screen and (max-width: 768px) {
  .related-tag-text {
    font-size: 12px;
  }
}

.related-tag-icon {
  font-size: 18px;
  position: absolute;
  top: 1px;
  left: 0;
}

.calltoaction {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 3px solid #181818;
  padding: 29px 50px 37px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .calltoaction {
    display: block;
    padding: 15px 12px;
  }
}

.calltoaction .heading-section-subtext {
  letter-spacing: 0.06em;
}

.calltoaction:before {
  content: '';
  width: 1px;
  height: 81px;
  border-right: 1px solid #181818;
  display: block;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: -56px;
  left: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  .calltoaction:before {
    height: 41px;
    top: -28px;
  }
}

.calltoaction.calltoaction-entry .calltoaction-button-sub {
  position: relative;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  padding: 0;
}

.calltoaction.calltoaction-entry .calltoaction-button-sub-text {
  display: inline-block;
  vertical-align: middle;
  padding-left: 20px;
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
}

.calltoaction.calltoaction-entry .calltoaction-button-sub-icon {
  display: inline-block;
  vertical-align: middle;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
}

.calltoaction-pd-lg {
  padding: 55px 58px 57px;
}

@media screen and (max-width: 768px) {
  .calltoaction-pd-lg {
    padding: 38px 20px 15px;
  }
}

.calltoaction-pd-sm {
  padding: 23px 50px 31px;
}

@media screen and (max-width: 768px) {
  .calltoaction-pd-sm {
    padding: 15px 12px 26px;
  }
}

.calltoaction-button {
  margin-top: 18px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button {
    margin-top: 11px;
  }

  .calltoaction-button-recruit .calltoaction-button-inner {
    text-align: center;
  }

  .calltoaction-button-recruit .calltoaction-button-sub {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .calltoaction-button-recruit .calltoaction-button-sub-icon-prev {
    position: relative;
    left: 0;
  }
}

.calltoaction-button-mg-sm {
  margin-top: 7px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-mg-sm {
    margin-top: 11px;
  }
}

.calltoaction-button-main {
  width: 95%;
  margin: 0 auto;
  padding: 18px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-main {
    padding: 15px 18px;
  }
}

.browser-ie11 .calltoaction-button-main {
  padding: 20px 18px 16px;
}

@media screen and (max-width: 768px) {
  .browser-ie11 .calltoaction-button-main {
    padding: 17px 18px 13px;
  }
}

.calltoaction-button-main-full {
  width: 100%;
  padding: 0;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-main-full {
    padding: 0;
  }
}

.calltoaction-button-main-list {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 -20px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-main-list {
    display: block;
    margin: 0 auto;
  }
}

.calltoaction-button-main-item {
  width: 50%;
  padding: 0 20px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-main-item {
    width: 100%;
    padding: 0;
    margin-bottom: 25px;
  }
}

.calltoaction-button-main-text {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 18px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-main-text {
    margin-bottom: 14px;
  }
}

.calltoaction-button-inner {
  margin: 15px auto 0;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-inner {
    text-align: left;
    font-size: 0;
    letter-spacing: 0;
    padding: 0 7px;
    margin: 21px -14px 0;
  }
}

.calltoaction-button-sub {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 0 20px;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-sub {
    width: 50%;
    margin: 0 auto 13px;
    padding: 0 14px;
    position: relative;
  }

  .calltoaction-button-sub-web {
    width: auto;
  }

  .calltoaction-button-sub-web:first-child {
    width: 60%;
  }

  .calltoaction-button-sub-web:last-child {
    width: 40%;
  }

  .calltoaction-button-sub-fit {
    padding: 0;
  }

  .calltoaction-button-sub-fit:nth-child(odd) {
    padding-left: 0;
    padding-right: 14px;
  }

  .calltoaction-button-sub-fit:nth-child(odd) .calltoaction-button-sub-icon {
    right: 15px;
  }

  .calltoaction-button-sub-fit:nth-child(even) {
    padding-right: 0;
    padding-left: 14px;
  }

  .calltoaction-button-sub-fit:nth-child(even) .calltoaction-button-sub-icon {
    right: 0;
  }
}

.calltoaction-button-sub-text {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-sub-text {
    letter-spacing: 0.01rem;
    margin-right: 17px;
  }

  .calltoaction-button-sub-text-liginc {
    letter-spacing: 0.02rem;
    font-size: 12px;
  }
}

.calltoaction-button-sub-icon {
  color: #181818;
  font-size: 18px;
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .calltoaction-button-sub-icon {
    position: absolute;
    right: 16px;
    top: -1px;
  }
}

.calltoaction-button-sub-icon-prev {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  left: -35px;
  right: auto;
}

.service-card {
  display: block;
  position: relative;
}

.service-card-inner {
  display: block;
}

.office-block-article-link:hover .office-block-article-media:after,
.recruit-detail-feed-link:hover .recruit-detail-feed-media:after,
.service-card-inner:hover .service-card-media-inner:after {
  opacity: 0.25;
}

.service-card-inner:hover .service-card-media {
  box-shadow: 0 4px 18.62px 0.38px rgba(14, 14, 14, 0);
}

.service-card-inner:hover .service-card-image {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.service-card-media {
  width: 100%;
  box-shadow: 0 4px 18.62px 0.38px rgba(14, 14, 14, 0.39);
  position: relative;
  -webkit-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}

.service-card-media:after {
  content: '';
  width: 1px;
  height: 83px;
  border-right: 1px solid #181818;
  display: block;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  bottom: -42px;
  left: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  .service-card-media:after {
    height: 33px;
    bottom: -15px;
  }
}

.service-card-media-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.service-card-media-inner:after {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  background: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
}

.service-card-image {
  width: 100%;
  height: 305px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
}

@media screen and (max-width: 768px) {
  .service-card-image {
    height: auto;
    padding-top: 56.5%;
  }
}

.service-card-content {
  background: #fff;
  padding: 30px 30px 27px;
  margin: 0 20px;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .service-card-content {
    padding: 20px 20px 18px;
  }
}

.backnumber {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin: 64px 0;
}

@media screen and (max-width: 768px) {
  .backnumber {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 33px 0;
    padding: 0 10px;
  }
}

.backnumber:before {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  content: '';
  width: 1px;
  height: 58px;
  margin-top: -29px;
  margin-left: 1px;
  background-color: #ddd;
}

@media screen and (max-width: 768px) {
  .backnumber:before {
    display: none;
  }
}

.backnumber-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 50%;
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  height: 90px;
  margin: 0;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .backnumber-item {
    max-width: 100%;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    height: 87px;
    margin: 10px 0;
  }
}

.backnumber-item-link:hover .backnumber-title {
  color: #33bad2;
}

.backnumber-item-link:hover .backnumber-media {
  opacity: 0.7;
}

.backnumber-item-link .backnumber-arrow {
  background-color: #181818;
  color: #fff;
}

.backnumber-item-prev {
  margin-right: auto;
}

.backnumber-item-prev .backnumber-arrow {
  border-radius: 6px 0 0 6px;
}

@media screen and (max-width: 768px) {
  .backnumber-item-prev .backnumber-arrow {
    border-radius: 4px 0 0 4px;
  }
}

.backnumber-item-prev .backnumber-item-inner {
  padding-left: 20px;
  padding-right: 17px;
}

@media screen and (max-width: 768px) {
  .backnumber-item-prev .backnumber-item-inner {
    padding-left: 10px;
    border-right-width: 1px;
    border-radius: 0 4px 4px 0;
  }
}

.backnumber-item-prev .backnumber-media {
  margin-right: 15px;
}

.backnumber-item-next {
  margin-left: auto;
}

.backnumber-item-next .backnumber-arrow {
  border-radius: 0 6px 6px 0;
}

@media screen and (max-width: 768px) {
  .backnumber-item-next .backnumber-arrow {
    border-radius: 0 4px 4px 0;
  }
}

.backnumber-item-next .backnumber-item-inner {
  padding-right: 20px;
  padding-left: 17px;
}

@media screen and (max-width: 768px) {
  .backnumber-item-next .backnumber-item-inner {
    padding-right: 10px;
    border-left-width: 1px;
    border-radius: 4px 0 0 4px;
  }
}

.backnumber-item-next .backnumber-media {
  margin-left: 15px;
}

.backnumber-item-next .icon-arrow-slider {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.backnumber-arrow,
.backnumber-item-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.backnumber-item-inner {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border: 1px solid #ddd;
  border-right-width: 0;
  border-left-width: 0;
}

.backnumber-arrow {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: 28px;
  -webkit-flex-basis: 28px;
  -ms-flex-preferred-size: 28px;
  flex-basis: 28px;
  height: 100%;
  font-size: 12px;
  background-color: #d8d8d8;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .backnumber-arrow {
    max-width: 20px;
    -webkit-flex-basis: 20px;
    -ms-flex-preferred-size: 20px;
    flex-basis: 20px;
  }
}

.backnumber-media {
  max-width: 85px;
  -webkit-flex-basis: 85px;
  -ms-flex-preferred-size: 85px;
  flex-basis: 85px;
  height: 57px;
  background-size: cover;
  background-position: center;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

@media screen and (max-width: 768px) {
  .backnumber-media {
    max-width: 94px;
    -webkit-flex-basis: 94px;
    -ms-flex-preferred-size: 94px;
    flex-basis: 94px;
    height: 62px;
  }
}

.backnumber-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  max-height: 3.5rem;
  overflow: hidden;
  color: #181818;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .backnumber-title {
    max-height: 4rem;
  }
}

.recruit-detail-article {
  position: relative;
  padding-right: 43px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article {
    padding: 0 0 0 10px;
  }
}

.recruit-detail-article-heading {
  padding: 20px 0 13px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-heading {
    padding: 15px 0 12px 16px;
  }
}

.recruit-detail-article-heading:before {
  content: '';
  position: absolute;
  top: -18px;
  left: -18px;
  display: block;
  width: 4px;
  height: 100%;
  font-size: 0;
  letter-spacing: 0;
  background: #181818;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-heading:before {
    top: -13px;
    left: 1px;
  }
}

.recruit-detail-article-tag,
.recruit-detail-article-title {
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-title {
    display: block;
  }

  .recruit-detail-article-place,
  .recruit-detail-article-tag {
    display: inline-block;
    vertical-align: middle;
  }
}

.recruit-detail-article-title {
  font-size: 24px;
  font-weight: 700;
  margin-right: 15px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-title {
    font-size: 18px;
  }
}

.recruit-detail-article-tag {
  font-size: 12px;
  color: #888;
  line-height: 1;
  border: 1px solid #888;
  border-radius: 30px;
  padding: 4px 27px;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-tag {
    font-size: 8px;
    padding: 3px 23px 1px;
    margin-right: 10px;
  }
}

.browser-ie11 .recruit-detail-article-tag {
  padding: 7px 27px 1px;
}

@media screen and (max-width: 768px) {
  .browser-ie11 .recruit-detail-article-tag {
    padding: 4px 23px 0;
  }
}

.recruit-detail-article-place {
  font-size: 13px;
  color: #888;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-article-place {
    font-size: 10px;
  }
}

.recruit-detail-article-place-icon {
  font-size: 10px;
  color: #33bad2;
}

.recruit-detail-hero {
  width: 100%;
  height: 456px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-hero {
    height: auto;
    padding-top: 41%;
    margin-top: 20px;
  }
}

.recruit-detail-feed {
  position: relative;
}

.recruit-detail-feed-list {
  list-style: none;
  font-size: 0;
  letter-spacing: 0;
  margin: 0 -10px;
}

.recruit-detail-feed-item {
  margin-bottom: 25px;
  padding: 0 10px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-feed-item {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
}

.recruit-detail-feed-link {
  display: block;
}

.liglink-inner:hover .liglink-media img,
.recruit-detail-feed-link:hover .recruit-detail-feed-image {
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
}

.recruit-detail-feed-media {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .recruit-detail-feed-media {
    margin-bottom: 15px;
  }
}

.recruit-detail-feed-media:after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #181818;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.recruit-detail-feed-image {
  width: 100%;
  height: 180px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

@media screen and (max-width: 768px) {
  .recruit-detail-feed-image {
    height: auto;
    padding-top: 67%;
  }
}

.recruit-detail-feed-date {
  font-size: 12px;
  color: #888;
  letter-spacing: 0.07em;
}

@media screen and (max-width: 768px) {
  .recruit-detail-feed-date {
    font-size: 10px;
  }
}

.recruit-detail-feed-title {
  font-size: 16px;
  font-weight: 400;
  color: #181818;
  letter-spacing: 0.1em;
  line-height: 1.6;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-feed-title {
    font-size: 12px;
    margin-top: 0;
  }
}

.recruit-detail-banner {
  position: relative;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner {
    margin-right: -20px;
  }
}

.recruit-detail-banner-list {
  box-sizing: border-box;
  width: auto;
  display: block;
  margin: 0 -20px;
  list-style: none;
  font-size: 0;
  letter-spacing: 0;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner-list {
    box-sizing: content-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto -30px;
  }
}

.recruit-detail-banner-item {
  display: inline-block;
  vertical-align: top;
  width: 33.33%;
  padding: 0 20px;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner-item {
    width: 100%;
    padding: 0;
  }
}

.recruit-detail-banner-image {
  width: 100%;
  height: 216px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner-image {
    height: auto;
    padding-top: 62%;
  }
}

.recruit-detail-banner-text {
  margin: 7px 0 0;
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner-text {
    font-size: 12px;
  }
}

.recruit-detail-banner-works {
  margin-top: -20px;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .recruit-detail-banner-works {
    height: auto;
    margin-top: 15px;
  }
}

.recruit-detail-banner-works img {
  max-width: 100%;
  width: auto;
  height: auto;
}

.recruit-detail-banner-works-wrap {
  display: block;
  color: inherit;
}

.recruit-detail-skill {
  background: #fff;
  height: 100%;
  border-radius: 5px;
  padding: 30px 25px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-skill {
    padding: 18px 20px;
  }
}

.recruit-detail-skill ul {
  list-style-type: disc;
  padding: 0 22px;
}

.recruit-detail-skill li {
  font-size: 14px;
  letter-spacing: 0.06em;
  line-height: 1.7;
  margin: 15px 0;
}

@media screen and (max-width: 768px) {
  .recruit-detail-skill li {
    font-size: 12px;
    margin: 10px 0;
  }
}

.recruit-detail-skill-title {
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .recruit-detail-skill-title {
    font-size: 14px;
  }
}

.recruit-detail-table {
  margin-top: 21px;
}

.recruit-detail-table table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

.recruit-detail-table tr {
  border: 1px solid #ddd;
}

.recruit-detail-table td,
.recruit-detail-table th {
  vertical-align: middle;
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-table td,
  .recruit-detail-table th {
    font-size: 14px;
  }
}

.recruit-detail-table th {
  width: 24%;
  background-color: #eaeaea;
  font-weight: 700;
  text-align: left;
  padding: 28px 22px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-table th {
    width: 34%;
    text-align: center;
    padding: 15px 22px;
  }
}

.recruit-detail-table td {
  width: 76%;
  background-color: #fff;
  padding: 28px 27px;
  letter-spacing: 0.06em;
  line-height: 1.75;
}

@media screen and (max-width: 768px) {
  .recruit-detail-table td {
    width: 66%;
    padding: 15px 10px;
  }
}

.recruit-detail-recruit {
  position: relative;
}

@media screen and (max-width: 768px) {
  .recruit-detail-recruit {
    margin-top: 20px;
  }
}

.recruit-detail-recruit-list {
  list-style: none;
}

.recruit-detail-recruit-item {
  margin-bottom: 25px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-recruit-item {
    margin: 15px 0;
  }
}

.recruit-detail-recruit-link {
  display: block;
  color: inherit;
}

.recruit-detail-recruit-title {
  font-size: 14px;
  font-weight: 700;
  color: #181818;
}

.recruit-detail-recruit-status {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}

@media screen and (max-width: 768px) {
  .recruit-detail-recruit-status {
    font-size: 10px;
  }
}

.recruit-detail-recruit-status-employment,
.recruit-detail-recruit-status-place {
  display: inline-block;
}

.recruit-detail-recruit-status-employment {
  margin-right: 15px;
}

.recruit-detail-recruit-employment-icon {
  margin-right: 4px;
  color: #666;
  font-style: normal;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .recruit-detail-recruit-employment-icon {
    font-size: 12px;
  }
}

.recruit-detail-recruit-place-icon {
  margin-right: 2px;
  color: #33bad2;
  font-style: normal;
  font-size: 10px;
}

.recruit-banner {
  position: relative;
  width: 100%;
  height: 295px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 26px;
}

@media screen and (max-width: 768px) {
  .recruit-banner {
    height: auto;
    padding-top: 27%;
    margin-top: 28px;
  }
}

.recruit-banner-wrap {
  display: block;
}

.recruit-card {
  height: 100%;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .recruit-card {
    border: none;
  }

  .recruit-card-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .recruit-card-content,
  .recruit-card-thumb {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .recruit-card-thumb {
    width: 42%;
  }
}

.recruit-card-img {
  width: 100%;
  height: 238px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .recruit-card-img {
    height: auto;
    padding-top: 67%;
  }
}

.recruit-card-content {
  color: #181818;
  padding: 36px 23px 32px 24px;
}

@media screen and (max-width: 768px) {
  .recruit-card-content {
    width: 58%;
    padding: 5px 0 0 15px;
  }
}

.recruit-card-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

@media screen and (max-width: 768px) {
  .recruit-card-title {
    font-size: 14px;
    margin-bottom: 7px;
  }
}

.recruit-card-subtext {
  font-size: 14px;
  color: #666;
  position: relative;
}

.recruit-card-subtext span {
  display: inline-block;
  background-color: #fff;
  padding-right: 20px;
  position: relative;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .recruit-card-subtext span {
    padding-right: 10px;
  }
}

.recruit-card-subtext:after {
  content: '';
  display: block;
  border-top: 1px solid #ddd;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 3px;
}

@media screen and (max-width: 768px) {
  .recruit-card-subtext:after {
    right: 0;
  }
}

.recruit-card-desc {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 2;
}

@media screen and (max-width: 768px) {
  .recruit-card-desc {
    font-size: 12px;
    letter-spacing: 0.09em;
    line-height: 1.65;
  }
}

.recruit-card-position-list {
  list-style: none;
  margin: 20px 0 23px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position-list {
    margin-top: 12px;
  }
}

.recruit-card-position-item {
  padding-right: 25px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 15px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .recruit-card-position-item {
    padding-right: 22px;
    font-size: 12px;
  }
}

.recruit-card-position-item:last-child {
  margin-bottom: 0;
}

.recruit-card-position-item a {
  position: static;
  display: inline-block;
  color: inherit;
}

.recruit-card-position-location {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: #888;
}

@media screen and (max-width: 768px) {
  .recruit-card-position-location {
    font-size: 10px;
  }
}

.recruit-card-position-icon {
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 3px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position-icon {
    right: 0;
  }
}

.recruit-card-divider {
  display: block;
  background: #ddd;
  width: 100%;
  height: 1px;
  margin: 11px 0 12px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position {
    border: 1px solid #ddd;
    margin-bottom: 20px;
  }

  .recruit-card-position .recruit-card-wrapper {
    display: block;
  }

  .recruit-card-position .recruit-card-thumb {
    width: 100%;
  }
}

.recruit-card-position .recruit-card-img {
  height: 146px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position .recruit-card-img {
    height: auto;
    padding-top: 41%;
  }
}

.recruit-card-position .recruit-card-content {
  padding: 27px 22px 5px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position .recruit-card-content {
    width: 100%;
    padding: 20px 20px 10px;
  }
}

.recruit-card-position .recruit-card-title {
  margin-bottom: 22px;
}

@media screen and (max-width: 768px) {
  .recruit-card-position .recruit-card-title {
    font-size: 16px;
    margin-bottom: 14px;
  }
}

.message-card {
  position: relative;
  margin-bottom: 110px;
}

@media screen and (max-width: 768px) {
  .message-card {
    margin-bottom: 40px;
  }
}

.message-card-thumb {
  width: 32%;
  float: right;
  position: relative;
  top: 50px;
  right: 0;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .message-card-thumb {
    width: 100%;
    float: none;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
  }
}

.message-card-img {
  width: 360px;
  height: 480px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 50px -7px rgba(25, 25, 25, 0.7);
}

@media screen and (max-width: 768px) {
  .message-card-img {
    width: 100%;
    height: auto;
    padding-top: 134%;
  }
}

.message-card-content {
  width: 78%;
  min-height: 450px;
  background: #f3f3f3;
  color: #181818;
  padding: 65px 195px 80px 100px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 0;
}

@media screen and (max-width: 768px) {
  .message-card-content {
    width: 100%;
    min-height: auto;
    margin: -252px auto 0;
    padding: 288px 25px 25px 20px;
  }
}

.message-card-title {
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 40px;
  padding-left: 3px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .message-card-title {
    font-size: 18px;
    margin-bottom: 13px;
  }
}

.message-card-title:after {
  content: '';
  display: block;
  width: 100%;
  height: 6px;
  background: #181818;
  border-radius: 70px;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .message-card-title:after {
    margin-top: 5px;
  }
}

.message-card-desc {
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.05em;
  text-align: justify;
  margin: 25px 0;
}

@media screen and (max-width: 768px) {
  .message-card-desc {
    line-height: 2;
    margin: 15px 0;
  }
}

.message-card-author {
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.05em;
  text-align: right;
  margin: -3px -3px 0 0;
}

@media screen and (max-width: 768px) {
  .message-card-author {
    margin: -3px -8px 20px 0;
  }
}

.message-card-position {
  font-size: 16px;
  margin-right: 15px;
}

@media screen and (max-width: 768px) {
  .message-card-position {
    font-size: 12px;
  }
}

.message-card-name {
  font-size: 24px;
}

@media screen and (max-width: 768px) {
  .message-card-name {
    font-size: 18px;
  }
}

.message-card-name-note {
  font-size: 10px;
  color: #888;
}

.message-card-reverse .message-card-thumb {
  float: left;
  left: 0;
  right: auto;
}

@media screen and (max-width: 768px) {
  .message-card-reverse .message-card-thumb {
    float: none;
    right: 0;
  }
}

.message-card-reverse .message-card-content {
  padding: 65px 105px 80px 195px;
  margin: 0 0 0 auto;
}

@media screen and (max-width: 768px) {
  .message-card-reverse .message-card-content {
    float: none;
    margin: -250px auto 0;
    padding: 285px 20px 25px;
  }
}

.staff-card {
  position: relative;
  background: #f3f3f3;
  padding: 47px 20px 47px 40px;
  margin-top: 130px;
}

@media screen and (max-width: 768px) {
  .staff-card {
    padding: 20px 20px 30px;
  }
}

.staff-card-inner {
  min-height: 145px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  position: relative;
}

@media screen and (max-width: 768px) {
  .staff-card-inner {
    display: block;
  }
}

.staff-card-name-en {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  min-width: 240px;
  text-align: right;
  position: absolute;
  top: 93px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  right: -120px;
}

@media screen and (max-width: 768px) {
  .staff-card-name-en {
    display: none;
  }
}

.staff-card-media {
  width: 43.5%;
  position: relative;
}

@media screen and (max-width: 768px) {
  .staff-card-media {
    width: 100%;
  }
}

.staff-card-media-inner {
  width: 400px;
  height: 400px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 50px -7px rgba(25, 25, 25, 0.7);
  position: absolute;
  top: -145px;
  left: 0;
}

@media screen and (max-width: 768px) {
  .staff-card-media-inner {
    width: 100%;
    height: auto;
    padding-top: 100%;
    position: relative;
    top: 0;
    margin: -190px auto 28px;
  }
}

.staff-card-media-inner:after {
  content: '';
  display: block;
  width: 83px;
  height: 1px;
  border-top: 1px solid #181818;
  position: absolute;
  top: 39.5%;
  -webkit-transform: translateY(-39.5%);
  transform: translateY(-39.5%);
  right: -38px;
}

@media screen and (max-width: 768px) {
  .staff-card-media-inner:after {
    width: 33px;
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg);
    top: 99%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.staff-card-toggle-media {
  width: 43.5%;
  position: relative;
}

@media screen and (max-width: 768px) {
  .staff-card-toggle-media {
    width: 100%;
  }
}

.staff-card-toggle-media:after {
  content: '';
  display: block;
  width: 83px;
  height: 1px;
  border-top: 1px solid #181818;
  position: absolute;
  top: 12px;
  right: 23px;
}

@media screen and (max-width: 768px) {
  .staff-card-toggle-media:after {
    width: 33px;
    -webkit-transform: translateY(0) rotate(90deg);
    transform: translateY(0) rotate(90deg);
    top: 99%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

.staff-card-toggle-media:hover .staff-card-toggle-media-after {
  opacity: 1;
  -webkit-transition: opacity 5s ease-out;
  transition: opacity 5s ease-out;
}

.staff-card-toggle-media-image {
  width: 400px;
  height: 400px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: -145px;
  left: 0;
}

@media screen and (max-width: 768px) {
  .staff-card-toggle-media-image {
    width: 100%;
    height: auto;
    padding-top: 100%;
    position: relative;
    top: 0;
    margin: -190px auto 28px;
  }
}

.staff-card-toggle-media-before {
  box-shadow: 0 5px 50px -7px rgba(25, 25, 25, 0.7);
}

@media screen and (max-width: 768px) {
  .staff-card-toggle-media-before {
    position: relative;
  }
}

.staff-card-toggle-media-after {
  opacity: 0;
  -webkit-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
}

@media screen and (max-width: 768px) {
  .staff-card-toggle-media-after {
    position: absolute;
    margin-top: 0;
  }
}

.staff-card-content {
  width: 56.5%;
  padding-right: 50px;
}

@media screen and (max-width: 768px) {
  .staff-card-content {
    width: 100%;
    padding: 0;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

.staff-card-position {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

@media screen and (max-width: 768px) {
  .staff-card-position {
    font-size: 12px;
    margin-bottom: 3px;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
}

.staff-card-name-jp,
.staff-card-sns {
  display: inline-block;
  vertical-align: top;
}

@media screen and (max-width: 768px) {
  .staff-card-name-jp,
  .staff-card-sns {
    display: block;
    text-align: center;
  }
}

.staff-card-name-jp {
  font-size: 34px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.05em;
  margin: 0 28px 18px 0;
}

@media screen and (max-width: 768px) {
  .staff-card-name-jp {
    font-size: 24px;
    margin: 0 auto 13px;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
  }
}

.staff-card-info {
  font-size: 14px;
  letter-spacing: 0.04em;
  margin-bottom: 23px;
}

@media screen and (max-width: 768px) {
  .staff-card-info {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
    margin-bottom: 18px;
  }
}

.staff-card-desc {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.075em;
  line-height: 1.75;
  margin: 15px 0;
}

@media screen and (max-width: 768px) {
  .staff-card-desc {
    letter-spacing: 0.045em;
    line-height: 2;
    margin: 10px 0;
    text-align: left;
    -webkit-box-ordinal-group: 6;
    -webkit-order: 5;
    -ms-flex-order: 5;
    order: 5;
  }
}

.staff-card-sns {
  list-style: none;
  margin: 11px -8px 0;
}

@media screen and (max-width: 768px) {
  .staff-card-sns {
    margin: 0 -13px;
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    -ms-flex-order: 4;
    order: 4;
  }
}

.staff-card-sns-list {
  display: inline-block;
  vertical-align: middle;
  padding: 0 8px;
}

@media screen and (max-width: 768px) {
  .staff-card-sns-list {
    padding: 0 13px;
  }
}

.staff-card-sns-list a {
  display: inline-block;
}

.staff-card-sns-icon {
  color: #181818;
  font-size: 18px;
}

.staff-card-btn {
  cursor: pointer;
  display: block;
  color: #181818;
  text-align: right;
  margin: 33px 17px 0 0;
}

@media screen and (max-width: 768px) {
  .staff-card-btn {
    margin: -2px 5px 0 0;
    -webkit-box-ordinal-group: 7;
    -webkit-order: 6;
    -ms-flex-order: 6;
    order: 6;
  }
}

.staff-card-btn-text {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .staff-card-btn-text {
    font-size: 12px;
  }
}

.staff-card-btn-icon {
  font-size: 18px;
  position: relative;
  top: 2px;
  right: -10px;
}

@media screen and (max-width: 768px) {
  .staff-card-btn-icon {
    right: -5px;
  }
}

.staff-card-reverse {
  padding: 47px 40px;
}

@media screen and (max-width: 768px) {
  .staff-card-reverse {
    padding: 20px 20px 30px;
  }
}

.staff-card-reverse .staff-card-name-en {
  right: auto;
  left: -138px;
}

@media screen and (max-width: 768px) {
  .staff-card-reverse .staff-card-name-en {
    display: none;
  }
}

.staff-card-reverse .staff-card-media {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
}

.staff-card-reverse .staff-card-media-inner {
  left: auto;
  right: 0;
}

.staff-card-reverse .staff-card-media-inner:after {
  right: auto;
  left: -38px;
}

@media screen and (max-width: 768px) {
  .staff-card-reverse .staff-card-media-inner:after {
    left: 0;
    right: 0;
  }
}

.staff-card-reverse .staff-card-content {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  padding: 0 0 0 38px;
}

@media screen and (max-width: 768px) {
  .staff-card-reverse .staff-card-content {
    padding: 0;
  }
}

.staff-card-reverse .staff-card-info {
  letter-spacing: 0.05em;
}

.staff-card-reverse .staff-card-desc {
  letter-spacing: 0.055em;
}

@media screen and (max-width: 768px) {
  .staff-card-reverse .staff-card-desc {
    letter-spacing: 0.05em;
  }
}

.company-table {
  width: 100%;
  border: 1px solid #eaeaea;
  border-collapse: collapse;
  text-align: left;
}

.company-table tr {
  border-bottom: 1px solid #eaeaea;
}

.company-table-data,
.company-table-heading {
  font-size: 15px;
  color: #333;
  vertical-align: top;
}

@media screen and (max-width: 768px) {
  .company-table-data,
  .company-table-heading {
    font-size: 14px;
  }
}

.company-table-heading {
  width: 19.5%;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 28px 30px;
}

@media screen and (max-width: 768px) {
  .company-table-heading {
    width: 100%;
    display: block;
    padding: 18px 19px 6px;
  }
}

.company-table-data {
  width: 80.5%;
  font-weight: 400;
  letter-spacing: 0.06em;
  padding: 28px 32px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .company-table-data {
    width: 100%;
    display: block;
    letter-spacing: 0.02em;
    padding: 0 19px 16px;
  }
}

.company-table-data address {
  font-style: normal;
  margin-top: 6px;
}

@media screen and (max-width: 768px) {
  .company-table-data address {
    letter-spacing: 0.065em;
  }
}

.company-table-data .heading {
  padding: 7px 0;
}

@media screen and (max-width: 768px) {
  .company-table-data .heading {
    margin: 0;
    padding: 13px 0 4px;
  }
}

.company-table-data-phone {
  display: inline-block;
}

@media screen and (max-width: 768px) {
  .company-table-data-phone {
    color: #33bad2;
    letter-spacing: 0.06em;
    margin-bottom: 7px;
  }
}

.company-table-data-phone a {
  color: #33bad2;
}

.company-table-map {
  width: 700px;
  height: 325px;
  margin: 27px 0 10px;
}

@media screen and (max-width: 768px) {
  .company-table-map {
    width: 100%;
    height: auto;
    padding-top: 47%;
    margin: 12px 0 8px;
  }
}

.company-table-map-button {
  font-size: 15px;
  font-weight: 700;
  color: #33bad2;
  letter-spacing: 0.02em;
  display: inline-block;
  margin-bottom: 33px;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .company-table-map-button {
    font-size: 14px;
    margin-bottom: 8px;
  }
}

.company-table-map-button:hover {
  color: #6bddf2;
}

.company-table-map-icon {
  position: relative;
  top: 2px;
  left: -2px;
}

@media screen and (max-width: 768px) {
  .company-table-map-icon {
    font-size: 8px;
    top: -1px;
    left: 0;
  }
}

.company-table-list {
  list-style: none;
}

.company-table-list-column2 {
  display: block;
  margin: 0 -22px;
  font-size: 0;
  letter-spacing: 0;
}

@media screen and (max-width: 768px) {
  .company-table-list-column2 {
    display: block;
    margin: 0;
  }
}

.company-table-list-column2 .company-table-list-item {
  display: inline-block;
  width: 50%;
  padding: 0 22px;
  margin-bottom: 3px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .company-table-list-column2 .company-table-list-item {
    display: block;
    width: 100%;
    padding: 0;
  }
}

.company-table-list-bullet {
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .company-table-list-bullet {
    list-style-type: disc;
    padding-left: 17px;
    margin: 7px 0 15px;
  }
}

.company-table-list-bullet .company-table-list-item {
  margin-bottom: 3px;
}

@media screen and (max-width: 768px) {
  .company-table-list-bullet .company-table-list-item {
    margin-bottom: 15px;
  }
}

.company-table-list-item {
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .company-table-list-item {
    margin-bottom: 3px;
    letter-spacing: 0.06em;
    line-height: 1.7;
  }
}

.company-table-list-item:last-child {
  margin-bottom: 0;
}

.company-table-list-text {
  display: inline-block;
  vertical-align: middle;
}

.company-table-list-link {
  vertical-align: middle;
}

.company-table-list-text {
  min-width: 105px;
}

@media screen and (max-width: 768px) {
  .company-table-list-text {
    min-width: 98px;
  }
}

.company-table-list-link {
  display: inline-block;
  color: #33bad2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.company-table-list-link:hover {
  color: #6bddf2;
}

.company-table-button {
  display: inline-block;
  /* float: right; */
  position: relative;
  left: 5px;
}

@media screen and (max-width: 768px) {
  .company-table-button {
    left: 4px;
  }
}

.company-table-button-static {
  float: none;
  top: 8px;
  left: -2px;
}

@media screen and (max-width: 768px) {
  .company-table-button-static {
    top: 7px;
    left: -1px;
    margin-bottom: 12px;
  }
}

.company-table-button-icon,
.company-table-button-text {
  display: inline-block;
  vertical-align: middle;
  color: #181818;
}

.company-table-button-text {
  font-size: 14px;
  font-weight: 700;
  margin-right: 10px;
}

@media screen and (max-width: 768px) {
  .company-table-button-text {
    font-size: 12px;
  }
}

.company-table-button-icon {
  font-size: 18px;
  position: relative;
  top: -2px;
  right: 2px;
}

@media screen and (max-width: 768px) {
  .company-table-button-icon {
    right: 4px;
  }
}

@media screen and (max-width: 768px) {
  .search-author {
    width: 100%;
    padding: 20px;
    background-size: auto;
    background-repeat: repeat;
  }
}

.search-author-title {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #ddd;
  padding-bottom: 12px;
}

@media screen and (max-width: 768px) {
  .search-author-title {
    font-size: 12px;
    border-bottom: none;
    padding-bottom: 9px;
  }
}

.search-author-inner {
  padding: 22px 50px;
}

@media screen and (max-width: 768px) {
  .search-author-inner {
    padding: 0;
  }
}

.search-author-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .search-author-block {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    border-radius: 3px;
    padding: 11px 18px 8px;
  }
}

.search-author-image {
  width: 97px;
  height: 99px;
  display: block;
  margin-right: 45px;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .search-author-image {
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
}

.search-author-name {
  font-size: 16px;
  font-weight: 700;
  color: #33bad2;
  letter-spacing: 0.05em;
  padding-top: 8px;
}

@media screen and (max-width: 768px) {
  .search-author-name {
    font-size: 14px;
  }
}

.search-author-name a {
  color: inherit;
}

.search-author-button {
  margin: -53px 20px 0 140px;
}

@media screen and (max-width: 768px) {
  .search-author-button {
    margin: 18px auto 0;
  }
}

.search-author-button-list {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
}

@media screen and (max-width: 768px) {
  .search-author-button-list {
    display: block;
    margin: 0 auto;
  }
}

.search-author-button-item {
  width: 50%;
  padding: 0 15px;
}

@media screen and (max-width: 768px) {
  .search-author-button-item {
    width: 100%;
    padding: 0;
    margin-bottom: 12px;
  }
}

.search-author-button-item .button {
  padding: 10px 15px;
}

@media screen and (max-width: 768px) {
  .search-author-button-item .button {
    padding: 14px 15px;
  }
}

.search-author-button-item .button-text {
  font-size: 14px;
}

.search-author-button-item .button-icon {
  right: 20px;
}

@media screen and (max-width: 768px) {
  .search-author-button-item .button-icon {
    right: 15px;
  }

  .search-author-button-item .button-black {
    border-radius: 2px;
  }
}

.search-author-link {
  display: block;
  color: #181818;
  position: absolute;
  top: 18px;
  right: 48px;
}

@media screen and (max-width: 768px) {
  .search-author-link {
    position: static;
    text-align: right;
    margin-top: 13px;
  }
}

.search-author-link-text {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .search-author-link-text {
    font-size: 12px;
    padding-right: 10px;
    letter-spacing: 0.01em;
  }
}

.search-author-link-icon {
  position: relative;
  top: 3px;
  right: -5px;
  font-size: 17px;
}

@media screen and (max-width: 768px) {
  .search-author-link-icon {
    right: 0;
  }
}

.office-hero {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.office-hero-map {
  position: relative;
  width: 100%;
  height: 320px;
}

@media screen and (max-width: 768px) {
  .office-hero-map {
    height: auto;
    padding-top: 43%;
  }
}

.office-hero-map:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
}

.office-hero-text {
  font-size: 48px;
  font-weight: 700;
  color: #333;
  margin-top: -2px;
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

@media screen and (max-width: 768px) {
  .office-hero-text {
    font-size: 28px;
    margin-top: -3px;
  }
}

.office-hero-text-sub {
  margin-top: 10px;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .office-hero-text-sub {
    font-size: 10px;
  }
}

.office-block {
  background: #fff;
  height: 100%;
  padding: 25px 40px 40px;
}

@media screen and (max-width: 768px) {
  .office-block {
    padding: 25px 22px 28px;
  }
}

.office-block-contact {
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .office-block-contact {
    margin-top: 12px;
  }
}

.office-block-list {
  list-style: none;
}

.office-block-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  color: #181818;
  margin-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .office-block-item {
    margin-bottom: 7px;
  }
}

.office-block-item address {
  font-style: normal;
  letter-spacing: 0.065em;
}

.office-block-text {
  font-size: 14px;
  line-height: 1.75;
  margin-left: 15px;
}

@media screen and (max-width: 768px) {
  .office-block-text {
    font-size: 12px;
    line-height: 2;
    letter-spacing: 0.06em;
    margin-left: 16px;
  }
}

.office-block-text a {
  color: inherit;
  text-decoration: none;
}

.office-block-link {
  color: #33bad2;
  font-weight: 700;
  letter-spacing: -0.1em;
  margin: -3px 0 0 30px;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.office-block-link:hover {
  color: #6bddf2;
}

.office-block-link .office-block-text {
  margin: -5px 0 0 6px;
}

.office-block-service {
  width: 100%;
  min-height: 80px;
  margin: 29px 0 23px;
}

@media screen and (max-width: 768px) {
  .office-block-service {
    min-height: auto;
    margin: 23px 0 20px;
  }
}

.office-block-service .office-block-item {
  margin-bottom: 7px;
}

@media screen and (max-width: 768px) {
  .office-block-service .office-block-item {
    margin-bottom: 12px;
  }
}

.office-block-list-inner {
  list-style: none;
  width: 77.5%;
  padding-left: 23px;
}

@media screen and (max-width: 768px) {
  .office-block-list-inner {
    width: 67%;
    padding-left: 19px;
  }
}

.office-block-item-inner {
  margin: 4px 0 10px;
}

@media screen and (max-width: 768px) {
  .office-block-item-inner {
    margin: 4px 0 6px;
  }
}

.office-block-category {
  width: 22.5%;
  border: 1px solid #181818;
  font-size: 10px;
  font-weight: 700;
  color: #181818;
  line-height: 1.6;
  text-align: center;
  padding: 5px;
}

@media screen and (max-width: 768px) {
  .office-block-category {
    width: 33%;
    padding: 5px 3px;
  }
}

.office-block-desc {
  font-size: 14px;
  font-weight: 700;
  color: #33bad2;
  letter-spacing: 0.05em;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .office-block-desc {
    font-size: 12px;
    font-weight: 400;
  }
}

.office-block-desc:hover {
  color: #6bddf2;
}

.office-block-desc .office-block-text {
  margin-left: 6px;
}

.office-block-desc-blank {
  display: block;
  position: relative;
  padding-left: 20px;
}

@media screen and (max-width: 768px) {
  .office-block-desc-blank {
    padding-left: 14px;
  }
}

.office-block-desc-blank .office-block-icon {
  position: absolute;
  top: 2px;
}

@media screen and (max-width: 768px) {
  .office-block-desc-blank .office-block-icon {
    top: 4px;
  }
}

.office-block-icon {
  position: relative;
  top: 2px;
  left: 0;
}

.office-block-article {
  position: relative;
}

.office-block-article-link {
  display: block;
  color: #333;
}

@media screen and (max-width: 768px) {
  .office-block-article-link {
    font-size: 0;
    letter-spacing: 0;
  }
}

.office-block-article-content,
.office-block-article-media {
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  .office-block-article-content,
  .office-block-article-media {
    vertical-align: top;
  }
}

.office-block-article-media {
  position: relative;
  width: 120px;
  height: 80px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .office-block-article-media {
    width: 34%;
    height: auto;
    padding-top: 23%;
  }
}

.history-card-title:before,
.office-block-article-media:after {
  content: '';
  height: 100%;
  background: #181818;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.office-block-article-media:after {
  opacity: 0;
  width: 100%;
}

.office-block-article-content {
  width: 275px;
  padding-left: 10px;
  margin-top: -3px;
}

@media screen and (max-width: 768px) {
  .office-block-article-content {
    width: 66%;
    margin-top: -4px;
  }
}

.office-block-article-title {
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.06em;
  line-height: 1.6;
  margin-bottom: 4px;
}

@media screen and (max-width: 768px) {
  .office-block-article-title {
    font-size: 12px;
    letter-spacing: 0.07em;
    margin-bottom: 10px;
  }
}

.office-block-article-date {
  font-size: 11px;
  letter-spacing: 0.06em;
  padding-left: 2px;
}

@media screen and (max-width: 768px) {
  .office-block-article-date {
    font-size: 10px;
  }
}

.office-block-divider {
  width: 100%;
  height: 1px;
  border-top: 1px solid #ddd;
  margin: 10px auto 25px;
}

@media screen and (max-width: 768px) {
  .office-block-divider {
    margin: 10px auto 18px;
  }
}

.search-not-found {
  text-align: center;
}

.search-not-found-title {
  font-size: 40px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.04em;
  line-height: 1.5;
}

@media screen and (max-width: 768px) {
  .search-not-found-title {
    font-size: 24px;
  }
}

.search-not-found-subtext {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .search-not-found-subtext {
    font-size: 12px;
  }
}

.search-not-found-video {
  height: 485px;
  margin: 43px auto 0;
}

@media screen and (max-width: 768px) {
  .search-not-found-video {
    height: auto;
    padding-top: 57%;
    margin: 25px auto 0;
    position: relative;
  }
}

.search-not-found-video iframe {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .search-not-found-video iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.flow-heading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .flow-heading {
    display: block;
  }
}

.flow-heading-main {
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0 20px 0 -5px;
}

@media screen and (max-width: 768px) {
  .flow-heading-main {
    font-size: 28px;
    line-height: 1;
    margin: 0;
  }
}

.flow-heading-sub {
  font-size: 13px;
  letter-spacing: 0.03em;
}

@media screen and (max-width: 768px) {
  .flow-heading-sub {
    font-size: 10px;
  }
}

.flow-heading-subheading {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 7px;
}

@media screen and (max-width: 768px) {
  .flow-heading-subheading {
    font-size: 14px;
    margin-top: 13px;
  }
}

.faq-contact {
  position: relative;
}

.faq-contact-heading {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .faq-contact-heading {
    padding: 0 10px;
  }
}

.faq-contact-heading-center {
  padding-left: 0;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .faq-contact-heading-center {
    text-align: left;
    padding: 0;
  }
}

.faq-contact-heading-desc {
  font-size: 16px;
  letter-spacing: 0.045em;
  line-height: 1.75;
}

@media screen and (max-width: 768px) {
  .faq-contact-heading-desc {
    font-size: 14px;
    line-height: 2;
  }
}

.faq-contact-form {
  width: 760px;
  margin: 43px auto 0;
}

@media screen and (max-width: 768px) {
  .faq-contact-form {
    width: 100%;
    margin: 21px 0 0;
  }
}

.faq-contact-form-center {
  margin: 47px auto 0;
  padding: 0;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-center {
    margin: 23px auto 0;
    padding: 0;
  }
}

.faq-contact-form-item {
  margin-bottom: 26px;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-item {
    margin-bottom: 7px;
  }
}

.faq-contact-form-field {
  display: inline-block;
  vertical-align: top;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-field {
    display: block;
    padding: 0 10px;
  }
}

.faq-contact-form-field-block {
  display: block;
}

.faq-contact-form-tag,
.faq-contact-form-text {
  display: inline-block;
  vertical-align: top;
}

.faq-contact-form-text {
  min-width: 165px;
  font-size: 14px;
  text-align: left;
  font-weight: 200;
  letter-spacing: 0.06em;
  line-height: 1;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-text {
    min-width: auto;
    margin-right: 10px;
  }
}

.faq-contact-form-tag {
  background: #d40000;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  padding: 2px 15px;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-tag {
    font-size: 10px;
    padding: 1px 12px;
  }
}

.faq-contact-form-input {
  background: #f3f3f3;
  width: 420px;
  height: 60px;
  border-radius: 3px;
  font-size: 16px;
  padding: 0 15px;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-input {
    width: 100%;
  }
}

.faq-contact-form-input-textarea {
  width: 100%;
  height: 155px;
  padding: 15px;
  resize: none;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-input-textarea {
    width: 100%;
    height: 170px;
  }
}

.faq-contact-form-input-textarea-full {
  width: 100%;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-input-textarea-full {
    height: 170px;
  }
}

.faq-contact-form-note {
  display: block;
  font-size: 13px;
  color: #888;
  text-align: left;
  margin-top: 5px;
}

@media screen and (max-width: 768px) {
  .faq-contact-form-note {
    font-size: 10px;
  }
}

.faq-contact-form-note-black {
  color: #181818;
  margin-top: 5px;
}

.faq-contact-button {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 760px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .faq-contact-button {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 9px;
  }
}

.faq-contact-button .button {
  padding: 13px 56px;
  text-align: center;
}

.faq-contact-button-note {
  display: block;
  font-size: 13px;
  color: #181818;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-note {
    font-size: 10px;
  }
}

.faq-contact-button-left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-left {
    max-width: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
  }
}

.faq-contact-button-right {
  -webkit-flex-basis: 240px;
  -ms-flex-preferred-size: 240px;
  flex-basis: 240px;
  max-width: 240px;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-right {
    margin: 17px 0 0;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }
}

.faq-contact-button-sm {
  margin-top: 0;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-sm {
    padding: 0;
  }
}

.faq-contact-button-sm .button-fit {
  width: 31.5%;
  margin: -77px 0 0 auto;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-sm .button-fit {
    width: 100%;
    margin: -2px auto 0;
  }
}

.faq-contact-button-desc {
  font-size: 14px;
  letter-spacing: 0.045em;
  line-height: 2.3;
  margin-bottom: 15px;
}

@media screen and (max-width: 768px) {
  .faq-contact-button-desc {
    line-height: 1.7;
  }
}

.faq-contact-form-divider {
  width: 100%;
  height: 1px;
  border-top: 1px solid #ddd;
  margin: 10px auto 28px;
}

.privacy-list {
  list-style: none;
}

.privacy-list-item {
  padding-bottom: 11px;
}

.privacy-list-heading {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.04em;
  border-bottom: 2px solid #181818;
  padding-bottom: 8px;
  margin-bottom: 29px;
}

@media screen and (max-width: 768px) {
  .privacy-list-heading {
    font-size: 20px;
    padding-bottom: 4px;
    margin-bottom: 19px;
  }
}

.privacy-list-desc {
  font-size: 14px;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .privacy-list-desc {
    line-height: 1.95;
  }
}

.privacy-list-inner {
  list-style: none;
  margin-top: 27px;
}

@media screen and (max-width: 768px) {
  .privacy-list-inner {
    margin-top: 30px;
  }
}

.privacy-list-item-inner {
  padding-bottom: 18px;
}

@media screen and (max-width: 768px) {
  .privacy-list-item-inner {
    padding-bottom: 20px;
  }

  .privacy-list-item-inner .heading {
    margin: 0;
    padding: 0;
  }

  .privacy-list-item-inner .heading-title {
    line-height: 1.5;
    padding: 0 0 0 20px;
  }
}

.privacy-list-data {
  margin-top: 5px;
  padding-left: 13px;
}

@media screen and (max-width: 768px) {
  .privacy-list-data {
    margin-top: -2px;
    padding-left: 15px;
  }
}

.privacy-list-text {
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 0.055em;
  padding: 0 0 15px 10px;
}

@media screen and (max-width: 768px) {
  .privacy-list-text {
    line-height: 1.75;
    padding: 0 0 13px 5px;
  }
}

.privacy-list-data-inner {
  list-style-type: lower-alpha;
  margin-top: 22px;
  padding-left: 23px;
}

@media screen and (max-width: 768px) {
  .privacy-list-data-inner {
    margin-top: 15px;
  }
}

.privacy-list-text-inner {
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 0.02em;
  padding: 0 0 6px 7px;
}

@media screen and (max-width: 768px) {
  .privacy-list-text-inner {
    padding: 0 0 13px 7px;
  }
}

.privacy-list-box {
  border: 1px solid #ddd;
  padding: 37px 37px 28px;
  margin: 7px 17px 21px 21px;
}

@media screen and (max-width: 768px) {
  .privacy-list-box {
    padding: 0;
    margin: 2px 8px 21px 12px;
  }
}

.privacy-list-box-heading {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .privacy-list-box-heading {
    font-size: 14px;
    line-height: 1;
    padding: 21px 18px 6px;
  }
}

.privacy-list-box-def {
  margin-top: 16px;
}

.privacy-list-box-term {
  float: left;
  min-width: 68px;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .privacy-list-box-term {
    float: none;
    min-width: auto;
    font-size: 10px;
    border-top: 1px solid #ddd;
    padding: 13px 20px 0;
  }
}

.privacy-list-box-desc {
  font-size: 14px;
  letter-spacing: 0.075em;
  padding-bottom: 8px;
}

@media screen and (max-width: 768px) {
  .privacy-list-box-desc {
    letter-spacing: 0.065em;
    padding: 1px 20px 13px;
  }
}

.privacy-list-box-desc em {
  font-style: normal;
}

@media screen and (max-width: 768px) {
  .privacy-list-box-desc em {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
  }

  .privacy-list-box-desc span {
    font-size: 10px;
  }
}

.history-card {
  background: #fff;
  min-height: 265px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 48px 40px 45px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .history-card {
    display: block;
    min-height: auto;
    padding: 20px 20px 23px;
  }
}

.history-card-full {
  background: 0 0;
  display: block;
  padding: 0;
  margin: 0 auto;
  text-align: center;
}

.history-card-startup {
  background: 0 0;
  min-height: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 0;
  text-align: left;
}

.history-card-startup .history-card-thumb {
  width: 40%;
}

@media screen and (max-width: 768px) {
  .history-card-startup .history-card-thumb {
    width: 41%;
    margin-right: 20px;
  }
}

.history-card-startup .history-card-img {
  box-shadow: none;
  margin: 0;
}

.history-card-startup .history-card-content {
  width: 60%;
  padding: 12px 0 0;
}

@media screen and (max-width: 768px) {
  .history-card-startup .history-card-content {
    width: 59%;
    padding: 5px 0 0;
  }
}

.history-card-startup .history-card-title {
  padding-left: 0;
}

@media screen and (max-width: 768px) {
  .history-card-startup .history-card-title {
    font-size: 16px;
  }
}

.history-card-startup .history-card-title:before {
  content: none;
}

.history-card-startup .history-card-desc {
  line-height: 1.7;
  letter-spacing: 0.05em;
  margin-top: 7px;
}

@media screen and (max-width: 768px) {
  .history-card-startup .history-card-desc {
    font-size: 12px;
    margin-top: 7px;
    line-height: 2;
  }
}

.history-card-thumb {
  width: 40.75%;
  position: relative;
}

@media screen and (max-width: 768px) {
  .history-card-thumb {
    width: 100%;
  }
}

.history-card-thumb-full {
  width: 100%;
}

.history-card-img {
  width: 360px;
  height: 245px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 50px -7px rgba(25, 25, 25, 0.7);
  position: absolute;
  top: -93px;
  left: 0;
}

@media screen and (max-width: 768px) {
  .history-card-img {
    width: 100%;
    height: auto;
    padding-top: 68%;
    position: relative;
    top: 0;
    margin: -90px auto 25px;
  }
}

.history-card-img-full {
  width: 808px;
  height: 540px;
  margin: 0 auto;
  position: static;
}

@media screen and (max-width: 768px) {
  .history-card-img-full {
    width: 100%;
    height: auto;
    padding-top: 67%;
  }
}

.history-card-img-md {
  width: 320px;
  height: 180px;
}

@media screen and (max-width: 768px) {
  .history-card-img-md {
    width: 100%;
    height: auto;
    padding-top: 57%;
  }
}

.history-card-img-sm {
  width: 140px;
  height: 140px;
}

@media screen and (max-width: 768px) {
  .history-card-img-sm {
    width: 100%;
    height: auto;
    padding-top: 100%;
  }
}

.history-card-content {
  width: 59.25%;
  padding-right: 23px;
}

@media screen and (max-width: 768px) {
  .history-card-content {
    width: 100%;
    padding-right: 0;
  }
}

.history-card-content-full {
  width: 100%;
  padding: 40px 0 0;
}

@media screen and (max-width: 768px) {
  .history-card-content-full {
    padding: 32px 0 0;
  }
}

.history-card-content-sm {
  width: 280px;
  padding: 10px 20px 27px;
}

@media screen and (max-width: 768px) {
  .history-card-content-sm {
    width: 90%;
    padding: 15px 20px 32px;
  }
}

.history-card-content-bg {
  background: #f3f3f3;
  margin: 0 auto;
}

.history-card-title {
  font-size: 18px;
  font-weight: 700;
  padding-left: 14px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .history-card-title {
    font-size: 14px;
  }
}

.history-card-title:before {
  width: 4px;
  border-radius: 50px;
}

.history-card-title-underline {
  display: inline-block;
  font-size: 21px;
  padding: 0 8px 15px;
}

@media screen and (max-width: 768px) {
  .history-card-title-underline {
    font-size: 18px;
    padding: 0 1px 12px;
  }
}

.history-card-title-underline:before {
  width: 100%;
  height: 6px;
  top: auto;
  bottom: 0;
}

.history-card-desc {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.04em;
  margin-top: 17px;
}

@media screen and (max-width: 768px) {
  .history-card-desc {
    font-size: 14px;
    line-height: 2;
    margin-top: 7px;
  }
}

.history-card-desc-md {
  font-size: 18px;
  margin-top: 29px;
}

@media screen and (max-width: 768px) {
  .history-card-desc-md {
    font-size: 14px;
    margin-top: 17px;
  }
}

.history-card-related {
  border-top: 1px solid #ddd;
  margin-top: 35px;
  padding-left: 3px;
}

@media screen and (max-width: 768px) {
  .history-card-related {
    margin: 15px 0 10px;
    padding-left: 0;
  }
}

.history-card-related-text,
.history-card-related-title {
  font-size: 14px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .history-card-related-text,
  .history-card-related-title {
    font-size: 12px;
  }
}

.history-card-related-title {
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .history-card-related-title {
    margin-top: 23px;
  }
}

.history-card-related-list {
  list-style: none;
  margin-top: 18px;
}

@media screen and (max-width: 768px) {
  .history-card-related-list {
    margin-top: 15px;
  }
}

.history-card-related-item {
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .history-card-related-item {
    margin-bottom: 17px;
  }
}

.history-card-related-item:last-child {
  margin-bottom: 0;
}

.history-card-related-link {
  color: #33bad2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.history-card-related-link:hover {
  color: #6bddf2;
}

.history-card-related-text {
  letter-spacing: 0.05em;
  margin-left: 13px;
}

@media screen and (max-width: 768px) {
  .history-card-related-text {
    margin-left: 8px;
  }
}

.history-card-related-icon {
  font-size: 19px;
}

@media screen and (max-width: 768px) {
  .history-card-related-icon {
    font-size: 15px;
  }
}

.history-startup {
  margin: 0 auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .history-startup {
    background: #f3f3f3;
    padding: 60px 20px 40px;
  }
}

.history-startup-title {
  display: inline-block;
  font-size: 21px;
  font-weight: 700;
  padding: 0 5px 15px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .history-startup-title {
    font-size: 18px;
    padding: 0 5px 12px;
  }
}

.history-startup-title:after {
  content: '';
  display: block;
  width: 100%;
  height: 6px;
  background: #181818;
  border-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.history-startup-content {
  background: #f3f3f3;
  margin-top: 78px;
  padding: 20px 35px 32px;
}

@media screen and (max-width: 768px) {
  .history-startup-content {
    background: 0 0;
    margin-top: 25px;
    padding: 0;
  }
}

.history-startup-president {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: -55px -18px 0;
}

@media screen and (max-width: 768px) {
  .history-startup-president {
    margin: 0 -18px;
  }
}

.history-startup-president-wrapper {
  padding: 0 18px;
}

.history-startup-president-img {
  width: 76px;
  height: 76px;
}

@media screen and (max-width: 768px) {
  .history-startup-president-img {
    width: 80px;
    height: 80px;
  }
}

.history-startup-president-name {
  font-size: 16px;
  font-weight: 700;
  color: #181818;
  margin-top: 10px;
}

.history-startup-desc {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.04em;
  margin-top: 15px;
}

@media screen and (max-width: 768px) {
  .history-startup-desc {
    margin-top: 18px;
  }
}

.history-startup-logo {
  background: #fff;
  width: 260px;
  height: 74px;
  line-height: 70px;
  margin: 40px auto 0;
  box-shadow: 0 5px 50px -15px rgba(25, 25, 25, 0.7);
}

@media screen and (max-width: 768px) {
  .history-startup-logo {
    margin: 45px auto 0;
  }
}

.history-startup-logo-img {
  vertical-align: middle;
}

.history-startup-list {
  list-style: none;
  margin-top: 35px;
}

.history-startup-item {
  margin-bottom: 48px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .history-startup-item {
    margin-bottom: 35px;
  }
}

.history-startup-item:after {
  content: '';
  width: 12px;
  height: 12px;
  display: block;
  margin: 0 auto;
  border-style: solid;
  border-color: #181818;
  border-width: 0 2px 2px 0;
  border-radius: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  bottom: -27px;
  left: 64px;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .history-startup-item:after {
    width: 9px;
    height: 9px;
    border-radius: 1px;
    bottom: -20px;
    left: 18%;
  }
}

.history-startup-item:last-child {
  margin-bottom: 0;
}

.history-startup-item:last-child:after {
  content: none;
}

.history-startup-button {
  list-style: none;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.history-startup-button-link {
  width: 50%;
  display: block;
  border: 2px solid #181818;
  background: #fff;
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.03em;
  padding: 6px;
  text-align: center;
}

.history-startup-button-link:first-child {
  border-radius: 20px 0 0 20px;
  padding-left: 18px;
}

.history-startup-button-link:nth-child(2) {
  border-radius: 0 20px 20px 0;
}

.history-startup-button-link.is-active,
.history-startup-button-link:hover {
  background: #181818;
  color: #fff;
}

.sitemap {
  position: relative;
}

.sitemap-heading {
  font-size: 20px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .sitemap-heading {
    font-size: 18px;
  }
}

.sitemap-list {
  list-style: none;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 17px -25px 0;
}

@media screen and (max-width: 768px) {
  .sitemap-list {
    margin: 10px 0 0;
    padding: 0 2px;
  }
}

.sitemap-item {
  width: 25%;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0 25px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .sitemap-item {
    width: 50%;
    padding: 0;
    margin-bottom: 13px;
  }
}

.sitemap-item:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  width: 6px;
  height: 6px;
  background: #181818;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .sitemap-item:before {
    width: 8px;
    height: 8px;
  }
}

.sitemap-link {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.06em;
  line-height: 1.75;
  padding-left: 12px;
}

@media screen and (max-width: 768px) {
  .sitemap-link {
    padding-left: 8px;
  }
}

.contact-end-content {
  text-align: center;
}

.contact-end-content-greeting {
  max-width: 742px;
  height: auto;
  display: block;
  margin: 0 auto 30px;
}

@media screen and (max-width: 768px) {
  .contact-end-content-greeting {
    width: 100%;
    height: auto;
    margin: 0 auto 18px;
    padding: 0 10px 0 9px;
  }
}

.contact-end-content-greeting-img {
  width: 100%;
  height: auto;
}

.contact-end-content-text {
  font-size: 16px;
  color: #181818;
  line-height: 2;
  padding-left: 6px;
  margin-bottom: 32px;
}

@media screen and (max-width: 768px) {
  .contact-end-content-text {
    font-size: 14px;
    padding: 0 10px;
    margin-bottom: 28px;
    text-align: left;
  }
}

.contact-end-content-link {
  font-weight: 700;
  color: #33bad2;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

.contact-end-content-link:hover {
  color: #6bddf2;
}

.contact-end-content-image {
  width: 100%;
  height: 468px;
  margin: 64px auto 46px;
}

@media screen and (max-width: 768px) {
  .contact-end-content-image {
    height: auto;
    margin: 25px auto 28px;
    padding: 0 10px;
  }
}

.contact-end-content-image-inner {
  width: 100%;
  height: auto;
  display: block;
  padding-top: 41.79%;
  background-size: cover;
  background-position: center;
}

@media screen and (max-width: 768px) {
  .contact-end-content-image-inner {
    padding: 47.47% 0 0;
    background-size: 172% auto;
    background-position: center 45%;
  }
}

.contact-end-content-button-text {
  font-size: 16px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 768px) {
  .contact-end-content-button-text {
    font-size: 14px;
    text-align: left;
  }
}

.contact-box {
  border: 1px solid #ddd;
  padding: 38px 30px;
  margin: 0 auto;
  text-align: center;
  color: #181818;
}

@media screen and (max-width: 768px) {
  .contact-box {
    padding: 25px 19px;
    text-align: left;
  }
}

.contact-box-text {
  font-size: 16px;
  letter-spacing: 0.065em;
  padding-left: 10px;
}

@media screen and (max-width: 768px) {
  .contact-box-text {
    font-size: 14px;
    padding-left: 0;
    line-height: 1.4;
  }
}

.contact-box-tel {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.055em;
  margin: 15px auto 3px;
  padding-right: 20px;
}

@media screen and (max-width: 768px) {
  .contact-box-tel {
    font-size: 24px;
    letter-spacing: 0.065em;
    margin: 18px auto 3px;
    padding-right: 0;
  }
}

.contact-box-tel a {
  color: inherit;
}

.contact-box-note {
  font-size: 12px;
  letter-spacing: 0.05em;
  padding-right: 15px;
}

@media screen and (max-width: 768px) {
  .contact-box-note {
    font-size: 10px;
    padding: 0 0 0 2px;
  }
}

.contact-button {
  position: relative;
}

.contact-button-margin {
  margin-top: 22px;
}

@media screen and (max-width: 768px) {
  .contact-button-margin {
    margin-top: 55px;
  }
}

.contact-button-list {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 7px -20px 0;
}

@media screen and (max-width: 768px) {
  .contact-button-list {
    display: block;
    margin: 3px auto 0;
  }
}

.contact-button-item {
  width: 50%;
  padding: 0 20px;
  margin-bottom: 28px;
}

@media screen and (max-width: 768px) {
  .contact-button-item {
    width: 100%;
    padding: 0;
    margin-bottom: 16px;
  }
}

.contact-button-bottom {
  border-top: 1px solid #ddd;
  margin-top: 40px;
  padding-top: 54px;
  position: relative;
}

@media screen and (max-width: 768px) {
  .contact-button-bottom {
    margin-top: 54px;
    padding: 30px 0 10px;
  }
}

.contact-button-text {
  font-size: 14px;
  color: #181818;
  letter-spacing: 0.05em;
  line-height: 2;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .contact-button-text {
    text-align: left;
    letter-spacing: 0.025em;
    line-height: 1.6;
    padding: 0 5px 0 10px;
  }
}

.contact-button-link {
  color: #181818;
  position: absolute;
  right: 0;
  bottom: 4px;
}

@media screen and (max-width: 768px) {
  .contact-button-link {
    text-align: right;
    display: block;
    position: relative;
    right: 10px;
    bottom: auto;
    margin: 13px 0 0 auto;
  }
}

.contact-button-link-text {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-right: 10px;
}

@media screen and (max-width: 768px) {
  .contact-button-link-text {
    font-size: 12px;
    margin-right: 5px;
  }
}

.contact-button-link-icon {
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
}

.contact-banner {
  margin: 0 auto;
  text-align: center;
}

.contact-banner-text {
  font-size: 16px;
  font-weight: 700;
  color: #181818;
  letter-spacing: 0.04em;
}

@media screen and (max-width: 768px) {
  .contact-banner-text {
    padding: 0 20px;
  }
}

.contact-banner-list {
  list-style: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  .contact-banner-list {
    margin-top: 27px;
  }
}

.contact-banner-item {
  width: 20%;
}

@media screen and (max-width: 768px) {
  .contact-banner-item {
    width: 50%;
    height: 67px;
    line-height: 67px;
    border-bottom: 1px solid #ddd;
  }

  .contact-banner-item:nth-child(odd) {
    border-right: 1px solid #ddd;
  }
}

.contact-banner-item:first-child {
  padding-right: 20px;
}

@media screen and (max-width: 768px) {
  .contact-banner-item:first-child {
    padding-right: 0;
  }

  .contact-banner-item:first-child,
  .contact-banner-item:nth-child(2) {
    border-top: 1px solid #ddd;
  }

  .contact-banner-item:nth-child(4) .contact-banner-img {
    max-width: 123px;
  }
}

.contact-banner-link {
  display: block;
}

@media screen and (max-width: 768px) {
  .contact-banner-link {
    display: block;
  }

  .contact-banner-img {
    width: auto;
    height: auto;
    max-height: 41px;
    max-width: 80px;
  }
}

.not-found-title {
  display: block;
}

.not-found-title-text {
  font-size: 48px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .not-found-title-text {
    font-size: 28px;
  }
}

.not-found-title-sub {
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .not-found-title-sub {
    font-size: 10px;
  }
}

.not-found-text {
  font-size: 16px;
  font-weight: 400;
  color: #181818;
  letter-spacing: 0.05em;
  margin: 16px 0;
}

@media screen and (max-width: 768px) {
  .not-found-text {
    font-size: 14px;
    line-height: 2;
    margin: 0;
  }
}

.not-found-text-bold {
  font-weight: 700;
}

.gatemask {
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .gatemask {
    min-height: 264px;
  }
}

.gatemask:hover .gatemask-men {
  -webkit-transform: translate(-50%, -171px);
  transform: translate(-50%, -171px);
}

.gatemask:hover .gatemask-button {
  -webkit-transform: translate(-50%, -10px);
  transform: translate(-50%, -10px);
}

.gatemask:hover .gatemask-light1,
.gatemask:hover .gatemask-light2 {
  margin-top: 0;
}

.box_tweet img + br,
.gatemask-bg,
.single-body .amazonjs_info h4:before,
.single-body .amazonjs_info li:before {
  display: none;
}

@media screen and (max-width: 768px) {
  .gatemask-bg {
    display: block;
    width: 100%;
    height: auto;
  }
}

.gatemask-video {
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .gatemask-video {
    display: none;
  }
}

.gatemask-light1,
.gatemask-light2 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: margin 1s ease, -webkit-transform 0.5s ease;
  transition: transform 0.5s ease, margin 1s ease;
  transition: transform 0.5s ease, margin 1s ease, -webkit-transform 0.5s ease;
}

.gatemask-light1 {
  margin-top: 170px;
  -webkit-animation: gatemaskLight1 60s linear 0s infinite alternate;
  animation: gatemaskLight1 60s linear 0s infinite alternate;
}

@media screen and (max-width: 768px) {
  .gatemask-light1 {
    margin-top: -20px;
    width: 180px;
    height: auto;
  }
}

.gatemask-light2 {
  margin-top: 170px;
  -webkit-animation: gatemaskLight2 60s linear 0s infinite alternate;
  animation: gatemaskLight2 60s linear 0s infinite alternate;
}

@media screen and (max-width: 768px) {
  .gatemask-light2 {
    margin-top: -20px;
    width: 257px;
    height: auto;
  }
}

@-webkit-keyframes gatemaskLight1 {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes gatemaskLight1 {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes gatemaskLight2 {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes gatemaskLight2 {
  0% {
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(-360deg);
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.gatemask-men {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  -webkit-transition: -webkit-transform 1s ease;
  transition: transform 1s ease;
  transition: transform 1s ease, -webkit-transform 1s ease;
}

@media screen and (max-width: 768px) {
  .gatemask-men {
    width: 710px;
    height: auto;
    -webkit-transform: translate(-50%, -107px);
    transform: translate(-50%, -107px);
  }
}

.gatemask-button {
  position: absolute;
  left: 50%;
  bottom: 100px;
  -webkit-transform: translate(-50%, -50px);
  transform: translate(-50%, -50px);
  -webkit-transition: -webkit-transform 1s ease;
  transition: transform 1s ease;
  transition: transform 1s ease, -webkit-transform 1s ease;
  -webkit-animation: gatemaskButton 0.5s linear 0s infinite alternate;
  animation: gatemaskButton 0.5s linear 0s infinite alternate;
}

@media screen and (max-width: 768px) {
  .gatemask-button {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    bottom: 25%;
    width: 100px;
  }

  .gatemask-button img {
    width: 100%;
    height: auto;
  }
}

@-webkit-keyframes gatemaskButton {
  0% {
    opacity: 0;
  }

  80%,
  to {
    opacity: 1;
  }
}

@keyframes gatemaskButton {
  0% {
    opacity: 0;
  }

  80%,
  to {
    opacity: 1;
  }
}

.gatemask-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.gatemask-svg path {
  fill: #fff;
}

.info-ga-wrapper {
  text-align: center;
}

.info-ga-wrapper.info1 {
  margin: 24px auto;
}

@media screen and (max-width: 768px) {
  .info-ga-wrapper.info1 {
    margin: 10px auto;
  }
}

.info-ga-wrapper.info2 {
  margin: 24px auto;
}

@media screen and (max-width: 768px) {
  .info-ga-wrapper.info2 {
    margin: 10px auto;
  }
}

.toc {
  border-bottom: 1px solid #ddd;
}

.toc-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .toc-title {
    font-size: 15px;
  }
}

.toc-title:before {
  display: inline-block;
  content: '▼';
  margin: 0 5px 0 0;
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .toc-title:before {
    margin: 0 5px 0 0;
    font-size: 11px;
  }
}

.toc-title:after {
  display: inline-block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  content: '';
  width: 100%;
  height: 1px;
  margin: 0 0 0 16px;
  background: #ddd;
}

@media screen and (max-width: 768px) {
  .toc-title:after {
    margin: 0 0 0 6px;
  }
}

.intro {
  display: block;
  margin: 36px 0;
  padding: 21px 33px;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .intro {
    margin: 10px 0;
    padding: 18px 20px;
  }
}

.intro td,
.intro th,
.intro tr {
  display: block;
  border-width: 0;
  padding: 0;
}

.intro th {
  float: left;
  width: auto !important;
  background: 0 0 !important;
}

.intro th img {
  width: 77px;
  height: 77px;
  margin: 0;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .intro th img {
    width: 50px;
    height: 50px;
  }
}

.intro td {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .intro td {
    font-size: 14px;
    line-height: 1.6;
  }
}

.intro b,
.intro strong {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: auto;
  min-height: 77px;
  margin: 0 0 10px;
  padding: 0 0 0 25px;
}

@media screen and (max-width: 768px) {
  .intro b,
  .intro strong {
    min-height: 50px;
    margin: 0 0 8px;
  }
}

.font-size-large,
.font-size-largest,
.font-size-medium,
.font-size-small,
.font-size-smallest {
  line-height: 1.8;
  letter-spacing: 0.05rem;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .font-size-large,
  .font-size-largest,
  .font-size-medium,
  .font-size-small,
  .font-size-smallest {
    line-height: 1.6;
  }
}

.font-size-smallest {
  font-size: 10px;
}

.font-size-small {
  font-size: 13px;
}

.font-size-medium {
  font-size: 17px;
}

@media screen and (max-width: 768px) {
  .font-size-medium {
    font-size: 18px;
  }
}

.font-size-large {
  font-size: 34px;
}

@media screen and (max-width: 768px) {
  .font-size-large {
    font-size: 28px;
  }
}

.font-size-largest {
  font-size: 51px;
}

@media screen and (max-width: 768px) {
  .font-size-largest {
    font-size: 40px;
  }
}

.box_normal {
  margin: 33px 0;
  padding: 15px 20px;
  font-size: 14px;
  line-height: 2;
  letter-spacing: 0.05rem;
  background: #f8f8f8;
  border: 1px solid #ddd;
}

@media screen and (max-width: 768px) {
  .box_normal {
    margin: 10px 0;
    padding: 12px 20px;
    line-height: 1.6;
  }
}

.box_normal p,
.box_tweet p {
  margin: 0;
}

.kbd {
  box-shadow: 0 3px 0 0 #c9c9c9;
}

.kbd,
.kbd-win {
  margin: 0 10px;
  padding: 7px 12px;
  font-size: 13px;
  color: #aaa;
  border-radius: 4px;
  background-color: #eeeef0;
}

@media screen and (max-width: 768px) {
  .kbd,
  .kbd-win {
    box-shadow: 0 1px 0 0 #c9c9c9;
  }
}

.kbd-win {
  background: #2d2d2d;
  box-shadow: 0 3px 0 0 #1b1b1b;
}

@media screen and (max-width: 768px) {
  .kbd-win {
    box-shadow: 0 1px 0 0 #1b1b1b;
  }
}

.link,
.single-body .link {
  display: inline;
  text-decoration: underline;
  word-break: break-all;
  word-wrap: break-word;
  color: #33bad4;
}

.link:hover {
  color: #6bddf2;
  text-decoration: none;
}

.link:before,
.single-body .link:before {
  content: '\e90d';
  display: inline-block;
  margin: 0 9px 0 0;
  font-size: 0.9em;
  font-family: 'lig-icon';
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .link:before,
  .single-body .link:before {
    margin: 6px 5px 0 0;
    font-size: 0.5em;
  }
}

.button-style,
.single-body span.button-style,
span.button-style {
  margin: 0 auto;
}

.button-style,
.single-body a.button-style,
.single-body span.button-style,
span.button-style {
  position: relative;
  display: block;
  padding: 16px 40px 12px;
  width: 100%;
  max-width: 380px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  line-height: 1.5;
  border-radius: 4px;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.06);
  -webkit-transition: background 0.25s, color 0.25s;
  transition: background 0.25s, color 0.25s;
}

@media screen and (max-width: 768px) {
  .button-style,
  .single-body a.button-style,
  .single-body span.button-style,
  span.button-style {
    padding: 15px 30px 11px;
    font-size: 15px;
  }
}

.button-style > i,
.single-body a.button-style > i,
.single-body span.button-style > i {
  margin: auto 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 17px;
  height: 17px;
  font-style: normal;
}

@media screen and (max-width: 768px) {
  .button-style > i,
  .single-body a.button-style > i,
  .single-body span.button-style > i {
    left: 13px;
    height: 15px;
    font-size: 13px;
  }
}

.button-style,
.single-body a.button-style {
  color: #181818;
  border: solid 1px #181818;
  background: #fff;
}

.button-style:hover,
.single-body a.button-style:hover {
  color: #fff;
  background: #181818;
}

.button-strong,
.single-body a.button-strong {
  max-width: 480px;
  padding: 20px 40px 17px;
  color: #fff;
  background-color: #25c04a;
  border-color: #25c04a;
}

@media screen and (max-width: 768px) {
  .button-strong,
  .single-body a.button-strong {
    padding: 15px 30px;
    font-weight: 700;
  }
}

.button-strong:hover,
.single-body a.button-strong:hover {
  color: #25c04a;
  background-color: #fff;
}

.single-body span.button-style,
span.button-style {
  background: #f3f3f3;
  border: solid 1px #f3f3f3;
  color: #c1c1c1;
}

span.button-style:hover {
  background: #f3f3f3;
  border-color: #f3f3f3;
  color: #c1c1c1;
}

.single-body a.button-style {
  margin: 40px auto 0;
}

@media screen and (max-width: 768px) {
  .single-body a.button-style {
    margin: 20px auto 0;
  }
}

.command {
  display: inline-block;
  padding: 3px 11px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  text-shadow: 0 0 8px #0bdd89;
  color: #0bdd89;
  border-radius: 4px;
  background-color: #141414;
}

@media screen and (max-width: 768px) {
  .command {
    padding: 7px 12px;
  }
}

.liglink,
.single-body .liglink {
  display: block;
  width: 100%;
  margin: 30px 0;
}

@media screen and (max-width: 768px) {
  .liglink,
  .single-body .liglink {
    margin: 20px 0;
  }
}

.liglink-movie .liglink-media {
  position: relative;
  height: 0;
  padding-top: 13.1%;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .liglink-movie .liglink-media {
    padding-top: 21.1%;
  }
}

.liglink-movie img,
.single-body .liglink-movie img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  -webkit-transform: scale(1.34);
  transform: scale(1.34);
}

.liglink-inner,
.single-body .liglink-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 16px;
  border: 1px solid #ddd;
  color: inherit;
  text-decoration: none;
  -webkit-transition: color 0.25s ease;
  transition: color 0.25s ease;
}

@media screen and (max-width: 768px) {
  .liglink-inner,
  .single-body .liglink-inner {
    padding: 10px 10px 5px;
  }
}

.liglink-inner:hover {
  color: #6bddf2;
}

.liglink-media,
.single-body .liglink-media {
  max-width: 120px;
  -webkit-flex-basis: 120px;
  -ms-flex-preferred-size: 120px;
  flex-basis: 120px;
  opacity: 1;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .liglink-media,
  .single-body .liglink-media {
    max-width: 94px;
    -webkit-flex-basis: 94px;
    -ms-flex-preferred-size: 94px;
    flex-basis: 94px;
  }
}

.liglink-media img,
.single-body .liglink-media img {
  width: 100%;
  height: auto;
  -webkit-transition: -webkit-transform 0.25s ease;
  transition: transform 0.25s ease;
  transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

.liglink-content,
.single-body .liglink-content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 6px 0 0 16px;
}

@media screen and (max-width: 768px) {
  .liglink-content,
  .single-body .liglink-content {
    padding: 0 0 0 10px;
  }
}

.liglink-title,
.single-body .liglink-title {
  margin: 0 0 3px;
  padding: 0;
  font-size: 15px;
  line-height: 1.5;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .liglink-title,
  .single-body .liglink-title {
    margin: 0 0 8px;
    font-size: 12px;
  }
}

.liglink-time,
.single-body .liglink-time {
  font-size: 11px;
}

.single-body .amazonjs_item {
  padding: 19px 20px 25px;
  background-position: bottom 14px right 28px;
}

@media screen and (max-width: 768px) {
  .single-body .amazonjs_item {
    margin-bottom: 20px;
    padding: 23px 10px 10px;
    background-position: bottom 3px right 2px;
  }
}

.single-body .amazonjs_item .amazonjs_info ul li {
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .single-body .amazonjs_item .amazonjs_info ul li {
    font-size: 12px;
  }
}

.single-body .amazonjs_info {
  padding-left: 10px;
}

@media screen and (max-width: 768px) {
  .single-body .amazonjs_info {
    padding-left: 0;
  }
}

.box_tweet span,
.single-body .amazonjs_info h4 {
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .single-body .amazonjs_info h4 {
    margin-bottom: 8px !important;
  }
}

.nextlink {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin: 30px 0;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

@media screen and (max-width: 768px) {
  .nextlink {
    display: block;
    margin: 20px 0;
    overflow: hidden;
  }
}

.nextlink-label {
  display: block;
  max-width: 90px;
  -webkit-flex-basis: 90px;
  -ms-flex-preferred-size: 90px;
  flex-basis: 90px;
  padding: 6px 11px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0;
  border: 1px solid #181818;
}

@media screen and (max-width: 768px) {
  .nextlink-label {
    float: left;
    max-width: 82px;
    width: 82px;
    margin-top: 2px;
    margin-right: 9px;
    padding: 5px 9px;
    letter-spacing: -1px;
  }
}

.nextlink-title {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 0 0 18px;
  font-weight: 700;
  line-height: 1.8;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .nextlink-title {
    margin-left: 0;
    line-height: 2;
  }
}

.share-button {
  display: block;
  width: 60px;
  height: 61px;
  padding-top: 10px;
  background-color: #3b55a5;
  background-image: -webkit-linear-gradient(bottom, #3b55a3 0%, #4967bd 100%);
  background-image: linear-gradient(to top, #3b55a3 0%, #4967bd 100%);
  border-radius: 2px;
  color: #fff;
  text-align: center;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.share-button:hover {
  opacity: 0.7;
}

.share-button-large {
  width: 70px;
}

.share-button-icon {
  display: inline-block;
  letter-spacing: 0;
  line-height: 1;
  font-size: 26px;
  margin-bottom: 4px;
}

.share-button-text {
  display: block;
  font-size: 12px;
}

.single-author {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 17px 17px;
  border: 3px solid #ddd;
}

@media screen and (max-width: 768px) {
  .single-author {
    padding: 15px 17px 10px;
  }
}

.single-author-margin {
  margin: 20px 0;
}

@media screen and (max-width: 768px) {
  .single-author-margin {
    margin: 20px 10px;
  }
}

.single-author-image {
  -webkit-flex-basis: 80px;
  -ms-flex-preferred-size: 80px;
  flex-basis: 80px;
  width: 80px;
  max-width: 80px;
  height: 80px;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .single-author-image {
    -webkit-flex-basis: 52px;
    -ms-flex-preferred-size: 52px;
    flex-basis: 52px;
    width: 52px;
    max-width: 52px;
    height: 52px;
  }
}

.single-author-content {
  display: block;
  margin: 0 0 0 22px;
}

@media screen and (max-width: 768px) {
  .single-author-content {
    margin: 0 0 0 10px;
  }
}

.single-author-heading {
  margin: 9px 0 10px;
  font-size: 11px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.05rem;
}

@media screen and (max-width: 768px) {
  .single-author-heading {
    margin: 3px 0 5px;
  }
}

.single-author-name {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  color: #181818;
}

.single-author-name a {
  display: inline-block;
  color: #33bad2;
}

@media screen and (max-width: 768px) {
  .single-author-name {
    font-size: 15px;
  }
}

.single-author-text {
  font-size: 13px;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  color: #888;
}

@media screen and (max-width: 768px) {
  .single-author-text {
    font-weight: 700;
  }
}

.single-author-sns {
  position: absolute;
  right: 10px;
  bottom: 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
}

@media screen and (max-width: 768px) {
  .single-author-sns {
    right: 4px;
    bottom: 8px;
  }
}

.single-author-sns-item {
  display: block;
  margin: 0 8px;
}

@media screen and (max-width: 768px) {
  .single-author-sns-item {
    margin: 0 7px;
  }
}

.single-author-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
  font-size: 15px;
  color: #181818;
}

.single-author-link-twitter {
  font-size: 15px;
}

@media screen and (max-width: 768px) {
  .single-author-link-twitter {
    font-size: 12px;
  }
}

.single-author-link-facebook {
  font-size: 19px;
}

@media screen and (max-width: 768px) {
  .single-author-link-facebook {
    font-size: 15px;
  }
}

.single-author-link-instagram {
  font-size: 21px;
}

@media screen and (max-width: 768px) {
  .single-author-link-instagram {
    font-size: 17px;
  }
}

.box_tweet {
  position: relative;
  display: block;
  margin: 50px 0;
  font-size: 18px;
  line-height: 1.9;
  font-weight: 400;
  padding: 22px 0 0 100px;
}

@media screen and (max-width: 768px) {
  .box_tweet {
    padding: 16px 0 0 72px;
  }
}

.box_tweet img {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: auto;
  margin: 0 20px 0 0;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .box_tweet img {
    width: 52px;
    margin: 0 20px 0 0;
  }
}

.box_tweet span {
  display: inline;
  line-height: 2;
  font-weight: 400;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

@media screen and (max-width: 768px) {
  .third_party_beacon {
    display: none;
  }
}

.subcategory {
  position: absolute;
  top: 52px;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  max-height: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  background: #f5f5f5;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .subcategory {
    display: none;
    position: static;
    height: auto;
    width: 100%;
    border: 1px solid red;
  }
}

.subcategory.is-subcategory-show {
  max-height: 52px;
  z-index: 2;
}

@media screen and (max-width: 768px) {
  .subcategory.is-subcategory-show {
    max-height: 100%;
  }
}

.subcategory-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 1260px;
  margin: 0 auto;
  padding: 4px 18px 0 120px;
  -webkit-transform: translate(0, -10px);
  transform: translate(0, -10px);
  opacity: 0;
  -webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease,
    -webkit-transform 0.25s ease;
}

@media screen and (max-width: 768px) {
  .subcategory-list {
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    width: 100%;
    padding: 10px 0 10px 37px;
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
}

.subcategory-list.is-subcategory-list-show {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  opacity: 1;
}

.subcategory-list-blog {
  padding: 19px 18px 70px;
}

@media screen and (max-width: 768px) {
  .subcategory-list-blog {
    padding: 10px 0 10px 37px;
  }
}

.subcategory-item {
  margin: 11px 26px 11px 0;
  -webkit-flex-basis: auto;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
}

@media screen and (max-width: 768px) {
  .subcategory-item {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    margin: 0;
    border-top: 1px solid #eaeaea;
  }
}

.subcategory-item:last-of-type {
  margin: 11px 0;
}

.subcategory-item .subcategory-link {
  display: block;
  opacity: 1;
  color: #9d9d9d;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.subcategory-item .subcategory-link.is-current {
  color: #33bad2;
  opacity: 1;
}

.subcategory-item .subcategory-link:hover {
  opacity: 0.5;
}

@media screen and (max-width: 768px) {
  .subcategory-item .subcategory-link {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 13px 0;
  }
}

.subcategory-item-mobile {
  display: none;
}

@media screen and (max-width: 768px) {
  .subcategory-item-mobile {
    display: block;
  }
}

.subcategory-title {
  position: relative;
  display: block;
  margin: 10px 0 0;
  padding: 0 15px;
  font-size: 13px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .subcategory-title {
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
  }
}

.subcat-sp {
  display: none;
}

@media screen and (max-width: 768px) {
  .subcat-sp {
    display: block;
    width: 100%;
    overflow: hidden;
  }
}

.subcat-sp-list {
  position: relative;
  min-height: 30px;
}

.subcat-sp-list-item {
  display: none;
  min-height: 30px;
  max-height: 30px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.subcat-sp-list-item.is-active {
  display: block;
}

.subcat-sp-inner-list {
  list-style-type: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100vh;
  margin: 0 auto;
  padding: 8px 6px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-transition: opacity 0.25s ease, -webkit-transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease;
  transition: opacity 0.25s ease, transform 0.25s ease,
    -webkit-transform 0.25s ease;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f5f5f5;
}

.subcat-sp-inner-item {
  display: inline-block;
}

.subcat-sp-inner-link {
  display: block;
  font-weight: 700;
  font-size: 10px;
  color: #9d9d9d;
  -webkit-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
  padding: 0 12px;
}

.subcat-sp-inner-link.is-current {
  color: #33bad2;
}

.u-hidden {
  overflow: hidden;
  text-indent: 120%;
  white-space: nowrap;
}

.u-clear {
  zoom: 1;
}

.u-clear:after,
.u-clear:before {
  content: '';
  display: block;
}

.u-clear:after {
  clear: both;
}

.u-elps {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
}

.u-notap {
  -webkit-tap-highlight-color: transparent;
}

.u-sp-hidden {
  display: block;
}

@media screen and (max-width: 768px) {
  .u-sp-hidden {
    display: none;
  }
}

.u-pc-hidden {
  display: none;
}

@media screen and (max-width: 768px) {
  .u-pc-hidden {
    display: block;
  }
}
</style>
