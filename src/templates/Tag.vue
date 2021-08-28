<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ $page.tag.title }}</h1>
              <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="item in $page.tag.posts"
            :key="item.id"
          >
            <g-link :to="'post/' + item.id">
              <h2 class="post-title">
                {{ item.title }}
              </h2>
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>

query($id : ID!) {
  tag : strapiTag(id: $id){
    id
    title
    created_at
    posts{
      id
      title
    }
  }
}

</page-query>

<script>
export default {
  name: "Tag",
};
</script>