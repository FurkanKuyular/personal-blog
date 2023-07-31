<template>
  <div class="section contact" id="contact">
    <div id="map" class="map"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-card">
            <h4 class="contact-title">Send a message</h4>
            <form action="">
              <div class="form-group">
                <input  class="form-control" type="text" placeholder="Name *" required>
              </div>
              <div class="form-group">
                <input class="form-control" type="email" placeholder="Email *" required>
              </div>
              <div class="form-group">
                <textarea class="form-control" id="" placeholder="Message *" rows="7" required></textarea>
              </div>
              <div class="form-group ">
                <button type="submit" class="form-control btn btn-primary" >Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4 pt-5">
          <div class="contact-info-card pt-5">
            <GoogleMap />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import GoogleMap from "@/components/google/GoogleMap.vue";

export default {
  name: 'Contact',
  components: {GoogleMap},
}
</script>