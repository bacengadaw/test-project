<template lang="">
  <div>
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <nuxt-link to="/">Bambang</nuxt-link>
        <form class="d-flex"  v-if="this.$route.fullPath != '/register'">
          <nuxt-link class="btn btn-danger" to="/register">Get Started</nuxt-link>
        </form>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    component: {

    },
    methods: {

    }
};
</script>
<style lang=""></style>
