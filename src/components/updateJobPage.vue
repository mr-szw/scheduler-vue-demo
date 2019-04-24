<template>
  <el-form ref="scheduleForm" :model="formDataInfo" label-width="140px" :rules="formRules" size="medium"
           label-position="left">
    <div :class="['elInputStyle']">
      <el-form-item label="任务ID" prop="jobId">
        <el-input :disabled="true" v-model="formDataInfo.jobId"></el-input>
      </el-form-item>

      <el-form-item label="任务名称" prop="jobName">
        <el-input v-model="formDataInfo.jobName"></el-input>
      </el-form-item>

      <el-form-item label="任务所属集群" prop="clusterName">
        <el-input v-model="formDataInfo.clusterName"></el-input>
      </el-form-item>

      <el-form-item label="任务执行类名" prop="jobClassName">
        <el-input v-model="formDataInfo.jobClassName" prop="jobClassName"></el-input>
      </el-form-item>

      <el-form-item label="任务执行方法名" prop="jobMethodName">
        <el-input v-model="formDataInfo.jobMethodName"></el-input>
      </el-form-item>

      <el-form-item label="运行时间Cron" prop="cronStr">
        <el-input v-model="formDataInfo.cronStr"></el-input>
      </el-form-item>

      <el-form-item label="方法参数值">
        <el-input v-model="formDataInfo.methodParamValue"></el-input>
      </el-form-item>

      <el-form-item label="负责人邮箱" prop="welfareEmail">
        <el-input v-model="formDataInfo.welfareEmail"></el-input>
      </el-form-item>

      <el-form-item label="任务描述信息" prop="description">
        <el-input type="textarea" v-model="formDataInfo.description"></el-input>
      </el-form-item>

      <el-form-item label="任务状态" prop="status">
        <el-radio-group v-model="formDataInfo.status" size="medium">
          <el-radio border :label='1'>新建</el-radio>
          <el-radio border :label='2'>运行</el-radio>
          <el-radio border :label='3'>停止</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="formSubmit('scheduleForm')">立即提交</el-button>
        <el-button type="reset" @click="reSetFormData('scheduleForm')">清除所有</el-button>

      </el-form-item>

      {{jobFormDetailInfo}}
      {{formDataInfo}}
    </div>
  </el-form>
</template>


<script>

  export default {
    data() {
      return {
        formRules: {
          jobName: [
            {required: true, message: '请输入任务执行类名', trigger: 'blur'}
          ],
          clusterName: [
            {required: true, message: '请输入任务所属集群', trigger: 'blur'}
          ],
          jobClassName: [
            {required: true, message: '请输入任务执行类名', trigger: 'blur'}
          ],
          jobMethodName: [
            {required: true, message: '请输入任务执行方法名', trigger: 'blur'}
          ],
          cronStr: [
            {required: true, message: '请输入任务执行运行时间Cron', trigger: 'blur'}
          ],
          status: [],
          welfareEmail: [
            {required: true, message: '请输入负责人邮箱', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ]

        }
      }
    },
    methods: {
      //表单提交
      formSubmit(scheduleForm) {
        this.$refs[scheduleForm].validate((valid) => {
          if (valid) {
            console.log("submit!");
            this.$emit('updateJobInfoMethod', this.formDataInfo);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单数据
      reSetFormData(scheduleForm) {
        console.log("Reset --- ");
        this.$refs[scheduleForm].resetFields();
      }
    },
    props: {
      jobFormDetailInfo: {
        status: 1
      }
    },
    computed: {
      formDataInfo: function (){
        console.log("computed formDataInfo info ");
        return this.jobFormDetailInfo
      }
    }


  };
</script>
