<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModelPesan extends Model
{
    use HasFactory;
    protected $primaryKey='nama_kontak';
    public $timestamps = false;
    protected $table = 'inbox_clients';
    protected $fillable = ['nama_kontak','email','pesan'];
}
