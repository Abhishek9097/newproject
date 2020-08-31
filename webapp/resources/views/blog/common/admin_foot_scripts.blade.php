 <!-- jQuery -->
<script src="{{ asset('admin/plugins/jquery/jquery.min.js')}} "></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset('admin/plugins/jquery-ui/jquery-ui.min.js')}} "></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="{{ asset('admin/plugins/bootstrap/js/bootstrap.bundle.min.js')}} "></script> 
<!-- Select2 -->
<script src="{{ asset('admin/plugins/select2/js/select2.full.min.js')}} "></script>
<!-- Bootstrap4 Duallistbox -->
<script src="{{ asset('admin/plugins/bootstrap4-duallistbox/jquery.bootstrap-duallistbox.min.js')}} "></script>
<!-- InputMask -->
<script src="{{ asset('admin/plugins/moment/moment.min.js')}} "></script>
<script src="{{ asset('admin/plugins/inputmask/min/jquery.inputmask.bundle.min.js')}} "></script>
<!-- bootstrap color picker -->
<script src="{{ asset('admin/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js')}} "></script>
<!-- Bootstrap Switch -->
<script src="{{ asset('admin/plugins/bootstrap-switch/js/bootstrap-switch.min.js')}} "></script>

<!-- ChartJS -->
<script src="{{ asset('admin/plugins/chart.js/Chart.min.js')}} "></script>
<!-- Sparkline -->
<!-- <script src="{{ asset('admin/plugins/sparklines/sparkline.js')}} "></script> -->
<!-- JQVMap -->
<script src="{{ asset('admin/plugins/jqvmap/jquery.vmap.min.js')}} "></script>
<script src="{{ asset('admin/plugins/jqvmap/maps/jquery.vmap.usa.js')}} "></script>
<!-- jQuery Knob Chart -->
<script src="{{ asset('admin/plugins/jquery-knob/jquery.knob.min.js')}} "></script>
<!-- daterangepicker -->
<script src="{{ asset('admin/plugins/moment/moment.min.js')}} "></script>
<script src="{{ asset('admin/plugins/daterangepicker/daterangepicker.js')}} "></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{ asset('admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}} "></script>
<!-- Summernote -->
<script src="{{ asset('admin/plugins/summernote/summernote-bs4.min.js')}} "></script>
<!-- overlayScrollbars -->
<script src="{{ asset('admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}} "></script>
<!-- AdminLTE App -->
<script src="{{ asset('admin/dist/js/adminlte.js')}} "></script>
<!-- Summernote -->
<script src="{{ asset('admin/plugins/summernote/summernote-bs4.min.js')}} "></script>
<!-- DataTables -->
<script src="{{ asset('admin/plugins/datatables/jquery.dataTables.js')}} "></script>
<script src="{{ asset('admin/plugins/datatables-bs4/js/dataTables.bootstrap4.js')}} "></script>
<!-- jsGrid -->
<script src="{{ asset('admin/plugins/jsgrid/demos/db.js')}} "></script>
<script src="{{ asset('admin/plugins/jsgrid/jsgrid.min.js')}} "></script>
 <!----select-2 link---->
<script src="https://cdn.jsdelivr.net/npm/select2@4.0.12/dist/js/select2.min.js"></script>

<script>
  function show(input) {
        debugger;
        var validExtensions = ['jpg','png','jpeg']; //array of valid extensions
        var fileName = input.files[0].name;
        var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            input.type = ''
            input.type = 'file'
            $('#user_img').attr('src',"");
            alert("Only these file types are accepted : "+validExtensions.join(', '));
        }
        else
        {
        if (input.files && input.files[0]) {
            var filerdr = new FileReader();
            filerdr.onload = function (e) {
                $('#user_img').attr('src', e.target.result);
            }
            filerdr.readAsDataURL(input.files[0]);
        }
        }
    }
</script>

<script>
  $(function () {
    $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
    });
  });
</script>
<script>
  $(function () {
    // Summernote
    $('.textarea').summernote()
  })
</script>
<script type="text/javascript">
$(document).ready(function(){
  $("#e1").select2();
  $("#e2").select2();
  $("#e3").select2();
  $("#e4").select2();
  $("#e5").select2();
  $("#e6").select2();
  $("#e7").select2();
  $("#e8").select2();
  $("#e9").select2();
  $("#e10").select2();
  $("#e11").select2();
});
</script>
@yield('scripts')