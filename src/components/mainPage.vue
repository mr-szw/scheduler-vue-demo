<template>
  <!-- <el-container style="height: auto; border: 1px solid #eee"> -->
  <el-tabs
    :class="['elTabPane']"
    type="border-card"
    v-model="activePageName"
    @tab-click="changeActiveTag"
    tab-position="left"
  >
    <el-tab-pane label="任务列表页" name="features-list">
      <TableListPage
        v-bind:tableJobList = "tableJobListParent"
      />
    </el-tab-pane>
    <el-tab-pane label="添加任务页" name="features-add">
      <!-- 绑定触发事件 [updateJobInfoMethod] 由 updateJobInfo 执行  -->
      <UpdateJobPage v-on:updateJobInfoMethod="updateJobInfo"/>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>

    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  <!-- </el-container> -->
</template>


<script>
  let localUrl = 'http://localhost:8021';
  let serviceUrl = 'http://10.40.30.35:8014';

  //任务的新建或更新
  let updateJobPath = '/scheduler/post/job/detail';
  //任务列表数据接口
  let jobListPath = '/scheduler/get/job/list';

  //分页页码
  let pageIndexNum = 0;

  import TableListPage from "./tableListPage";
  import UpdateJobPage from "./updateJobPage";

  import Qs from 'qs'
  import axios from 'axios' //引入axios

  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

  export default {
    components: {
      TableListPage,
      UpdateJobPage
    },
    data() {
      return {
        activePageName: "features-list",
        tableJobListParent: []
      };
    },
    methods: {
      //更改标签
      changeActiveTag(tab, event) {
        console.log(this.activePageName);
        if (this.activePageName === 'features-list') {
          this.loadJobList(pageIndexNum);
        }

      },
      //更新或添加定时任务
      updateJobInfo(jobDataInfo) {
        axios({
          url: localUrl + updateJobPath,
          method: 'post',
          transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            console.log("formDataInfo   " + Qs.stringify(data))
            return Qs.stringify(data)
          }],
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
          data: jobDataInfo
        })
      },
      //加载列表数据
      loadJobList(pageIndex) {
        let _this = this;
        console.log("Load job list  ---- ");
        let formDate = {
          'pageIndex': pageIndex,
          'pageSize': 10,
          'jobId': '866030010024000'
        };
        axios({
          url: localUrl + jobListPath + "?" + Qs.stringify(formDate),
          method: 'get',
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
        }).then(function (response) {
          console.log(response);
          if(response.data.code === 0) {
            console.log(response.data);
            _this.tableJobListParent = response.data.data.schedulerJobList;
            console.log(_this.tableJobListParent)

          } else {
            alert(response.data);
          }
        })
        .catch(function (error) {
          console.log("Error ----");
          alert(error);
        });
      }
    },
    mounted: function () {
      console.log("mounted --- autoLoading");

      this.loadJobList(pageIndexNum);
    }
  };
</script>
