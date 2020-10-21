<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PesanKlien extends Controller
{
    public function get_inbox(){
        $pesan_klien = DB::table('inbox_clients')->paginate(5);
        return view('data_inbox',['pesan_klien' => $pesan_klien]);
    }

    public function post_messages(Request $request){
        //insert data ke database
        DB::table('testing')->insert([
            'nama_kontak'=> $request->nama_kontak,
            'email'=> $request->email,
            'pesan'=>$request->pesan
        ]);

        return response($data)->header('Access-Control-Allow-Origin','*');
    }
}