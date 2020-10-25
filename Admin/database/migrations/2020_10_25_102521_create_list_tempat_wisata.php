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
            $table->string('harga',30);
            $table->string('urlimage',30);
            $table->text('deskripsi',2000);
            $table->timestamp('createdAt')->useCurrent();
            $table->timestamp('updatedAt')->useCurrent();
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
