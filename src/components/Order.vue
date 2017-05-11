<template>
<div>
  <div class="banner"></div>
  <div class="container">
  <div class="main">
    <h3>认识人头马</h3>
     <el-row :gutter="10">
    <el-col :xs="10" :md="6" :lg="4" :span="10" :offset="1">
    <div class="grid-content">
       <h4 class="title">跨越三个世纪对于最优质干葡萄品种的积极探索</h4>
       <p>{{conMsg1}}</p>
        <p>{{conMsg2}}</p>
        <img class="left_pic" :src="pic_pz" alt="瓶子">
    </div>
    </el-col>
    <el-col :xs="10" :md="6" :lg="4" :span="10" :offset="2">
    <div class="grid-content">
       <img class="right-pic" src="../images/chart_04.jpg" alt="土壤jpg">
        <h4>"洋溢着优质香槟区干沁人心扉的酒香，犹如一款可以品势的香水"</h4>
        <span>ANDRÉ GIRAUD</span>
        <p>1960年至1990年的酿酒大师</p>
        <p> 1981年，传奇酿酒大师AndréGiraud决定向人头马干邑的核心，历经三个世纪的大、小香槟区致敬。人头马X.O，一款洋溢着</p>
        <p>人头马X.O体现了这片土地的独特精髓，经日月传承，日臻完美，呈现大香槟区“生命之水”的方春浓郁。</p>
        <p><strong>X.O</strong></p>
         <router-link class="btn" :to="{ name: 'Productlist'}">发现之旅</router-link>
    </div>
    </el-col>
   </el-row>
  </div>
  <div class="main">
    <h3>探索全系列产品</h3>
    <img :src="picBook" alt="">
  </div>
  <div class="main"></div>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        conMsg1:'于1724年创立于夏朗德省的人头马，将永远同这片土地交织在一起，难割难分。正是在这一揽法国沃土上，诞生了由大、小香槟区共同构筑',
        conMsg2:'已过人的耐心和热情执着而打造的卓越之作，人头马是时间的守护神。我们特别关注优质香槟产区，葡萄成熟后尽可能晚地采摘，以便使其香味更浓郁，使其完全释放和展现自身真实品色。',
        pic_pz:'../../static/pz_08.jpg',
        picBook:'../../static/histroy.jpg',
        url:'/list'
       
      }
    },
    methods:{
      url:function(){
        this.$router.go('/list');
      }
    
    }
  }
</script>
<style lang="scss" scoped>
    @import "../sass/layout.scss";
</style>
