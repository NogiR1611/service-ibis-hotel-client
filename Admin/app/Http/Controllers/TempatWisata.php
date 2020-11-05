<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use app\Foto;
use Session;

class TempatWisata extends Controller
{
    public function json(){
        $tempat_wisata = DB::table('list_tempat_wisata')->get();
        return response() -> json([
            'data' => $tempat_wisata
        ],200) -> header('Access-Control-Allow-Origin','*');
    } 

    public function get_id_json($id){
        $tempat_wisata = DB::table('list_tempat_wisata')->where('id',$id)->get();
        return response() -> json($tempat_wisata) -> header('Access-Control-Allow-Origin','*');
    }

    public function get_tempat_wisata(){
        $tempat_wisata = DB::table('list_tempat_wisata')->get();
        return view('table-wisata',['tempat_wisata' => $tempat_wisata]);
    }
 
    public function get_form(){
        return view('data_wisata');
    }

    public function post_tempat_wisata(Request $request){
        //buat upload foto
        $file = $request->file('urlimage');
        $urlimage = $file->getClientOriginalName();
        $tujuan_upload = "img_wisata";
        $file->move($tujuan_upload,$file->getClientOriginalName());

        $messages = [
            'required' => ':attribute wajib di isi kak :)',
            'max' => ':attribute maksimal wajib di isi :max karakter ya kak :)',
            'min' => ':attribute minimal wajib di isi :min karakter ya kak :)'
        ];
        //buat validasi
        $request->validate([
            'nama_tempat_wisata' => 'required|min:5|max:25',
            'lokasi' => 'required|min:5|max:20',
            'harga' => 'required|min:5|max:20',
            'deskripsi' => 'required|min:5|max:2000'
        ],$messages);

        //insert data ke table list_tempat_wisata
        DB::table('list_tempat_wisata')->insert([
            'nama_tempat_wisata' => $request->nama_tempat_wisata,
            'lokasi' => $request->lokasi,
            'harga' => $request->harga,
            'urlimage' => $urlimage,
            'deskripsi' => $request->deskripsi
        ]);

        Session::flash('berhasil','Data berhasil di tambah kak :)');
        return redirect('wisata');
    }

    public function edit_form($id){
        $tempat_wisata = DB::table('list_tempat_wisata')->where('id',$id)->get();
        return view('edit_wisata',['tempat_wisata' => $tempat_wisata]);
    }

    public function update_tempat_wisata(Request $request){
        //buat upload foto
        $file = $request->file('urlimage');
        $urlimage = $file->getClientOriginalName();
        $tujuan_upload = "img_wisata";
        $file->move($tujuan_upload,$urlimage);

        //update data ke database
        DB::table('list_tempat_wisata')->where('id',$request->id)->update([
            'nama_tempat_wisata' => $request->nama_tempat_wisata,
            'lokasi' => $request->lokasi,
            'harga' => $request->harga,
            'urlimage' => $urlimage,
            'deskripsi' => $request->deskripsi
        ]);

        Session::flash('sukses','Data berhasil di update kak :)');
        return redirect('wisata');
    }

    public function delete_wisata($id){
        DB::table('list_tempat_wisata')->where('id',$id)->delete();
        return redirect()->back();
    }
}
