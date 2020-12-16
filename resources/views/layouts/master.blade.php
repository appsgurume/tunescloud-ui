@include('includes.head')

<body class="text-center">



    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        @include('includes.header')

            <main role="main" class="inner cover">

                @yield('content')

            </main>

        @include('includes.footer-body')

    </div>

</body>

@include('includes.footer')












