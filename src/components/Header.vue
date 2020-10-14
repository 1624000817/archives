<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '头部'
    }
  }
   
}
</script>

