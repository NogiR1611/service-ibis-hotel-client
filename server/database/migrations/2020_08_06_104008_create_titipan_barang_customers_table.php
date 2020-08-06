<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTitipanBarangCustomersTable extends Migration
{
    public function up()
    {
        Schema::create('titipan_barang_customers', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('jumlah_barang');
            $table->string('nama_barang');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('titipan_barang_customers');
    }
}
