{{-- @if(session()->has("Message"))
     
	    <div class="alert alert-warning">
	      <p>  {{session()->get("Message")}} </p>
	    </div>
@endif --}}
<div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Edit Blog</h3>
        </div>
        <!-- /.card-header -->
        <!--City form start -->
        <form  id="add_blog" action="{{url('update-user-blog')}}" method="post" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="card-body">
                <div class="form-group">
                    <input type="hidden" name="id" value="{{$result->id}}"> 
                    <label for="exampleInputInstituteName">Blog Title</label>
                <input type="text" name="title" class="form-control" id="exampleInputInstituteName"  placeholder="Enter The Blog Title" value="{{$result->title}}" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Sub Title</label>
                    <input type="text" name="sub_title" class="form-control" id="exampleInputInstituteName" placeholder="Enter The Sub Title" value="{{$result->sub_title}}" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Type Of Blog</label>
                    <input type="text" name="category" class="form-control" id="exampleInputInstituteName" placeholder="Enter Category" value="{{$result->category}}" required>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputInstituteName">Description</label>
                    <textarea class="textarea" placeholder="Place some text here"
                    style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" name="discription" required>{{$result->discription}}</textarea>
                </div>

                <div class="form-group">
                    <label>Image</label><br>
                    <img style="width: 130px;"    src="{{url('upload/'.$result->image)}}">
                    <input type="hidden" name="image" value="{{$result->image}}">
                    <input type="file" name="image">
                    <p class="help-block">Blog Image Size Accoding To Desktop Size</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Time</label>
                    <input type="text" name="time" pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}" id="24h" class="form-control" id="exampleInputInstituteName" value="{{$result->time}}" placeholder="Enter The Time" required>
                </div>
                 
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-primary"  onchange="this.form.submit()">Update Blog</button>
            </div>
        </form>
    </div> <!-- card end -->
</div>


<script>
    $(function () {
        $('#add_blog').submit(function (e) {
            e.preventDefault()  // prevent the form from 'submitting'
  
            var url = e.target.action  // get the target
            var formData = $(this).serialize() // get form data
            $.post(url, formData, function (response) { // send; response.data will be what is returned
                alert('Blog Added Successfully');
                document.getElementById("add_blog").reset()
            })
        })
    })
  </script>
