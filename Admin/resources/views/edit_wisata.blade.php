<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ asset('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css') }}" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <title>Edit Data Wisata</title>
        <link rel="stylesheet" href="{{ asset('/css/style.css') }}">
    </head>
    <body>
        <header>
            <a href="/index"><img src="{{ asset('/img/logo-ibis.png') }}"></img></a>
        </header>
        <div class="card">
            <div class="card-title">
                <h2>Silahkan lakukan perubahan terhadap Tempat Wisata yang telah di pilih</h2>
            </div>
            @foreach($tempat_wisata as $tw)
                <form action='/tempat-wisata/update/{{ $tw -> id }}' method='post' enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <label>Nama tempat wisata : </label></br>
                    <input type="text" name="nama_tempat_wisata" value="{{ $tw->nama_tempat_wisata }}" required="required"></br>
                    <label>Lokasi : </label></br>
                    <input type="text" name="lokasi" value="{{ $tw->lokasi }}" required="required"></br>
                    <label>Harga : </label></br>
                    <input type="text" name="harga" value="{{ $tw->harga }}" required="required"></br>
                    <label>URL Foto : </label></br>
                    <input type="file" name="urlimage" value="{{ $tw->urlimage }}" required="required"></br>
                    <label>Deskripsi : </label></br>
                    <textarea cols="80" rows="20" name="deskripsi" required="required">{{ $tw->deskripsi }}</textarea></br>
                    <button type="submit" class="button-confirm">Update</button>
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
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</html>