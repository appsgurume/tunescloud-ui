<template>
    <div class="col-10 mx-auto">

        <form id="convert_form">
            <div class="input-group input-group-lg mx-auto">
                <input type="text" id="url" name="url" class="form-control" placeholder="https://www.youtube.com/watch?v=KL4mNXuU7-E" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            </div>
            <div class="text-center m-5">
                <a class="btn btn-lg btn-success" href="#" v-on:click="convertVideo" role="button">
                    Convert
                    <Spinner :visibility="buttonSpinnerVisibility"></Spinner>
                </a>

            </div>

        </form>
        <Alert  :visibility="alertVisibilityError"  :class="['alert-danger']" v-for="(error, index) in errors"  :key="index" :messageText="error[Object.keys(error)[0]][0]" />
        <Alert  :visibility="alertVisibilitySuccess"  :spinner-visibility="alertSpinnerVisibility" :class="['alert-success']" :messageText="alertMessageText" />
        <AudioPlayer :visibility="audioPlayerVisibility" :src="audioUrl"></AudioPlayer>

    </div>


</template>

<script>
import Alert from "./Alert";
import Spinner from "./utiles/Spinner";
import AudioPlayer from "./utiles/AudioPlayer";


export default {
    name: "VideoConvertor",
    components:{
        Alert,
        Spinner,
        AudioPlayer
    },
    data(){
        return {
            data:{},
            errors:null,
            alertVisibilitySuccess: false,
            alertVisibilityError: false,
            buttonSpinnerVisibility: false,
            alertSpinnerVisibility:false,
            alertMessageText: '',
            audioPlayerVisibility: false,
            audioUrl:""
        }
    },
    methods:{
        convertVideo(){
            this.alertVisibilitySuccess = false;
            this.alertVisibilityError = false;
            this.buttonSpinnerVisibility = true;
            this.audioPlayerVisibility = false;
            this.alertSpinnerVisibility = false;
            this.audioUrl = "";

            let convertForm = new FormData(document.getElementById("convert_form"));

            axios.post('/v1/video/upload',convertForm).then((response)=>{
                let that = this;
                this.data = response.data;
                this.alertMessageText = response.data.message;
                this.buttonSpinnerVisibility = false;
                this.alertVisibilityError = false;
                this.alertVisibilitySuccess = true;
                this.alertSpinnerVisibility = true;


                /**
                 * listen to the video convert status
                 */

                window.Echo.channel('tuns-cloud-development.' + response.data.data.id)
                    .listen('.VideoConverted', function(response){
                        console.log(response);
                        console.log(response.payload.original.data.audio_url);
                        that.audioUrl = response.payload.original.data.audio_url;
                        that.audioPlayerVisibility = true;
                        that.alertSpinnerVisibility = false;
                        that.alertMessageText = response.payload.original.message;
                    });

            }).catch((err)=>{
                console.log(err.response.data.errors);

                this.errors = err.response.data.errors;
                this.alertVisibilitySuccess = false;
                this.buttonSpinnerVisibility = false;
                this.alertVisibilityError = true;
            })
        }
    }
}
</script>

<style scoped>

</style>
