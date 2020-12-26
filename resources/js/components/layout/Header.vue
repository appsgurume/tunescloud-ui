<template>

    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#"><h3 class="masthead-brand"><i class="fa fa-cloud" aria-hidden="true"></i></h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Recent <span class="sr-only">Recent</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Play lists</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Top hits</a>
                    </li>
                </ul>

                <SearchBox></SearchBox>

                <div class="ml-auto"></div>

            </div>
        </nav>
    </header>

</template>

<script>
import SearchBox from "../common/utiles/SearchBox";
export default {
    name: "Header",
    components:{
        SearchBox
    }
}
</script>

<style scoped>

</style>
