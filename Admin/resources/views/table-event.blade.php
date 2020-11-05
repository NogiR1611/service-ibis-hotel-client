<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ asset('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css') }}" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Tabel Data Event</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    </head>
    <body>
        <header>
            <a href="/index"><img src="{{ asset('img/logo-ibis.png') }}"></img></a>
        </header>
        <div class="card-title">
            <h2>Data Wisata yang telah di input dan ditampilkan pada Situs Klien</h2>
        </div>
        <!-- menampilkan pesan berhasil di update -->
        @if ($message = Session::get('sukses'))
        <div class="alert alert-success alert-block">
            <button type="button" class="close" data-dismiss="alert">×</button> 
            <strong>{{ $message }}</strong>
        </div>
        @endif
         <!-- menampilkan pesan berhasil di tambahkan-->
         @if ($message = Session::get('berhasil'))
            <div class="alert alert-success alert-block">
                <button type="button" class="close" data-dismiss="alert">×</button> 
                <strong>{{ $message }}</strong>
            </div>
        @endif
        <table class="table_data">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama Event</th>
                    <th>Tempat</th>
                    <th>Tanggal</th>
                    <th>Waktu</th>
                    <th>Harga</th>
                    <th>Nomor</th>
                    <th>Email</th>
                    <th>Foto</th>
                    <th>Deskripsi</th>
                    <th>Diperbarui</th>
                </tr>
            </thead>
            @foreach($events as $e)
            <tbody>
                <tr> 
                    <td>{{ $e -> id }}</td>
                    <td>{{ $e -> nama_event }}</td>
                    <td>{{ $e -> tempat }}</td>
                    <td>{{ $e -> tanggal }}</td>
                    <td>{{ $e -> waktu }}</td>
                    <td>{{ $e -> harga }}</td>
                    <td>{{ $e -> nomor }}</td>
                    <td>{{ $e -> email }}</td>
                    <td>{{ $e -> foto }}</td>
                    <td id="deskripsi">{{ $e -> deskripsi }}</td>
                    <td>{{ $e -> updatedAt }}</td>
                    <td>
                        <a class="btn btn-primary" href='/event/edit/{{ $e->id }}' role="button">Edit</a>
                        <a class="btn btn-success" href='/event/delete/{{ $e->id }}' role="button">Hapus</a>
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
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script>
        let time = new Date();
        let years = time.getFullYear();
        document.getElementById("years").innerHTML = years;
    </script>
</html>