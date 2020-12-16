<template>
    <audio controls v-if="visibility">
        <source src="" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
</template>

<script>
export default {
name: "AudioPlayer",
    props:{
        visibility: {
            type:Boolean,
            required:false,
            default:false
        }
    }
}
</script>

<style scoped>

</style>
