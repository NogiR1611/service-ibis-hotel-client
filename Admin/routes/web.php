<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\TempatWisata;
use App\Http\Controllers\Event;
use App\Http\Controllers\PesanKlien;
use App\Http\Controllers\Tester;
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
Route::get('/wisata/json',[TempatWisata::class,'json']);
Route::get('/wisata',[TempatWisata::class,'get_tempat_wisata'])->name('wisata');
Route::get('/wisata/tambah',[TempatWisata::class,'get_form'])->name('tambah-wisata');
Route::post('/tempat-wisata/kirim',[TempatWisata::class,'post_tempat_wisata']);

//Event
Route::get('event/json',[Event::class,'json']);
Route::get('/event',[Event::class,'get_event'])->name('event');
Route::get('/event/tambah',[Event::class,'get_form'])->name('tambah-event');
Route::post('/event/kirim',[Event::class,'post_event']);

//pesan klien
Route::get('/inbox',[PesanKlien::class,'get_inbox'])->name('inbox');
Route::get('/inbox/{id}',[PesanKlien::class,'get_id_inbox']);
Route::post('/inbox/kirim',[PesanKlien::class,'post_messages']);

Route::get('/testing',[Tester::class,'get_test']);
Route::post('testing/kirim',[Tester::class,'post_testing']);