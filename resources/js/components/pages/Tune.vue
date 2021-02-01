<template>
<div class="col-12">
<!--    <Header></Header>-->
    <div class="row mg-10-pr">
        <div class="col-10 offset-1">
            <VideoConvertor></VideoConvertor>
        </div>
    </div>

    <AudioCardGrid class="mg-10-pr"></AudioCardGrid>

</div>
</template>

<script>
import VideoConvertor from "../common/VideoConvertor";
import AudioCardGrid from "../common/AudioCardGrid";
import Header from "../layout/Header";
import Vue from "vue";

export default {
    name: "Home",
    components:{
        VideoConvertor,
        AudioCardGrid,
        Header
    },
    mounted() {
        let payload = {
            "searchType" : "videos"
        }

        this.$root.$emit('triggerSetSearchType',payload)

        let activeMenuPayload = {
            "activeMenu" : "home"
        }

        this.$root.$emit('triggerSetActiveMenu',activeMenuPayload)

    }
}
</script>

<style scoped>

</style>
