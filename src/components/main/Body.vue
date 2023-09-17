<template>
  <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
<!--  <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>-->
  <Header />
  <Navbar />
  <About />
  <Resume />
  <Reference/>

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
import Blog from "@/components/pages/Blog.vue";
import Contact from "@/components/pages/Contact.vue";
import Reference from "@/components/pages/Reference.vue";

export default {
  name: 'Body',
  components: {Reference, Contact, Blog, Resume, About, Navbar, Header},
}
</script>

<style lang="scss" scoped>

</style>