<template>
<el-row :gutter="2">
  <el-col :span="2" :offset="6">
  <div class="grid-content bg-purple">
<el-steps :space="100" direction="vertical" :active="1">
  <el-step title="开启学习中"></el-step>
  <el-step title="掌握router"></el-step>
  <el-step title="已掌握vue"></el-step>
  
</el-steps>
  </div>
  </el-col>
  <el-col :span="10" :offset="1">
  <div class="grid-content bg-purple">
  <el-tabs type="border-card">
  <el-tab-pane label="学习知识点">
  我们已经生成了我们的第一个 Vue 应用！看起来这跟单单渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，一切都是响应式的。我们如何知道？打开浏览器的 JavaScript 控制台，并修改 app.message，你将看到上面渲染的例子相应地更新了。
  </el-tab-pane>
  <el-tab-pane label="掌握程度">
  我们已经生成了我们的第一个 Vue 应用！看起来这跟单单渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，一切都是响应式的。我们如何知道？打开浏览器的 JavaScript 控制台，并修改 app.message，你将看到上面渲染的例子相应地更新了。
  </el-tab-pane>
  <el-tab-pane label="个人体会">
  我们已经生成了我们的第一个 Vue 应用！看起来这跟单单渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，一切都是响应式的。我们如何知道？打开浏览器的 JavaScript 控制台，并修改 app.message，你将看到上面渲染的例子相应地更新了。
  </el-tab-pane>
  <el-tab-pane label="暂未掌握知识点">
  我们已经生成了我们的第一个 Vue 应用！看起来这跟单单渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。现在数据和 DOM 已经被绑定在一起，一切都是响应式的。我们如何知道？打开浏览器的 JavaScript 控制台，并修改 app.message，你将看到上面渲染的例子相应地更新了。
  </el-tab-pane>
</el-tabs>
  </div
  ></el-col>
</el-row>
</template>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>