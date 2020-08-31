@extends('blog.dashboard_master') 
@section('main_content')
	@include('blog.common.admin_page_title') 
	<div class="row">
		@include('blog.component.view_user_details')
	</div> 
@endsection

