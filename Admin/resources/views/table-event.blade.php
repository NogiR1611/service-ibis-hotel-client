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
            <h2>Data Event yang telah di input dan ditampilkan pada Situs Klien</h2>
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
                    <th scope="col" class="column-primary" data-header="DATA"></th>
                    <th scope="col">Nama Event</th>
                    <th scope="col">Tempat</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Nomor</th>
                    <th scope="col">Email</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Deskripsi</th>
                    <th scope="col">Diperbarui</th>
                    <th scope="col" class="column-primary">OPSI</th>
                </tr>
            </thead>
            @foreach($events as $e)
            <tbody>
                <tr> 
                    <td data-header="Id">{{ $e -> id }}</td>
                    <td data-header="Nama Event">{{ $e -> nama_event }}</td>
                    <td data-header="Tempat">{{ $e -> tempat }}</td>
                    <td data-header="Tanggal">{{ $e -> tanggal }}</td>
                    <td data-header="Waktu">{{ $e -> waktu }}</td>
                    <td data-header="Harga">{{ $e -> harga }}</td>
                    <td data-header="Nomor">{{ $e -> nomor }}</td>
                    <td data-header="Email">{{ $e -> email }}</td>
                    <td data-header="Foto">{{ $e -> foto }}</td>
                    <td data-header="Deskripsi" id="deskripsi">{{ $e -> deskripsi }}</td>
                    <td data-header="Diperbarui">{{ $e -> updatedAt }}</td>
                    <th scope="row">
                        <a class="btn btn-primary" href='/event/edit/{{ $e->id }}' role="button">Edit</a>
                        <a class="btn btn-success" href='/event/delete/{{ $e->id }}' role="button">Hapus</a>
                    </th>
                </tr>
            </tbody>
            @endforeach
        </table>
    </body>
    <footer>
        <div class="bottom-footer">
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