<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\TempatWisata;
use App\Http\Controllers\Event;
use App\Http\Controllers\PesanKlien;
use App\Http\Controllers\Livewire\Auth\Login;
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
Route::get('/',[LoginController::class,'login']);
Route::get('/index',[IndexController::class,'get_data']);
   
//Tempat Wisata
Route::get('/wisata/pagination',[TempatWisata::class,'pagination']);
Route::get('/wisata/json',[TempatWisata::class,'json']);
Route::get('/wisata/json/{id}',[TempatWisata::class,'get_id_json']);
Route::get('/wisata',[TempatWisata::class,'get_tempat_wisata'])->name('wisata');
Route::get('/wisata/tambah',[TempatWisata::class,'get_form'])->name('tambah-wisata');
Route::get('tempat-wisata/edit/{id}',[TempatWisata::class,'edit_form']);
Route::post('/tempat-wisata/kirim',[TempatWisata::class,'post_tempat_wisata']);
Route::post('/tempat-wisata/update/{id}',[TempatWisata::class,'update_tempat_wisata']);
Route::get('/tempat-wisata/delete/{id}',[TempatWisata::class,'delete_wisata']);

//Event
Route::get('/event/pagination',[Event::class,'pagination']);
Route::get('event/json',[Event::class,'json']);
Route::get('event/json/{id}',[Event::class,'get_id_json']);
Route::get('/event',[Event::class,'get_event'])->name('event');
Route::get('/event/tambah',[Event::class,'get_form'])->name('tambah-event');
Route::get('/event/edit/{id}',[Event::class,'edit_form']);
Route::post('/event/kirim',[Event::class,'post_event']);
Route::post('/event/update/{id}',[Event::class,'update_event']);
Route::get('/event/delete/{id}',[Event::class,'delete_event']);
///pesan klien 
Route::get('/inbox/form',[PesanKlien::class,'get_form']);
Route::get('/inbox',[PesanKlien::class,'get_inbox'])->name('inbox');
Route::get('/inbox/{id}',[PesanKlien::class,'get_id_inbox']);
Route::get('inbox/delete/{id}',[PesanKlien::class,'delete_inbox']);
Route::post('/inbox/kirim',[PesanKlien::class,'post_messages']);

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');