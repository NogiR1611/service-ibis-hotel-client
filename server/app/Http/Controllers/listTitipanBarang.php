<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class listTitipanBarang extends Controller
{
    public function tambah(Request $request){
        DB::table('titipan_barang-customers')->insert([
            'jumlah_barang'=>$request->jumlah_barang,
            'nama_barang'=>$request->nama_barang
        ]);
    }
}
