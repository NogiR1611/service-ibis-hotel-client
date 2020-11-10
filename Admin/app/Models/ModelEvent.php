<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelEvent extends Model
{
    use HasFactory;
    protected $table = 'list_events';
    protected $fillable = ['nama_event','tempat','tanggal','waktu','harga','nomor','email','foto','deskripsi'];
}