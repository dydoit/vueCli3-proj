<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <!-- 仅有一个可现实子路由，并且该子路由没有孩子路由 -->
    <template v-if="hasOneShowingChild(item.children,item) && 
    (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <router-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <!-- 菜单项 -->
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
            <i :class="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)"></i>
            <span slot="title">{{onlyOneChild.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template v-slot:title>
           <i :class="item.meta && item.meta.icon"></i>
           <span slot="title">{{item.meta.title}}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem', // 递归组件名称很重要
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // 如果只有一个子菜单时设置
          this.onlyOneChild = item
          return true
        }
      })

      // 当只有一个子路由，该子路由默认显示
      if (showingChildren.length === 1) {
        return true
      }

      // 没有子路由则显示父路由
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>