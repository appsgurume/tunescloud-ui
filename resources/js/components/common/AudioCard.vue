<template>
    <div class="card" style="width: 18rem;" v-if="visibility">
        <img :src="thumbnailUrl" class="card-img-top" :alt="title" :title="title">
        <div class="card-body">
            <h6 class="card-title" v-if="title">{{getTitle(title)}}</h6>
            <p class="card-text" v-if="description">{{description}}</p>
            <AudioPlayer :visibility="visibility" :src="audioUrl"></AudioPlayer>
        </div>
    </div>
</template>

<script>
import Spinner from "./utiles/Spinner";
import AudioPlayer from "./utiles/AudioPlayer";
export default {
name: "AudioCard",
    props:{
        visibility: {
            type:Boolean,
            required:false,
            default:false
        },
        title: {
            type:[String, Boolean],
            required:true,
            default:false
        },
        description: {
            type:[String, Boolean],
            required:false,
            default:false
        },
        audioUrl: {
            type:[String, Boolean],
            required:true,
            default:false
        },
        thumbnailUrl: {
            type:[String, Boolean],
            required:true,
            default:false
        }
    },
    components:{
        Spinner,
        AudioPlayer
    },
    methods:{
    getTitle(title){
        return title.length > 60 ? title.substr(0, 57) + "..." : title;
    }
    }
}
</script>

<style scoped>

</style>
