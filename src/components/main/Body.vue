<template>
  <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
<!--  <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>-->
  <Header />
  <Navbar />
  <About />
  <Resume />

  <!-- Todo: Think for this section  -->
  <section class="section bg-dark text-center">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 col-lg-3">
          <div class="row ">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-alarm-clock icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">500</h1>
              <p class="text-light mb-1">Hours Worked</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-layers-alt icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">50K</h1>
              <p class="text-light mb-1">Project Finished</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-face-smile icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">200K</h1>
              <p class="text-light mb-1">Happy Clients</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="row">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-heart-broken icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h1 class="text-danger font-weight-bold font40">2k</h1>
              <p class="text-light mb-1">Coffee Drinked</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-center pt-5">
      <h2 class="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
      <button class="btn bg-primary w-lg" >Hire me</button>
    </div>
  </section>

  <Portfolio />

  <section class="section bg-dark"></section>

  <Blog />

  <section class="section bg-dark"></section>

  <Contact />
  </body>
</template>

<script>

import Header from "@/components/parts/Header.vue";
import Navbar from "@/components/parts/Navbar.vue";
import About from "@/components/pages/About.vue";
import Resume from "@/components/pages/Resume.vue";
import Portfolio from "@/components/pages/Porfolio.vue";
import Blog from "@/components/pages/Blog.vue";
import Contact from "@/components/pages/Contact.vue";

export default {
  name: 'Body',
  components: {Contact, Blog, Portfolio, Resume, About, Navbar, Header},
}
</script>

<style lang="scss" scoped>

</style>