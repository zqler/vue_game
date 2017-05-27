
<template>
    <div>
        <template v-for="(item,id) in list">
          <h4 class="title">{{item.id}}</h4>
          <div class="container">
           <p>{{item.con}}</p>
           <button type="primary" @click="takeId">得到id参数</button>
          </div>
</template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                news: [{
                        id: 1,
                        title: '今日新闻',
                        con: '住房新政策'
                    },
                    {
                        id: 2,
                        title: '昨日新闻',
                        con: '公交安全'
                    },
                    {
                        id: 3,
                        title: '明日新闻',
                        con: '宝马车被撞事件'
                    }
                ]
            }
        },
        created: function() {
            var Id = this.$route.params.id;
            this.$http.get("http://localhost:3000/newlist").then((res) => {
                if (res.data.id == Id) {
                    list = data;
                }
            })
    
        },
        methods: {
            takeId: function() {
                console.log(this.$route.params.id);
            }
        }
    }
</script>