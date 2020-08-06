<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class titipan_barang_customer extends Model
{
    //
    protected $table = "titipan_barang_customers";
    protected $fillable = ['jumlah_barang','nama_barang'];
}
