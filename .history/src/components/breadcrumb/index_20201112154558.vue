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
        
    }
</script>

<style lang="stylus" scoped>

</style>