<template>
<div>
     <el-container style="height: auto; border: 1px solid #eee">
    <!-- 左侧导航栏-->
    <NavigationPage />
    <TableListPage />
     
     </el-container>
</div>
  
</template>




<script>
import NavigationPage from './navigationPage'
import TableListPage from './tableListPage'


export default {
    components: {
        NavigationPage,
        TableListPage,
    }
 
}
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
</style>
