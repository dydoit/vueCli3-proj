<template>
    <div class="wrapper">
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
import Aside from '@/components/layout/aside/Aside.vue'
import Nav from '@/components/layout/Nav.vue'
    export default {
        components: {
            Aside,
            Nav
        },
    }
</script>

<style lang="stylus" scoped>
.wrapper
    width 100%
    height 100%
    overflow hidden
    display flex
.container
    display flex
    flex 1
    overflow hidden
    flex-direction column
</style>