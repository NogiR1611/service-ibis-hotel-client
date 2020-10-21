<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use app\FotoEvent;

class Event extends Controller
{ 
    public function json(){
        $events = DB::table('list_events')->get();
        return response() -> json([
            'data' => $events
        ],200) -> header('Access-Control-Allow-Origin','*');
    }

    public function get_event(){
        $table_event = DB::table('list_events')->get();
        return view('table-event',['events'=>$table_event]);
    }

    public function get_form(){
        return view('data_events');
    }

    public function post_event(Request $request){
        $file = $request->file('foto');
        $foto = $file->getClientOriginalName();

        DB::table('list_events')->insert([
            'nama_event' => $request->nama_event,
            'tempat' => $request->tempat,
            'tanggal'=> $request->tanggal,
            'nomor' => $request->nomor,
            'email' => $request->email,
            'foto' => $foto,
            'deskripsi' => $request->deskripsi,
        ]);

        return redirect()->back();
    }
}
