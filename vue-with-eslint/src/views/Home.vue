<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Comp :fn="fn"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Comp from '@/components/Comp.vue'

export default {
  name: 'Home',
  components: {
    Comp,
  },
  methods: {
    fn() {
      console.log('fnだよ')
    }
  }
}
</script>
// 