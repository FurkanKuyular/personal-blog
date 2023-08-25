<template>
  <section class="section bg-dark text-center p-5">
    <h3 class="text-light mb-1 text-center pb-5">References</h3>
    <div class="container-fluid">
      <div class="row text-center">
        <div v-for="item in this.referencesData.data" class="col-md-6 col-lg-3">
          <div class="row ">
            <div class="col-5 text-right text-light border-right py-3">
              <div class="m-auto"><i class="ti-bookmark icon-xl"></i></div>
            </div>
            <div class="col-7 text-left py-3">
              <h6 class="text-danger font-weight-bold font40 text-center">{{ item.title }}</h6>
              <p class="text-light mb-1 text-center">{{ item.first_name + ' ' + item.last_name }}</p>
              <div class="text-center">
                <a class="social-link text-light" :href="item.linkedin_profile_link" target="_blank" style="">
                  <i class="ti-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent, reactive} from "vue";
import ReferenceDataService from "@/services/ReferenceDataService";
export default defineComponent({
  name: 'Reference',
  data() {
    return {
      referencesData: reactive({}),
    };
  },
  methods: {
    references() {
      ReferenceDataService.getAll().then((response) => {
        this.referencesData = response.data;

        return response.data;
      });
    },
  },
  mounted() {
    this.references();
  }
});
</script>