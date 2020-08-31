<div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          {{-- <h3 class="card-title">View Enquiry</h3> --}}
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Email</th>
                
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php $count = 1; ?>
              
              <tr>
                <td>{{$count++}}</td>
                <td>{{$user_details->name}}</td>
                <td>{{$user_details->email}}</td>
                
                <td>{{$user_details->created_at}}</td>
                <td><a href="{{url('edit-blog/'.$user_details->id)}}"  title="Edit User Blog">
                    <button class="btn btn-outline-success">
                      <i class="fa fa-pen"></i>
                    </button>
                    </a>
                    <a href="{{url('delete-product/'.$user_details->id)}}"  title="Delete User Details">
                    <button class="btn btn-outline-danger">
                      <i class="fa fa-trash o"></i>
                    </button>
                  </td>
              </tr>
              
            </tbody>
            <tfoot>
              <tr>
                <th>S No</th>
                <th>Name</th>
                <th>Email</th>
                
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
    <!-- /.col -->
</div>