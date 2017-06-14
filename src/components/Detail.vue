
<template>
    <div>
         <p>{{vmodelitem.name}}</p>
         <p>{{vmodelitem.teacher}}</p>
        <video width="1000px" height="500px" :src="vmodelitem.src1" controls="controls" :poster="vmodelitem.img">
            您的浏览器不支持 video 标签。
        </video>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            vmodelitem: {}
        }

    },
    created: function () {//取到对应的id下面的数据
        var ID = this.$route.params.id;
        this.$http.post('api/VLists', { id: ID }).then((res) => {
            this.vmodelitem = res.data;//数据放到vmodelitem里面
        })

    },
    methods: {

    }
}
</script>