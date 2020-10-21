<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FotoEvent extends Model
{
    use HasFactory;
    protected $table = "list_events";
    protected $fillable = ['nama_event','tempat','tanggal','nomor','email','foto','deskripsi'];
}
