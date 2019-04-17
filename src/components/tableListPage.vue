<template>
<div>
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
  
    <el-main>
      <el-table :data="tableJobList">
        <el-table-column prop="jobId" label="任务ID" width="140" />
        <el-table-column prop="jobName" label="任务名称" width="140" />
        <el-table-column prop="clusterName" label="任务执行集群" width="140" />
        <el-table-column prop="jobClassName" label="执行类名" width="140"/>
        <el-table-column prop="jobMethodName" label="执行方法名" width="140" />
        <el-table-column prop="methodParamValue" label="方法参数值" width="140" />
        <el-table-column prop="cronStr" label="任务执行时间" width="140" />
        <el-table-column prop="status" label="任务状态" width="140" />
        <el-table-column prop="" label="操作" width="140" />
      </el-table>
    </el-main>

    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <!-- <div style="text-align: right; font-size: 12px">
      <div style="margin-top: 15px;">

      </div>
      </div> -->

</div>
</template>

<script>
export default {
  data() {
    return {
      searchItem: "jobId",
      searchContent: "",
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
  },
  props: {
    tableJobList: {
      type: Array,
      required: false
    }
  }
};
</script>


