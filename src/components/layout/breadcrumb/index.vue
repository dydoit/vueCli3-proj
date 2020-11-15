<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import * as pathToRegexp from 'path-to-regexp'
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
                let matched = this.$route.matched.filter(item => item.meta && item.meta.title&&item.meta.breadcrumb !== false)
                // 根路由
                const first = matched[0]
                if(!this.isIndex(first)) {
                    matched = [{path: '/index',meta: {title: '首页'}}].concat(matched)
                }
                this.levelList = matched
            },
            isIndex(route){
                const name = route && route.name
                if(!name) {
                    return false
                }
                return name.trim().toLowerCase() === 'Index'.toLowerCase()
            },
            handleLink(item) {
                let {path,redirect} = item
                // 若存在重定向，按重定向走
                if(redirect) {
                    this.$router.push(redirect)
                    return
                }
                // 编译path，避免存在路径参数
                this.$router.push(this.pathCompile(path))
            },
            pathCompile(path){
                const { params } = this.$route
                var toPath = pathToRegexp.compile(path)
                return toPath(params)
            }
        },
    }
</script>

<style lang="stylus" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>