<div class="container bg-primary mt-2">
	<div class="wrap w-100 d-flex align-items-center">
	   <div class="page-title-bar-inner d-lg-flex justify-content-between align-items-center w-100">
		  <div class="breadcrumb">
			 
			<a href="{{url('add-blog')}}"><span class="post-root post post-post current-item"><b>For Add Or Update Blog Click Here</b></span></a> 				            
		  </div>
		  <div class="page-header">
			 <h1 class="page-title typo-heading">Blog</h1>
		  </div>
	   </div>
	</div>
 </div>

 </div>
 <div class="site-content-contain">
 <div id="content" class="site-content">
	<div class="wrap wrap w-100 d-flex align-items-start">
	   <div id="primary" class="content-area">
		  <main id="main" class="site-main">
			  @foreach($user_blogs as $value)
			 <article id="post-241" class="post-241 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
				<div class="post-inner">
				   <div class="post-thumbnail">
					  <a href="#">
					  <img width="900" height="600" src="{{('upload/'.$value->image)}}" class="attachment-worldlife-featured-image-full size-worldlife-featured-image-full wp-post-image" alt="" srcset="http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/blog-1.jpg 900w, http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/blog-1-300x200.jpg 300w, http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/blog-1-768x512.jpg 768w" sizes="(max-width: 900px) 100vw, 900px" />                </a>
				   </div>
				   <!-- .post-thumbnail -->
				   <header class="entry-header">
					  <div class="entry-meta">
						 <div class="entry-meta-inner">
							<span class="entry-category"><a href="#" rel="category tag">{{$value->category}}</a></span>
							<span class="posted-on"><a href="#" rel="bookmark">
							<time class="entry-date published" datetime="2019-07-02T07:56:38+00:00">{{$value->created_at}}</time>
							<time class="updated" datetime="2019-07-18T07:04:45+00:00">{{$value->created_at}}</time></a>
							</span>
						 </div>
					  </div>
					  <!-- .entry-meta -->
					  <h2 class="entry-title">
						 <a href="#" rel="bookmark">{{$value->title}}</a>
					  </h2>
				   </header>
				   <!-- .entry-header -->
				   <div class="entry-content">
					   
				   <p>{!! $value->discription !!}
						<span class="more-link-wrap"><a href="{{('show-user-blog/'.$value->id)}}" class="more-link">Read more<span class="screen-reader-text"> &#8220;{{$value->title}}&#8221;</span></a></span></p>
				   </div>
				   <!-- .entry-content -->
				</div>
			 </article>
			 @endforeach
			 
		  </main>
		  <!-- #main -->
	   </div>
	   <!-- #primary -->
	   <aside id="secondary" class="widget-area" role="complementary">
		  <div class="inner">
			 
			 <section id="recent-posts-3" class="widget widget_recent_entries">
				<h2 class="widget-title">Recent Posts</h2>
				<ul>
					@foreach($all_user_blogs as $value1)
				   <li class="item-recent-post">
					  <div class="thumbnail-post"><img width="100" height="100" src="{{asset('upload/'.$value1->image)}}" class="attachment-worldlife-thumbnail size-worldlife-thumbnail wp-post-image" alt="" srcset="http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/blog-1-100x100.jpg 100w, http://demo2.themelexus.com/worldlife/wp-content/uploads/2019/07/blog-1-150x150.jpg 150w" sizes="(max-width: 100px) 100vw, 100px" /></div>
					  <div class="title-post">
						 <a href="{{('show-user-blog/'.$value1->id)}}">{{$value1->title}}</a>
					  </div>
				   </li>
				   @endforeach
				   
				</ul>
			 </section>
			 <section id="recent-comments-3" class="widget widget_recent_comments">
				<h2 class="widget-title">Recent Comments</h2>
				<ul id="recentcomments">
				   <li class="recentcomments"><span class="comment-author-link"><a href='https://wordpress.org/' rel='external nofollow' class='url'>A WordPress Commenter</a></span> on <a href="../tuesday-tips-being-realistic-with-your-goals/index.html#comment-1">Tuesday Tips: Being Realistic With Your Goals</a></li>
				</ul>
			 </section>
			 
		  </div>
	   </aside>
	   <!-- #secondary -->
	</div>
	<!-- .wrap -->
	<!--WPFC_FOOTER_START-->
 </div>
 <!-- #content -->