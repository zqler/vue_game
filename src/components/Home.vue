<template>
    <div class="home">
        <h4 ref="title">红酒</h4>
        <Orderlist></Orderlist>
    </div>
</template>

<script>
import Orderlist from '../components/Order';
import { mapGetters, mapState } from 'vuex';
import { login, motation } from '../store/types'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    mounted(){
        this.$refs.title.style.fontSize= '26px';
      
    },
    computed: {
        ...mapState({
            Info: state => state.User.Info,//state =>state.User.Info
            User: state => state.login
        }),
        ...mapGetters(['isAdmin'])
    },
    components: {
        Orderlist
    }
}

</script>
<style lang="scss" scoped>
@import "../sass/layout.scss";
</style>
