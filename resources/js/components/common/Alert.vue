<template>


 <transition name="fade" mode="out-in">
    <div class="alert alert-dismissible align-middle" v-if="visibility" role="alert">
        {{messageText}} &nbsp;
        <Spinner :visibility="spinnerVisibility"></Spinner>
    </div>
 </transition>


</template>

<script>
import Spinner from "./utiles/Spinner";

export default {
name: "Alert",
    components:{
    Spinner
    },
props:{
    visibility: {
        type:Boolean,
        required:false,
        default:false
    },
    messageText:{
        type:String,
        required: true,
        default: ""
    },
    spinnerVisibility: {
        type:Boolean,
        required:false,
        default:false
    },
}
}
</script>

<style scoped>

</style>
