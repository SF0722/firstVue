<template>
  <div class="hello">
    <body>
    <h1 class="title">{{ msg }}</h1>
    <ul class="scrollbox" id="guandong">
        <div  v-for="item in message_array" v-bind:key="item.index">
            <div v-if="item.userId==1" class="right">
              <img class="icon" src="../assets/user.png">
              <div class="contentBox">
                <div class="bot"> </div>
                <div class="top"> </div>
                <p class="content" v-html="item.contentStr"></p>
              </div>
            </div>
            <div v-else class="left">
              <img class="icon" src="../assets/ai.png">
              <div class="answer">
                <div class="bot"> </div>
                <div class="top"> </div>
                <p class="content" v-html="item.contentStr"></p>
              </div>
            </div>
        </div>
<!--        <div class="answer" v-if="item.userId==0" v-for="item in message_array" v-bind:key="item.index">-->
<!--          <div class="bot"> </div>-->
<!--          <div class="top"> </div>-->
<!--          <p class="content">{{item}}</p>-->
<!--        </div>-->
    </ul>
    <input class="inputbox" type="text" v-model="message"/>
    <button v-on:click="dealMessage">send</button>
    </body>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
axios.defaults.withCredentials = true
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Jarvis,Your Personal Health Care Assistant',
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
      axios.get('http://localhost:9090/api/cookie', {
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
      this.$nextTick(() => {
        var container = this.$el.querySelector('#guandong')
        container.scrollTop = container.scrollHeight
      })
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
  margin-left:30px;
  margin-bottom: 50px;
  background: #196cfa;
  position:relative;
  border-radius: 10px;
}
.contentBox div{ width:0; height:0; position:absolute;}
.contentBox .bot{
  border-width:20px;
  border-style:solid;
  border-color:transparent #196cfa #196cfa transparent;
  left:-40px;
  top:20%;
}
.contentBox .top{
  border-width:10px 20px;
  border-style:solid;
  border-color: transparent  transparent transparent transparent ;
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
  margin-left:30px;
  margin-bottom: 50px;
  background: #fa8d19;
  position:relative;
  border-radius: 10px;
}
.answer div{ width:0; height:0; position:absolute;}
.answer .bot{
  border-width:20px;
  border-style:solid;
  border-color:transparent #fa8d19 #fa8d19 transparent;
  left:-40px;
  top:40px;
}
.answer .top{
  border-width:10px 20px;
  border-style:solid;
  border-color: transparent  transparent transparent transparent ;
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
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
}

.right{
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
}

.inputbox{
  width: 500px;
  height: 50px;
  font-weight: 900;
  font-size:100%;
  border-radius: 10px;
}

.scrollbox{
  overflow-y: auto;
  margin-right: 100px;
  margin-left: 100px;
  height: 400px;
  border-style: solid;
  border-radius: 50px;
  border-color: #dcdee0;
  position: center;
  background-color:rgba(255, 255, 255,0.5);
}

button {
  width: 200px;
  height: 50px;
  padding:8px;
  background-color: #428bca;
  border-color: #357ebd;
  color: #fff;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px; /* future proofing */
  -khtml-border-radius: 10px; /* for old Konqueror browsers */
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-weight: 900;
  font-size:125%
}

.title{
  font-size: 50px;
  font-weight: bold;
  color: #f2f3f5;
}

.icon{
  width: 50px;
  height: 50px;
}

</style>
