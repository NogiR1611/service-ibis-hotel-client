<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\TempatWisata;
use App\Http\Controllers\Event;
use App\Http\Controllers\PesanKlien;
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

Route::get('/',[IndexController::class,'get_data']);

//Tempat Wisata
Route::get('/tempat-wisata',[TempatWisata::class,'get_tempat_wisata']);
Route::get('/tempat-wisata/tambah',[TempatWisata::class,'get_form']);
Route::post('/tempat-wisata/kirim',[TempatWisata::class,'post_tempat_wisata']);

//Event
Route::get('/event',[Event::class,'get_event'])->name('event');
Route::get('/event/tambah',[Event::class,'get_form'])->name('tambah');
Route::post('/event/kirim',[Event::class,'post_event']);

//pesan klien
Route::get('/inbox',[PesanKlien::class,'get_inbox'])->name('inbox');