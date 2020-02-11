<?php

use Illuminate\Http\Request;

Route::group(['middleware' => ['auth:airlock']], function () {
    Route::get('user', function (Request $request) {
        return response()->json(['user' => $request->user()]);
    });
    Route::post('logout', 'Auth\Api\LoginController@logout')->name('api.logout');
});


Route::post('register', 'Auth\Api\RegisterController@register')->name('api.register');
Route::post('login', 'Auth\Api\LoginController@login')->name('api.login');
