<template>
  <div class="h-100">
    <NavBar />
    <div class="homeHeight">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from '@/components/navBar/NavBar.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
  }
}
</script>