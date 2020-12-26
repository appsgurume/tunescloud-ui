<template>
<div class="col-12">
    <Header></Header>
    <div class="row mg-10-pr">
        <div class="col-10 offset-1">
            <VideoConvertor></VideoConvertor>
        </div>
    </div>

    <AudioCardGrid></AudioCardGrid>

</div>
</template>

<script>
import VideoConvertor from "../common/VideoConvertor";
import AudioCardGrid from "../common/AudioCardGrid";
import Header from "../layout/Header";

export default {
    name: "Home",
    components:{
        VideoConvertor,
        AudioCardGrid,
        Header
    }
}
</script>

<style scoped>

</style>
