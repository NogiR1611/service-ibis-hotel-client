<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PesanKlien extends Controller
{
    public function get_inbox(){
        $pesan_klien = DB::table('inbox_client')->paginate(5);
        return view('data_inbox',['pesan_klien' => $pesan_klien]);
    }

    public function get_id_inbox($id){
        $pesan_klien = DB::table('inbox_client')->where('$pk->id',$id)->get();
        return view('pesan_klien',['pesan_klien' => $pesan_klien]);
    }

    public function post_messages(Request $request){
        //insert data ke database
        DB::table('inbox_client')->insert([
            'nama_klien'=> $request->nama_klien,
            'email'=> $request->email,
            'pesan'=>$request->pesan
        ]); 

        return redirect()->back();
    }
}