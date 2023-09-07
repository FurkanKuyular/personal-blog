<template>
  <section class="section" id="blog">
    <div class="container">
      <h2 class="mb-5">Blog <span class="text-danger">Posts</span></h2>
      <div class="row">
        <div v-for="item in this.postsData.data" class="blog-card container-fluid" style="padding: 0;">
            <div class="img-holder text-left">
              <picture v-html="item.post_image_html"></picture>
            </div>

            <div class="content-holder">
              <h6 class="title" v-html="item.title"></h6>

              <p v-html="item.body"></p>

              <a :href="item.post_link" target="_blank" class="read-more">Read more <i class="ti-angle-double-right"></i></a>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostDataService from "@/services/PostDataService";
import {reactive} from "vue";
export default {
  name: 'Blog',
  data() {
    return {
      postsData: [],
    };
  },
  methods : {
    posts() {
      PostDataService.getAll().then(response => {
        this.postsData = response.data;

        return response.data;
      })
    }
  },
  created() {
    this.eventListener = window.LaravelEcho.channel('post-created-channel')
        .listen('.PostCreated', (data) => {
          this.postsData.data.unshift(data.post);
          this.postsData.data.pop()
        });
  },
  beforeDestroy() {
    this.eventListener.stop();
  },
  mounted() {
    this.posts();
  },
}
</script>