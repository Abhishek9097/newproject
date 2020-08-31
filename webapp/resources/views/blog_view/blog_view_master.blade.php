<!doctype html>
<html class="no-js" lang="en">
    <head>
        <title>Blooger</title>
    	 <meta charset="utf-16">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">   
    	@include('blog_view/common/main_header_script')
    	@yield('styles') 
    </head>
    <body class="bg-extra-light-gray"> 
        <div style="width:100%; overflow:hidden;">
    	{{-- @include('blog_view/common/main_header') --}}
         
            <section class="body-section no-padding-bottom">
                <div class="">
                    <div class="row justify-content-center">
                        @yield('main_content')
                    </div>
                </div>
            </section>
        {{-- @include('blog_view/common/main_footer')  --}}
        </div>
    	@include('blog_view/common/main_footer_script')
    	@yield('scripts')
    </body>
</html>