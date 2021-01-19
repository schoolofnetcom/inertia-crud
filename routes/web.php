<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;

Route::group(['middleware' => 'auth'], function(){
    Route::get('/dashboard', function () { return view('dashboard'); })->name('dashboard');
    Route::resource('books', BookController::class);
});

require __DIR__.'/auth.php';
