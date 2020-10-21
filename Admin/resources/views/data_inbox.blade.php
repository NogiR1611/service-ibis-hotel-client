<html>
    <head>
        <link rel="stylesheet" href="{{ asset('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css') }}" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>Kotak Masuk Feedback Klien</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
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
                        <a href="/pesan/{{ $pk->id }}">
                            <p><b>Nama Pengirim</b> : {{ $pk->nama_kontak }}</p>
                            <p><b>E-mail</b> : {{ $pk->email }}</p>
                            <p><b>Tanggal&waktu</b> : {{ $pk->createdAt }}</p>
                        </a>
                        <form action="/pesan/hapus/{{ $pk->id }}" method="POST">
                            <button type="submit">Hapus</button>
                        </form>
                    </li>
                    </br>
                    @endforeach
                </ul>
            </div>
            {{ $pesan_klien->links() }}
        </container>
        <footer>
            <div className="bottom-footer">
                <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span class="heart-icon">&hearts;</span></p> 
            </div>
        </footer>
        <script>
            let time = new Date();
            let years = time.getFullYear();
            document.getElementById("years").innerHTML = years;
        </script>
    </body>
</html>