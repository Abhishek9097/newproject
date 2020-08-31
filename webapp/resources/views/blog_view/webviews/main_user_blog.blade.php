@extends('blog_view.blog_view_master')

@section('main_content')
    <div class="col-md-12">

        @include('blog_view.components.user_blog_details').

        @include('blog_view.common.main_footer')
        
    </div>
    
@endsection