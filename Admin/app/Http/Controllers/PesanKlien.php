<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ModelPesan;
use Session;

class PesanKlien extends Controller
{
    public function get_inbox(){
        $pesan_klien = DB::table('inbox_clients')->paginate(5);
        return view('data_inbox',['pesan_klien' => $pesan_klien]);
    }

    public function get_id_inbox($id){
        $pesan_klien = DB::table('inbox_clients')->where('id',$id)->get();
        return view('pesan_klien',['pesan_klien' => $pesan_klien]);
    }

    public function post_messages(Request $request){
        //insert data ke database
        /*
        DB::table('inbox_clients')->insert([
            'nama_kontak'=> $request->nama_kontak,
            'email'=> $request->email,
            'pesan'=>$request->pesan
        ]); 

        return redirect()->back();
        */
        ModelPesan::create($request->all());
        
        return redirect()-back();
    }

    public function delete_inbox($id){
        DB::table('inbox_clients')->where('id',$id)->delete();

        Session::flash('berhasil','Pesan berhasil dihapus kak :)');
        return redirect('/inbox'); 
    }
}