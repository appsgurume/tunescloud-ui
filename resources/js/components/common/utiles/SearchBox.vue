<template>
    <form class="form-inline mr-auto" @submit="search">

        <div class="input-group">
            <input type="text" v-model="searchTerm" v-on:keyup="detectDir" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button class="btn btn-outline-info" type="submit">Search</button>
            </div>
        </div>


    </form>
</template>

<script>

export default {
    name: "SearchBox",
    data(){
        return {
            searchTerm:""
        }
    },
    methods:{
        detectDir(e){
            let searchBox = e.target;
            searchBox.style.direction = Helpers.isArabic(this.searchTerm) ? "rtl" : "ltr";
        },
        search(e){
            e.preventDefault();
            let term =  this.searchTerm == "" ? null : this.searchTerm;
            let eventPayload = {
                "term": term,
                "reset": true,
                "page": 1,
                "count": 10
            }
            this.$root.$emit('triggerGetConvertedVideos',eventPayload);

        }
    }
}
</script>

<style scoped>

</style>
