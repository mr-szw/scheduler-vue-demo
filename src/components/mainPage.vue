<template>
  <!-- <el-container style="height: auto; border: 1px solid #eee"> -->
  <el-tabs
    :class="['elTabPane']"
    type="border-card"
    v-model="activePageName"
    @tab-click="changeActiveTag"
    tab-position="left"
  >
    <el-tab-pane label="任务列表页" name="features-add">
      <TableListPage/>
    </el-tab-pane>
    <el-tab-pane label="添加任务页" name="features-list">
      <UpdateJobPage/>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>

    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  <!-- </el-container> -->
</template>




<script>
import TableListPage from "./tableListPage";
import UpdateJobPage from "./updateJobPage";

export default {
  components: {
    TableListPage,
    UpdateJobPage
  },
  data() {
    return {
      activePageName: "features-list"
    };
  },
  methods: {
    changeActiveTag(tab, event) {
      this.activePageName = "features-add";
      console.log(tab, event);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.elTabPane {
  height: 800px;
}
</style>
