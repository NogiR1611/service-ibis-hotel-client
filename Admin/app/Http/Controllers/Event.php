<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use app\FotoEvent;
use App\Models\ModelEvent;
use Session;

class Event extends Controller
{ 
    public function json(){
        $events = DB::table('list_events')->get();
        return response() -> json([
            'data' => $events
        ],200) -> header('Access-Control-Allow-Origin','*');
    } 

    public function get_id_json($id){
        /*
        $events = DB::table('list_events')->where('id',$id)->get();
        return response() -> json($events) -> header('Access-Control-Allow-Origin','*');
        */
        return ModelEvent::find($id);
    }

    public function get_event(){
        $table_event = DB::table('list_events')->paginate(3);
        return view('table-event',['events'=>$table_event]);
    }

    public function get_form(){
        return view('data_events');
    }

    public function post_event(Request $request){
        //untuk save dan upload foto
        $file = $request->file('foto');
        $foto = $file->getClientOriginalName();
        $tujuan_upload = "img_event";
        $file->move($tujuan_upload,$file->getClientOriginalName());

        //untuk membuat validasi form yang dibuat
        $messages = [
            'required' => ':attribute wajib di isi kak :)',
            'max' => ':attribute maksimal wajib di isi :max karakter ya kak :)',
            'min' => ':attribute minimal wajib di isi :min karakter ya kak :)'
        ];

        $request->validate([
            'nama_event' => 'required|max:50',
            'deskripsi' => 'required|min:10|max:2000'
        ],$messages);
        
        //insert data ke database
        DB::table('list_events')->insert([
            'nama_event' => $request->nama_event,
            'tempat' => $request->tempat,
            'tanggal'=> $request->tanggal,
            'waktu' => $request->waktu,
            'harga' => $request->harga,            
            'nomor' => $request->nomor,
            'email' => $request->email,
            'foto' => $foto,
            'deskripsi' => $request->deskripsi,
        ]);

        Session::flash('berhasil','Data berhasil di tambah kak :)');
        return redirect('event');
    }

    public function edit_form($id){
        $events = DB::table('list_events')->where('id',$id)->get();
        return view('edit_event',['events' => $events]);
    }

    public function update_event(Request $request){
        $file = $request->file('foto');
        $foto = $file->getClientOriginalName();
        $tujuan_upload = "img_event";
        $file->move($tujuan_upload,$foto);

        //update data ke database
        DB::table('list_events')->where('id',$request->id)->update([
            'nama_event' => $request->nama_event,
            'tempat' => $request->tempat,
            'tanggal' => $request->tanggal,
            'waktu' => $request->waktu,
            'harga' => $request->harga,
            'nomor' => $request->nomor,
            'email' => $request->email,
            'foto' => $foto,
            'deskripsi' => $request->deskripsi
        ]);
        
        Session::flash('sukses','Data berhasil di update kak :)');
        return redirect('wisata');
    }

    public function delete_event($id){
        DB::table('list_events')->where('id',$id)->delete();
        return redirect()->back();
    }

    public function berhasil(){

    }
}
