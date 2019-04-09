<template>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['features']" unique-opened @select="handleSelect">
        <el-submenu index="features">
          <template slot="title">
            <i class="el-icon-menu"></i>功能选择
          </template>
            <el-menu-item index="features-add" index-path="features-add">添加一个新任务</el-menu-item>
            <el-menu-item index="features-">啊啊大大</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(10).fill(item)
    };
  },
  methods: {
      handleSelect(key, keyPath) {
          console.log(key + "  " + keyPath)
      }
  }
};
</script>




<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>