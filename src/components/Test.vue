<template>
  <div>
<span>测试测试！！！！</span>
<el-table class="answer_table"
          :data="answerList"
          border>
  <el-table-column
    prop="name"
    label="姓名">
  </el-table-column>
  <el-table-column
    prop="answer"
    label="回答">
  </el-table-column>
</el-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Test',
  // script部分
  data () {
    // 用于接收返回数据
    return {
      answerList: []
    }
  },
  created () {
    // 创建实例时设置配置的默认值
    const httpHandler = axios.create({
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      withCredentials: true
    })
    let uri = 'api/say_hello_to_somebody'
    httpHandler.get(uri).then(result => {
      console.log(result)
      this.data = result
    }).catch(error => { console.error(error) })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
