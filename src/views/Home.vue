<template>
  <html lang="en">
  <Header/>
  <Body/>
  <Footer/>
  </html>
</template>

<script>
import Header from "@/components/main/Head.vue";
import Footer from "@/components/main/Footer.vue";
import Body from "@/components/main/Body.vue";

export default {
  name: 'Home',
  components: {Body, Footer, Header},
}
</script>