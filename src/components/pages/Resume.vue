<template>
  <section class="section" id="resume">
    <div class="container">
      <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
      <div class="row">
        <div class="col-md-8 col-lg-8">
          <div class="card">
            <div class="card-header">
              <div class="mt-2">
                <h4>Expertise</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body">
              <div v-for="item in this.expertiseData.data">
                <div v-if="item.end_date"><h6 class="title text-danger">{{ item.start_date }} - {{ item.end_date }}</h6></div>
                <div v-else><h6 class="title text-danger">{{ item.start_date }} - Present</h6></div>
                <P>{{ item.title }}</P>
                <P class="subtitle">{{ item.description }}</P>
                <hr>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-header">
              <div class="pull-left">
                <h4 class="mt-2">Skills</h4>
                <span class="line"></span>
              </div>
            </div>
            <div class="card-body pb-2">
              <div v-for="item in this.skillsData.data">
                <h6>{{ item.name }}</h6>
                <div class="progress mb-3">
                  <div class="progress-bar bg-danger" role="progressbar" :style="{width: item.rate * 10 + '%'}" aria-valuenow="7" aria-valuemin="0" aria-valuemax="10"></div>
                </div>
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
import SkillDataService from "../../services/SkillDataService";
import ExpertiseDataService from "@/services/ExpertiseDataService";

export default defineComponent({
  name: 'Resume',
  data() {
    return {
      skillsData: reactive({}),
      expertiseData: reactive({}),
    };
  },
  methods: {
    skills() {
      SkillDataService.getAll().then((response) => {
        this.skillsData = response.data;

        return response.data;
      });
    },
    expertises() {
      ExpertiseDataService.getAll().then((response) => {
        this.expertiseData = response.data;

        return response.data;
      });
    }
  },
  mounted() {
    this.skills();
    this.expertises();
  }
});

</script>