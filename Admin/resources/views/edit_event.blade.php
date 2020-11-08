<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Edit Data Event</title>
        <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
    </head> 
    <body>
        <header>
            <a href="/index"><img src="{{ asset('/img/logo-ibis.png') }}"></img></a>
        </header>
        <div class="card">
            <div class="card-title">
                <h2>Silahkan lakukan perubahan terhadap Event yang telah di pilih</h2>
            </div>
            @foreach($events as $event)
                <form action='/event/update/{{ $event->id }}' method='post' enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <label>Nama event : </label></br>
                    <input type="text" name="nama_event" value="{{ $event->nama_event }}" required="required"></br>
                    <label>Tempat : </label></br>
                    <input type="text" name="tempat" value="{{ $event->tempat }}" required="required"></br>
                    <label>Tanggal : </label></br>
                    <input type="date" name="tanggal" value="{{ $event->tanggal }}" required="required"></br>
                    <label>Waktu : </label></br>
                    <input type="text" name="waktu" value="{{ $event->waktu }}" required="required"></br>
                    <label>Harga : </label></br>
                    <input type="text" name="harga" value="{{ $event->harga }}" required="required"></br>
                    <label>Foto : </label>
                    <input type="file" name="foto" value="{{ $event->foto }}" required="required"></br>
                    <label>nomor : </label></br>
                    <input type="text" name="nomor" value="{{ $event->nomor }}" required="required"></br>
                    <label>E-mail : </label></br>
                    <input type="email" name="email" value="{{ $event->email }}" required="required"></br>
                    <label>Deskripsi : </label></br>
                    <textarea cols="80" rows="20" name="deskripsi" required="required">{{ $event->deskripsi }}</textarea></br>
                    <button type="submit" class="button-confirm">update</button>
                </form>
            @endforeach
        </div>
    </body>
    <footer>
        <div class="bottom-footer">
            <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span class="heart-icon">&hearts;</span></p> 
        </div>
    </footer>
    <script>
        let time = new Date();
        let years = time.getFullYear();
        document.getElementById("years").innerHTML = years;
    </script>
</html>