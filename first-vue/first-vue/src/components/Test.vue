<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="scrollbox">
        <div  v-for="item in message_array" v-bind:key="item.index">
            <div v-if="item.userId==1" class="contentBox">
              <div class="bot"> </div>
              <div class="top"> </div>
              <p class="content">{{item}}</p>
            </div>
            <div v-else class="answer">
              <div class="bot"> </div>
              <div class="top"> </div>
              <p class="content">{{item}}</p>
            </div>
        </div>
<!--        <div class="answer" v-if="item.userId==0" v-for="item in message_array" v-bind:key="item.index">-->
<!--          <div class="bot"> </div>-->
<!--          <div class="top"> </div>-->
<!--          <p class="content">{{item}}</p>-->
<!--        </div>-->
    </ul>
    <input type="text" v-model="message"/>
    <button v-on:click="dealMessage">add</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message_array: []
    }
  },
  methods: {
    dealMessage: function () {
      var that = this
      var question = {
        userId: 1,
        contentStr: that.message
      }
      that.message_array.push(question)
      // 将问题以http get方法发送到ai接口并接受其回答
      axios.get('http://localhost:9090/api/say_hello_to_somebody', {
        params: {
          userId: 1,
          content: that.message
        }
      }).then(function (response) {
        console.log(response.data)//
        that.message_array.push(response.data)
      }).catch(function (error) {
        console.log(error)
      })
      that.message = ''
      that.scrollToBottom()
    },
    scrollToBottom () {
      var container = this.$el.querySelector('question')
      container.scrollTop = container.scrollHeight
    }
  },
  created () {
    // this.getDate()
  },
  updated () {
    this.scrollToBottom()
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

/*CSS实现对话框效果一*/
.contentBox{
  width:300px;
  height: border-box;
  padding:30px 20px;
  margin-left:100px;
  margin-bottom: 50px;
  background: #196cfa;
  position:relative;
  border-radius: 10px;
}
.contentBox div{ width:0; height:0; position:absolute;}
.contentBox .bot{
  border-width:20px;
  border-style:solid;
  border-color:#ffffff #196cfa #196cfa #ffffff;
  left:-40px;
  top:40px;
}
.contentBox .top{
  border-width:10px 20px;
  border-style:solid;
  border-color: transparent  #ffffff #ffffff transparent ;
  left:-40px;
  top:60px;
}
.contentBox .content{
  font-size: 15px;
  color: #f2f3f5;
  font-weight: bold;
  word-break: break-all;
  word-wrap:break-word;
}

.answer{
  width:300px;
  height: border-box;
  padding:30px 20px;
  margin-left:100px;
  margin-bottom: 50px;
  background: #fa8d19;
  position:relative;
  border-radius: 10px;
}
.answer div{ width:0; height:0; position:absolute;}
.answer .bot{
  border-width:20px;
  border-style:solid;
  border-color:#ffffff #fa8d19 #fa8d19 #ffffff;
  left:-40px;
  top:40px;
}
.answer .top{
  border-width:10px 20px;
  border-style:solid;
  border-color: transparent  #ffffff #ffffff transparent ;
  left:-40px;
  top:60px;
}
.answer .content{
  font-size: 15px;
  color: #f2f3f5;
  font-weight: bold;
  word-break: break-all;
  word-wrap:break-word;
}

.left{
  width: 400px;
  padding-left: 20px;
}

.right{
  width: 400px;
  padding-right: 20px;
}

.scrollbox{
  overflow-y: auto;
  width: 100%;
  height: 600px;
  border-style: solid;
}
</style>
