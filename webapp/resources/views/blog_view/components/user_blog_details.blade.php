<div id="page-title-bar" class="page-title-bar">
    <div class="container">
       <div class="wrap w-100 d-flex align-items-center">
          <div class="page-title-bar-inner d-lg-flex justify-content-between align-items-center w-100">
             <div class="breadcrumb">
                
                <span property="itemListElement" typeof="ListItem">
                   <a property="item" typeof="WebPage" title="Go to Blog." href="#" class="post-root post post-post" ><span property="name">Blog</span></a>
                   <meta property="position" content="2">
                </span>
                &gt; 
             </div>
             <div class="page-header">
                <h1 class="page-title typo-heading">{{$user_blog_details->title}}</h1>
             </div>
          </div>
       </div>
    </div>
    
 </div>
 <div class="site-content-contain">
    <div id="content" class="site-content">
       <div class="wrap wrap w-100 d-flex align-items-start">
          <div id="primary" class="content-area w-75">
             <main id="main" class="site-main">
                <article id="post-238" class="post-238 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
                   <div class="post-inner">
                      <header class="entry-header">
                         <div class="entry-meta">
                            <div class="entry-meta-inner"><span class="entry-category"><a href="#" rel="category tag">{{$user_blog_details->category}}</a></span><span class="posted-on"><a href="#" rel="bookmark"><time class="entry-date published" datetime="2019-07-02T07:56:23+00:00">July 2, 2019</time><time class="updated" datetime="2019-07-18T07:04:45+00:00">July 18, 2019</time></a></span></div>
                         </div>
                         <!-- .entry-meta -->
                         <div class="entry-avatar">
                         <img alt='' src="{{url('upload/'.$user_blog_details->image)}}" srcset='http://0.gravatar.com/avatar/0eade5bf6ec7ed57087c6a282a39bd8b?s=76&#038;d=mm&#038;r=g 2x' class='avatar avatar-38 photo' height='38' width='38' /> 
                              <a href="#">{{$user_blog_details->sub_title}}</a>
                         </div>
                         <!-- .entry-meta -->
                      </header>
                      <!-- .entry-header -->
                      <div class="entry-content">
                      <p>{!! $user_blog_details->discription !!}</p>
                      </div>
                      <!-- .entry-content -->
                      <footer class="entry-footer">
                         <div class="cat-tags-links"></div>
                      </footer>
                      <!-- .entry-footer -->    
                   </div>
                </article>
                <!-- #post-## -->                        
                
             </main>
             <!-- #main -->
          </div>
          
       </div>
       <!-- .wrap -->
       <!--WPFC_PAGE_TYPE_post--><!--WPFC_FOOTER_START-->
    </div>
    <!-- #content -->
 </div>
 
 
 