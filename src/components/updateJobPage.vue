<template>
  <el-form ref="form" :model="fromDataInfo" label-width="120px" size="medium" label-position="left">
    <div :class="['elInputStyle']">
      <el-form-item label="任务ID">
        <el-input :disabled="true" v-model="fromDataInfo.jobId"></el-input>
      </el-form-item>

      <el-form-item
        label="任务名称"
        :rules="[
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ]"
      >
        <el-input v-model="fromDataInfo.name"></el-input>
      </el-form-item>

      <el-form-item
        label="任务所属集群"
        :rules="[
          { required: true, message: '请输入任务所属集群', trigger: 'blur' }
        ]"
      >
        <el-input v-model="fromDataInfo.clusterName"></el-input>
      </el-form-item>

      <el-form-item
        label="任务执行类名"
        :rules="[
          { required: true, message: '请输入任务执行类名', trigger: 'blur' }
        ]"
      >
        <el-input v-model="fromDataInfo.jobClassName" prop="jobClassName"></el-input>
      </el-form-item>

      <el-form-item
        label="任务执行方法名"
        :rules="[
          { required: true, message: '请输入任务执行方法名', trigger: 'blur' }
        ]"
      >
        <el-input v-model="fromDataInfo.jobMethodName"></el-input>
      </el-form-item>

      <el-form-item label="方法参数名">
        <el-input v-model="fromDataInfo.methodParamName" prop="methodParamName"></el-input>
      </el-form-item>
      <el-form-item label="方法参数值">
        <el-input v-model="fromDataInfo.methodParamValue"></el-input>
      </el-form-item>

      <el-form-item
        label="负责人邮箱"
        :rules="[
          { required: true, message: '请输入负责人邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]"
      >
        <el-input v-model="fromDataInfo.welfareEmail"></el-input>
      </el-form-item>

      <el-form-item label="任务描述信息">
        <el-input type="textarea" v-model="fromDataInfo.description"></el-input>
      </el-form-item>

      <el-form-item label="任务状态">
        <el-radio-group v-model="fromDataInfo.status" size="medium">
          <el-radio border label="新建"></el-radio>
          <el-radio border label="运行"></el-radio>
          <el-radio border label="停止"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="reset">取消</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>




<script>
export default {
  data() {
    return {
      fromDataInfo: {
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
        status: "",
        //负责人邮箱
        welfareEmail: "",
        //描述信息
        description: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style>
.elInputStyle {
  float: left;
  width: 600px;
}
</style>
