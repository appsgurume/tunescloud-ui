<template>
    <div class="spinner-border text-light spi" v-if="visibility" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
name: "Spinner",
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
