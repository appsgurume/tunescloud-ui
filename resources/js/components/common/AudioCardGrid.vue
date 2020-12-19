<template>
    <div class="row d-flex justify-content-center">
        <AudioCard v-for="audio in data"
                   :key="audio.id"
                   :visibility="true"
                   :audio-url="audio.audio_url ? audio.audio_url : false"
                   :title="audio.title ? audio.title : false"
                   :thumbnail-url="audio.thumbnail ? audio.thumbnail: false"
        >{{audio}}</AudioCard>

    </div>
</template>

<script>
import AudioCard from "./AudioCard";

export default {
name: "AudioCardGrid",
    components:{
        AudioCard
    },
data(){
    return{
        data:[]
    }
},
    methods:{
    init(){
        axios.get('/v1/video?per_page=200').then((response)=>{
            this.data = response.data.data.data;
            console.log(this.data);
        }).catch((err)=>{
        console.log(err);
        })
    }
    },
    mounted(){
        this.init()
    }
}
</script>

<style scoped>

</style>
