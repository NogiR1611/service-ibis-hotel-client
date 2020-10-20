<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use app\Foto;

class TempatWisata extends Controller
{
    public function json(){
        $tempat_wisata = DB::table('list_tempat_wisata')->get();
        return response() -> json([
            'success' => true,
            'data' => $tempat_wisata
        ],200);
    }

    public function get_tempat_wisata(){
        $tempat_wisata = DB::table('list_tempat_wisata')->get();
        return view('table-wisata',['tempat_wisata' => $tempat_wisata]);
    }
 
    public function get_form(){
        return view('data_wisata');
    }

    public function post_tempat_wisata(Request $request){
        $file = $request->file('urlimage');
        $urlimage = $file->getClientOriginalName();

        //insert data ke table list_tempat_wisata
        DB::table('list_tempat_wisata')->insert([
            'nama_tempat_wisata' => $request->nama_tempat_wisata,
            'lokasi' => $request->lokasi,
            'harga' => $request->harga,
            'urlimage' => $urlimage,
            'deskripsi' => $request->deskripsi,
        ]);

        return redirect()->back();
    }
}
