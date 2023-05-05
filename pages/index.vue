<template lang="">
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <carousel
            v-bind="optionsSlide"
            :navigationEnabled="true"
            navigationNextLabel="<i class='material-icons'></i>"
            navigationPrevLabel="<i class='material-icons'></i>"
          >
            <slide v-for="item in files" :key="index">
              <img class="w-100" style="border-radius: 8px" :src="require(`@/assets/images/${item.img}`)" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      files: [
        {
          img: "13.png",
        },
        {
          img: "19.png",
        },
        {
          img: "20.png",
        },
      ],
      optionsSlide: {
        loop: false,
        perPage: 1,
        paginationEnabled: true,
      },
    };
  },
  watch: {},
  components: {
    Navbar,
  },
  methods: {},
};
</script>
<style lang=""></style>
