<template>
  <el-form ref="form" :model="formDataInfo" label-width="140px" :rules="formRules" size="medium"
           label-position="left">
    <div :class="['elInputStyle']">
      <el-form-item label="任务ID">
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

      <el-form-item label="任务描述信息">
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
        <el-button ref="createSubmitBtn" type="primary" @click="formSubmit('form')">立即创建</el-button>
        <el-button type="reset">取消</el-button>

      </el-form-item>
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
      formSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            console.log("submit!");
            this.$emit('updateJobInfoMethod', this.formDataInfo);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    props: {
      //父组件传入的表单数据详情内容
      formDataInfo: {
        //任务ID
        jobId: "",
        //任务执行集群
        clusterName: "",
        //声明任务名
        jobName: "",
        //执行类名
        jobClassName: "",
        //执行方法名
        jobMethodName: "",
        //方法参数名 仅限一个值
        methodParamName: "",
        //方法参数值 仅限一个值
        methodParamValue: "",
        //任务执行时间
        cronStr: "",
        //任务状态
        status: "1",
        //负责人邮箱
        welfareEmail: "",
        //描述信息
        description: ""
      }
    }
  };
</script>
