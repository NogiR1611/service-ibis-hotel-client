<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('list_events', function (Blueprint $table) {
            $table->id();
            $table->string('nama_event',100);
            $table->string('tempat',25);
            $table->date('tanggal');
            $table->char('waktu',20);
            $table->char('harga',20);
            $table->char('nomor',25);
            $table->char('email',25);
            $table->char('foto',50);
            $table->string('deskripsi',2000);
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
        Schema::dropIfExists('list_events');
    }
}
