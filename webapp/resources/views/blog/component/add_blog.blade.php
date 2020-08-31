{{-- @if(session()->has("Message"))
     
	    <div class="alert alert-warning">
	      <p>  {{session()->get("Message")}} </p>
	    </div>
@endif --}}
<div class="col-md-4">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Add Blog</h3>
        </div>
        <!-- /.card-header -->
        <!--City form start -->
        <form  id="add_blog" action="{{url('submit-blog')}}" method="post" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleInputInstituteName">Blog Title</label>
                    <input type="text" name="title" class="form-control" id="exampleInputInstituteName"  placeholder="Enter The Blog Title" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Sub Title</label>
                    <input type="text" name="sub_title" class="form-control" id="exampleInputInstituteName" placeholder="Enter The Sub Title" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Type Of Blog</label>
                    <input type="text" name="category" class="form-control" id="exampleInputInstituteName" placeholder="Enter Category" required>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputInstituteName">Description</label>
                    <textarea class="textarea" placeholder="Place some text here"
                    style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" name="discription" required></textarea>
                </div>
                
                <div class="form-group">
                    <div id="image1">
                        <div class="workout">
                            <label>Image</label>
                            <input type="file" id="user_img" class="form-control" name="image" required>
                        </div>
                    </div> 
                </div>
                <div class="form-group">
                    <label for="exampleInputInstituteName">Time</label>
                    <input type="text" name="time" pattern="([01]?[0-9]{1}|2[0-3]{1}):[0-5]{1}[0-9]{1}" id="24h" class="form-control" id="exampleInputInstituteName" placeholder="Enter The Time" required>
                </div>
                 
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-primary"  onchange="this.form.submit()">Submit</button>
            </div>
        </form>
    </div> <!-- card end -->
</div>

<div class="col-md-8">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">View User Blog</h3>
      </div>
      <!-- /.card-header -->
      <div class="card-body">
        <table id="example1" class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>S No</th>
              <th>Title</th>
              <th>Auther Name</th>
              <th>Image</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <?php $count = 1; ?>
            @foreach($user_blogs as $value)
            <tr>
              <td>{{$count++}}</td>
              <td>{{$value->title}}</td>
              <td>{{$value->sub_title}}</td>
              <td><img src="{{asset('upload/'.$value->image)}}"m height="100px"></td>
              <td>{{$value->created_at}}</td>
              <td><a href="{{url('edit-blog/'.$value->id)}}"  title="Edit User Blog">
                  <button class="btn btn-outline-success">
                    <i class="fa fa-pen"></i>
                  </button>
                  </a>
                  <a href="{{url('delete-product/'.$value->id)}}"  title="Delete User Details">
                  <button class="btn btn-outline-danger">
                    <i class="fa fa-trash o"></i>
                  </button>
                </td>
            </tr>
            @endforeach
            
          </tbody>
          <tfoot>
            <tr>
              <th>S No</th>
              <th>Title</th>
              <th>Auther Name</th>
              <th>Image</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </tfoot>
         
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
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
