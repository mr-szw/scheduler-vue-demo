<template>
  <div>
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容,否则刷新列表数据" v-model="searchContent" class="input-with-select">
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
      <el-table :data="tableJobListInfo.tableJobList">
        <el-table-column prop="jobId" label="任务ID" width="140"/>
        <el-table-column prop="jobName" label="任务名称" width="140"/>
        <el-table-column prop="clusterName" label="任务执行集群" width="140"/>
        <el-table-column prop="jobClassName" label="执行类名" width="140"/>
        <el-table-column prop="jobMethodName" label="执行方法名" width="140"/>
        <el-table-column prop="methodParamValue" label="方法参数值" width="140"/>
        <el-table-column prop="cronStr" label="任务执行时间" width="140"/>
        <el-table-column prop="status" label="任务状态" width="140"/>

        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="updateJobInfoMethod(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="tableJobListInfo.currentPageNum"
      :total="tableJobListInfo.totalPageNum"/>

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
        console.log("submit!");
        this.$emit('doSearchMethod', this.searchItem, this.searchContent);
      },
      //跳到 详情页进行修改
      updateJobInfoMethod(rowInfo) {
        console.log("-------------To Update_________________");
        console.log(rowInfo);
        this.$emit('updateJobDetailMethod', rowInfo['jobId']);
      }
    },
    props: {
      //列表数据
      tableJobListInfo: {
        required: true,
        default: {
          tableJobList: [],
          //总页数
          totalPageNum: 0,
          //当前页
          currentPageNum: 0
        }
      }
    }
  };
</script>


