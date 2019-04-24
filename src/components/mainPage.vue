<template>
  <el-tabs
    :class="['elTabPane']"
    type="border-card"
    v-model="activePageName"
    @tab-click="changeActiveTag"
    tab-position="left"
  >
    <el-tab-pane label="任务列表页" name="features-list">
      <TableListPage
        v-bind:tableJobListInfo="tableJobListInfoParent"
        v-on:doSearchMethod="doSearchMethodParent"
        v-on:updateJobDetailMethod="updateJobDetailMethodParent"
      />
    </el-tab-pane>
    <el-tab-pane label="添加任务页" name="features-add">
      <!-- 绑定触发事件 [updateJobInfoMethod] 由 updateJobInfoParent 执行  -->
      <UpdateJobPage
        v-bind:jobFormDetailInfo = "jobDetailInfoParent"
        v-on:updateJobInfoMethod="updateJobInfoParent"
      />
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
  let searchJobPath = '/scheduler/get/job/detail';
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
        //当前标签名字
        activePageName: "features-list",
        //表格数据
        tableJobListInfoParent: {
          tableJobList:[],
          //总页数
          totalPageNum: 0,
          //当前页
          currentPageNum: 0
        },
        //任务详情
        jobDetailInfoParent: {
        }
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
      updateJobInfoParent(jobDataInfo) {
        let _this = this;
        axios({
          url: localUrl + updateJobPath,
          method: 'post',
          transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            console.log("formDataInfo   " + Qs.stringify(data));
            return Qs.stringify(data)
          }],
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
          data: jobDataInfo
        }).then(function (response) {
          console.log(response);
          if (response.data.code === 0) {
            console.log(response.data);
            console.log("__________________________");
            _this.$message({
              message: '恭喜你，这是一条成功消息',
              showClose: true,
              center: true,
              type: 'success'
            });
          } else {
            _this.$message({
              message: response.data.codeMsg,
              showClose: true,
              center: true,
              type: "warning"
            });
          }
        })
      },
      //加载列表数据
      loadJobList(pageIndex) {
        let _this = this;
        console.log("___________Load job list___________");
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
          if (response.data.code === 0) {
            _this.tableJobListInfoParent.tableJobList = response.data.data.schedulerJobList;
            _this.tableJobListInfoParent.currentPageNum = response.data.data.currentPageNum;
            _this.tableJobListInfoParent.totalPageNum = response.data.data.totalPageNum;
            console.log("___________Success_______________");
          } else {
            console.log("Code not 0 ----");
            _this.$message({
              message: response.data.codeMsg,
              showClose: true,
              center: true,
              type: "warning"
            });
          }
        })
        .catch(function (error) {
          console.log(error);
          _this.$message.error("系统异常");
        });
      },
      //进行搜索
      doSearchMethodParent(searchItem, searchContent) {
        // this.searchContent = searchContent;
        // this.searchItem = searchItem;
        console.log(
          "click on search " + searchItem + "  " + searchContent
        );

        if (searchItem === null ||
          searchContent === null ||
          searchContent.trim().length === 0
        ) {
          console.log("search content info is enpty -----");
          this.$message({
            message: "刷新",
            type: "warning"
          });
          this.loadJobList(0);
        } else {
          //做请求

        }
      },
      //回显 或 编辑 任务详情
      updateJobDetailMethodParent(jobId) {
        console.log("___________Load detail________");
        console.log(jobId);
        let _this = this;
        let formDate = {
          'jobId': jobId
        };
        axios({
          url: localUrl + searchJobPath + "?" + Qs.stringify(formDate),
          method: 'get',
          headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
          },
        }).then(function (response) {
          console.log(response);
          if (response.data.code === 0) {
            _this.jobDetailInfoParent = response.data.data.schedulerJobDetail;
            console.log(_this.jobDetailInfoParent);
          } else {
            _this.$message({
              message: response.data.codeMsg,
              showClose: true,
              center: true,
              type: "warning"
            });
          }
        })
        .catch(function (error) {
          console.log("Error ----");
          console.log(error);
          _this.$message.error("系统异常");
        });
        //切换位置
        this.activePageName = 'features-add';
      }
    },
    //初始加载 仅执行一次
    created: function () {
      console.log("----------Auto Loading --------------");
      this.loadJobList(pageIndexNum);
    }
  };
</script>
