<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Selamat Datang di situs Admin Ibis Hotel Bandung</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    </head>
    <body>
        <header>
            <a href="/index"><img src="{{ asset('img/logo-ibis.png')}}"></img></a>
        </header>
        <container> 
            <h1 class="title-index" style="text-align : center;">Selamat Datang di website khusus Admin</h1>
            <div class="Item-menu">
                <h2>Tempat Wisata</h2>
                <div class="Item-column">
                    <div class="Item">
                        <a href="{{ route('tambah-wisata') }}">
                            <img src="{{ asset('img/document.png') }}" class="item-image" alt="">
                            <h3>Input Data</h3>
                        </a>
                    </div>
                    <div class="Item">
                        <a href="{{ route('wisata') }}">
                            <img src="{{ asset('img/table.png') }}" class="item-image" alt="">
                            <h3>Lihat Data</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div class="Item-menu">
                <h2>Event</h2>
                <div class="Item-column">
                    <div class="Item">
                        <a href="{{ route('tambah-event') }}">
                            <img src="{{ asset('img/document.png') }}" class="item-image" alt="">
                            <h3>Input Data</h3>
                        </a>
                    </div>
                    <div class="Item">
                        <a href="{{ route('event') }}">
                            <img src="{{ asset('img/table.png') }}" class="item-image" alt="">
                            <h3>Lihat Data</h3>
                        </a>
                    </div>
                </div>
            </div>
            <div class="Item-menu-inbox">
                <h2>Masukan Pesan Klien</h2>
                <div class="Item">
                    <a href="{{ route('inbox') }}">
                        <img src="{{ asset('img/inbox.png') }}" class="item-image" alt="">
                        <h3>Kotak Masuk</h3>
                     </a>
                </div>
            </div>
        </container>
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
    </body>
</html>