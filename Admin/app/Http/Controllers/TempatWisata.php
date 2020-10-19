<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TempatWisata extends Controller
{
    //
    public function get_tempat_wisata(){
        $tempat_wisata = DB::table('list_tempat_wisata')->get();
        return view('table-wisata',['tempat_wisata' => $tempat_wisata]);
    }

    public function get_form(){
        return view('data_wisata');
    }

    public function post_tempat_wisata(Request $request){
        //insert data ke table list_tempat_wisata
        DB::table('list_tempat_wisata')->insert([
            'nama_tempat_wisata' => $request->nama_tempat_wisata,
            'lokasi' => $request->lokasi,
            'harga' => $request->harga,
            'urlimage' => $request->urlimage,
            'deskripsi' => $request->deskripsi,
        ]);

        return redirect('/tempat-wisata');
    }
}
