<template>
    <div class="row d-flex justify-content-center">

        <AudioCard v-for="audio in data"
                   :key="audio.id"
                   :visibility="true"
                   :audio-url="audio.audio_url ? audio.audio_url : false"
                   :title="audio.title ? audio.title : false"
                   :thumbnail-url="audio.thumbnail ? audio.thumbnail: false"
        ></AudioCard>
    <div class="col-md-12 text-center">
        <Spinner :visibility="spinnerVisibility"></Spinner>
    </div>
    </div>
</template>

<script>
import AudioCard from "./AudioCard";
import Spinner from "./utiles/Spinner";
import SearchBox from "./utiles/SearchBox";
export default {
name: "AudioCardGrid",
    components:{
        AudioCard,
        Spinner,
        SearchBox
    },
data(){
    return{
        data:[],
        nextPageUrl:null,
        isInitPull:true,
        spinnerVisibility:false,
        videosRequestProcessing: false,
        searchTerm: null,
        perPage:10
    }
},
    methods:{
    getConvertedVideos(page = 1, count = null, term = null, reset = false){

        if(reset){
            this.data = [];
            this.isInitPull = true;
            this.perPage = 10;
        }

        this.searchTerm = term ? term : this.searchTerm;

        this.perPage = count ? count : this.perPage;

        let that = this;

        this.spinnerVisibility = false;

        if((this.nextPageUrl || this.isInitPull) && !this.videosRequestProcessing ){

            this.spinnerVisibility = true;
            this.videosRequestProcessing = true;

            Helpers.getConvertedVideos(page, this.perPage, this.searchTerm, this.isInitPull, this.nextPageUrl).then(function(response){
                that.data.push.apply(that.data, response.data.data);
                that.isInitPull = false;
                that.nextPageUrl = response.data.next_page_url;
                that.spinnerVisibility = false;
                that.videosRequestProcessing = false;
            }).catch(function(err){
                console.log(err);
            })
        }

    }, scroll () {
        let that = this;
            window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= window.document.body.offsetHeight) {
                    this.scrolledToBottom = true;
                    that.getConvertedVideos();
                }else{
                    this.scrolledToBottom = false;
                }
            };

        }
    },
    mounted(){
        this.getConvertedVideos(1,10);
        this.scroll();
        let that = this;
        this.$root.$on("triggerGetConvertedVideos", function(payload){
            that.searchTerm = payload.term ? that.searchTerm : null;
            that.getConvertedVideos(payload.page, payload.count,payload.term, payload.reset);
        })
    }
}
</script>

<style scoped>

</style>
