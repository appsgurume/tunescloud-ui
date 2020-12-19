<template>
<div class="col-12">

    <div class="row mg-5-pr">
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
export default {
    name: "Home",
    components:{
        VideoConvertor,
        AudioCardGrid
    }
}
</script>

<style scoped>

</style>
