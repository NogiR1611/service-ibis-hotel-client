<html>
    <head>
        <link rel="stylesheet" href="{{ asset('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css') }}" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>Kotak Masuk Feedback Klien</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css') }}" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <a href="/"><img src="{{ asset('img/logo-ibis.png') }}"></img></a>
        </header>
        <container>
            <div class="list-inbox">
                <ul id="demo">
                    @foreach($pesan_klien as $pk)
                    </br>
                    <li>
                        <a href="/inbox/{{ $pk->id }}">
                            <p><b>Nama Pengirim</b> : {{ $pk->nama_klien }}</p>
                            <p><b>E-mail</b> : {{ $pk->email }}</p>
                            <p><b>Tanggal&waktu</b> : {{ $pk->created_at }}</p>
                        </a>
                        <form action="/pesan/hapus/{{ $pk->email }}" method="POST">
                            <button type="submit">Hapus</button>
                        </form>
                    </li>
                    </br>
                    @endforeach
                </ul>
            </div>
            {{ $pesan_klien->links('vendor.pagination.bootstrap-4') }}
        </container>
        <footer>
            <div className="bottom-footer">
                <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span class="heart-icon">&hearts;</span></p> 
            </div>
        </footer>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <script>
            let time = new Date();
            let years = time.getFullYear();
            document.getElementById("years").innerHTML = years;
        </script>
    </body>
</html>