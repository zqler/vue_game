
<template>
    <div>
        <template v-for="(item,id) in Vlist">
          <h4 class="title">{{item.id}}</h4>
          <div class="container">
           <p>{{item.img}}</p>
           <button type="primary" @click="takeId">得到id参数</button>
          </div>
</template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                Vlist:[]
            }
            
        },
        created: function() {
            var ID = this.$route.params.id;
            this.$http.get('api/VList',{params :{id: ID}}).then( (res) => {
                    const Vlist = res.data;
                    console.log(res.data[1].id);
                    console.log(111);
            })
    
        },
        methods: {
            takeId: function() {
                console.log(this.$route.params.id);
            }
        }
    }
</script>