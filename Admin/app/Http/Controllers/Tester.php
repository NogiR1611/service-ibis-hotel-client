<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Tester extends Controller
{
    public function get_test(){
        return view('testing');
    }

    public function post_testing(Request $request){
        DB::table('percobaan')->insert([
            'nama_tester'=> $request->nama_tester,
            'alamat'=> $request->alamat
        ]);
        
        return redirect()->back();
    }
}
