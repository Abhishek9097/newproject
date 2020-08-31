<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});
Route::get('logout', function(){ Auth::logout(); return redirect('/');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::group(['middleware' => ['auth']], function()                 // It is a group middleware start
{  
    Route::get('add-blog','BlogController@Blogadd');

    Route::get('show-blog','BlogController@ShowBlog');

    Route::post('submit-blog','BlogController@submitBlog');

    Route::get('view-user-details','BlogController@ViewUserDetails');

    Route::get('edit-blog/{id}','BlogController@EditBlog');

    Route::post('update-user-blog','BlogController@updateUserBlog');

    Route::get('show-user-blog/{id}','BlogController@ShowUserBlog');

});