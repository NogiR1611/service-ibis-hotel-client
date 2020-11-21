<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\ModelPesan;
use Session;

class PesanKlien extends Controller
{ 
    public function get_form(){
        return view('testing');
    }

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
        ModelPesan::create([
            'nama_kontak' => $request->nama_kontak,
            'email' => $request->email,
            'pesan' => $request->pesan
        ]);
        
        return redirect()->back();
        */
        DB::table('inbox_clients')->insert([
            'nama_kontak'=> $request->nama_kontak,
            'email'=> $request->email,
            'pesan'=>$request->pesan
        ]); 
        
        return response()->json([
            'nama_kontak'=>$request->nama_kontak,
            'email'=>$request->email,
            'pesan'=>$request->pesan
        ]);
        
        /*
        $input = $request->all();
        $user = User::create($input);
        $success['token'] =  $user->createToken('nApp')->accessToken;
        $success['name'] =  $user->name;
 
        return response()->json(['success'=>$success], $this->successStatus);
        */
    }

    public function delete_inbox($id){
        DB::table('inbox_clients')->where('id',$id)->delete();

        Session::flash('berhasil','Pesan berhasil dihapus kak :)');
        return redirect('/inbox'); 
    }
}