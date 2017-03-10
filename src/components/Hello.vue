<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>介绍</h2>
    <div class="input" id="app1">
    <p>{{message}}</p>
    <input v-model="message">
    </div>
    <ul id="example-1">
    <li v-for="item in items">
      <router-link to='/bar'>{{ item.commessage }}</router-link>

     </li>
     </ul>
     <div :class="[classA,classB]">这是一个新的框架</div>
     <ul >
       <li v-for="value in object">
          {{ $key }} : {{ value }}
       </li>
      </ul>
     <template v-if="false">
     	<h1>title</h1>
     	<p>Paragraph 1</p>
      <p>Paragraph 2</p>
     </template>
<div>
    <span v-for="n in 10">{{ n }} </span>
</div>
<select v-model="selected">
<!-- 对象字面量 -->
     <option v-bind:value="{ number: 123 }">123</option>
     </select>
<button v-on:click="greet">Greet</button>
<router-link to="/">home</router-link>
<router-link to="/bar">Go to Bar</router-link>
</div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: '魏秀艳',
                message: 'zhangquan',
                items: [{
                    commessage: '首页',
                    index:'开始'
                }, {
                    commessage: '公司简介'
                }, {
                    commessage: '公司业务'
                }, {
                    commessage: '公司文化'
                }, {
                    commessage: '联系方式'
                }],
                classA: 'class-a',
                classB: 'class-b',
                object: {
                    FirstName: 'John',
                    LastName: 'Doe',
                    Age: 30
                }
            }
        },
        methods: {
            greet: function() {
                location.href = "https://www.baidu.com/";
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
        font-size: 20px;
        color: #ff5100;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    input {
        outline: none;
    }

    .input input {
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
        color: #42B983;
        padding-left: 5px;
        font-size: 20px;
    }

    .input input:focus {
        border: 1px solid #FF5100;
    }

    a {
        color: #333;
    }

    a:hover {
        color: #42B983;
    }
</style>
