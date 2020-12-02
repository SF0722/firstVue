<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getDate () {
      axios.get('http://localhost:9090/api/say_hello_to_somebody', {
        params: {
          userId: 1,
          content: 'hahahah'
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  created () {
    this.getDate()
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
