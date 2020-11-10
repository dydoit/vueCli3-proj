<template>
  <div id="app">
    <Aside></Aside>
    <div class="container">
      <Nav></Nav>
      <div class="content-wrap">
        <router-view />
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
</style>