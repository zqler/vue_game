
<template>
    <div>
        <p>{{vmodelitem.name}}</p>
        <video :src="vmodelitem.src1" controls="controls" :poster="vmodelitem.img">
            您的浏览器不支持 video 标签。
        </video>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            vmodelitem: [],
            
        }

    },
    created: function () {
        var ID = this.$route.params.id;
        this.$http.post('api/VLists', { id: ID }).then((res) => {
            this.vmodelitem = res.data;
        })
    },
     computed: {
    
    },
    methods: {

    }
}
</script>