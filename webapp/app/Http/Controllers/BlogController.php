<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;
use Auth;
use App\User;

class BlogController extends Controller
{
    public function Blogadd()
    { 
        $data['page_title'] = 'Add / View Blog';
        $data['user_blogs'] = Blog::where('user_id',Auth::user()->id)->orderBy('id','desc')->get();
        return view('blog.webviews.add_blog_details',$data);
    }

    public function submitBlog(Request $req)
    {     
        $file=$req->file('image');
        $filename='image'.time().'.'.$req->image->extension();
        $destinationPath=storage_path('../../upload');
        $file->move($destinationPath,$filename);

        $obj = new Blog; 
        $obj->title=$req->title;
        $obj->category=$req->category;
        $obj->sub_title=$req->sub_title;
        $obj->image=$filename;//where image is a database name
        $obj->discription=$req->discription;
        $obj->time=$req->time;
        $obj->user_id = Auth::user()->id;
           
        $is_saved=$obj->save();


        return redirect()->back(); 
       
    }
    public function ViewUserDetails()
    {
        $data['page_title'] = 'View User Details';
        $data['user_details'] = User::where('id',Auth::user()->id)->first();
        return view('blog.webviews.view_user_details',$data);
    }

    public function EditBlog($id)
    {
        $data['page_title'] = 'Edit Blog';
        $data['result'] = Blog::where('id',$id)->first();
        return view('blog.webviews.edit_blog_details',$data);
    }

    public function updateUserBlog(Request $req)
    {
        if($req->hasFile('image')) 
        {
            $file = $req->file('image');
            $filename = 'image'.time().'.'.$req->image->extension();
            $destinationPath = storage_path('../public/upload');
            $file->move($destinationPath, $filename);
            $image = $filename;

            Blog::where('user_id',Auth::user()->id)->update([
                'title'=>$req->title,
                'category'=>$req->category,
                'sub_title'=>$req->sub_title,
                'image'=>$filename,//where image is a database name
                'discription'=>$req->discription,
                'time'=>$req->time,
                'user_id' => Auth::user()->id,
            ]);
        }
        else
        {
            Blog::where('user_id',Auth::user()->id)->update([
                'title'=>$req->title,
                'category'=>$req->category,
                'sub_title'=>$req->sub_title,
                'discription'=>$req->discription,
                'time'=>$req->time,
                'user_id' => Auth::user()->id,
            ]);
        }
        return redirect('add-blog');
    }

    
    public function ShowBlog()
    {
        // $data['page_title'] = 'Add Blog';
        $data['user_blogs'] = Blog::where('user_id',Auth::user()->id)->orderBy('id','desc')->get();
        $data['all_user_blogs'] = Blog::orderBy('id','desc')->get();

        return view('blog_view.webviews.main_view_blog',$data);
    }


    public function ShowUserBlog($id)
    {
        $data['user_blog_details'] = Blog::where('id',$id)->first();
        
        return view('blog_view.webviews.main_user_blog',$data);
    }
}
