<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Event extends Controller
{
    //
    public function get_event(){
        $table_event = DB::table('list_events')->get();
        return view('table-event',['events'=>$table_event]);
    }

    public function get_form(){
        return view('data_events');
    }
}
