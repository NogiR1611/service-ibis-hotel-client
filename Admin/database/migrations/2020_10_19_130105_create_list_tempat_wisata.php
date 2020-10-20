<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListTempatWisata extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_tempat_wisata', function (Blueprint $table) {
            $table->id();
            $table->string('nama_tempat_wisata',25);
            $table->string('lokasi',25);
            $table->char('harga',30);
            $table->char('urlimage',50);
            $table->string('deskripsi',2000);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('list_tempat_wisata');
    }
}
