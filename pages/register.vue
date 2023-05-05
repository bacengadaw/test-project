<template lang="">
  <div>
    <Navbar />
    <div class="container">
      <!-- title content -->
      <div class="row mb-4">
        <div class="col-12 text-center">
          <p class="h3">Ship with Andalin Now !</p>
          <p>Let's Create Your Account Here</p>
        </div>
      </div>

      <!-- form content  -->
      <form action="">
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="fullname" class="form-label">FullName</label>
              <input
                v-model="formPayload.fullname"
                type="text"
                id="fullname"
                class="form-control"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label for="companyname" class="form-label">Company Name</label>
              <input
                v-model="formPayload.companyname"
                type="text"
                id="companyname"
                class="form-control"
                placeholder="Enter your company name"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label for="phonenumber" class="form-label">Phone number</label>
              <input
                v-model="formPayload.phonenumber"
                type="number"
                id="phonenumber"
                class="form-control"
                placeholder="E.g: 8771234xxx"
              />
              <span class="text-danger" style="font-size: 12px"
                >*please input your whatsapp number</span
              >
            </div>
          </div>

          <div class="col-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input
                v-model="formPayload.email"
                type="email"
                id="email"
                class="form-control"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <label for="adress">Adress</label>
            <textarea
              v-model="formPayload.address"
              name=""
              id=""
              rows="5"
              class="form-control"
            ></textarea>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="">Job title</label>
              <input
                type="text"
                v-model="formPayload.jobTitle"
                class="form-control"
              />
            </div>
            <div class="form-group mt-4">
              <label for="">Company Size</label>
              <input
                type="text"
                v-model="formPayload.company"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="">Country</label>
              <v-select
                v-model="formPayload.country"
                placeholder="-- Select Country --"
                label="countryName"
                :options="country"
                :reduce="(country) => country.countryCode"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="">City</label>
              <v-select
                v-model="formPayload.city"
                placeholder="-- Select City --"
                label="cityName"
                :options="listCity"
                :reduce="(listCity) => listCity.cityName"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label for="">PostCode</label>
              <input
                type="text"
                class="form-control"
                v-model="formPayload.postCode"
                placeholder="Post code"
              />
            </div>
          </div>

          <div class="col-6">
            <div class="form-group">
              <label for="">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="formPayload.password"
                placeholder="password"
              />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mt-2">
          <b-button class="btn btn-danger btn-lg" v-b-modal.modal-1
            >Submit</b-button
          >
        </div>
      </form>

      <div>
        <b-modal id="modal-1" hide-header hide-footer title="BootstrapVue">
          <p>Nama : {{ formPayload.fullname }}</p>
          <p>Company name  : {{ formPayload.companyname }}</p>
          <p>Phone number  : {{ formPayload.phonenumber }}</p>
          <p>Email : {{ formPayload.email }}</p>
          <p>Adress : {{ formPayload.address }}</p>
          <p>Jobtitle : {{ formPayload.jobTitle }}</p>
          <p>Company : {{ formPayload.company }}</p>
          <p>Country : {{ formPayload.country }}</p>
          <p>City : {{ formPayload.city }}</p>
          <p>PostCode : {{ formPayload.postCode }}</p>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "~/components/Navbar.vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  data() {
    return {
      formPayload: {},
      listCity: [],
    };
  },
  computed: {
    ...mapState({
      citys: (state) => state.city.citys,
      country: (state) => state.country.countrys,
    }),
  },
  watch: {
    "formPayload.country": function (data) {
      var cityIndex = this.citys.filter(function (item) {
        return item.countryCode.includes(data);
      });
      this.listCity = cityIndex;
    },
  },
  components: {
    Navbar,
    vSelect,
  },
  methods: {},
};
</script>
<style lang=""></style>
