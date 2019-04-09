<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="searchContent" class="input-with-select">
          <el-select v-model="searchItem" slot="prepend" placeholder="请选择">
            <el-option label="任务ID(精确)" value="jobId"></el-option>
            <el-option label="任务名(精确)" value="jobName"></el-option>
            <el-option label="集群名(模糊匹配)" value="clusterName"></el-option>
            <el-option label="描述信息(模糊匹配)" value="description"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="doSearch"></el-button>
        </el-input>
      </div>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </el-main>

    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <el-footer style="text-align: right; font-size: 12px">
      <div style="margin-top: 15px;"></div>
    </el-footer>
  </el-container>
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
      searchItem: "jobId",
      searchContent: "",
      tableData: Array(10).fill(item)
    };
  },
  methods: {
    doSearch() {
      console.log(this.searchItem);
      console.log(this.searchContent);
      console.log(
        "click on search " + this.searchItem + "" + this.searchContent
      );

      if (
        this.searchContent === null ||
        this.searchContent.trim().length === 0
      ) {
        console.log("search content info is enpty -----");
        this.$message({
          message: "请输入搜索内容",
          type: "warning"
        });
      } else {
        //做请求
      }
    }
  }
};
</script>




<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 0px;
}

.el-aside {
  color: #333;
}
</style>