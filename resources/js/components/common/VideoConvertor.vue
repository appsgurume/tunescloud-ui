<template>
    <div class="col-12 mx-auto">

        <form id="convert_form">
            <fieldset id="convert_form_fieldset">
            <div class="input-group input-group-lg mx-auto">
                <input type="text" id="url" name="url" class="form-control" placeholder="https://www.youtube.com/watch?v=KL4mNXuU7-E" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                <div class="input-group-append">
                    <a class="btn btn-lg btn-dark" href="#" v-on:click="convertVideo" role="button">
                        Convert
                        <Spinner :visibility="buttonSpinnerVisibility"></Spinner>
                    </a>

                </div>
            </div>
            </fieldset>

        </form>

        <div class="col-12 mt-5">
            <Alert  :visibility="alertVisibilityError"  :class="['alert-danger']" v-for="(error, index) in errors"  :key="index" :messageText="error[Object.keys(error)[0]][0]" />
            <Alert  :visibility="alertVisibilitySuccess"  :spinner-visibility="alertSpinnerVisibility" :class="['alert-success']" :messageText="alertMessageText" />
        </div>


        <div class="row justify-content-center">
            <AudioCard :visibility="audioCardVisibility" :audio-url="audioUrl" :thumbnail-url="audioCardThumbnailUrl" :title="audioCardTitle"></AudioCard>
        </div>
    </div>


</template>

<script>
import Alert from "./Alert";
import Spinner from "./utiles/Spinner";
import AudioCard from "./AudioCard";

export default {
    name: "VideoConvertor",
    components:{
        AudioCard,
        Alert,
        Spinner
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
            audioCardVisibility: false,
            audioUrl:"",
            audioCardThumbnailUrl:"",
            audioCardTitle:"",
            audioCardDescription:""
        }
    },
    methods:{
        convertVideo(){
            this.alertVisibilitySuccess = false;
            this.alertVisibilityError = false;
            this.buttonSpinnerVisibility = true;
            this.audioCardVisibility = false;
            this.alertSpinnerVisibility = false;
            this.audioUrl = "";
            let convertBoxFieldsSet = document.getElementById("convert_form_fieldset");

            let videoConvertForm = new FormData(document.getElementById("convert_form"));

            convertBoxFieldsSet.disabled = true;

            axios.post('/v1/video/upload',videoConvertForm).then((response)=>{

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
                        that.audioCardThumbnailUrl = response.payload.original.data.thumbnail;
                        that.audioCardTitle = response.payload.original.data.title;

                        that.audioCardVisibility = true;
                        that.alertSpinnerVisibility = false;
                        convertBoxFieldsSet.disabled = false;
                        convertBoxFieldsSet.getElementsByTagName("input")["0"].value = "";
                        that.alertMessageText = response.payload.original.message;
                    });

            }).catch((err)=>{
                console.log(err.response.data.errors);

                this.errors = err.response.data.errors;
                this.alertVisibilitySuccess = false;
                this.buttonSpinnerVisibility = false;
                this.alertVisibilityError = true;
                convertBoxFieldsSet.disabled = false;
            })
        }
    }
}
</script>

<style scoped>

</style>
