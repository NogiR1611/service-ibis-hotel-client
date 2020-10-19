<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Form Input Data Event</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <header>
        <a href="/"><img src="{{ asset('img/logo-ibis.png') }}"></img></a>
    </header>
    <div class="card">
        <div class="card-title">
            <h2>Silahkan Isi Event yang ingin ditampilkan pada website sisi klien</h2>
        </div>
        <form action='/event/kirim' method='post'>
            {{ csrf_field() }}
            <label>Nama event : </label></br>
            <input type="text" name="nama_event"></br>
            <label>Tempat : </label></br>
            <input type="text" name="tempat"></br>
            <label>Tanggal : </label></br>
            <input type="date" name="tanggal"></br>
            <label>Foto : </label></br>
            <input type="file" action="/upload" name="foto" id="foto"></br>
            <label>nomor : </label></br>
            <input type="text" name="nomor"></br>
            <label>email : </label></br>
            <input type="email" name="email"></br>
            <label>website : </label></br>
            <input type="text" name="website"></br>
            <label>Deskripsi : </label></br>
            <textarea cols="80" rows="20" name="deskripsi"></textarea></br>
            <button type="submit">Oke</button>
        </form>
    </div>
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