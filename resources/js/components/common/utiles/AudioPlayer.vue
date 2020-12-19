<template>
    <audio controls v-if="visibility" @play="playAudio()">
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
    },
    methods:{
        playAudio(){
            let currentAudioObject = this.$el;
            let audioObjects = window.document.getElementsByTagName("Audio");
            audioObjects = Array.from(audioObjects);
            /**
             * Pause any running audio except the current audio
             */
            audioObjects.forEach(function(audioObject){
                if(audioObject != currentAudioObject){
                    audioObject.pause();
                }
            });

        }
    }
}
</script>

<style scoped>

</style>
