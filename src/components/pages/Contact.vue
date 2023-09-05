<template>
  <div class="section contact" id="contact">
    <div id="map" class="map"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-card">
            <h4 class="contact-title">Send a message</h4>
            <form action="" @submit.prevent="sendMessage()">
              <div class="form-group">
                <input v-model="form.name" class="form-control" name="name" type="text" placeholder="Name *" required>
              </div>
              <div class="form-group">
                <input v-model="form.email" class="form-control" name="email" type="email" placeholder="Email *" required>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" class="form-control" name="message" id="" placeholder="Message *" rows="7" required></textarea>
              </div>
              <div class="form-group ">
                <button type="submit" class="form-control btn btn-primary">Send Message</button>
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
import ContactDataService from "@/services/ContactDataService";

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: null,
        email: null,
        message: null,
      },
    }
  },
  methods: {
    sendMessage() {
      ContactDataService.sendMessage(this.form)
          .then(resp => {
            this.$toast.open({
              type: 'success',
              title: 'Message sent!',
              message: resp.data.message,
            })
          })
          .catch(err => {
            if (err.response.status === 429) {
              this.$toast.open({
                type: 'error',
                title: 'Message could not send!',
                message: err.response.data.error.message,
              })
            }
          });
    }
  },
  components: {GoogleMap},
}
</script>