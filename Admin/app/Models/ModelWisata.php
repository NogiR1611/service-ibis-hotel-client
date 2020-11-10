<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelWisata extends Model
{
    use HasFactory;
    protected $table = 'list_tempat_wisata';
    protected $fillable = ['nama_tempat_wisata','lokasi','harga','urlimage','deskripsi'];
}
