<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        data() {
            return {
                levelList: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
                const first = matched[0]
                if(!this.isIndex(first)) {
                    matched = [{path: '/index',meta: {title: '首页'}}].concat(matched)
                }
                this.levelList = matched.filter(item => item.meta && item.meta.title)
            },
            isIndex(route){
                const name = route && route.name
                if(!name) {
                    return false
                }
                return name.trim().toLowerCase() === 'Index'.toLowerCase()
            },
            handleLink(item) {
                console.log(item)
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>