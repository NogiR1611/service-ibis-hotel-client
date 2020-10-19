<html lang="en">
    <head>
        <link rel="stylesheet" href="{{ asset('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css') }}" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Tabel Data Event</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    </head>
    <body>
        <header>
            <a href="/"><img src="{{ asset('img/logo-ibis.png') }}"></img></a>
        </header>
        <table class="table_data">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Event</th>
                    <th>Tempat</th>
                    <th>Tanggal</th>
                    <th>Nomor</th>
                    <th>Email</th>
                    <th>Foto</th>
                    <th>Deskripsi</th>
                </tr>
            </thead>
            @foreach($events as $e)
            <tbody>
                <tr>
                    <td>{{ $e -> id }}</td>
                    <td>{{ $e -> nama_event }}</td>
                    <td>{{ $e -> tempat }}</td>
                    <td>{{ $e -> tanggal }}</td>
                    <td>{{ $e -> nomor }}</td>
                    <td>{{ $e -> email }}</td>
                    <td>{{ $e -> foto }}</td>
                    <td>{{ $e -> deskripsi }}</td>
                    <td>
                        <a href="/event/edit/{{ $e->id }}">Edit</a>
                        <a href="/event/delete/{{ $e->id }}">Hapus</a>
                    </td>
                </tr>
            </tbody>
            @endforeach
        </table>
    </body>
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
</html>